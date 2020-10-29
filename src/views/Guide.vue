<template>
  <div class="guide">
    <h1>Aauth Guide</h1>
    <p>Aauth provides fourth party authentication which allows developers to integrate Oauth platforms with a few clicks.</p>
    <h2>Prerequesites</h2>
    <p>a properly registered application</p>
    <h2>Aauth Protocol</h2>
    <p>Direct user to launch page <code>https://aauth.link/#/launch/appId[?state=STATE]</code></p>
    <p>After user login, the page will be redirected to the redirect URL with query parameters <code>code[, state]</code>.</p>
    <p>To get user information and unique id, send https request to <code>https://api.aauth.link/login?app=appId&secret=appSecret&code=code</code> with <code>DELETE</code> method, the response will be in JSON format <code> { "id": "unique id", "name": "user name", ... }</code>.</p>
  </div>
</template>

<script>
export default {
  name: 'Guide'
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
