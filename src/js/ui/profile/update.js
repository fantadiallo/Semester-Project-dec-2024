import { load, save } from "../../api/storage/index.js";
import ProfileAPI from "../../api/profile/index.js";


const api = new ProfileAPI();
const user = load("user");
const username = user.name;

console.log("Loaded user:", user);
console.log("Username:", username);


export async function populateUpdateForm() {
  try {
  
    const profile = await api.profile.read(username);
    console.log("Fetched profile for form population:", profile);


    const nameField = document.getElementById("name");
    if (nameField) nameField.value = profile.name || "";

    const bioField = document.getElementById("bio");
    if (bioField) bioField.value = profile.bio || "";

    const avatarUrlField = document.getElementById("avatar-url");
    if (avatarUrlField) avatarUrlField.value = profile.avatar?.url || "";

    const avatarAltField = document.getElementById("avatar-alt");
    if (avatarAltField) avatarAltField.value = profile.avatar?.alt || "";

    // Populate banner fields if available
    const bannerUrlField = document.getElementById("banner-url");
    if (bannerUrlField) bannerUrlField.value = profile.banner?.url || "";

    const bannerAltField = document.getElementById("banner-alt");
    if (bannerAltField) bannerAltField.value = profile.banner?.alt || "";

    // Populate credits with a default value if not set
    const creditsField = document.getElementById("credits");
    if (creditsField) creditsField.value = profile.credits || 1000;
  } catch (error) {
    console.error("Error fetching profile for update form:", error);
  }
}


export async function onUpdateProfile(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

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

