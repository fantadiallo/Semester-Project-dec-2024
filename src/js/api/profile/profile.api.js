import { fetchData } from "../fetch";

/**
 * Updates the user profile for the given username.
 * @param {string} username - The username of the user whose profile is being updated.
 * @param {Object} profileData - An object containing the updated profile data.
 * @returns {Promise<Object>} The updated user profile data.
 * @throws {Error} Throws an error if the profile update fails.
 */
export async function updateUserProfile(username, profileData) {
  const endpoint = `https://v2.api.noroff.dev/auction/profiles/${username}`; 

  try {
    const updatedProfile = await fetchData(endpoint, "PUT", profileData);
    return updatedProfile;
  } catch (error) {
    console.error("Failed to update user profile:", error);
    throw new Error("Could not update profile. Please try again.");
  }
}
