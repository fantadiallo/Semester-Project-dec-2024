/**
 * Retrieves the logged-in user's data from local storage.
 * @returns {Object} - The user object containing user info and access token.
 */
export function getUserData() {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const accessToken = localStorage.getItem("accessToken");
  return { user, accessToken };
}

/**
 * Retrieves the current user's info from the JWT stored in local storage.
 * @returns {Object|null} - The decoded user info or null if not logged in.
 */
export function currentUser() {
  const token = localStorage.getItem("token");
  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload;
  }
  return null;
}

/**
 * Default user name or fallback.
 */
export const USER_NAME = getUserData().user.name || "defaultName";
