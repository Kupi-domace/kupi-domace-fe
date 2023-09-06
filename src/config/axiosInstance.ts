import axios from "axios";

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Use an environment variable
  headers: {
    "Content-Type": "application/json", // Set default headers
  },
});

export default axiosInstance;
