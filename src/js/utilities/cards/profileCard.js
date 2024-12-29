import ProfileAPI from "../../api/profile";
import * as storage from "../../api/storage";
import { authGuard } from "../authGuard";

authGuard(); // Ensure the user is authenticated

const api = new ProfileAPI();
const user = storage.load("user"); // Get logged-in user from localStorage

// Function to create and display the profile card
export function createProfileCard(profile) {
  const container = document.getElementById("profile-container");

  // Clear the container first to avoid duplicate entries
  container.innerHTML = "";

  if (!profile) {
    console.error("Profile data is missing or invalid.");
    container.textContent = "Failed to load profile.";
    return;
  }

  // Display username (always show the logged-in user's username)
  const usernameElement = document.createElement("h2");
  usernameElement.textContent = `@${profile.name}`; // Always show the username
  container.appendChild(usernameElement);

  // Avatar URL (fallback to default if not available)
  const avatarUrl = profile.avatar?.url || "default-avatar.jpg";
  const avatarAlt = profile.avatar?.alt || "User avatar";

  // Avatar Container
  const avatarContainer = document.createElement("div");
  avatarContainer.className = "avatar-container";

  const profileImage = document.createElement("img");
  profileImage.src = avatarUrl;
  profileImage.alt = avatarAlt;
  avatarContainer.appendChild(profileImage);

  // Info Container
  const infoContainer = document.createElement("div");
  infoContainer.className = "info-container";
  infoContainer.id = "infoContainer";

  // Display the profile name (always the logged-in user's name)
  const profileNameElement = document.createElement("span");
  profileNameElement.textContent = `@${profile.name || "Anonymous"}`; // Fallback to "Anonymous" if name is missing
  infoContainer.appendChild(profileNameElement);

  // Add Edit Button if on the Profile Page
  if (location.pathname === "/profile/") {
    const editButton = document.createElement("button");
    editButton.className = "outline";
    editButton.id = "editProfile";
    editButton.textContent = "Edit profile";

    // Ensure modal() is properly defined to handle profile editing
    editButton.addEventListener("click", () => {
      modal(); // Ensure modal() is defined elsewhere
    });

    infoContainer.appendChild(editButton);
  }

  // Append everything to the container
  container.append(avatarContainer, infoContainer);
}

// Function to load the user's profile from the API and display it
async function loadProfile() {
  if (user) {
    try {
      const profile = await api.profile.read(user.username); // Use the correct username to fetch profile
      createProfileCard(profile); 
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  } else {
    console.log("No user found in storage.");
  }
}

loadProfile(); // Ensure the profile is loaded when the page is loaded
