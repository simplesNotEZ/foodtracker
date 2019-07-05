<template>
  <div class="containing-div">
    <p>
      <span class="card-label">Date:</span>
      { July 5th, 2019 }
    </p>
    <p>
      <span class="card-label">Reviewer:</span>
      { Marcia Brady }
    </p>
    <p>
      <span class="card-label">Comment:</span>
      { I had the burger. Nothing special, but it was a fine burger. A good value and cooked to-order. The fries were good I thought. }
    </p>
    <p>
      <span class="card-label">Rating:</span>
      { dynamic-rating}
    </p>
  </div>
</template>

<script>
export default {
  name: "CommentCard"
};
</script>

<style lang="less" scoped>
.containing-div {
  border: 1.25px solid black;
  margin: 2vh 5vw;
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
}
</style>