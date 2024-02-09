const axios = require("axios");

export const useLogin = (data) => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}account/login`, data)
    .then(function (response) {})
    .catch(function (err) {});
};
