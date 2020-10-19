<template>
  <div class="index">
    <img src="../assets/bigger_logo.png" alt="logo">
    <h2 :class="{ fold: hide }">Auth with Anything</h2>
    <div class="button" :class="{ fold: hide }">
      <v-btn
        rounded
        large
        dark
        color="#D9483B"
        style="margin: 0 10px;"
        @click="qq">
        <img style="width: 20px; margin-right: 20px;" src="/platforms/qq.png">
        QQ登陆
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
    <a href="http://beian.miit.gov.cn/" style="color: #e4e6eb;">苏ICP备20040754号-1</a>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
    hide: true
  }),
  mounted () {
    setTimeout(() => {
      this.hide = false
    }, 1000)
  },
  methods: {
    github () {
      window.location.href = 'https://github.com/yzITI/aauth-fe'
    },
    qq () {
      this.$router.push('/launch/qq')
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
  height: 76px;
  color: #273849;
  font-size: 3.2em;
  font-weight: 300;
  margin-top: 0;
}
img {
  width: 40vw;
  max-width: 250px;
}
a {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-decoration: none;
}
.button {
  height: 50px;
  display: flex;
  margin: 40px;
}
@media (max-width: 440px) {
  h2 {
    font-size: 2rem;
    height: 60px;
  }
}
.fold {
  height: 0;
}
</style>
