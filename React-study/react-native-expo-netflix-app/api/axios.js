import axios from "axios";

// 중복된 url부분을 instance화 시킴
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "295750c4b7a8daa8fa0f04bd6db98f4b",
    language: "ko-KR",
  },
});
export default instance;
