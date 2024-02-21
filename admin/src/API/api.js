import axios from "axios";
window.$apiBaseUrl = "http://localhost:5000/";
export const httpRequest = (data, url, json) => {
  return new Promise((resolve, reject) => {
    axios.post(window.$apiBaseUrl + url, data, {
      // headers: getAPI_Header()
      'Content-Type': 'application/json'
    }).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};
export const httpgetdata = (data, url, json) => {
  return new Promise((resolve, reject) => {
    axios.get(window.$apiBaseUrl + url, data, {
      // headers: getAPI_Header()
      'Content-Type': 'application/json'
    }).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};
