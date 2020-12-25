<template>
  <div class="land">
    <v-expand-transition>
      <app v-if="step > 0" :id="appid" @ready="ready"></app>
    </v-expand-transition>
    <h1>{{ tip }}</h1>
    <v-expand-transition>
      <div v-if="step > 2">
        <v-btn style="margin: 20px;" color="primary" outlined rounded large :loading="jumpLoading" @click="jump">{{ app.name }}</v-btn>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
import App from '@/components/App.vue'
const SS = window.sessionStorage
export default {
  name: 'Land',
  data: () => ({
    step: 0, // control the process
    code: '',
    platform: '',
    appid: '',
    userid: '',
    state: '',
    tip: 'Authenticating...',
    app: {},
    token: '',
    jumpLoading: false
  }),
  components: {
    App
  },
  async mounted () {
    try {
      const raw = this.$route.query.state.split('.')
      this.platform = raw[0]
      this.appid = raw[1]
      this.code = this.$route.query.code
      if (raw[2]) this.state = raw[2]
      if (!this.platform || !this.appid || !this.code) throw new Error()
      this.step++
      this.auth()
    } catch {
      this.tip = 'Oops, it seems that you get lost!'
    }
  },
  methods: {
    ready (app) {
      this.app = app
      setTimeout(() => { this.step++ }, 800)
    },
    async auth () {
      try {
        const { data } = await this.$ajax.post('/login', { code: this.code, platform: this.platform, app: this.appid })
        this.token = data.token
        this.userid = data.id
        this.tip = 'Hello, ' + data.info.name
        setTimeout(() => { this.step++ }, 800)
      } catch (err) {
        this.tip = err.response.data || 'Network Error'
      }
    },
    async jump () {
      if (this.appid === 'aauth') { // internal
        SS.token = this.token
        SS.user = this.userid
        this.$router.push('/list')
        return
      }
      try {
        this.jumpLoading = true
        const { data } = await this.$ajax.put('/login', { user: this.userid, app: this.appid, token: this.token })
        let url = this.app.redirect + '?code=' + data
        if (this.state) url += '&state=' + this.state
        window.location.href = url
      } catch (err) {
        this.tip = err.response.data || 'Network Error'
        this.jumpLoading = false
      }
    }
  }
}
</script>

<style scoped>
div.land {
  color: #333;
  width: 100vw;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
