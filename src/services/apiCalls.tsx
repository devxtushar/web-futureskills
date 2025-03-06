import axios, { AxiosInstance } from "axios";

const BASE_URL = "http://localhost:5000/";

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAPI = async (endPoint: string) => {
  try {
    const response = await api.get(endPoint);
    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred", err);
    }
  }
};
export const postAPI = async (endPoint: string, formData: object) => {
  try {
    const response = await api.post(endPoint, formData);
    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred", err);
    }
  }
};
export const putAPI = async (endPoint: string, formData: object) => {
  try {
    const response = await api.put(endPoint, formData);
    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred", err);
    }
  }
};
export const deleteAPI = async (endPoint: string) => {
  try {
    const response = await api.delete(endPoint);
    return response.data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred", err);
    }
  }
};
