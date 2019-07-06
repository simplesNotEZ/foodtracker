<template>
  <div class="row containing-div">
    <div class="col twelvecol">
      <h1>HUB Spots Food Reviews</h1>
    </div>
    <div class="col twelvecol">
      <PicRow/>
    </div>
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
  text-align: center;
  h1 {
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-weight: bold;
    font-size: 8vh;
    color: green;
    margin: 1vh 0;
  }
}
</style>