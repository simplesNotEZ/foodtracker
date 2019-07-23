<template>
  <div class="containing-div">
    <ShowSpotsButton/>
    <div class="row">
      <div class="title col twelvecol">
        <h1>Add a Spot</h1>
      </div>
      <div class="row">
        <div class="form-div col twelvecol">
          <form>
            <div class="row field-div">
              <div class="col threecol">
                <label>Name</label>
              </div>
              <div class="col ninecol text-div">
                <input v-model="spot.name" type="text" placeholder="What's the name of the eatery?">
              </div>
            </div>
            <div class="row field-div">
              <div class="col threecol">
                <label>Picture</label>
              </div>
              <div class="col ninecol text-div">
                <input
                  v-model="spot.image"
                  type="text"
                  placeholder="Add a url of an image for the eatery"
                >
              </div>
            </div>
            <div class="row field-div">
              <div class="col threecol">
                <label>Address</label>
              </div>
              <div class="col ninecol text-div">
                <input
                  v-model="spot.address"
                  type="text"
                  placeholder="Add an address for the eatery"
                >
              </div>
            </div>
            <div class="row field-div">
              <div class="col threecol">
                <label>Description</label>
              </div>
              <div class="col ninecol text-div">
                <input
                  v-model="spot.description"
                  type="text"
                  placeholder="Add a description of the eatery"
                >
              </div>
            </div>
            <div class="row">
              <div class="submit-button-div col twelvecol">
                <button type="button" class="submit-button" @click="createSpot">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowSpotsButton from "../atoms/ShowSpotsButton.vue";

export default {
  name: "AddSpot",
  components: {
    ShowSpotsButton
  },
  data() {
    return {
      spot: this.createFreshSpotObject()
    };
  },
  methods: {
    createSpot() {
      console.log("createSpot ran");
      this.$store
        .dispatch("createSpot", this.spot)
        .then(() => {
          alert("Thanks for adding a spot. You're a gigantic loser!");
        })
        .then(() => {
          this.$router.push({
            name: "show-spot",
            params: { id: this.spot.id }
          });
          this.spot = this.createFreshSpotObject();
        })
        .catch(() => {
          console.log("There was a problem creating your spot.");
        });
    },
    createFreshSpotObject() {
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

      const id = Math.floor(Math.random() * 100000);
      return {
        id: id,
        name: "",
        image: "",
        date: dateString,
        address: "",
        description: "",
        commentCount: 0,
        averageRating: 0,
        comments: []
      };
    }
  }
};
</script>

<style lang="less" scoped>
.containing-div {
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
        .threecol {
          // border: 1px solid coral;
        }
      }
      label {
        float: right;
        padding: 1vh 0;
        // border: 1px solid blue;
      }
      .text-div {
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