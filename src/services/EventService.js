import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getSpots() {
    return apiClient.get("/spots");
  },
  getSpot(id) {
    return apiClient.get("/spots/" + id);
  },
  postSpot(spot) {
    return apiClient.post("/spots", spot);
  },
  putComment(id, spotWithNewComment) {
    return apiClient.put("/spots/" + id, spotWithNewComment);
  }
  // updateSpot(id, comment) {
  //   return apiClient.put("/spots/" + id, );
  // }
};
