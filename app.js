const wishes = [
  { name: "Spiele Entwicklung mit Unity – Das Umfassende Handbuch", url: "https://www.thalia.de/shop/home/artikeldetails/A1081391378", price: 49.90, stars: 1, category: "books", kind: "Buch", icon: "✦" },
  { name: "Linux – Das Umfassende Handbuch", url: "https://www.thalia.de/shop/home/artikeldetails/A1076622981", price: 49.90, stars: 1, category: "books", kind: "Buch", icon: "⌘" },
  { name: "Handbuch für Softwareentwickler", url: "https://www.thalia.de/shop/home/artikeldetails/A1058287242", price: 49.90, stars: 2, category: "books", kind: "Buch", icon: "</>" },
  { name: "Blender – Das Umfassende Handbuch", url: "https://www.thalia.de/shop/home/artikeldetails/A1070283250", price: 49.90, stars: 2, category: "books", kind: "Buch", icon: "◉" },
  { name: "Einstieg in C# mit Visual Studio 2026", url: "https://www.thalia.de/shop/home/artikeldetails/A1076918119", price: 29.90, stars: 2, category: "books", kind: "Buch", icon: "{ }" },
  { name: "Einstieg in SQL", url: "https://www.thalia.de/shop/home/artikeldetails/A1073107112", price: 29.90, stars: 2, category: "books", kind: "Buch", icon: "▤" },
  { name: "C# mit .NET – Das umfassende Handbuch", url: "https://www.thalia.de/shop/home/artikeldetails/A1074565018", price: 49.90, stars: 1, category: "books", kind: "Buch", icon: "{ }" },
  { name: "Git-Projektverwaltung für Entwickler und DevOps-Teams", url: "https://www.thalia.de/shop/home/artikeldetails/A1075118083", price: 39.90, stars: 1, category: "books", kind: "Buch", icon: "⑂" },
  { name: "Business Process Automation – Geschäftsprozesse nachhaltig ...", url: "https://www.thalia.de/shop/home/artikeldetails/A1073106877", price: 39.90, stars: 1, category: "books", kind: "Buch", icon: "↗" },
  { name: "Python für KI- und Daten-Projekte", url: "https://www.thalia.de/shop/home/artikeldetails/A1076618292", price: 29.90, stars: 2, category: "books", kind: "Buch", icon: "⌁" },
  { name: "Docker – Das Praxisbuch für Entwickler und DevOps-Teams", url: "https://www.thalia.de/shop/home/artikeldetails/A1077499057", price: 44.90, stars: 1, category: "books", kind: "Buch", icon: "◫" },
  { name: "IT-Handbuch für Informatiker", url: "https://www.thalia.de/shop/home/artikeldetails/A1075450515", price: 39.90, stars: 3, category: "books", kind: "Buch", icon: "⌘" },
  { name: "Lenkrad", url: "mediamarkt.de", price: 99.99, stars: 3, category: "tech", kind: "Gaming", icon: "⌘" },
  { name: "Nintendo Switch 2 Pro Controller", url: "https://www.amazon.de/Nintendo-Switch-2-Pro-Controller/dp/B0F3JR79YY/ref=sr_1_1?__mk_de_DE=ÅMÅŽÕÑ&crid=377GKOET41A83&dib=eyJ2IjoiMSJ9.m5DZdNF5UJ8AKO5-awkrcyQbBWchf2w94PGbAuU7JFHOd-Bmf7qc_QN0ftxH9c4g7IXvUlXw4tpOOryW-sTjDKJq3TQsbXz9ZI1AYa8UmMzpGi4Bw8eHnShyv0jTCkQatFg1qXIDYHcTuUj0j8A16xrmpB_MSrirhDzznCEhgwsbE7LWcVhrdVOEDMUeMOO0Ti6zElpD3mJrrdnWCf5mr_uLu1Uhs1DHfTz9rAP93oY.Rb7xdkALPDOhqa3mphkOgl-0CnHVoR2ozPqsGY0SWdc&dib_tag=se&keywords=switch%2B2%2Bpro&qid=1794664788&sprefix=switch%2B2%2Bpr%2Caps%2C161&sr=8-1&th=1", price: 69.99, stars: 4, category: "tech", kind: "Gaming", icon: "⌖" },
  { name: "Logitech G 988-000576 Desktop-Mikrofon", url: "https://www.mediamarkt.de/de/product/_logitech-g-988-000576-desktop-mikrofon-weiss-153808416.html", price: 115.29, stars: 3, category: "tech", kind: "Audio", icon: "♫" },
  { name: "B-2 Flugzeug-Modell Stecksatz", url: "https://www.amazon.com/72-Thunderbolt-Military-Airplane-Building/dp/B0GBLBD9LP/ref=sr_1_3?crid=2KAHB7N0PT3OL&dib=eyJ2IjoiMSJ9.BJ8ibVad_GkBDs1bMSsK0WPR9FpnhTdM7ILPY1LzyhsR98JPmHgcQxdNfTJb2zCE9F0CeIu-yrQGjOeE6iivpLsnVjIV1VDMNwVfXbp9eWkwaS6rBmhU48vDu-IsXj6iI1dejE-wYjWH52PaBdRnElPqFiPuaudm29vQRfte5vxnEPFVBJ0YJ2SzQ8JHQbydR0CAWn-41vQs6SW9QFAx__wzlXGBNY_HttrYmy8GOB9UUZetSHvK5vZ1y99k02OoqRLUiVpIv0vWX_5CuBwkvxorAlLISJrDGkyjsJeGaq0.uYDg_GtHLVlD69YSRfpk8d_GF4AA32tNRDRV7wFEi4A&dib_tag=se&keywords=a10%2Bfighter%2Bjet%2Bmodel&qid=1794665309&sprefix=a10%2Bfighter%2Bjet%2Bmodel%2Caps%2C228&sr=8-3&th=1", price: 16.99, stars: 2, category: "models", kind: "Modellbau", icon: "✈" },
  { name: "F-35 Flugzeug-Modell Stecksatz", url: "https://www.amazon.com/72-Thunderbolt-Military-Airplane-Building/dp/B0GBLNDKSF/ref=sr_1_3?crid=2KAHB7N0PT3OL&dib=eyJ2IjoiMSJ9.BJ8ibVad_GkBDs1bMSsK0WPR9FpnhTdM7ILPY1LzyhsR98JPmHgcQxdNfTJb2zCE9F0CeIu-yrQGjOeE6iivpLsnVjIV1VDMNwVfXbp9eWkwaS6rBmhU48vDu-IsXj6iI1dejE-wYjWH52PaBdRnElPqFiPuaudm29vQRfte5vxnEPFVBJ0YJ2SzQ8JHQbydR0CAWn-41vQs6SW9QFAx__wzlXGBNY_HttrYmy8GOB9UUZetSHvK5vZ1y99k02OoqRLUiVpIv0vWX_5CuBwkvxorAlLISJrDGkyjsJeGaq0.uYDg_GtHLVlD69YSRfpk8d_GF4AA32tNRDRV7wFEi4A&dib_tag=se&keywords=a10%2Bfighter%2Bjet%2Bmodel&qid=1794665309&sprefix=a10%2Bfighter%2Bjet%2Bmodel%2Caps%2C228&sr=8-3&th=1", price: 16.66, stars: 2, category: "models", kind: "Modellbau", icon: "✈" }
];

