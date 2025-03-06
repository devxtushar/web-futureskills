import axios, { AxiosResponse, AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:5000/";

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      toast("Access token expired. Logging out...", { autoClose: 3000 });

      Cookies.remove("accessToken");
      Cookies.remove("role");

      window.location.href = "/";

      return Promise.reject("Session expired. Logging out...");
    }

    return Promise.reject(error);
  }
);

export default api;
