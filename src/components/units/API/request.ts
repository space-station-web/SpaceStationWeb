export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";

// 앞으로 토큰은 여기서 사용하시면 됩니다.
// Authorization 에 토큰 자동으로 들어가도록 설정하였습니다.
// const request = axios.create({
//   baseURL: "http://localhost:8080",
//   headers: {
//     withCredentials: true,
//     transformRequest: true,
//     Authorization: `Bearer ${window.localStorage.getItem(ACCESS_TOKEN)}`,
//     Refresh: `${window.localStorage.getItem(REFRESH_TOKEN)}`,
//   },
// });

// request.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   async (error) => {
//     return Promise.reject(error);
//   },
// );

// export default request;

