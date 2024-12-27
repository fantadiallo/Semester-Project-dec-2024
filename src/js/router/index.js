// router.js
export default async function router(pathname = window.location.pathname) {
  console.log("Routing to:", pathname); // Log the pathname to debug
  switch (pathname) {
    case "/":
      await import("./views/home.js");
      break;
    case "/auth/":
      await import("./views/auth.js");
      break;
    case "/auth/login/":
      await import("./views/login.js");
      break;
    case "/auth/register/":
      await import("./views/register.js");
      break;
    case "/createListing/":
      await import("./views/createListing.js");
      break;
    case "/homepage/":
      await import("./views/home.js");
      break;
      case "/profile/":
        await import("./views/profile.js");
        break;
        default:
          await import("./views/notFound.js");
      }
  
}
