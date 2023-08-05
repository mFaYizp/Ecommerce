import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Yjc1NDA4MWE0NDVmZWU2NjU3Y2RlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTIxNTAxNiwiZXhwIjoxNjkxNDc0MjE2fQ.YlF2_uLc6JO8IKLN_lBzMqZDbRb1LbaM4IdZjtTCmjE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
