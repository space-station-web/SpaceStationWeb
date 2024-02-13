import axios from 'axios';

export const ACCESS_TOKEN_KEY = 'accessToken';
export const REFRESH_TOKEN_KEY = 'refreshToken';

const request = axios.create({
  baseURL: 'https://www.greeny.r-e.kr',
  withCredentials: true, 
});


request.interceptors.request.use(
  (config) => { 
    const accessToken = window.localStorage.getItem(ACCESS_TOKEN_KEY);
    const refreshToken = window.localStorage.getItem(REFRESH_TOKEN_KEY);

    if (accessToken !== null && accessToken !== '') { // null 또는 빈 문자열(`''`)인지 명시적으로 확인
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (refreshToken !== null && refreshToken !== '') { // null 또는 빈 문자열(`''`)인지 명시적으로 확인
      config.headers.Refresh = refreshToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error); // 에러가 발생하면 프로미스를 반환
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data; // 에러가 발생하지 않으면 프로미스를 반환하지 않음
  },
  (error) => {
    return Promise.reject(error); // 에러가 발생하면 프로미스를 반환
  }
);

export default request;