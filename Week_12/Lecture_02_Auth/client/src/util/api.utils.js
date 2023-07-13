import axios from "axios";
import { API_URL } from "../config/app.config";
import { refreshAccessToken } from "./refreshAccessToken";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const errorResponse = error.response.data;

    try {
      if (errorResponse.error === "Access token expired") {
        return refreshAccessToken(error);
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
);

export function setAuthHeaders(token) {
  if (token) api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete api.defaults.headers.common["Authorization"];
}

export default api;
