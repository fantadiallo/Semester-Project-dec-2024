import NoroffAuctionAPI from "../../api/listing/index";

export async function onCreateListing(event) {
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
    await NoroffAuctionAPI.createListing(listingData);  
    alert("Listing created successfully!");
    window.location.href = "/";  
  } catch (error) {
    console.error("Error creating listing:", error);
  }
}
