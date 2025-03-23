export default async function router(pathname = window.location.pathname) {
  console.log("Routing to:", pathname); // Log the pathname to debug
  switch (pathname) {
    case "/":
      await import("../router/views/home.js"); // Corrected path
      break;
    case "/auth/":
      await import("../router/views/auth.js"); // Corrected path
      break;
    case "/auth/login/":
      await import("../router/views/login.js"); // Corrected path
      break;
    case "/auth/register/":
      await import("../router/views/register.js"); // Corrected path
      break;
    case "/createListing/":
      await import("../router/views/createListing.js"); // Corrected path
      break;
    case "/profile/":
      await import("../router/views/profile.js"); // Corrected path
      break;
    case "/about/":
      await import("../router/views/about.js"); // Corrected path
      break;
    default:
      await import("../router/views/notFound.js"); // Corrected path
      break;
  }
}