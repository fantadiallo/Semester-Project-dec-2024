export function placeBidUI(listingId) {
    const bidForm = document.getElementById("bidForm");
    bidForm.addEventListener("submit", (event) => placeBid(event, listingId)); 
  
    const bidSection = document.getElementById("placeBidSection");
    bidSection.classList.remove("d-none"); 
  }
  
  export function showBids(listingId, bids = []) {
    const bidsContainer = document.getElementById("bidsContainer");
    bidsContainer.innerHTML = "";
  
    if (bids.length === 0) {
      bidsContainer.innerHTML = "<p>No bids yet</p>";
    } else {
      bids.forEach((bid) => {
        const bidElement = document.createElement("div");
        bidElement.classList.add("bid-card");
        bidElement.innerHTML = `
          <p><strong>Bid Amount:</strong> $${bid.bidAmount}</p>
          <p><strong>Placed by:</strong> ${bid.user.name}</p>
        `;
        bidsContainer.appendChild(bidElement);
      });
    }
  }
  