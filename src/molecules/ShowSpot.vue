<template>
  <div class="containing-div">
    <ShowSpotsButton/>
    <div class="row centered-div">
      <div class="col twelvecol">
        <h1>{{ spot.name }}</h1>
      </div>
    </div>
    <div class="row centered-div">
      <div class="col twelvecol">
        <img :src="spot.image">
      </div>
    </div>
    <div class="row centered-div">
      <div class="col twelvecol">
        <p>
          <span class="label">Address:</span>
          {{ spot.address }}
        </p>
      </div>
    </div>
    <div class="row centered-div">
      <div class="col twelvecol">
        <p class="no-top-margin">
          <span class="label">Description:</span>
          {{ spot.description }}
        </p>
      </div>
    </div>
    <div class="row centered-div">
      <div class="col twelvecol">
        <p class="no-top-margin">
          <span class="label">Average Rating:</span>
          {{ spot.averageRating }}
        </p>
      </div>
    </div>
    <div class="row centered-div">
      <div class="col twelvecol">
        <label class="label">Your Rating:</label>
        <select class="selector">
          <option value="5">5</option>
          <option value="5">4</option>
          <option value="5">3</option>
          <option value="5">2</option>
          <option value="5">1</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col twelvecol">
        <div class="comments-div">
          <router-link :to="{ name: 'add-comment', params: { id: id, spotname: spot.name } }">
            <input class="leave-comment-btn" type="button" value="Leave Comment">
          </router-link>
          <input
            type="button"
            class="comments-button"
            @click="showComments"
            :value="showHideButtonText"
          >
        </div>
      </div>
    </div>
    <CommentsContainer v-if="showTheComments" :spot="spot"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ShowSpotsButton from "../atoms/ShowSpotsButton.vue";
import CommentsContainer from "./CommentsContainer.vue";

import { EventBus } from "../atoms/event-bus.js";

export default {
  name: "ShowSpot",
  components: {
    ShowSpotsButton,
    CommentsContainer
  },
  props: ["id"],
  data() {
    return {
      showTheComments: false,
      showHideButtonText: "Show Comments",
      commentAddedCount: 0
    };
  },
  methods: {
    showComments() {
      console.log("showComments ran");
      this.showTheComments = !this.showTheComments;
      if (this.showHideButtonText === "Show Comments") {
        this.showHideButtonText = "Hide Comments";
      } else {
        this.showHideButtonText = "Show Comments";
      }
    },
    addToCount() {
      this.commentAddedCount += 1;
    },
    ...mapActions(["fetchSpot"])
  },
  computed: mapState({
    spot: state => state.spot
  }),
  created() {
    this.fetchSpot(this.id);
  },
  mounted() {
    console.log(
      "Mounted for ShowSpot (before EventBus.$on). this.showTheComments: ",
      this.showTheComments
    );
    EventBus.$on("comment-added", this.addToCount());
    console.log(
      "Mounted for ShowSpot (after EventBus.$on). this.showTheComments: ",
      this.showTheComments
    );
  },
  beforeDestroy() {
    console.log(
      "ShowSpot | beforeDestroy: checking this.showTheComments: ",
      this.showTheComments
    );
    if (this.showTheComments === true) {
      this.showTheComments = false;
    }
    console.log(
      "ShowSpot | beforeDestory: after flip of this.showTheComments if it was true: ",
      this.showTheComments
    );
    // this.commentAddedCount = 0;
    console.log(
      "ShowSpot | beforeDestory: this.commentAddedCount: ",
      this.commentAddedCount
    );
  }
};
</script>

<style lang="less" scoped>
.containing-div {
  .centered-div {
    text-align: center;
    // border: 1px solid blue;
    .label {
      font-weight: bold;
      margin-right: 1vw;
    }
  }
  .col {
    // border: 1px solid red;
  }
  img {
    height: 20vh;
    width: 20vw;
  }
  .no-top-margin {
    margin-top: 0;
  }
  .comments-div {
    margin: 2vh 0 2vh;
    text-align: center;
    .leave-comment-btn {
      font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial,
        sans-serif;
      font-weight: bold;
      font-size: 2.5vh;
      color: #ffcc00;
      background-color: black;
      border: 2px solid #ffcc00;
      border-radius: 3px;
      padding: 0.75vh 1.15vw;
      margin-right: 1vw;
    }
    .leave-comment-btn:hover {
      background-color: #333333;
      cursor: pointer;
    }
    .comments-button {
      background-color: #ffcc00;
      font-size: 2.25vh;
      font-weight: bold;
      color: black;
      border: 2px solid black;
      border-radius: 3px;
      padding: 0.75vh 1.15vw;
      margin-left: 1vw;
    }
    .comments-button:hover {
      cursor: pointer;
      background-color: #e6b800;
    }
  }
}
</style>