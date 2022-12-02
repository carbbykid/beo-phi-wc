import axios from "axios";

const Axios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${process.env.DEV_URL}/api`,
});

export const AxiosWC = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${process.env.WC_URL}`,
});
export default Axios;
