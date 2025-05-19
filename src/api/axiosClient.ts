import axios from "axios";
import { NextResponse } from "next/server";
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await axios.post(
          "http://localhost:5000/api/users/refreshAccessToken",
          {},
          {
            withCredentials: true
          }
        );
        return api(originalRequest);
      } catch (err) {
        return NextResponse.redirect(new URL("/login", window.location.origin));
      }
    }
    return NextResponse.redirect(new URL("/login", window.location.origin));
  }
);
