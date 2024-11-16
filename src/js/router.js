export const router = async () => {
    const app = document.getElementById("app");
    const pathname = window.location.pathname;
  
    // Clear the current content
    app.innerHTML = "";
  
    // Log the pathname for debugging
    console.log(`Navigating to: ${pathname}`);
  
    try {
      switch (pathname) {
        case "/":
          const { Home } = await import("./views/home.js");
          app.appendChild(Home());
          break;
        case "/login/":
          const { Login } = await import("./views/login.js");
          app.appendChild(Login());
          break;
        case "/register/":
          const { Register } = await import("./views/register.js");
          app.appendChild(Register());
          break;
        case "/dashboard/":
          const { Dashboard } = await import("./views/dashboard.js");
          app.appendChild(Dashboard());
          break;
        case "/profile/":
          const { Profile } = await import("./views/profile.js");
          app.appendChild(Profile());
          break;
        case "/create-listing/":
          const { CreateListing } = await import("./views/createListing.js");
          app.appendChild(CreateListing());
          break;
        case "/search/":
          const { Search } = await import("./views/search.js");
          app.appendChild(Search());
          break;
        default:
          const { NotFound } = await import("./views/notFound.js");
          app.appendChild(NotFound());
      }
    } catch (error) {
      console.error("Error loading route:", error);
      const { NotFound } = await import("./views/notFound.js");
      app.appendChild(NotFound());
    }
  };
  
 export const navigate = (path) => {
    window.history.pushState({}, "", path);
    router();
  };
  
  window.addEventListener("popstate", router);
  