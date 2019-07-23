import Vue from "vue";
import Vuex from "vuex";
import EventService from "../services/EventService.js";
// import * as spots from "./modules/spots.js";
// import * as comments from "./modules/comments.js";

Vue.use(Vuex);

export default new Vuex.Store({
  // modules: {
  //   spots,
  //   comments
  // },
  state: {
    spot: {},
    spots: []
  },
  mutations: {
    ADD_SPOT(state, spot) {
      state.spots.push(spot);
    },
    SET_SPOTS(state, spots) {
      state.spots = spots;
    },
    SET_SPOT(state, spot) {
      state.spot = spot;
    },
    ADD_COMMENT(state, comment) {
      state.spot.comments.push(comment);
    }
  },
  actions: {
    createSpot({ commit }, spot) {
      return EventService.postSpot(spot).then(() => {
        commit("ADD_SPOT", spot);
      });
    },
    addComment({ commit, getters }, { id: id, comment: comment }) {
      //set the current spot in state in store to the spot the comment is for
      var spot = getters.getSpotById(id);
      console.log(
        "here's the spot returned by getSpotById in addComment actions: ",
        spot
      );
      if (spot) {
        commit("SET_SPOT", spot);
        console.log(
          "after SET_SPOT runs, here's this.state.spot: ",
          this.state.spot
        );
      } else {
        EventService.getSpot(id)
          .then(response => {
            commit("SET_SPOT", response.data);
          })
          .catch(error => {
            console.log(
              "There was a problem finding the spot that you want to add a comment to.",
              error.message
            );
          });
      }
      //add the comment object to current spot's (in state) comment array
      commit("ADD_COMMENT", comment);
      //do actions have direct access to state?  If not, here's use of a getter
      // //getting error for getter: Uncaught TypeError: getters.getUpdatedSpot is not a function
      // var updatedSpot = getters.getUpdatedSpot();

      return EventService.putComment(id, this.state.spot).then(() => {
        alert("Thanks! Your comment has been added.");
      });
    },
    fetchSpots({ commit }) {
      EventService.getSpots()
        .then(response => {
          console.log("here's response from getSpots(): ", response);
          commit("SET_SPOTS", response.data);
        })
        .catch(error => {
          console.log("There was an error:", error.response); // Logs out the error
        });
    },
    fetchSpot({ commit, getters }, id) {
      var spot = getters.getSpotById(id);

      if (spot) {
        commit("SET_SPOT", spot);
      } else {
        EventService.getSpot(id)
          .then(response => {
            commit("SET_SPOT", response.data);
          })
          .catch(error => {
            console.log(
              "There was a problem showing you the spot.",
              error.message
            );
          });
      }
    }
  },
  getters: {
    getSpotById: state => id => {
      return state.spots.find(spot => spot.id === id);
    },
    getUpdatedSpot: state => {
      return state.spot;
    }
  }
});
