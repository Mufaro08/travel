import { searchDestinations } from "../api/unsplash.js";
import { saveSearch, getHistory } from "../storage/storage.js";

const input = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsGrid = document.getElementById("resultsGrid");
const recentContainer = document.getElementById("recentSearches");

/* --------------------------
  LOAD RECENT SEARCHES
-------------------------- */
function loadRecentSearches() {
  const history = getHistory();

  recentContainer.innerHTML = "";

  history.forEach(item => {
    const tag = document.createElement("span");
    tag.textContent = item;
    tag.onclick = () => runSearch(item);
    recentContainer.appendChild(tag);
  });
}

/* --------------------------
  RUN SEARCH
-------------------------- */
async function runSearch(query) {
  if (!query) return;

  saveSearch(query);
  loadRecentSearches();

  resultsGrid.innerHTML = "<p>Loading...</p>";

  const results = await searchDestinations(query);

  resultsGrid.innerHTML = "";

  results.forEach(item => {
    const card = document.createElement("div");
    card.className = "result-card";

    card.innerHTML = `
      <img src="${item.urls.small}" alt="${item.alt_description}">
      <h3>${query}</h3>
    `;

    // Click → go to details page
    card.onclick = () => {
      window.location.href = `details.html?place=${encodeURIComponent(query)}`;
    };

    resultsGrid.appendChild(card);
  });
}

/* --------------------------
  EVENT LISTENERS
-------------------------- */
searchBtn.onclick = () => {
  const query = input.value.trim();
  runSearch(query);
};

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    runSearch(input.value.trim());
  }
});

/* --------------------------
  INIT PAGE
-------------------------- */
loadRecentSearches();
