import { updateListing } from "../../api/listing";

export async function onUpdateListing(event, id) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const listingData = {
    title: formData.get("title"),
    description: formData.get("description"),
    tags: formData.get("tags"),
    media: formData.get("media"),
    deadline: formData.get("deadline"),
  };

  try {
    await updateListing(id, listingData);
    alert("Listing updated successfully!");
    window.location.href = `/listing/${id}`;  
  } catch (error) {
    console.error("Error updating listing:", error);
  }
}
