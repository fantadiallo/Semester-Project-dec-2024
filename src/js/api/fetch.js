import { headers } from "./headers";
import { getUserData } from "../utilities/user";

/**
 * Reusable fetch function to handle API requests.
 * 
 * @param {string} endpoint - The API endpoint to send the request to.
 * @param {string} [method="GET"] - The HTTP method for the request (GET, POST, PUT, DELETE).
 * @param {Object} [body=null] - The request body for POST/PUT requests.
 * @returns {Promise<Object|null>} - The JSON response from the API, or `null` if no content.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function fetchData(endpoint, method = "GET", body = null) {
  const userData = getUserData();
  const requestHeaders = headers(userData.accessToken);

  if (body) {
    requestHeaders["Content-Type"] = "application/json";
  }

  console.log(`Requesting ${method} ${endpoint}`, body ? `with body: ${JSON.stringify(body)}` : "without body");

  try {
    const response = await fetch(endpoint, {
      method,
      headers: requestHeaders,
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

 
    return response.status === 204 ? null : await response.json();

  } catch (error) {
    console.error("Error in fetchData:", error.message);
    throw error;
  }
}
