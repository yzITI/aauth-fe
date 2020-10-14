<template>
  <h1>{{ acode }}</h1>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Land',
  data: () => ({
    code: '',
    platform: '',
    app: '',
    data: {},
    acode: ''
  }),
  async mounted () {
    const params = new URLSearchParams(window.location.search)
    this.code = params.get('code')
    const state = params.get('state').split('.')
    this.platform = state[0]
    this.app = state[1]
    try {
      const { data } = await axios.post('https://api.aauth.link/login', { code: this.code, platform: this.platform, app: this.app })
      this.data = data
      const res = await axios.put('https://api.aauth.link/login', { user: data.id, token: data.token, app: this.app })
      this.acode = res.data
      console.log(res.data)
    } catch (err) {
      if (err.response) console.log(err.response.data)
    }
  },
  methods: {
  }
}
</script>

<style></style>
