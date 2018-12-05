import axios from "axios";

class API {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://my-diary-backend.herokuapp.com/api/v1"
    });
    this.interceptor = config => this.setToken(config);
    this.axios.interceptors.request.use(this.interceptor);
    const accessToken = localStorage.getItem("accessToken");
    this.axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  }

  setToken(config) {
    const token = localStorage.getItem("accessToken");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }

  createUser(user) {
    return this.axios.post("/auth/signup", user);
  }

  loginUser(user) {
    return this.axios.post("/auth/login", user);
  }

  fetchStories(page = 0, size = 20) {
    return this.axios.get(`/entries?page=${page}&size=${size}`);
  }

  createStory(story) {
    return this.axios.post("/entries", story);
  }
}

const apiInstance = new API();

export default apiInstance;
