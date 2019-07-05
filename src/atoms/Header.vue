<template>
  <div>
    <h1 id="real-header">HUB Spots Food Reviews</h1>
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

<style>
#real-header {
  color: green;
}
</style>