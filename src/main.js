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

