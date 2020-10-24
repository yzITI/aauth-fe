<template>
  <div class="launch">
    <app :id="$route.params.app" @ready="ready" @error="error"></app>
    <h2>{{ tip }}</h2>
    <v-expand-transition>
      <div v-if="show" class="list">
        <v-btn v-for="(item, i) in items" :key="i" @click="login(item)" :color="item.color" style="margin: 10px;" outlined rounded large>
          <img style="width: 25px; margin-right: 20px;" :src="item.icon">
          {{ item.name }}
        </v-btn>
      </div>
    </v-expand-transition>
  </div>
</template>
<script>
import App from '@/components/App.vue'
import platforms from '../platforms'

export default {
  name: 'Launch',
  data: () => ({
    app: {},
    show: false,
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
      this.show = true
      this.tip = 'Login to ' + app.name
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
}

div.list {
  max-width: 90vw;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
