import axios, { AxiosInstance } from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:5000/";

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAPI = async (endPoint: string) => {
  try {
    const response = await api.get(endPoint);
    return response.data;
  } catch (err: any) {
    console.log(err, "respo");
  }
};
export const postAPI = async (endPoint: string, formData: object) => {
  try {
    const response = await api.post(endPoint, formData);
    return response.data;
  } catch (err: any) {
    toast(err.response.data.message, { autoClose: 1000 });
  }
};
export const putAPI = async (endPoint: string, formData: object) => {
  try {
    const response = await api.put(endPoint, formData);
    return response.data;
  } catch (err: any) {
    toast(err.response.data.message, { autoClose: 1000 });
  }
};
export const deleteAPI = async (endPoint: string) => {
  try {
    const response = await api.delete(endPoint);
    return response.data;
  } catch (err: any) {
    toast(err.response.data.message, { autoClose: 1000 });
  }
};
