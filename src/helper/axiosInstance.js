/* eslint-disable no-unused-vars */
import axios from "axios";

const baseURL = "http://localhost:4000/stocks";

let headers = {};

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers,
});

axiosInstance.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    }
);

export default axiosInstance;
