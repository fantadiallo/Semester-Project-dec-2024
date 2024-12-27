import { readProfile } from "../../ui/profile/read.js";
import { onUpdateProfile,} from "../../ui/profile/update.js";
import { authGuard } from "../../utilities/authGuard.js";
import updatePlaceholder from "../../utilities/cards/custom-placeholder.js";
import { createProfileCard } from "../../utilities/cards/profileCard.js";

const form = document.forms.updateProfile;  
form.addEventListener("submit", onUpdateProfile); 

authGuard()
readProfile();
onUpdateProfile()
createProfileCard()
updatePlaceholder();