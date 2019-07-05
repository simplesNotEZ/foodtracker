<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./atoms/Header.vue";
import Body from "./organisms/Body.vue";
import Footer from "./atoms/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Body,
    Footer
  }
};
</script>

<style lang="less">
#app {
  height: 100vh;
}
</style>
