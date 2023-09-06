import axios from "axios";

// Create an Axios instance with a base URL
const serverAxiosInstance = axios.create({
  baseURL: process.env.NEXT_BACKEND_API_URL, // Use an environment variable
  headers: {
    "Content-Type": "application/json", // Set default headers
  },
});

export default serverAxiosInstance;