const grid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const savedFilterButton = document.querySelector("#saved-filter");
const savedCount = document.querySelector("#saved-count");
const emptyState = document.querySelector("#empty-state");
const toast = document.querySelector("#toast");
const favoriteKey = "wunschliste-favorites";
let activeCategory = "all";
let onlySaved = false;
let toastTimer;

function readFavorites() {
  const saved = localStorage.getItem(favoriteKey);
  return new Set(saved ? JSON.parse(saved) : []);
}

let favorites = readFavorites();

function saveFavorites() {
  localStorage.setItem(favoriteKey, JSON.stringify([...favorites]));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function createCard(wish, index) {
  const card = document.createElement("article");
  card.className = "wish-card";
  card.setAttribute("role", "link");
  card.tabIndex = 0;
  card.setAttribute("aria-label", `${wish.name} öffnen`);
  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) return;
    window.open(wish.url, "_blank", "noopener,noreferrer");
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.target.closest("a, button")) {
      window.open(wish.url, "_blank", "noopener,noreferrer");
    }
  });

  const artwork = document.createElement("div");
  artwork.className = `card-art art-${index % 6} ${wish.category === "books" ? "book-art" : "object-art"}`;
  artwork.setAttribute("aria-hidden", "true");
  const icon = document.createElement("span");
  icon.className = "art-icon";
  icon.textContent = wish.icon;
  const kind = document.createElement("span");
  kind.className = "art-kind";
  kind.textContent = wish.kind;
  artwork.append(icon, kind);

  const favorite = document.createElement("button");
  favorite.className = "favorite-button";
  favorite.type = "button";
  favorite.textContent = favorites.has(wish.url) ? "♥" : "♡";
  favorite.setAttribute("aria-label", favorites.has(wish.url) ? `${wish.name} aus Merkliste entfernen` : `${wish.name} merken`);
  favorite.setAttribute("aria-pressed", String(favorites.has(wish.url)));
  favorite.addEventListener("click", () => {
    if (favorites.has(wish.url)) {
      favorites.delete(wish.url);
      showToast("Von deiner Merkliste entfernt");
    } else {
      favorites.add(wish.url);
      showToast("Auf deiner Merkliste gespeichert");
    }
    saveFavorites();
    render();
  });
  artwork.append(favorite);

  const details = document.createElement("div");
  details.className = "card-details";
  const type = document.createElement("p");
  type.className = "card-type";
  type.textContent = wish.kind;
  const name = document.createElement("h3");
  const link = document.createElement("a");
  link.href = wish.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = wish.name;
  name.append(link);

  const rating = document.createElement("div");
  rating.className = "rating";
  rating.setAttribute("aria-label", `${wish.stars} Sterne Wichtigkeit`);
  rating.title = `${wish.stars} ${wish.stars === 1 ? "Stern" : "Sterne"} Wichtigkeit laut Wunschliste`;
  rating.textContent = "★".repeat(wish.stars);
  const ratingLabel = document.createElement("span");
  ratingLabel.textContent = "Wichtigkeit";
  rating.append(ratingLabel);

  const footer = document.createElement("div");
  footer.className = "card-footer";
  const price = document.createElement("span");
  price.className = "price";
  price.textContent = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(wish.price);
  const priceHint = document.createElement("span");
  priceHint.className = "price-hint";
  priceHint.textContent = "laut Wunschliste";
  footer.append(price, priceHint);
  details.append(type, name, rating, footer);
  card.append(artwork, details);
  return card;
}

