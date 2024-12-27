import NoroffAuctionAPI from "../../api/listing/index";  

export async function searchListingsUI(event) {
  event.preventDefault();

  const title = document.getElementById("searchTitle").value;
  const tags = document.getElementById("searchTags").value;

  const queryParams = {
    title,
    tags,
  };

  const loader = document.getElementById("loader");
  const searchResults = document.getElementById("searchResults");

 loader.classList.remove("d-none");
  searchResults.innerHTML = ""; 

  try {
  const listings = await NoroffAuctionAPI.searchListings(queryParams);

    if (listings.length === 0) {
      searchResults.innerHTML = "<p>No results found</p>";
    } else {
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
        searchResults.appendChild(listingCard);
      });
    }
  } catch (error) {
    console.error("Error during search:", error);
    searchResults.innerHTML = "<p>There was an error searching the listings. Please try again.</p>";
  } finally {
 loader.classList.add("d-none");
  }
}
