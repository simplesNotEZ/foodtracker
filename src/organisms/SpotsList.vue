<template>
  <div id="body">
    <div class="row">
      <h1
        class="col twelvecol"
      >See reviews of all of the spots to eat around the HUB, as reviewed by your coworkers.</h1>
    </div>
    <div class="row">
      <div class="add-spot-div col twelvecol">
        <router-link :to="{ name: 'add-spot' }">
          <input class="addSpotButton" type="button" value="Add A Spot">
        </router-link>
      </div>
    </div>
    <div class="row">
      <ReviewCard v-for="spot in spots" :key="spot.id" :spot="spot"/>
    </div>
  </div>
</template>

<script>
import ReviewCard from "../molecules/ReviewCard.vue";
import { mapState } from "vuex";

export default {
  name: "SpotsList",
  components: {
    ReviewCard
  },
  created() {
    this.$store.dispatch("fetchSpots");
  },
  computed: mapState(["spots"])
};
</script>

<style lang="less" scoped>
#body {
  border: 3px solid chocolate;
  border-radius: 8px;
  flex: 1;
  h1 {
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    text-align: center;
  }
  .add-spot-div {
    text-align: center;
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
  }
  .addSpotButton:hover {
    background-color: #660000;
  }
}
</style>