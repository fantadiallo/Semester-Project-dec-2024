import { API_BASE } from "../constants.js";
import { headers } from "../headers.js";
import { hideLoader, showLoader } from "../storage/loader.js";

export default class ProfileAPI {
  apiBase = "";
  apiProfile = "";

  constructor(apiBase = API_BASE) {
    this.apiBase = apiBase;
    this.apiProfile = `${apiBase}/auction/profiles`;
  }

  /**
   * A reusable method to handle API requests.
   * @param {string} endpoint - The API endpoint to interact with.
   * @param {string} method - HTTP method (default: GET).
   * @param {Object|null} body - Data to send with the request (default: null).
   * @returns {Promise<Object>} - The response data.
   */
  fetchData = async (endpoint, method = "GET", body = null) => {
    try {
      showLoader();
      const res = await fetch(endpoint, {
        method,
        headers: headers(),
        body: body ? JSON.stringify(body) : undefined,
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        alert(
          `Failed to ${method === "GET" ? "fetch" : "update"}, please try again`
        );
      }
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      hideLoader();
    }
  };

  profile = {
    /**
     * Fetches the current user's profile data along with following and followers information.
     * @returns {Promise<Object>} - The user's profile data.
     */
    read: async (username) => {
      const endpoint = `${this.apiProfile}/${username}`;
      const data = await this.fetchData(endpoint);
      return data;
    },

    /**
     * Updates a user's profile data.
     * @param {Object} formData - The data to update the user's profile with (avatar, name, bio).
     * @returns {Promise<Object>} - The updated profile data.
     */
    update: async (username, formData) => {
      const endpoint = `${this.apiProfile}/${username}`;
      const data = await this.fetchData(endpoint, "PUT", formData);
      return data;
    },

    /**
     * Fetches the user's credit balance.
     * @returns {Promise<number>} - The user's credit balance.
     */
    getCredits: async (username) => {
      const endpoint = `${this.apiProfile}/${username}/credits`;
      const data = await this.fetchData(endpoint, "GET");
      return data.credits || 0;
    },

    /**
     * Searches for profiles by query.
     * @param {string} query - The search query.
     * @returns {Promise<Array>} - The search results.
     */
    search: async (query) => {
      const endpoint = `${this.apiProfile}/search?q=${query}`;
      const data = await this.fetchData(endpoint);
      return data;
    },

    /**
     * Fetches the listings of a specific user.
     * @param {string} username - The username of the profile.
     * @returns {Promise<Array>} - The user's listings.
     */
    readListings: async (username) => {
      const endpoint = `${this.apiProfile}/${username}/listings`;
      const data = await this.fetchData(endpoint, "GET");
      return data;
    },

    /**
     * Fetches the bids of a specific user.
     * @param {string} username - The username of the profile.
     * @returns {Promise<Array>} - The user's bids.
     */
    readBids: async (username) => {
      const endpoint = `${this.apiProfile}/${username}/bids`;
      const data = await this.fetchData(endpoint, "GET");
      return data;
    },

    /**
     * Fetches the winning bids of a specific user.
     * @param {string} username - The username of the profile.
     * @returns {Promise<Array>} - The user's winning bids.
     */
    readWins: async (username) => {
      const endpoint = `${this.apiProfile}/${username}/wins`;
      const data = await this.fetchData(endpoint, "GET");
      return data;
    },
  };
}
