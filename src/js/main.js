import { searchDestinations } from "./api/unsplash.js";
import { renderGallery } from "./components/gallery.js";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {
  const query = document.getElementById("searchInput").value;

  const images = await searchDestinations(query);

  renderGallery(images);
});

