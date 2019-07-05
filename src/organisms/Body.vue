<template>
  <div id="body">
    <h1>See reviews of all of the spots to eat around the HUB, as reviewed by your coworkers.</h1>
    <input class="addSpotButton" type="button" value="Add A Spot">
    <ReviewCard/>
  </div>
</template>

<script>
import ReviewCard from "../molecules/ReviewCard.vue";
export default {
  name: "Body",
  components: {
    ReviewCard
  }
};
</script>

<style lang="less" scoped>
#body {
  border: 3px solid chocolate;
  border-radius: 8px;
  flex: 1;
  h1 {
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
  }
  .addSpotButton {
    padding: 1.25vh 2vw;
    color: white;
    background-color: #990000;
    border: 2px solid black;
    border-radius: 10px;
    font-size: 4vh;
    font-weight: bold;
    cursor: pointer;
  }
  .addSpotButton:hover {
    background-color: #660000;
  }
}
</style>