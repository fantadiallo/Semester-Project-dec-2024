import AuctionAPI from "../../api/listing";
import * as storage from "../../api/storage";
import { authGuard } from "../authGuard";

export function createListingCard(listing) {
  const container = document.getElementById("Mylistings");

  if (!listing) {
    console.error("Listing data is missing");
    container.textContent = "Failed to load listing.";
    return;
  }

  // Create card container
  const card = document.createElement("div");
  card.className = "card shadow-sm p-3 mb-4";

  // Title
  const titleElement = document.createElement("h3");
  titleElement.textContent = listing.title;
  titleElement.className = "card-title";
  card.appendChild(titleElement);

  // Description
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = listing.description || "No description available.";
  descriptionElement.className = "card-text";
  card.appendChild(descriptionElement);

  // Image
  const imageContainer = document.createElement("div");
  imageContainer.className = "text-center";

  const imageUrl = listing.media || "default-image.jpg"; // Use `media` from API
  const listingImage = document.createElement("img");
  listingImage.src = imageUrl;
  listingImage.className = "img-fluid rounded";
  listingImage.alt = listing.title || "Listing image";

  imageContainer.appendChild(listingImage);
  card.appendChild(imageContainer);

  // Append the card to the container
  container.appendChild(card);
}
