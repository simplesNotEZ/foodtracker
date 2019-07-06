<template>
  <div id="footer-outer-div">
    <div id="footer-inner-div">
      <h2>The HUB</h2>
      <p>3601 Walnut St, Denver, CO 80205</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {};
  }
};
</script>


<style lang="less" scoped>
#footer-outer-div {
  background-color: green;
  display: flex;
  flex-direction: column;
}
#footer-inner-div {
  text-align: center;
  flex-shrink: 0;
  h2 {
    color: yellow;
  }
  p {
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    color: yellow;
  }
}
</style>