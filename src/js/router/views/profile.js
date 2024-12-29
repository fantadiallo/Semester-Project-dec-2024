
import { onUpdateProfile} from "../../ui/profile/update.js";
import { readProfile } from "../../ui/read/read.js";
import { authGuard } from "../../utilities/authGuard.js";
import { populateUpdateForm } from "../../utilities/cards/populate.js";
import { createProfileCard } from "../../utilities/cards/profileCard.js";

const form = document.forms.updateProfile;  
form.addEventListener("submit", onUpdateProfile); 

authGuard()
readProfile();
onUpdateProfile()
populateUpdateForm()

