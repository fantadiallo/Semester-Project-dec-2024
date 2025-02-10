import { API_BASE } from "../constants";  
import { headers } from "../headers";     

export default class AuctionAPI {
  constructor(apiBase = API_BASE) {
    this.apiBase = apiBase;
    this.apiListing = `${apiBase}/auction/listings`;
  }

  /**
   * A reusable method to handle API requests.
   */
  async fetchData(endpoint, method = "GET", body = null) {
    try {
      const response = await fetch(endpoint, {
        method,
        headers: headers(),
        body: body ? JSON.stringify(body) : undefined,
      });

      if (response.ok) {
        return response.status === 204 ? null : await response.json();
      } else {
        throw new Error(`Failed to ${method}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error in API request:", error);
      throw error;
    }
  }

  /** ✅ Fetch all listings */
  async fetchListings() {
    return await this.fetchData(this.apiListing, "GET");
  }

  /** ✅ Search listings */
  async searchListings(query) {
    return await this.fetchData(`${this.apiListing}/search?q=${query}`, "GET");
  }

  /** ✅ Create a listing */
  async createListing(listingData) {
    return await this.fetchData(this.apiListing, "POST", listingData);
  }

  /** ✅ Update listing */
  async updateListing(id, listingData) {
    return await this.fetchData(`${this.apiListing}/${id}`, "PUT", listingData);
  }

  /** ✅ Delete a listing */
  async deleteListing(id) {
    await this.fetchData(`${this.apiListing}/${id}`, "DELETE");
  }
}
