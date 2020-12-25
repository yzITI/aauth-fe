<template>
  <div class="list">
    <h1>Your App</h1>
    <p v-if="tip">{{ tip }}</p>
    <v-card v-for="(a, id) in list" :key="id" style="margin: 20px;" @click="edit(id)">
      <v-card-title>
        <img style="width: 50px; height: 50px; margin-right: 10px;" v-if="a.icon" :src="a.icon">
        {{ a.name }}
        <v-spacer></v-spacer>
        <v-btn icon color="warning" @click="fresh(id)">
          <v-icon>mdi-key</v-icon>
        </v-btn>
        <v-btn icon color="error" @click="remove(id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-title>
      <v-overlay absolute :value="loading == id">
        <v-progress-circular
          indeterminate
          size="50"
        ></v-progress-circular>
      </v-overlay>
    </v-card>
    <v-btn fab large fixed dark color="#D9483B" style="bottom: 10vh; right: 10vw;" @click="add">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog max-width="600" v-model="dialog">
      <v-card>
        <v-card-title>App Secret</v-card-title>
        <v-card-text>
          <p style="color: red;">Please keep the secret safe. After closing this dialog, you will not have chances to access it again. Next request of secret will cause the generation of a new secret and the invalidation of the old secret.</p>
          <p>Your App Secret is</p>
          <code>{{ secret }}</code>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-bottom-sheet v-model="sheet" inset>
      <v-sheet>
        <v-card-title>App</v-card-title>
        <v-card-subtitle>{{ app.id }}</v-card-subtitle>
        <v-form style="padding: 10px 30px;">
          <v-text-field outlined dense label="Name" v-model="app.name" :error-messages="error"></v-text-field>
          <v-text-field outlined dense label="Redirect URL" v-model="app.redirect"></v-text-field>
          <v-select outlined dense label="Platform" v-model="app.platform" :items="platforms" multiple persistent-hint hint="No platform means all allowed"></v-select>
          <v-text-field outlined dense label="Icon URL" v-model="app.icon"></v-text-field>
          <div style="height: 100px;">
            <img style="width: 100px;" alt="Icon Preview" :src="app.icon">
          </div>
          <v-btn color="secondary" :loading="loading" @click="submit">Submit</v-btn>
        </v-form>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
const SS = window.sessionStorage
const opt = { headers: { token: SS.token, user: SS.user } }
export default {
  name: 'List',
  data: () => ({
    dialog: false,
    secret: '',
    sheet: false,
    tip: 'Loading...',
    error: '',
    loading: false,
    list: [],
    app: {},
    platforms: ['DINGTALK', 'GITHUB', 'QQ', 'XYZSAS']
  }),
  mounted () {
    this.getList()
  },
  watch: {
    app () {
      this.error = ''
    }
  },
  methods: {
    add () {
      if (this.loading) return
      this.app = {}
      this.sheet = true
    },
    edit (id) {
      if (this.loading) return
      this.app.name = this.list[id].name
      this.app.redirect = this.list[id].redirect
      if (this.list[id].icon) this.app.icon = this.list[id].icon
      if (this.list[id].platform) this.app.platform = this.list[id].platform.split(',')
      this.app.id = id
      this.sheet = true
    },
    async remove (id) {
      this.loading = id
      await this.$ajax.delete('/app?id=' + id, opt)
        .then(this.getList)
        .catch(err => {
          this.tip = err.response.data
        })
      this.loading = false
    },
    async fresh (id) {
      this.loading = id
      await this.$ajax.put('/app', { id }, opt)
        .then(res => {
          this.secret = res.data
          this.dialog = true
        })
        .catch(err => {
          this.tip = err.response.data
        })
      this.loading = false
    },
    async getList () {
      this.list = []
      this.sheet = false
      this.$ajax.get('/app', opt)
        .then(res => {
          this.list = res.data
          this.tip = ''
          if (!Object.keys(res.data).length) this.tip = 'You have no app'
        })
        .catch(err => {
          this.tip = err.response ? err.response.data : 'Network Error'
        })
    },
    async submit () {
      if (!this.app.name || !this.app.redirect) {
        this.error = 'Name and Redirect URL are required'
        return
      }
      this.loading = true
      const data = { name: this.app.name, redirect: this.app.redirect }
      if (this.app.id) data.id = this.app.id
      if (this.app.icon) data.icon = this.app.icon
      if (this.app.platform && this.app.platform.length) data.platform = this.app.platform.join(',')
      await this.$ajax.post('/app', data, opt)
        .then(this.getList)
        .catch(err => {
          this.error = err.response.data
        })
      this.loading = false
    }
  }
}
</script>

<style scoped>
div.list {
  color: #333;
  background-color: #eee;
  min-height: 100vh;
  padding: 30px 10%;
}
</style>
