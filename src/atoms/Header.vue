<template>
  <div class="containing-div">
    <h1>HUB Spots Food Reviews</h1>
    <PicRow/>
  </div>
</template>

<script>
import PicRow from "./PicRow.vue";

export default {
  name: "Header",
  components: {
    PicRow
  }
};
</script>

<style lang="less" scoped>
.containing-div {
  margin: 0 0 3vh;
  h1 {
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-weight: bold;
    font-size: 8vh;
    color: green;
    margin: 1vh 0;
  }
}
</style>