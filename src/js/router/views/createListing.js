import { loadListings } from "../../ui/listings/loadlistings";
import { searchListingsUI } from "../../ui/listings/search";
import { onUpdateListing } from "../../ui/listings/update";
import { createListing } from "../../ui/profile/userlisting";

document.addEventListener('DOMContentLoaded', () => {
  const createForm = document.getElementById('createListingForm');
  if (createForm) {
    createForm.addEventListener('submit', onCreateListing);
  }

  const updateForm = document.getElementById('updateListingForm');
  if (updateForm) {
  
    const listingId = window.location.pathname.split('/').pop();
    updateForm.addEventListener('submit', (event) => onUpdateListing(event, listingId));
  }


  const searchButton = document.getElementById('searchButton');
  if (searchButton) {
    searchButton.addEventListener('click', searchListingsUI);
  }


  const listingsContainer = document.getElementById('listings-container');
  if (listingsContainer) {
    loadListings();
  }
});
