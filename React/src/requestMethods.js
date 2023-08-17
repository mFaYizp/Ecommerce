import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Yjc1NDA4MWE0NDVmZWU2NjU3Y2RlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjI0OTA4NCwiZXhwIjoxNjkyNTA4Mjg0fQ.4vnSMZjQF59fYELwYYiVnRfK-44OPlX40m99sXHQhsk";




export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
