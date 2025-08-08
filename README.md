# Rick & Morty Collectors

Een interactieve Single Page Application (SPA) ontwikkeld voor het vak *Web Advanced*. Deze applicatie laat gebruikers personages uit het Rick and Morty verkennen. Gebruikers kunnen zoeken, filteren, sorteren, details bekijken en persoonlijke favorieten beheren. De app is responsief, visueel aantrekkelijk en demonstreert concepten die vereist zijn voor dit vak.

---

## Projectdoel

Deze applicatie biedt een speelse verzamelervaring rond het Rick and Morty. Gebruikers kunnen personages bekijken, zoeken, sorteren op belang en toevoegen aan hun persoonlijke collectie. Het doel is om fans op een interactieve manier data te laten ontdekken én hun eigen verzameling te beheren.

---

## Gebruikte API

* **Rick and Morty API**
  [https://rickandmortyapi.com/api/character](https://rickandmortyapi.com/api/character)
  Deze API levert data over personages, locaties en afleveringen in JSON-formaat.

---

## Functionaliteiten

| Functie                 | Bestand(en)  | Beschrijving                                                   |
| ----------------------- | ------------ | -------------------------------------------------------------- |
| **Routing & Navigatie** | `main.js`    | Hash-gebaseerde routing met `hashchange` en `DOMContentLoaded` |
| **Startpagina**         | `index.html` | Statische introductiesectie                                    |
| **Personagelijst**      | `main.js`    | Data ophalen, filteren, zoeken, sorteren, responsieve weergave |
| **Favorieten**          | `main.js`    | Beheer via LocalStorage, toevoegen/verwijderen                 |
| **Thema & Vormgeving**  | `style.css`  | Responsief ontwerp, donkere modus, aangepaste stijlen          |
| **Observer API**        | `main.js`    | Detectie wanneer de "Geschiedenis" sectie in beeld komt        |

---

## JavaScript-concepten

| Concept                  | Bestand(en)    | Regels                                        | Beschrijving                                   |
| ------------------------ | -------------- | --------------------------------------------- | ---------------------------------------------- |
| **DOM-manipulatie**      | `main.js`      | 12–17, 20, 46, 48, 57, 64, 80, 88–90, 118–122 | Selectie en manipulatie van HTML-elementen     |
| **Constanten (`const`)** | `main.js`      | 12–17, 135                                    | Gebruik van `const` voor vaste verwijzingen    |
| **Template literals**    | `main.js`      | 22–31, 67–72                                  | Dynamische HTML-opbouw met `${}` en backticks  |
| **Array-methodes**       | `main.js`      | 47, 61, 75, 95, 97, 99, 109–111               | `.forEach()`, `.map()`, `.sort()`, `.filter()` |
| **Arrow functions**      | `main.js`      | 33, 47, 61, 74, 88, 94, 135                   | Verkorte functienotatie voor callbacks         |
| **Ternary operator**     | `main.js`      | 90                                            | Verkorte if-else-structuur voor zichtbaarheid  |
| **Callback-functies**    | `main.js`      | 33, 47, 61, 74, 88, 94, 135                   | Functies als argumenten meegegeven             |
| **Promises**             | `main.js`      | 108                                           | `.then()`-ketens na `fetchPersonnages()`       |
| **Async & Await**        | `main.js`      | 1–5                                           | Asynchrone API-oproep met `await`              |
| **Observer API**         | `main.js`      | 135–144                                       | `IntersectionObserver` voor animaties          |
| **LocalStorage**         | `main.js`      | 53–54, 105, 76                                | Gegevens opslaan en ophalen uit de browser     |
| **Formuliervalidatie**   | *(niet nodig)* | —                                             | Geen formulier aanwezig                        |
| **SPA-routing**          | `main.js`      | 118–133                                       | Pagina’s tonen op basis van hash in URL        |

---

## Technische keuzes

* **Hash-routing**: eenvoudig te implementeren in vanilla JS zonder externe routerbibliotheek.
* **LocalStorage**: snel en handig voor het opslaan van favorieten zonder backend.
* **IntersectionObserver**: gekozen voor performante animatie bij het scrollen, zonder scroll-events te belasten.
* **Vanilla JS**: bewust geen framework gekozen om alle concepten manueel te demonstreren.

---

## Mappenstructuur

```
ProjectWebAdvanced-Rania/
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── public/
│   └── vite.svg
├── src/
│   ├── counter.js
│   ├── javascript.svg
│   ├── main.js
│   ├── style.css
│   ├── screenshots/
│   └── images/
│       └── R&M-logo.png
```
---

## Installatie-instructies
### Vereisten

* Node.js (v18 of hoger)
* npm of yarn

### Stappen

```bash
git clone https://github.com/asxmr/ProjectWebAdvanced-Rania.git
cd ProjectWebAdvanced-Rania
npm install
npm run dev
```

Ga vervolgens naar [http://localhost:5173](http://localhost:5173) in je browser.

---

## Screenshots
### Startpagina
 <img width="943" height="452" alt="Startpagina" src="https://github.com/user-attachments/assets/c69f2c2b-0898-4bef-9f71-147fdcb36a42" />

 ---
### Tabel personnages
 <img width="939" height="447" alt="Personnages 1" src="https://github.com/user-attachments/assets/c6c66c64-b6e0-42b3-9ebf-a23de43ac311" />

 ---
### Wanneer je een personnage toevoegt
 <img width="937" height="449" alt="Personnages 2" src="https://github.com/user-attachments/assets/26667841-fb7d-41c2-9f8e-165d462c8d1c" />

 ---
### Lege ollectie
 <img width="951" height="445" alt="Lege collectie" src="https://github.com/user-attachments/assets/9eb21533-20f5-4072-91c4-1de20c4ec9aa" />

 ---
### Collectie
 <img width="937" height="438" alt="Collectie" src="https://github.com/user-attachments/assets/914e53f6-f0ff-45b6-9855-f26ac4fc81df" />

 ---
### Geschiedenis
 <img width="951" height="444" alt="Geschiedenis" src="https://github.com/user-attachments/assets/cd64b5b5-37eb-44ac-89be-4a5e3a313316" />


---

## Bronvermelding
* **HTML, CSS & JavaScript algemene documentatie:**
* W3Schools. (z.d.). CSS Tutorial. W3Schools. Geraadpleegd op 2 juli 2025, van https://www.w3schools.com/css/
* W3Schools. (z.d.). JavaScript Tutorial. W3Schools. Geraadpleegd op 3 juli  2025, van https://www.w3schools.com/js/
* **Kleur & Design Tools:**
* HTML Color Codes. (z.d.). Color Picker. Geraadpleegd op 2 juli 2025, van https://htmlcolorcodes.com/color-picker/
* CSS Gradient. (z.d.). CSS Gradient Generator. Geraadpleegd op 2 juli 2025, van https://cssgradient.io/
* Coolors. (z.d.). Color Palette Generator. Geraadpleegd op 2 juli 2025, van https://coolors.co/
* **API Documentatie:**
* The Rick and Morty API. (z.d.). Documentation. Geraadpleegd op 3 juni 2025, van https://rickandmortyapi.com/documentation
* **ChatGPT gesprekken:**
 <img width="896" height="350" alt="bron 1" src="https://github.com/user-attachments/assets/9c55fd3d-9ce9-469f-a4c1-6aa4cd9f8922" />
 <img width="888" height="353" alt="bron 2" src="https://github.com/user-attachments/assets/89218b6f-c1b5-4148-8068-3721a48d9b9e" />
 <img width="876" height="346" alt="bron 3" src="https://github.com/user-attachments/assets/6f7cc2e2-2a73-478c-8b2b-82b36b235b4b" />
 <img width="895" height="344" alt="bron 4" src="https://github.com/user-attachments/assets/6fde3429-02f4-487b-9b8d-5f9985cb1b84" />
 <img width="890" height="328" alt="bron 5" src="https://github.com/user-attachments/assets/8a6c92c5-ee16-48c5-bea5-2b8afd5bc663" />
 <img width="888" height="341" alt="bron 6" src="https://github.com/user-attachments/assets/45c9c5f5-a98d-44f2-a178-d6eedee0310a" />
 <img width="885" height="350" alt="bron 7" src="https://github.com/user-attachments/assets/973e0e0d-a36c-47d2-8f83-6fa5f57102a3" />
 <img width="901" height="336" alt="bron 8" src="https://github.com/user-attachments/assets/6afae1eb-6228-41d2-bfe3-82d0862ef078" />
 <img width="907" height="339" alt="bron 9" src="https://github.com/user-attachments/assets/70103669-cfbd-4ef9-9929-434ba85c259e" />
 <img width="881" height="334" alt="bron 10" src="https://github.com/user-attachments/assets/f8451672-cabf-453b-8dc7-df741895a011" />


---


## Auteur

**Rania Azaoum**
Student Toegepaste Informatica
Erasmushogeschool Brussel

---

## Controlelijst Web Advanced

* [x] SPA-structuur
* [x] API-integratie (20+ objecten)
* [x] Zoek-, filter- en sorteermogelijkheden
* [x] Gebruik van LocalStorage
* [x] Responsief design
* [x] Observer API toegepast
* [x] Gebruik van async/await en promises
* [x] Alle JS-concepten verwerkt en gedocumenteerd
* [x] README met toelichting en regelnummers
* [x] Technische keuzes verantwoord
* [x] Mappenstructuur en installatie beschreven
* [x] Screenshots en bronnen toegevoegd
