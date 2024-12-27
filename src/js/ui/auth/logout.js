import { remove } from "../../api/storage";
export function onLogout() {
 const confirmed = confirm("are you sure you want to sign out?")
   if(confirmed){

   try {
     localStorage.removeItem("token"); 
    localStorage.removeItem("user");
    
    alert("you have logged out!")
    window.location.href = "/auth/login";
} catch (error){
   console.error("logout failed", error);
   alert("could not sign out, please try again.");
  }
} else {
  alert("sign out canceled")
}
}