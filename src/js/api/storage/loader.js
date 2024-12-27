// Show loader
export function showLoader(loaderId) {
    const loader = document.getElementById(loaderId);
    if (loader) {
      loader.classList.remove("d-none");
    }
  }
  
  // Hide loader
  export function hideLoader(loaderId) {
    const loader = document.getElementById(loaderId);
    if (loader) {
      loader.classList.add("d-none"); 
    }
  }
  