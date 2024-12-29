

import ProfileAPI from "../../api/profile";
import * as storage from "../../api/storage";

const api = new ProfileAPI();

export async function populateUpdateForm() {
    const user = storage.load("user"); 
    const username = user.name;
  
    try {
      const profile = await api.profile.read(username);
  
      // Check if elements exist before updating
      const nameInput = document.getElementById("name");
      const bioInput = document.getElementById("bio");
      const avatarUrlInput = document.getElementById("avatar-url");
      const avatarAltInput = document.getElementById("avatar-alt");
      const bannerUrlInput = document.getElementById("banner-url");
      const bannerAltInput = document.getElementById("banner-alt");
  
      if (nameInput) nameInput.value = profile.name || "";
      if (bioInput) bioInput.value = profile.bio || "";
      if (avatarUrlInput) avatarUrlInput.value = profile.avatar?.url || "";
      if (avatarAltInput) avatarAltInput.value = profile.avatar?.alt || "";
      if (bannerUrlInput) bannerUrlInput.value = profile.banner?.url || "";
      if (bannerAltInput) bannerAltInput.value = profile.banner?.alt || "";
    } catch (error) {
      console.error("Error fetching profile data for form population:", error);
      alert("Unable to fetch profile data. Please try again later.");
    }
  }
  
