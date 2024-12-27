import NoroffAuctionAPI from "../../api/listing/index";

export async function loadListings() {
  try {
    const listings = await NoroffAuctionAPI.readAllListings();
    const listingsContainer = document.getElementById("listings");

    listings.forEach(listing => {
      const listingCard = document.createElement("div");
      listingCard.classList.add("col-md-4", "card", "mb-4");
      listingCard.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${listing.title}</h5>
          <p class="card-text">${listing.description}</p>
          <button class="btn btn-primary" onclick="viewListing(${listing.id})">View</button>
          <button class="btn btn-danger" onclick="deleteListing(${listing.id})">Delete</button>
        </div>
      `;
      listingsContainer.appendChild(listingCard);
    });
  } catch (error) {
    console.error("Error loading listings:", error);
  }
}

export function viewListing(id) {
  window.location.href = `/listing/${id}`;
}

export function deleteListing(id) {
  NoroffAuctionAPI.deleteListing(id)
    .then(() => {
      alert("Listing deleted");
      loadListings();
    })
    .catch(error => {
      console.error("Error deleting listing:", error);
      alert("Failed to delete the listing. Please try again.");
    });
}
