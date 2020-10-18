<template>
  <div>
    <div class="outer">
      <div class="left">
        <img class="logo" src="../assets/bigger_logo.png" alt="logo">
      </div>
      <div class="right">
        <div class="words">
          <h1> Aauth </h1>
          <h2> Auth with anything</h2>
        </div>
        <v-btn
          depressed
          rounded
          large
          color="primary"
          style="margin-right: 40px">
          GET STARTED
        </v-btn>
        <v-btn
          depressed
          rounded
          large
          color="secondary">
          GitHub
        </v-btn>
      </div>
    </div>
  <div class="footer">
    <a id="href" href="http://beian.miit.gov.cn/" target="_blank">苏ICP备20040754号-1</a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
.outer {
  max-width: 1260px;
  margin: 130px auto;
  height: 100%;
}
.logo {
  width: 300px;
  float: right;
  margin-right: 60px;
}
.left {
  width: 43%;
  display: inline-block;
  vertical-align: top;
}
.right {
  width: 57%;
  display: inline-block;
  vertical-align: top;
}
.words {
  display: block;
  color: #2a3d50;
}
h1{
  font-weight: 400;
  font-size: 5.2em;
}
h2 {
  font-weight: 300;
  font-size: 3.2em;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 45%;
  margin-right: -50%;
  display: block;
}
#href {
  text-decoration: none;
  font-weight: 200;
  color:#999;
}
</style>
