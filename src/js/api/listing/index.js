import { API_BASE } from "../constants";  // Importing the base API URL
import { headers } from "../headers";     // Headers for requests

export default class AuctionAPI {
  apiBase = "";
  apiListing = "";

  constructor(apiBase = API_BASE) {
    this.apiBase = apiBase;
    this.apiListing = `${apiBase}/auction/listings`;
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
      const response = await fetch(endpoint, {
        method,
        headers: headers(),
        body: body ? JSON.stringify(body) : undefined,
      });

      if (response.ok) {
        if (response.status === 204) {
          return; // No content
        }
        const data = await response.json();
        return data;
      } else {
        alert(
          `Failed to ${
            method === "GET" ? "fetch" : "create/update"
          }, please try again`
        );
      }
    } catch (error) {
      console.error("Error in API request:", error);
      throw error;
    }
  };

  Listing = {
    /**
     * Fetches all listings.
     * @returns {Promise<Array>} - Array of listings.
     */
    fetchListings: async () => {
      const data = await this.fetchData(this.apiListing, "GET");
      return data;
    },

    /**
     * Searches listings based on a query string.
     * @param {string} query - The search term.
     * @returns {Promise<Array>} - Array of search results.
     */
    searchListings: async (query) => {
      const endpoint = `${this.apiListing}/search?q=${query}`;
      const data = await this.fetchData(endpoint, "GET");
      return data;
    },

    /**
     * Creates a new listing.
     * @param {Object} listingData - Data for the new listing.
     * @returns {Promise<Object>} - The created listing data.
     */
    createListing: async (listingData) => {
      const data = await this.fetchData(this.apiListing, "POST", listingData);
      return data;
    },

    /**
     * Updates an existing listing by ID.
     * @param {number|string} id - The listing ID.
     * @param {Object} listingData - Updated data for the listing.
     * @returns {Promise<Object>} - The updated listing data.
     */
    updateListing: async (id, listingData) => {
      const endpoint = `${this.apiListing}/${id}`;
      const data = await this.fetchData(endpoint, "PUT", listingData);
      return data;
    },

    /**
     * Deletes a listing by ID.
     * @param {number|string} id - The listing ID.
     * @returns {Promise<void>} - Resolves when the listing is deleted.
     */
    deleteListing: async (id) => {
      const endpoint = `${this.apiListing}/${id}`;
      await this.fetchData(endpoint, "DELETE");
    },
  };
}
