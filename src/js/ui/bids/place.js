import BidAPI from "../api/bid"; 
import { addBid } from "./add";
import { showBids } from "./show";



const bidAPI = new BidAPI();


export async function placeBid(event, listingId) {
  event.preventDefault();
  const bidAmount = parseFloat(event.target.bidAmount.value);

  if (isNaN(bidAmount) || bidAmount <= 0) {
    alert("Please enter a valid bid amount.");
    return;
  }

  try {
    await bidAPI.placeBid(listingId, bidAmount);
    alert("Bid placed successfully!");
    showBids(listingId);  
  } catch (error) {
    console.error("Error placing bid:", error);
    alert("Failed to place the bid. Please try again.");
  }
}


export async function loadBids(listingId) {
  try {
    const bids = await bidAPI.fetchBids(listingId);
    showBids(listingId, bids);
  } catch (error) {
    console.error("Error fetching bids:", error);
    alert("Failed to fetch bids. Please try again.");
  }
}
