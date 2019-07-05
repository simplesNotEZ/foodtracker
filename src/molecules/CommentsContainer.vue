<template>
  <div class="container-div">
    <p>There are { dynamicValue } comments for { spot.name }.</p>
    <input class="leave-comment-btn" type="button" value="Leave Comment">
    <CommentCard/>
  </div>
</template>

<script>
import CommentCard from "../atoms/CommentCard.vue";

export default {
  name: "CommentsContainer",
  components: {
    CommentCard
  }
};
</script>

<style lang="less" scoped>
.container-div {
  border: 2px solid black;
  margin: 3vh 0 0;
  p {
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-weight: bold;
    font-size: 4vh;
  }
  .leave-comment-btn {
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
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
</style>