import ProfileAPI from "../../api/profile";
import * as storage from "../../api/storage";
import { authGuard } from "../authGuard";

authGuard(); // Ensure the user is authenticated

const api = new ProfileAPI();
const user = storage.load("user"); // Get logged-in user from localStorage

// Function to create and display the profile card
export function createProfileCard(profile) {
  const container = document.getElementById("profile-Container");

  // Clear the container to avoid duplicate entries
  container.innerHTML = "";

  if (!profile) {
    console.error("Profile data is missing or invalid.");
    container.textContent = "Failed to load profile.";
    return;
  }

  // Display username
  const usernameElement = document.createElement("h2");
  usernameElement.textContent = `@${profile.name}`;
  container.appendChild(usernameElement);

  // Display bio
  const bioElement = document.createElement("p");
  bioElement.textContent = profile.bio || "No bio available.";
  container.appendChild(bioElement);

  // Avatar
  const avatarUrl = profile.avatar?.url || "default-avatar.jpg";
  const avatarAlt = profile.avatar?.alt || "User avatar";
  const avatarContainer = document.createElement("div");
  avatarContainer.className = "avatar-container";

  const profileImage = document.createElement("img");
  profileImage.src = avatarUrl;
  profileImage.alt = avatarAlt;
  avatarContainer.appendChild(profileImage);

  container.appendChild(avatarContainer);

  // Add Edit Button if on the Profile Page
  if (location.pathname === "/profile/") {
    const editButton = document.createElement("button");
    editButton.className = "outline";
    editButton.id = "editProfile";
    editButton.textContent = "Edit Profile";

    container.appendChild(editButton);

    const modalElement = document.getElementById("editModal");
    editButton.addEventListener("click", () => {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    });
  }
}


// Function to load the user's profile from the API and display it
