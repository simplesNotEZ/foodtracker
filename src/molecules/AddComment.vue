<template>
  <div class="containing-div">
    <ShowSpotsButton/>
    <div class="row">
      <div class="title col twelvecol">
        <h1>Add a Comment for {{ spotname }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="form-div col twelvecol">
        <form>
          <div class="row field-div">
            <div class="col fourcol">
              <label>Name</label>
            </div>
            <div class="col eightcol name-text-div">
              <input v-model="comment.reviewer" type="text" placeholder="Tell us who you are">
            </div>
          </div>
          <div class="row field-div">
            <div class="col fourcol">
              <label>Comment</label>
            </div>
            <div class="col eightcol">
              <textarea
                rows="4"
                columns="110"
                v-model="comment.comment"
                placeholder="Leave a comment/review here"
              ></textarea>
            </div>
          </div>
          <div class="row field-div rating-div">
            <div class="col sixcol">
              <label>Your Rating</label>
            </div>
            <div class="col sixcol selector-div">
              <select class="selector" v-model.number="comment.rating">
                <option value="5" selected>5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="submit-button-div col twelvecol">
              <button type="button" class="submit-button" @click="createComment">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ShowSpotsButton from "../atoms/ShowSpotsButton.vue";

import { EventBus } from "../atoms/event-bus.js";

export default {
  name: "AddComment",
  components: {
    ShowSpotsButton
  },
  data() {
    return {
      comment: this.createFreshCommentObject()
    };
  },
  props: ["id", "spotname"],
  methods: {
    createComment() {
      console.log("createComment just ran.");
      this.$store
        .dispatch("addComment", {
          id: this.id,
          comment: this.comment
        })
        .then(() => {
          alert("Thanks for adding a comment. You're a gigantic loser!");
        })
        .then(() => {
          this.comment = this.createFreshCommentObject();
          EventBus.$emit("comment-added", {});
          console.log("EventBus.$emit just ran");
          this.$router.push({
            name: "show-spot",
            params: { id: this.id }
          });
        })
        .catch(() => {
          console.log("There was a problem creating your comment.");
        });
    },
    createFreshCommentObject() {
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      var now = new Date();
      var nowMonth = now.getMonth();
      var nowDay = now.getDate();
      var nowYear = now.getFullYear();
      var nowMonthName = months[nowMonth];
      var dateString = `${nowMonthName} ${nowDay}, ${nowYear}`;

      return {
        date: dateString,
        reviewer: "",
        comment: "",
        rating: 5
      };
    }
  },
  beforeDestroy() {
    console.log("beforeDestory for AddComment ran.");
    // EventBus.$off("comment-added");
  }
};
</script>

<style lang="less" scoped>
.containing-div {
  .row {
    margin-bottom: 0;
  }
  .title {
    text-align: center;
    font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial, sans-serif;
    font-size: 3vh;
    color: green;
    background-color: orange;
  }
  .form-div {
    // text-align: center;

    // width: 70%;
    form {
      margin: 4vh 35vw;
      padding: 3vh 0;
      border: 2px solid black;
      border-radius: 3px;
      .field-div {
        padding: 2vh 2vw;
        // border: 1px solid fuchsia;
        .fourcol {
          // border: 1px solid coral;
        }
      }
      label {
        float: right;
        padding: 1vh 0;
      }
      .name-text-div {
        border: 1px solid black;
        border-radius: 2px;
        padding: 1vh 0;
        // width: 100%;
        input {
          // border: 1px solid red;
          width: 90%;
          border: none;
          padding-left: 0.5vw;
          font-size: 1.6vh;
        }
      }
      textarea {
        border: 1px solid black;
        border-radius: 2px;
        width: 13.7vw;
        padding: 1vh 0 0 0.5vw;
        font-size: 1.6vh;
        margin-left: -0.5vw;
      }
      .rating-div {
        padding-top: 0;
        .selector-div {
          padding-top: 1vh;
          select {
            width: 3vw;
          }
        }
      }
      .submit-button-div {
        text-align: center;
        .submit-button {
          width: 20%;
          padding: 1.25vh 0.5vw;
          background-color: #ff9900;
          color: green;
          font-family: "Montserrat", "Helvetica Neue", "Helvetica", Arial,
            sans-serif;
          font-weight: bold;
          font-size: 1.75vh;
          border: 1px solid green;
          border-radius: 3px;
        }
        .submit-button:hover {
          cursor: pointer;
          background-color: #e68a00;
        }
      }
    }
  }
}
</style>