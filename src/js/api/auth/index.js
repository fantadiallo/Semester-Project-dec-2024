import { API_BASE } from "../constants.js";
import { save, load } from "../storage/index.js";
import { headers } from "../headers.js";

/**
 * Class representing the Noroff API.
 */
export default class NoroffAPI {
  apiBase = "";
  apiLogin = "";
  apiRegister = "";

  /**
   * Creates an instance of NoroffAPI.
   * @param {string} [apiBase=API_BASE] - The base URL for the API.
   */
  constructor(apiBase = API_BASE) {
    this.apiBase = apiBase;
    this.apiLogin = `${apiBase}/auth/login`;
    this.apiRegister = `${apiBase}/auth/register`;
  }

  /**
   * Authentication methods.
   * @typedef {Object} AuthMethods
   * @property {Function} register - Register a new user.
   * @property {Function} login - Log in an existing user.
   */
  auth = {
/**
 * Registers a new user.
 * @param {Object} userInfo - The user information.
 * @param {string} userInfo.name - The name of the user.
 * @param {string} userInfo.email - The email of the user.
 * @param {string} userInfo.password - The password of the user.
 * @returns {Promise<Object>} The response data from the registration.
 * @throws {Error} If registration fails.
 */
register: async ({ name, email, password, bio, avatar, banner, venueManager }) => {
  const body = JSON.stringify({
    name,
    email,
    password,
    bio: bio || "", 
    avatar: avatar || { url: "", alt: "" }, 
    banner: banner || { url: "", alt: "" }, 
    venueManager: venueManager || false, 
    credits: 1000, 
  });

  try {
    const response = await fetch(this.apiRegister, {
      method: "POST",
      headers: headers(true),
      body,
    });

    if (!response.ok) {
      throw new Error("Could not register the account");
    }

    const data = await response.json();
    console.log("Registration successful:", data);
    return data;
  } catch (error) {
    console.error("Could not register:", error);
    throw error;
  }
},



    /**
     * Logs in an existing user.
     * @param {Object} credentials - The user's login credentials.
     * @param {string} credentials.email - The user's email.
     * @param {string} credentials.password - The user's password.
     * @returns {Promise<Object>} The user information from the login.
     * @throws {Error} If login fails.
     */
    login: async ({ email, password }) => {
      const body = JSON.stringify({ email, password });
    
      try {
        const response = await fetch(this.apiLogin, {
          method: "POST",
          headers: headers(true),
          body,
        });
    
        if (!response.ok) {
          const errorMessage = await response.text();
          console.error("Server response error:", errorMessage);
          throw new Error(`Could not login the account: ${errorMessage}`);
        }
    
        const userData = await response.json();
        console.log("Login response data:", userData);
    
        const userInfo = userData.data || userData;
        if (!userInfo || !userInfo.accessToken) {
          throw new Error("Invalid login response structure. AccessToken not found.");
        }
    
        save("accessToken", userInfo.accessToken);
        save("user", userInfo);
    
        return userInfo;
      } catch (error) {
        console.error("Login failed: ", error);
        throw error;
      }
    },
    
  };
}
