<template>
  <div class="container-div">
    <div class="row">
      <div class="col twelvecol comments-total">
        <p>There are {{ spot.comments.length }} comments for {{ spot.name }}.</p>
      </div>
    </div>
    <div class="row">
      <div class="col twelvecol leave-comment-div">
        <input class="leave-comment-btn" type="button" value="Leave Comment">
      </div>
    </div>
    <CommentCard v-for="comment in spot.comments" :key="comment.id" :comment="comment"/>
  </div>
</template>

<script>
import CommentCard from "../atoms/CommentCard.vue";

export default {
  name: "CommentsContainer",
  components: {
    CommentCard
  },
  props: {
    spot: {
      Type: Object,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.container-div {
  border: 2px solid black;
  margin: 3vh 0 0;
  .comments-total {
    text-align: center;
    p {
      font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial,
        sans-serif;
      font-weight: bold;
      font-size: 4vh;
    }
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
}
</style>