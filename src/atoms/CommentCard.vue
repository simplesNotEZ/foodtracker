<template>
  <div class="containing-div">
    <div class="row">
      <div class="col twocol">
        <p class="card-label">Date:</p>
      </div>
      <div class="col tencol">
        <p>{{ comment.date }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col twocol">
        <p class="card-label">Reviewer:</p>
      </div>
      <div class="col tencol">
        <p>{{ comment.reviewer }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col twocol">
        <p class="card-label">Comment:</p>
      </div>
      <div class="col tencol">
        <p>{{ comment.comment }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col twocol">
        <p class="card-label">Rating:</p>
      </div>
      <div class="col tencol">
        <p>{{ comment.rating }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentCard",
  props: {
    comment: {
      Type: Object,
      required: true
    },
    id: "id"
  }
};
</script>

<style lang="less" scoped>
.containing-div {
  border: 1.25px solid black;
  margin: 2vh 5vw;
  .row {
    div {
      // border: 1px solid black;
    }
  }
  .card-label {
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 2.5vh;
    font-weight: bold;
    margin-right: 1vw;
    float: right;
  }
  p {
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 2.5vh;
  }
}
</style>