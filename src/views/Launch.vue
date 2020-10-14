<template>
  <div>
    <v-btn @click="login('GITHUB')">Login with Github</v-btn>
    <v-btn @click="login('DINGTALK')">Login with DingTalk</v-btn>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Launch',
  data: () => ({
    app: {},
    appid: '',
    platforms: {
      GITHUB: 'https://github.com/login/oauth/authorize?client_id=be701ef88116790b5964&state=GITHUB.test',
      DINGTALK: ['https://oapi.dingtalk.com/connect/qrconnect?appid=dingoaprellztzihaw4y82&response_type=code&scope=snsapi_login&state=DINGTALK.test&redirect_uri=https%3A%2F%2Faauth.link%2Freenter.html',
        'https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=dingoaprellztzihaw4y82&response_type=code&scope=snsapi_auth&state=STATE&redirect_uri=https%3A%2F%2Faauth.link%2Freenter.html']
    }
  }),
  async mounted () {
    const { data } = await axios.get(`https://api.aauth.link/login?app=${this.$route.params.app}`)
    this.app = data
  },
  methods: {
    login (pl) {
      if (pl === 'GITHUB') {
        window.location.href = this.platforms[pl]
      } else if (pl === 'DINGTALK') {
        if (navigator.userAgent.includes('DingTalk')) {
          window.location.href = this.platforms[pl][1]
        } else {
          window.location.href = this.platforms[pl][0]
        }
      }
    }
  }
}
</script>

<style></style>
