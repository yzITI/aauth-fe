<template>
  <div class="index">
    <img src="/img/bigger_logo.png" alt="logo">
    <v-expand-transition>
      <div v-if="show">
        <h2>Auth with Anything</h2>
        <div class="button">
          <v-btn
            rounded
            large
            dark
            color="#D9483B"
            style="margin: 0 10px;"
            @click="$router.push('/guide')">
            Get Started
          </v-btn>
          <v-btn
            rounded
            large
            color="#f6f6f6"
            style="margin: 0 10px;"
            @click="github">
            <img style="width: 25px; margin-right: 20px;" src="/platforms/github.png">
            GitHub
          </v-btn>
        </div>
      </div>
    </v-expand-transition>
    <p class="has-text-grey" style="color: #8c8c8c;"><a href="http://beian.miit.gov.cn/" style="color: #8c8c8c;">苏ICP备20040754号-1</a><br />copyright&copy;南京世创工程技术有限公司</p>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
    show: false
  }),
  mounted () {
    setTimeout(() => {
      this.show = true
    }, 1000)
  },
  methods: {
    github () {
      window.location.href = 'https://github.com/yzITI/aauth-fe'
    }
  }
}
</script>

<style scoped>
.index {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
div.index * {
  transition: all 0.5s ease;
  overflow-y: hidden;
}
h2 {
  color: #273849;
  font-size: 3.2em;
  font-weight: 300;
  margin-top: 0;
}
img {
  width: 40vw;
  max-width: 250px;
}
p {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-decoration: none;
}
.button {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}
@media (max-width: 440px) {
  h2 {
    font-size: 2rem;
  }
}
</style>
