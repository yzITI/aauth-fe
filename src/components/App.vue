<template>
  <div class="app">
    <h1 v-if="error">{{ error }}</h1>
    <div v-else class="row">
      <img v-if="icon" :alt="name" :src="icon">
      <img v-else style="object-fit: contain; object-position: center;" src="../assets/loading.gif">
      <v-icon style="margin: 0 20px; font-size: 2rem;">mdi-arrow-left-right</v-icon>
      <img src="../assets/logo.png">
    </div>
    <h1 v-if="loading">Loading...</h1>
    <p v-if="loading">Prepare for Launch</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['id'],
  data: () => ({
    error: '',
    loading: true,
    name: '',
    icon: false
  }),
  async mounted () {
    try {
      const { data } = await this.$ajax.get('https://api.aauth.link/login?app=' + this.id)
      this.icon = data.icon
      this.name = data.name
      this.$emit('ready', data)
    } catch (err) {
      this.error = err.response.data
    }
    this.loading = false
  }
}
</script>

<style scoped>
div.app {
  min-width: 300px;
  margin: 20px 0;
}

div.row {
  height: 100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 100px;
  height: 100px;
}
</style>
