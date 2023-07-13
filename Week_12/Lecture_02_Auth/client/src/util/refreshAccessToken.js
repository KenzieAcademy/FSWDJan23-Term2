import api, { setAuthHeaders } from "./api.utils";

export async function refreshAccessToken(error) {
  return new Promise((resolve, reject) => {
    api
      .get("/auth/refresh")
      .then((response) => {
        setAuthHeaders(response.token);
        return api[error.response.config.method](
          error.response.config.url,
          error.response.config.body || undefined
        );
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
