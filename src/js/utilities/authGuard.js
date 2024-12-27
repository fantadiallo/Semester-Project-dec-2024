export function authGuard() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("You must be logged in to view this page");
    window.location.href = "/login/index/"; // Redirect to login if no token is found
  } else {
  console.log("User is authenticated");
  }
}
