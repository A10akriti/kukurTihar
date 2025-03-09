// src/api/axiosConfig.jsx
import axios from "axios";

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3004", // Use environment variable or default to localhost
  timeout: 10000, // Optional: Set request timeout (10 seconds)
  headers: {
    "Content-Type": "application/json", // Default content type for requests
  },
});

// Add a request interceptor to include tokens or handle global configurations
axiosInstance.interceptors.request.use(
  (config) => {
    // Attach an Authorization token, if available
    const token = localStorage.getItem("token"); // Replace with your token logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors globally
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle global response processing
axiosInstance.interceptors.response.use(
  (response) => {
    // Any global response handling
    return response;
  },
  (error) => {
    // Handle errors globally (e.g., unauthorized access)
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      window.location.href = "/login"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

// Define reusable API functions (optional but convenient)
export const api = {
  // Fetch all events
  getEvents: () => axiosInstance.get("/api/events"),

  // Fetch a single event by ID
  getEventById: (id) => axiosInstance.get(`/api/events/${id}`),

  // Create a new event
  createEvent: (data) => axiosInstance.post("/api/events", data),

  // Update an existing event
  updateEvent: (id, data) => axiosInstance.put(`/api/events/${id}`, data),

  // Delete an event
  deleteEvent: (id) => axiosInstance.delete(`/api/events/${id}`),
};

export default axiosInstance;
