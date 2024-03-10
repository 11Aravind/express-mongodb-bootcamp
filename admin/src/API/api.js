import axios from "axios";
window.$apiBaseUrl = "http://localhost:5000/";
export const httpRequest = (method, url, data,json) => {
  return new Promise((resolve, reject) => {
    let config = {
      // headers: getAPI_Header()
      'Content-Type': 'application/json'
    };
    let requestPromise;
    switch (method.toLowerCase()) {
      case 'get':
        requestPromise = axios.get(window.$apiBaseUrl+url, config);
        break;
      case 'post':
        requestPromise = axios.post(window.$apiBaseUrl+url, data, config);
        break;
      default:
        reject(new Error(`Unsupported HTTP method: ${method}`));
        return;
    }
    requestPromise.then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
};
// export const httpRequest = (data, url, json) => {
//   return new Promise((resolve, reject) => {
//     axios.post(window.$apiBaseUrl + url, data, {
//       // headers: getAPI_Header()
//       'Content-Type': 'application/json'
//     }).then(function (response) {
//       resolve(response.data);
//     }).catch(function (error) {
//       reject(error);
//     });
//   });
// };
// export const httpgetdata = (data, url, json) => {
//   return new Promise((resolve, reject) => {
//     axios.get(window.$apiBaseUrl + url, data, {
//       // headers: getAPI_Header()
//       'Content-Type': 'application/json'
//     }).then(function (response) {
//       resolve(response.data);
//     }).catch(function (error) {
//       reject(error);
//     });
//   });
// };
