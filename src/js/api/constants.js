// constants.js

export const API_AUCTION = "https://v2.api.noroff.dev/AUCTION"; // Base URL for auction API
export const API_KEY = "eee2984b-02cd-4800-82cb-79cab62424af"; // API key for authorization
export const API_BASE = "https://v2.api.noroff.dev"; // Base URL for all API requests
export const params = new URLSearchParams(window.location.search);
export const postId = params.get("id");
export const userId = params.get("id");

export const API_AUTH = `${API_BASE}/auth`; // Auth base endpoint
export const API_AUTH_LOGIN = `${API_AUTH}/login`; // Login endpoint
export const API_AUTH_REGISTER = `${API_AUTH}/register`; // Register endpoint
export const API_AUTH_KEY = `${API_AUTH}/create-api-key`; // API Key creation endpoint

export const API_AUCTION_PROFILE = `${API_AUCTION}/profiles`; // Auction profiles endpoint
const NAME = 'userName'; // Replace 'userName' with the actual user's name in your logic
export const USER_POSTS_API = `https://v2.api.noroff.dev/AUCTION/profiles/${NAME}/posts`; // User posts API
