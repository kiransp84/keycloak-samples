import axios from "axios";

export const validateAccessToken = function (access_token) {
  let headers = {
    Authorization: `Bearer ${access_token}`,
  };
  let url = "http://localhost:3030/test/all-user-new";
  let data = {};

  const defaultConfig = { method: "GET" };
  const axiosConfig = Object.assign({}, defaultConfig, { url, headers, data });

  return axios(axiosConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
