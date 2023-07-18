import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTc5ZGFjZWMwMjQzNzkyZTZkNDA5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTY5NTAyMywiZXhwIjoxNjg5OTU0MjIzfQ.MO6yNBTYYhF5LQ4vvGV2Fhqozi5cFhX0Jfo5rCtWomU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {token: `bearer ${TOKEN}`},
});
