const UNSPLASH_KEY = "YOUR_UNSPLASH_KEY";

export async function searchDestinations(query) {
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.results;
}
