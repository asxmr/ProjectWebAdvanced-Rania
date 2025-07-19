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


---

## Bronvermelding


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
