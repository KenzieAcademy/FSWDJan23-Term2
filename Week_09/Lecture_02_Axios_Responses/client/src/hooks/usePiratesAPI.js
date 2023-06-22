import { toast } from "react-toastify";
import api from "../utils/api.utils";

const usePiratesAPI = () => {
  const fetchPirates = (
    url = "http://localhost:3001/api/pirates?limit=20&offset=0"
  ) =>
    new Promise((resolve, reject) =>
      api
        .get(url)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
    );

  const fetchPirateById = (id) =>
    new Promise((resolve, reject) =>
      api
        .get(`/pirates/${id}`)
        .then(resolve)
        .catch((error) => {
          toast.error("No pirate found.");
          reject(error);
        })
    );

  const deletePirateById = (id) =>
    new Promise((resolve, reject) =>
      api
        .delete(`/pirates/${id}`)
        .then((response) => {
          toast.success("Pirate deleted.");
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        })
    );

  return {
    fetchPirates,
    fetchPirateById,
    deletePirateById,
  };
};

export default usePiratesAPI;
