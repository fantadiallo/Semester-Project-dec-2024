import { userId } from "../../api/constants";
import ProfileAPI from "../../api/profile";
import * as storage from "../../api/storage";
import { createProfileCard } from "../../utilities/cards/profileCard";

const api = new ProfileAPI();
const user = storage.load("user");

// Determine the username dynamically
const username = location.pathname === "/profile/" && user ? user.name : userId;

// Log for debugging
console.log("Loaded user:", user);
console.log("Dynamic Username:", username);

export async function readProfile() {
  try {
    // Use the dynamically determined username
    const response = await api.profile.read(username);

    if (response?.data) {
      const profile = response.data;
      createProfileCard(profile); // Create the profile card
    } else {
      console.error("Profile data is missing:", response);
      document.getElementById("profile-container").textContent = "Failed to load profile.";
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    document.getElementById("profile-container").textContent =
      "An error occurred while loading the profile. Please try again later.";
  }
}
