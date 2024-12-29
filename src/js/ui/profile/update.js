import { load, save } from "../../api/storage/index.js";
import ProfileAPI from "../../api/profile/index.js";


const api = new ProfileAPI();
const user = load("user");
const username = user?.name;

console.log("Loaded user:", user);
console.log("Username:", username);



export async function onUpdateProfile(event) {
  event.preventDefault()

  const formData = new FormData(event.target);

  const bio = formData.get("bio");
  const avatarUrl = formData.get("avatar-url");
  const avatarAlt = formData.get("avatar-alt");
  const bannerUrl = formData.get("banner-url");  // Get the banner URL from the form
  const bannerAlt = formData.get("banner-alt");  // Get the banner alt text
  const credits = formData.get("credits");

  // Initialize updateData with bio
  const updateData = { bio };

  // Add avatar information if available
  if (avatarUrl) {
    updateData.avatar = {
      url: avatarUrl,
      alt: avatarAlt || "",  // If avatar alt text isn't provided, default to an empty string
    };
  }

  // Add banner information if available
  if (bannerUrl) {
    updateData.banner = {
      url: bannerUrl,
      alt: bannerAlt || "",  // If banner alt text isn't provided, default to an empty string
    };
  }

  // Add credits if available
  if (credits) {
    updateData.credits = credits;
  }

  try {
    // Make the update API call
    await api.profile.update(username, updateData);
    alert("Profile has been updated");
    window.location.reload();  // Optionally reload the page to reflect changes
  } catch (error) {
    console.log("Error updating profile:", error);
  }
}

