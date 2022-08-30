import axios, { AxiosResponse } from "axios";
import { store } from "../redux";
import { clearAuth } from "../redux/slice/AuthSlice";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

client.interceptors.request.use((config) => {
  if (config.url?.indexOf("dang-nhap") !== -1) {
    return config;
  }

  if (!config?.headers) {
    throw new Error(
      `Expected 'config' and 'config.headers' not to be undefined`
    );
  }

  const { token } = store.getState().Auth;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

client.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(clearAuth());
      window.location.href = "/dang-nhap";
    }
    return Promise.reject(error.response.data);
  }
);

export default client;
