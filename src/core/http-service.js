import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
// const BASE_URL = "https://react-mini-projects-api.classbon.com";
const BASE_URL = "https://dashboard-admin-85wg.vercel.app/";

export const httpService = axios.create({
  baseURL: BASE_URL,
});
