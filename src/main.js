async function fetchPersonnages() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Fout bij ophalen personages:", error);
    return [];
  }
}

const personnagesSection = document.getElementById("personnages-section");
const collectionSection = document.getElementById("collection-section");
const puntenSpan = document.getElementById("punten");
const puntenDisplay = document.getElementById("punten-display");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
