<template>
  <div class="outer-most-div">
    <h1>Restuarant Title</h1>
    <img src="../assets/butcherBlockCafe.jpeg">
    <p>
      <span class="card-label">Address:</span>100 Steele St, Denver, CO 80206
    </p>
    <p>
      <span class="card-label">Description:</span>This is a great spot to go if you hate to have a good time and get a good value. The service is egregious and the walk to get here will ruin any hope you've got left within your hope-repository.
    </p>
    <p>
      <span class="card-label">Average Rating:</span>
      {Dynamic Value Here}
    </p>
    <label class="card-label">Your Rating:</label>
    <select class="selector">
      <option value="5">5</option>
      <option value="5">4</option>
      <option value="5">3</option>
      <option value="5">2</option>
      <option value="5">1</option>
    </select>
    <input type="button" class="comments-button" value="Show Comments">
    <CommentsContainer/>
  </div>
</template>

<script>
import CommentsContainer from "./CommentsContainer";

export default {
  name: "ReviewCard",
  components: {
    CommentsContainer
  }
};
</script>

<style lang="less" scoped>
.outer-most-div {
  border: 2px solid black;
  border-radius: 10px;
  margin: 3vh 3vw 3vh;
  padding: 0 2vw 4vh;
  h1 {
    font-weight: bold;
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 4vh;
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
  .comments-button {
    background-color: #ffcc00;
    font-size: 2.25vh;
    font-weight: bold;
    color: black;
    border: 2px solid black;
    border-radius: 3px;
    padding: 0.75vh 1.15vw;
  }
  .comments-button:hover {
    cursor: pointer;
    background-color: #e6b800;
  }
}
</style>