<template>
  <div class="land">
    <app v-if="step > 0" :id="appid" @ready="ready"></app>
    <h1>{{ tip }}</h1>
    <div class="menu" :style="menuStyle">
      <v-btn style="margin: 20px;" color="primary" outlined rounded :loading="jumpLoading" @click="jump">Login to {{ app.name }}</v-btn>
    </div>
  </div>
</template>

<script>
import App from '@/components/App.vue'

export default {
  name: 'Land',
  data: () => ({
    step: 0, // control the process
    code: '',
    platform: '',
    appid: '',
    userid: '',
    state: undefined,
    tip: 'Authenticating...',
    app: {},
    token: '',
    jumpLoading: false
  }),
  components: {
    App
  },
  computed: {
    menuStyle () {
      return this.step >= 2 ? 'height: 200px;' : ''
    }
  },
  async mounted () {
    try {
      const raw = this.$route.query.state.split('.')
      this.platform = raw[0]
      this.appid = raw[1]
      this.code = this.$route.query.code
      if (raw[2]) this.state = raw[2]
      if (!this.platform || !this.appid || !this.code) throw new Error()
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
      try {
        this.jumpLoading = true
        const { data } = await this.$ajax.put('/login', { user: this.userid, app: this.appid, token: this.token })
        let url = this.app.redirect + '?code=' + data
        if (this.state) url += '&state=' + this.state
        window.location.href = url
      } catch (err) {
        this.tip = err.response.data || 'Network Error'
      }
      this.jumpLoading = false
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

div.menu {
  transition: all 0.5s ease;
  height: 0px;
  overflow-y: hidden;
}
</style>
