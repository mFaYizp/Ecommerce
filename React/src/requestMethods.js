import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Yjc1NDA4MWE0NDVmZWU2NjU3Y2RlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDI2NzMzMiwiZXhwIjoxNjkwNTI2NTMyfQ.YDwmZy59gNnDcgHU_l_Oi2TS9gRbWJhKBGM00MqMh9I";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `bearer ${TOKEN}` },
});
