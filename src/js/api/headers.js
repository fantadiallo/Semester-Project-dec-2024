import { API_KEY } from "./constants";
import { load, save } from "./storage/index";

/**
 * Generates request headers for API requests.
 * @param {boolean} [hasBody=false] - Whether the request has a body (sets Content-Type).
 * @returns {Headers} - The request headers.
 */
export function headers(hasBody = false) {
  const headers = new Headers();

  const token = load("token");


  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  } else {
    console.warn("No token found in localStorage.");
  }


  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }


  if (hasBody) {
    headers.append("Content-Type", "application/json");
  }

  return headers;
}
