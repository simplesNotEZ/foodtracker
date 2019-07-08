<template>
  <div class="outer-most-div">
    <div class="row">
      <div class="spot-name col twelvecol">
        <h1>
          <router-link :to="{ name: 'show-spot', params: { id: spot.id } }">{{ spot.name }}</router-link>
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="spot-picture col threecol">
        <img :src="spot.image">
      </div>
      <div class="col ninecol">
        <p>
          <span class="card-label">Address:</span>
          {{ spot.address }}
        </p>
        <p>
          <span class="card-label">Description:</span>
          {{ spot.description }}
        </p>
        <p>
          <span class="card-label">Average Rating:</span>
          {{ spot.averageRating }}
        </p>
        <div class="row">
          <div class="nestedcol sixcol">
            <label class="card-label">Your Rating:</label>
            <select class="selector">
              <option value="5">5</option>
              <option value="5">4</option>
              <option value="5">3</option>
              <option value="5">2</option>
              <option value="5">1</option>
            </select>
          </div>
          <div class="nestedcol threecol leave-comment-div">
            <router-link
              :to="{ name: 'add-comment', params: { id: spot.id, spotname: spot.name } }"
            >
              <input class="leave-comment-btn" type="button" value="Leave Comment">
            </router-link>
          </div>
          <div class="nestedcol threecol comments-btn-div">
            <input
              type="button"
              class="comments-button"
              @click="showComments"
              :value="showHideButtonText"
            >
          </div>
        </div>
      </div>
    </div>
    <CommentsContainer v-if="commentsHidden" :spot="spot"/>
  </div>
</template>

<script>
import CommentsContainer from "./CommentsContainer";

export default {
  name: "ReviewCard",
  components: {
    CommentsContainer
  },
  props: {
    spot: {
      Type: Object,
      required: true
    }
  },
  data() {
    return {
      commentsHidden: false,
      showHideButtonText: "Show Comments"
    };
  },
  methods: {
    showComments() {
      this.commentsHidden = !this.commentsHidden;
      if (this.showHideButtonText === "Show Comments") {
        this.showHideButtonText = "Hide Comments";
      } else {
        this.showHideButtonText = "Show Comments";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.outer-most-div {
  border: 2px solid black;
  border-radius: 10px;
  margin: 3vh 3vw 3vh;
  padding: 0 2vw 4vh;
  .spot-name {
    text-align: center;
  }
  h1 {
    font-weight: bold;
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 4vh;
  }
  .spot-picture {
    text-align: center;
  }
  img {
    height: 25vh;
    width: 15vw;
  }
  .card-label {
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 2.5vh;
    font-weight: bold;
    margin-right: 1vw;
  }
  p {
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 2.5vh;
  }
  .selector {
    margin-right: 1vw;
  }
  .leave-comment-div {
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
      margin-bottom: 2vh;
    }
    .leave-comment-btn:hover {
      background-color: #333333;
      cursor: pointer;
    }
  }
  .comments-btn-div {
    .comments-button {
      background-color: #ffcc00;
      font-size: 2.25vh;
      font-weight: bold;
      color: black;
      border: 2px solid black;
      border-radius: 3px;
      padding: 0.75vh 1.15vw;
    }
  }
  .comments-button:hover {
    cursor: pointer;
    background-color: #e6b800;
  }
}
</style>