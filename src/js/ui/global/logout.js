
import onLogout from "../auth/logout";

export default function setLogoutListener() {
  const signOutBtn = document.getElementById("signOutBtn");
  if (signOutBtn) {
    signOutBtn.addEventListener("click", onLogout);
  } else {
    return null;
  }
}