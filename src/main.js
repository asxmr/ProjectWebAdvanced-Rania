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

