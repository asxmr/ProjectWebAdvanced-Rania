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

function createPersonnageRow(personnage) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><img src="${personnage.image}" alt="${personnage.name}" class="table-img" /></td>
    <td>${personnage.name}</td>
    <td>${personnage.status}</td>
    <td>${personnage.species}</td>
    <td>${personnage.gender}</td>
    <td>${personnage.origin.name}</td>
    <td>${personnage.importance}</td>
    <td><button class="collect-btn">Toevoegen</button></td>
  `;


  row.querySelector(".collect-btn").addEventListener("click", () => {
    if (!collection.find((c) => c.id === personnage.id)) {
      collection.push(personnage);
      saveCollection();
      updateCollection();
      alert(`${personnage.name} is toegevoegd aan je collectie!`);
    }
  });

  return row;
}

function renderPersonnages(data) {
  personnagesSection.innerHTML = ""; 
  data.forEach((p) => {
    const row = createPersonnageRow(p);
    personnagesSection.appendChild(row);
  });
}

function saveCollection() {
  localStorage.setItem("collection", JSON.stringify(collection));
}

function updateCollection() {
  collectionSection.innerHTML = "";
  let total = 0;

  collection.forEach((p) => {
    total += p.importance || 0;

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>Importance: ${p.importance}</p>
      <button class="remove-btn">Verwijderen</button>
    `;

    card.querySelector(".remove-btn").addEventListener("click", () => {
      collection = collection.filter((c) => c.id !== p.id);
      saveCollection();
      updateCollection();
    });

    collectionSection.appendChild(card);
  });

  puntenSpan.textContent = total;
}

searchInput.addEventListener("input", (e) => {
  const zoekterm = e.target.value.toLowerCase();
  document.querySelectorAll("#personnages-section tr").forEach((row) => {
    const naam = row.querySelector("td:nth-child(2)")?.textContent.toLowerCase();
    row.style.display = naam.includes(zoekterm) ? "table-row" : "none";
  });
});

sortSelect.addEventListener("change", () => {
  let sorted = [...personnages];
  if (sortSelect.value === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortSelect.value === "importance") {
    sorted.sort((a, b) => b.importance - a.importance);
  }
  renderPersonnages(sorted);
});

let personnages = [];
let collection = JSON.parse(localStorage.getItem("collection")) || [];

window.addEventListener("DOMContentLoaded", () => {
  fetchPersonnages().then((data) => {
    personnages = data.map((p) => ({
      ...p,
      importance: Math.floor(Math.random() * 100) + 1,
    }));
    renderPersonnages(personnages);
    updateCollection();
  });
});

function showRoute(route) {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec) => {
    sec.style.display = sec.dataset.route === route ? "block" : "none";
  });
}