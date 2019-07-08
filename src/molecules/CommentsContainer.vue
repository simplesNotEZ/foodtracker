<template>
  <div class="container-div">
    <div class="row">
      <div class="col twelvecol comments-total">
        <p>There are {{ spot.comments.length }} comments for {{ spot.name }}.</p>
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
}
</style>