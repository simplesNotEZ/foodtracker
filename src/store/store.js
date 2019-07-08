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
    }
  },
  actions: {
    createSpot({ commit }, spot) {
      return EventService.postSpot(spot).then(() => {
        commit("ADD_SPOT", spot);
      });
    },
    addComment({ commit }, { comment, spot }) {
      return EventService.updateSpot(spot).then(() => {
        commit("ADD_COMMENT", comment);
      });
    },
    fetchSpots({ commit }) {
      EventService.getSpots()
        .then(response => {
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
              "There was a problem creating the spot.",
              error.message
            );
          });
      }
    }
  },
  getters: {
    getSpotById: state => id => {
      return state.spots.find(spot => spot.id === id);
    }
  }
});
