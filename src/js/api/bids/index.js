import AuctionAPI from "../listing";

const auctionAPI = new AuctionAPI();

/**
 * Function to place a bid on a listing.
 * @param {number|string} listingId - The ID of the listing to bid on.
 * @param {number} amount - The bid amount.
 */
export const placeBid = async (listingId, amount) => {
  try {
    const result = await auctionAPI.Bids.addBid(listingId, amount);
    alert("Bid placed successfully!");
    return result;
  } catch (error) {
    console.error("Failed to place bid:", error);
  }
};

/**
 * Function to view bids on a listing.
 * @param {number|string} listingId - The ID of the listing.
 */
export const viewBids = async (listingId) => {
  try {
    const bids = await auctionAPI.Bids.getBids(listingId);
   console.log("Bids:", bids);
    return bids;
  } catch (error) {
    console.error("Failed to fetch bids:", error);
  }
};
