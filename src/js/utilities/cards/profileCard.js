import ProfileAPI from "../../api/profile";
import { load, save } from "../../api/storage";
load
import { authGuard } from "../authGuard";

authGuard();

const api = new ProfileAPI();
const user = load("user");
const loggedInUser = user.name; 

export function createProfileCard(profile) {
  const container = document.getElementById("profileContainer");


  const avatarContainer = document.createElement("div");
  avatarContainer.className = "avatar-container";

  const infoContainer = document.createElement("div");
  infoContainer.className = "info-container";
  infoContainer.id = "infoContainer";

  const profileImage = document.createElement("img");
  profileImage.src = profile.avatar.url;
  profileImage.alt = profile.avatar.alt;
  avatarContainer.appendChild(profileImage);


  const profileName = document.createElement("span");
  profileName.textContent = `@${profile.name}`;
  infoContainer.appendChild(profileName);


  if (location.pathname === "/profile/") {
    const editButton = document.createElement("button");
    editButton.className = "outline";
    editButton.id = "editProfile";
    editButton.textContent = "Edit profile";
    editButton.addEventListener("click", () => {
      modal(); 
    });
    infoContainer.appendChild(editButton);
  }

  container.append(avatarContainer, infoContainer);
}
