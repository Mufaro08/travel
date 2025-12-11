// IMPORT YOUR UNSPLASH API FUNCTION
import { searchDestinations } from "../api/unsplash.js";

async function loadDestinationDetails() {
  // Read query: details.html?place=paris
  const params = new URLSearchParams(window.location.search);
  const place = params.get("place") || "Unknown Place";

  // Populate title
  document.getElementById("destinationName").textContent = place;

  // 1. Fetch Unsplash images
  const results = await searchDestinations(place);

  if (!results || results.length === 0) {
    console.error("No images found");
    return;
  }

  // HERO IMAGE
  document.getElementById("destinationHero").src = results[0].urls.full;

  // DESCRIPTION (simple sample)
  document.getElementById("destinationDescription").textContent =
    `${place} is a beautiful destination known for its rich culture, popular attractions, and unique experiences.`;

  // POINTS OF INTEREST (static example – replace with real API if needed)
  const poiList = [
    "Famous Landmark 1",
    "Historical Monument",
    "Popular Market",
    "Natural Scenic Point",
  ];

  const poiContainer = document.getElementById("poiList");
  poiContainer.innerHTML = "";
  poiList.forEach(poi => {
    const li = document.createElement("li");
    li.textContent = poi;
    poiContainer.appendChild(li);
  });

  // GALLERY
  const gallery = document.getElementById("galleryGrid");
  gallery.innerHTML = "";

  results.slice(1, 10).forEach(img => {
    gallery.innerHTML += `
      <img src="${img.urls.small}" alt="${place} image">
    `;
  });
}

// RUN PAGE LOAD
loadDestinationDetails();
