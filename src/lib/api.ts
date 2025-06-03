import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/journeys",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
})