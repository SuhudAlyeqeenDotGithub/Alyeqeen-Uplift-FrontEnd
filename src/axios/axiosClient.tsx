import axios from "axios";

export const handleApiRequest = async (method: "get" | "post" | "put" | "delete", url: string, data?: any) => {
  try {
    const response = await axios.request({
      method,
      url,
      data,
      withCredentials: true
    });
    if (response.data) {
      return response.data;
    }
  } catch (err: any) {
    const status = err.response?.status;
    const isUnauthenticated = status === 401 || status === 403;

    if (isUnauthenticated) {
      try {
        const refreshResponse = await axios.post(
          "http://localhost:5000/api/users/refreshAccessToken",
          {},
          {
            withCredentials: true
          }
        );
        if (refreshResponse.data) {
          const requestRetrial = await axios.request({
            method,
            url,
            data,
            withCredentials: true
          });
          if (requestRetrial.data) {
            return requestRetrial.data;
          }
        }
      } catch (refreshErr: any) {
        if (refreshErr.response?.data?.status === 401) window.location.href = "/login";
        throw refreshErr;
      }
    }

    throw err;
  }
};

// console.log("✅ Axios interceptor file loaded");

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
//   withCredentials: true
// });

// api.interceptors.response.use(
//   (response) => {
//     console.log("sending back response");
//     return response;
//   },
//   async (error) => {
//     console.log("there was an error");

//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         await axios.post(
//           "http://localhost:5000/api/users/refreshAccessToken",
//           {},
//           {
//             withCredentials: true
//           }
//         );
//         return api(originalRequest);
//       } catch (err) {
//         window.location.href = "/login"; // This works better on client
//       }
//     }

//     window.location.href = "/login";
//     return Promise.reject(error);
//   }
// );

// export default api;
