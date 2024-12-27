import ProfileAPI from "../../api/profile";
import { load } from "../../api/storage";
import { loadUserProfile } from "../read/read";

const api = new ProfileAPI();

export async function displayCredits() {
  const creditsElement = document.getElementById("userCredits");

  if (creditsElement) creditsElement.innerText = "Loading credits...";

  try {
    const credits = await api.profile.getCredits();
    if (creditsElement) creditsElement.innerText = credits;


    await loadUserProfile();
  } catch (error) {
    console.error("Error displaying credits:", error);
    if (creditsElement) creditsElement.innerText = "Error loading credits.";
  }
}


const refreshCreditsButton = document.getElementById("refreshCreditsButton");
if (refreshCreditsButton) {
  refreshCreditsButton.addEventListener("click", displayCredits);
}
