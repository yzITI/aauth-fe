<template>
  <div class="launch">
    <app :id="$route.params.app" @ready="ready" @error="error"></app>
    <h2>{{ tip }}</h2>
    <div :style="style">
      <div class="list">
        <v-btn v-for="(item, i) in items" :key="i" @click="login(item)" :color="item.color" style="margin: 10px; padding: 20px;" outlined rounded>
          <img style="width: 25px; margin-right: 20px;" :src="item.icon">
          {{ item.name }}
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import App from '@/components/App.vue'
import platforms from '../platforms'

export default {
  name: 'Launch',
  data: () => ({
    app: {},
    style: 'height: 0px;',
    tip: 'Loading...'
  }),
  components: {
    App
  },
  computed: {
    items () {
      return this.app.platform
        ? platforms.filter(x => this.app.platform.includes(x.key))
        : platforms
    }
  },
  methods: {
    ready (app) {
      this.app = app
      const factor = 12000 / Math.min(0.6 * window.innerWidth, 600)
      this.$nextTick(() => {
        this.style = `height: ${this.items.length * factor + 100}px;`
        this.tip = 'Login to ' + app.name + ' with'
      })
    },
    error (err) {
      this.tip = err
    },
    login (pl) {
      pl.go(pl.key + '.' + this.$route.params.app + '.' + this.$route.query.state)
    }
  }
}
</script>

<style scoped>
div.launch {
  color: #333;
  width: 100vw;
  min-height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

div.launch * {
  transition: all 0.5s ease;
  overflow-y: hidden;
}

div.list {
  width: 600px;
  max-width: 90vw;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
