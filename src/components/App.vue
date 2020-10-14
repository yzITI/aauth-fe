<template>
  <div class="app">
    <img v-if="icon" :alt="name" :src="icon">
    <img v-else style="object-fit: contain; object-position: center;" src="../assets/loading.gif">
    <v-icon style="margin: 0 20px; font-size: 2rem;">mdi-arrow-left-right</v-icon>
    <img src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['id'],
  data: () => ({
    name: '',
    icon: false
  }),
  async mounted () {
    try {
      const { data } = await this.$ajax.get('/login?app=' + this.id)
      this.icon = data.icon
      this.name = data.name
      this.$emit('ready', data)
    } catch (err) {
      this.$emit('error', err.response.data || 'Network Error')
    }
  }
}
</script>

<style scoped>
div.app {
  margin: 20px 0;
  width: 300px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 100px;
  height: 100px;
}
</style>
