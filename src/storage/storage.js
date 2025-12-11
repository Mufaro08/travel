export function saveSearch(query) {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.unshift(query);
  localStorage.setItem("history", JSON.stringify(history.slice(0, 10)));
}

export function getHistory() {
  return JSON.parse(localStorage.getItem("history")) || [];
}
