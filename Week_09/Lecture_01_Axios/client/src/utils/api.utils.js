import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  timeout: 10000,
});

// api.defaults.headers.common["Authorization"] =
//   "This is my bearer token (or at least let's pretend!)";
api.defaults.headers.common["Content-Type"] = "application/json";

api.interceptors.response.use(
  // Resolved Handler
  (response) => {
    return response.data;
  },
  // Reject Handler
  (error) => {
    alert("Something went wrong, please try again.");

    return error;
  }
);

export const getAllPirates = async (limit = 20, offset = 0) =>
  api.get(`/pirates`, { params: { limit, offset } });

export const createPirate = async (
  name,
  nickName,
  rank,
  numberOfParrots,
  hasPegLeg,
  catchPhrase
) =>
  api.post("/pirates", {
    name,
    nickName,
    rank,
    numberOfParrots,
    hasPegLeg,
    catchPhrase,
  });

export const getPirateById = async (id) => api.get(`/pirates/${id}`);

export const updatePirate = async (
  id,
  name,
  nickName,
  rank,
  numberOfParrots,
  hasPegLeg,
  catchPhrase
) =>
  api.put(`/pirates/${id}`, {
    name,
    nickName,
    rank,
    numberOfParrots,
    hasPegLeg,
    catchPhrase,
  });

export const deletePirate = async (id) => api.delete(`/pirates/${id}`);

export default api;