function render() {
  const query = searchInput.value.trim().toLocaleLowerCase("de");
  const filtered = wishes.filter((wish) => {
    const matchesCategory = activeCategory === "all" || wish.category === activeCategory;
    const matchesSaved = !onlySaved || favorites.has(wish.url);
    const matchesSearch = wish.name.toLocaleLowerCase("de").includes(query);
    return matchesCategory && matchesSaved && matchesSearch;
  });

  if (sortSelect.value === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name, "de"));
  } else {
    filtered.sort((a, b) => b.stars - a.stars || a.name.localeCompare(b.name, "de"));
  }

  grid.replaceChildren(...filtered.map((wish) => createCard(wish, wishes.indexOf(wish))));
  emptyState.hidden = filtered.length !== 0;
  savedCount.textContent = String(favorites.size);
  document.querySelector("#item-count").textContent = String(filtered.length);
}

document.querySelectorAll(".filter-chip[data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll(".filter-chip[data-category]").forEach((chip) => chip.classList.toggle("is-active", chip === button));
    render();
  });
});

savedFilterButton.addEventListener("click", () => {
  onlySaved = !onlySaved;
  savedFilterButton.classList.toggle("is-active", onlySaved);
  savedFilterButton.setAttribute("aria-pressed", String(onlySaved));
  render();
});

searchInput.addEventListener("input", render);
sortSelect.addEventListener("change", render);
document.querySelector("#clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "all";
  onlySaved = false;
  savedFilterButton.classList.remove("is-active");
  savedFilterButton.setAttribute("aria-pressed", "false");
  document.querySelectorAll(".filter-chip[data-category]").forEach((button) => button.classList.toggle("is-active", button.dataset.category === "all"));
  render();
});

document.querySelector("#surprise").addEventListener("click", () => {
  const candidates = [...grid.querySelectorAll(".wish-card")];
  if (!candidates.length) {
    showToast("Keine Wünsche für diese Auswahl gefunden");
    return;
  }
  const pick = candidates[Math.floor(Math.random() * candidates.length)];
  pick.scrollIntoView({ behavior: "smooth", block: "center" });
  pick.classList.add("is-highlighted");
  setTimeout(() => pick.classList.remove("is-highlighted"), 1500);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

render();
