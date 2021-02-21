<template>
  <div class="guide">
    <h1>Aauth Guide</h1>
    <p>Aauth provides fourth party authentication which allows developers to integrate Oauth platforms with a few clicks.</p>
    <h2>App</h2>
    <p>As a developer, you need a properly registered application</p>
    <v-btn
      rounded
      dark
      color="#D9483B"
      style="margin: 0 10px;"
      @click="manage">
      Manage App
    </v-btn>
    <h2>Aauth Protocol</h2>
    <p>Direct user to launch page <code>https://aauth.link/#/launch/AppID[?state=STATE]</code></p>
    <p>After user login, the page will be redirected to the redirect URL with query parameters <code>code[, state]</code>.</p>
    <p>To get user information and unique id, send https request to <code>https://api.aauth.link/login?app=AppID&secret=AppSecret&code=code</code> with <code>DELETE</code> method, the response will be in JSON format <code> { "id": "unique id", "name": "user name", ... }</code>.</p>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  methods: {
    manage () {
      this.$router.push('/launch/aauth')
    }
  }
}
</script>

<style scoped>
div.guide {
  color: #333;
  padding: 30px 10%;
}

h2 {
  margin: 15px 0;
}

p {
  color: #555;
}
</style>
