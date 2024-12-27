export async function addBid(listingId) {
    const form = document.getElementById("bidForm");
  
    form.onsubmit = async (event) => {
      event.preventDefault();
      const bidAmount = form.bidAmount.value;
  
      const bidData = {
        listingId,
        bidAmount,
        userId: user.id,
      };
  
      try {
        const bidResponse = await fetchData(`${API_AUCTION_LISTINGS}/${listingId}/bids`, "POST", bidData);
        console.log("Bid placed successfully:", bidResponse);
        alert("Bid placed successfully!");
      } catch (error) {
        console.error("Error placing bid:", error);
        alert("Failed to place bid. Please try again.");
      }
    };
  }
  