import AuctionAPI from "../../api/listing";

export async function onCreateListing(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const listingData = {
    title: formData.get("title"),
    description: formData.get("description"),
    tags: formData.get("tags").split(",").map(tag => tag.trim()), // Convert tags to an array
    media: formData.get("media"),
    deadline: formData.get("deadline"),
  };

  try {
    const api = new AuctionAPI();
    await api.createListing(listingData);

    alert("Listing created successfully!");
    window.location.href = "/profile/";
  } catch (error) {
    console.error("Error creating listing:", error);
    alert("Failed to create listing. Please try again.");
  }
}
