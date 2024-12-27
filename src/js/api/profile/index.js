// profile.api.js

import { API_AUCTION_PROFILE } from "../constants.js";
import { headers } from "../headers.js";
import { hideLoader, showLoader } from "../storage/loader.js";

export default class ProfileAPI {
  constructor(apiBase = API_AUCTION_PROFILE) {
    this.apiBase = apiBase; // Set to the base API URL for profiles
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
      showLoader(); // Show loader before making the request
      const res = await fetch(endpoint, {
        method,
        headers: headers(true),
        body: body ? JSON.stringify(body) : undefined,
      });
      if (res.ok) {
        const data = await res.json(); // Parse JSON response
        return data;
      } else {
        alert(`Failed to ${method === "GET" ? "fetch" : "update"}, please try again`);
      }
    } catch (error) {
      console.error(error); // Log any errors to console
      throw error;
    } finally {
      hideLoader(); // Hide loader after the request completes
    }
  };

  profile = {
    /**
     * Fetches the current user's profile data along with following and followers information.
     * @param {string} username - The username of the user.
     * @returns {Promise<Object>} - The user's profile data.
     */
    readProfile: async (username) => {
      const endpoint = `${this.apiBase}/${username}`;
      const data = await ProfileAPI.prototype.fetchData.call(this, endpoint);
      return data;
    },
    
    /**
     * Updates a user's profile data.
     * @param {string} username - The username of the user.
     * @param {Object} formData - The data to update the user's profile with (avatar, name, bio).
     * @returns {Promise<Object>} - The updated profile data.
     */
    updateProfile: async (username, formData) => {
      const endpoint = `${this.apiBase}/${username}`;
      const data = await ProfileAPI.prototype.fetchData.call(this, endpoint, "PUT", formData);
      return data;
    },

    /**
     * Fetches the user's credit balance.
     * @param {string} username - The username of the user.
     * @returns {Promise<number>} - The user's credit balance.
     */
    getCredits: async (username) => {
      const endpoint = `${this.apiBase}/${username}/credits`;
      const data = await ProfileAPI.prototype.fetchData.call(this, endpoint, "GET");
      return data.credits || 0; // Return credit balance or 0 if none found
    },

    /**
     * Searches for profiles matching a query.
     * @param {string} query - The search query.
     * @returns {Promise<Array>} - List of matching profiles.
     */
    search: async (query) => {
      const endpoint = `${this.apiBase}/search?q=${query}`;
      const data = await ProfileAPI.prototype.fetchData.call(this, endpoint);
      return data;
    },

    /**
     * Fetches the listings of the specified user.
     * @param {string} username - The username of the user.
     * @returns {Promise<Array>} - The user's listings.
     */
    readListings: async (username) => {
      const endpoint = `${this.apiBase}/${username}/listings`;
      const data = await ProfileAPI.prototype.fetchData.call(this, endpoint, "GET");
      return data;
    },

    /**
     * Fetches the bids placed by the specified user.
     * @param {string} username - The username of the user.
     * @returns {Promise<Array>} - The user's bids.
     */
    readBids: async (username) => {
      const endpoint = `${this.apiBase}/${username}/bids`;
      const data = await ProfileAPI.prototype.fetchData.call(this, endpoint, "GET");
      return data;
    },

    /**
     * Fetches the wins of the specified user.
     * @param {string} username - The username of the user.
     * @returns {Promise<Array>} - The user's wins.
     */
    readWins: async (username) => {
      const endpoint = `${this.apiBase}/${username}/wins`;
      const data = await ProfileAPI.prototype.fetchData.call(this, endpoint, "GET");
      return data;
    }
  };
}

