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
  }
  // updateSpot(id, comment) {
  //   return apiClient.put("/spots/" + id, );
  // }
};
