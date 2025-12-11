export function renderGallery(images) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  images.forEach(img => {
    gallery.innerHTML += `
      <div class="card">
        <img src="${img.urls.small}" alt="${img.alt_description}">
        <h3>${img.alt_description || "Unknown destination"}</h3>
      </div>
    `;
  });
}
