import { onCreateListing } from "../../ui/listings/create.js";
import { onUpdateProfile } from "../../ui/profile/update.js";
import { readProfile } from "../../ui/read/read.js";
import { authGuard } from "../../utilities/authGuard.js";
import { createListingCard } from "../../utilities/cards/CreateListingCard.js";
import { populateUpdateForm } from "../../utilities/cards/populate.js";
import { createProfileCard } from "../../utilities/cards/profileCard.js";

const form = document.forms.updateProfile; // Target the form by name
if (form) {
  form.addEventListener("submit", onUpdateProfile);
}

const ListingForm = document.forms.createListing;

if (ListingForm) {
  ListingForm.addEventListener("submit", onCreateListing);
} else {
  console.error("Listing form not found.");
}

onUpdateProfile();
authGuard();
readProfile();
populateUpdateForm();
createProfileCard();
onCreateListing();
createListingCard();
