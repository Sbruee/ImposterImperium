// =============================
// KATEGORIEN
// =============================
let selectedCategories = [];


// =============================
// WORTLISTEN
// =============================

// ⚽ FUSSBALL (deine Liste, unverändert)
const footballWords = [
  { word: "Lamine Yamal", tip: "Talent" },
  { word: "Cristiano Ronaldo", tip: "Portugal" },
  { word: "Lionel Messi", tip: "Argentinien" },
  { word: "Kylian Mbappé", tip: "Schnelligkeit" },
  { word: "Erling Haaland", tip: "Torjäger" },
  { word: "Robert Lewandowski", tip: "Faust" },
  { word: "Neymar", tip: "5" },
  { word: "Kevin De Bruyne", tip: "Assists" },
  { word: "Mohamed Salah", tip: "König" },
  { word: "Sadio Mané", tip: "Kabine" },
  { word: "Harry Kane", tip: "titellos" },
  { word: "Karim Benzema", tip: "Band" },
  { word: "Virgil van Dijk", tip: "TOTY" },
  { word: "Jan Oblak", tip: "Torwart" },
  { word: "Joshua Kimmich", tip: "6" },
  { word: "Marco Reus", tip: "Cover" },
  { word: "Son Heung-min", tip: "Hamburg" },
  { word: "Luka Modrić", tip: "Kapitän" },
  { word: "Toni Kroos", tip: "Passspiel" },
  { word: "Trent Alexander-Arnold", tip: "Flanke" },
  { word: "Alisson Becker", tip: "Brasilien" },
  { word: "Sergio Ramos", tip: "brutal" },
  { word: "Paulo Dybala", tip: "Jubel" },
  { word: "Zlatan Ibrahimović", tip: "stark" },
  { word: "Gianluigi Donnarumma", tip: "Mario" },
  { word: "Romelu Lukaku", tip: "wandern" },
  { word: "Jadon Sancho", tip: "wasted Talent" },
  { word: "Phil Foden", tip: "Tattoo" },
  { word: "Raheem Sterling", tip: "Laufen" },
  { word: "Joshua Zirkzee", tip: "Downfall" },
  { word: "Frenkie de Jong", tip: "Bruder" },
  { word: "Matthijs de Ligt", tip: "Grätschen" },
  { word: "Christian Pulisic", tip: "USA" },
  { word: "Ansu Fati", tip: "wasted Talent" },
  { word: "Pedri", tip: "magisch" },
  { word: "Vinícius Júnior", tip: "overrated" },
  { word: "Philippe Coutinho", tip: "teuer" },
  { word: "Gerard Piqué", tip: "King" },
  { word: "Ederson", tip: "Brasilien" },
  { word: "Raphaël Varane", tip: "2018" },
  { word: "Ciro Immobile", tip: "Italien" },
  { word: "Dominik Szoboszlai", tip: "Traumtore" },
  { word: "Leroy Sané", tip: "Ragebait" },
  { word: "Kingsley Coman", tip: "verletzungsanfällig" },
  { word: "Kai Havertz", tip: "Deutschland" },
  { word: "Antonio Rüdiger", tip: "Verrückt" },
  { word: "Nicolò Barella", tip: "Italien" },
  { word: "Marco Asensio", tip: "Real" },
  { word: "Rodri", tip: "Ballon Dor" },
  { word: "Mason Mount", tip: "England" },
  { word: "Jorginho", tip: "Italien" },
  // 50 NEUE (Trainer + Talente)
    { word: "Jude Bellingham", tip: "Loch" },
    { word: "Jamal Musiala", tip: "10er" },
    { word: "Florian Wirtz", tip: "Talent" },
    { word: "Bukayo Saka", tip: "schnell" },
    { word: "Bernardo Silva", tip: "Technik" },
    { word: "Antoine Griezmann", tip: "Flop" },
    { word: "Victor Osimhen", tip: "Corona" },
    { word: "Khvicha Kvaratskhelia", tip: "Stutzen" },
    { word: "Achraf Hakimi", tip: "Madrid" },
    { word: "Theo Hernández", tip: "Geld" },
    { word: "Declan Rice", tip: "Real Madrid" },
    { word: "Martin Ødegaard", tip: "Haaland" },
    { word: "Rafael Leão", tip: "lustig" },
    { word: "Gavi", tip: "Mentality" },
    { word: "João Félix", tip: "wasted Talent" },
    { word: "Darwin Núñez", tip: "Geld" },
    { word: "Marcus Rashford", tip: "Comeback" },
    { word: "Bruno Fernandes", tip: "Kapitän" },
    { word: "Thomas Müller", tip: "Raumdeuter" },
    { word: "Manuel Neuer", tip: "Legende" },
    { word: "Ilkay Gündogan", tip: "BVB" },
    { word: "Xavi Simons", tip: "teuer" },
    { word: "Lennart Karl", tip: "Talent" },
    { word: "Rodrigo Mora", tip: "Talent" },
    { word: "Assan Ouedraogo", tip: "gross" },
    { word: "Pep Guardiola", tip: "Tiki-Taka" },
    { word: "Jürgen Klopp", tip: "Comeback" },
    { word: "Carlo Ancelotti", tip: "Augenbraue" },
    { word: "Thomas Tuchel", tip: "Taktik" },
    { word: "Zinedine Zidane", tip: "glatt" },
    { word: "Diego Simeone", tip: "Schwein" },
    { word: "Mikel Arteta", tip: "Guardiola" },
    { word: "Erik ten Hag", tip: "kurz" },
    { word: "Hansi Flick", tip: "Triple" },
    { word: "Julian Nagelsmann", tip: "Hammer" },
    { word: "Luis Enrique", tip: "American Football" },
    { word: "Xabi Alonso", tip: "Real" },
    { word: "Didier Deschamps", tip: "WM" },
    { word: "Sir Alex Ferguson", tip: "Aura" },
    { word: "Unai Emery", tip: "Clip" },
    { word: "Vincent Kompany", tip: "underrated Transfer" },
    { word: "Edin Terzić", tip: "Magisch" },
    { word: "Sebastian Hoeneß", tip: "Cap" },
    { word: "Oliver Glasner", tip: "Kristall" },
    { word: "José Mourinho", tip: "Europa League" },
    { word: "Leo von Hammel", tip: "schnell" }
  ];


// ♾️ ALLGEMEIN – 150 (wie eure Liste)
const generalWords = [
    { word: "Zeit", tip: "läuft" },
  { word: "Freiheit", tip: "unbezahlbar" },
  { word: "Chaos", tip: "verwirrt" },
  { word: "Energie", tip: "Kraft" },
  { word: "Geduld", tip: "Wartezimmer" },
  { word: "Schlüssel", tip: "öffnen" },
  { word: "Schatten", tip: "dunkel" },
  { word: "Erinnerung", tip: "Vergangenheit" },
  { word: "Traum", tip: "Schlaf" },
  { word: "Spiegel", tip: "Reflexion" },
  { word: "Angst", tip: "Gefühl" },
  { word: "Hoffnung", tip: "Zukunft" },
  { word: "Feuer", tip: "Temperatur" },
  { word: "Wasser", tip: "wichtig" },
  { word: "Sturm", tip: "Ruhe" },
  { word: "Stille", tip: "Klausur" },
  { word: "Lüge", tip: "falsch" },
  { word: "Wahrheit", tip: "Geständnis" },
  { word: "Zufall", tip: "unvorhersebar" },
  { word: "Ordnung", tip: "Strukturierung" },

  { word: "Schule", tip: "lernen" },
  { word: "Hausaufgaben", tip: "nervig" },
  { word: "Ferien", tip: "frei" },
  { word: "Lehrer", tip: "Zimmer" },
  { word: "Prüfung", tip: "stressig" },
  { word: "Noten", tip: "wichtig" },
  { word: "Buch", tip: "Lampe" },
  { word: "Film", tip: "Abends" },
  { word: "Serie", tip: "Mörder" },
  { word: "Musik", tip: "laufen" },
  { word: "Konzert", tip: "live" },
  { word: "Party", tip: "Alkohol" },
  { word: "Freundschaft", tip: "Vertrauen" },
  { word: "Liebe", tip: "Schokolade" },
  { word: "Lachen", tip: "Witz" },
  { word: "Tränen", tip: "Freude" },
  { word: "Wut", tip: "laut" },
  { word: "Mut", tip: "trauen" },
  { word: "Eifersucht", tip: "gefährlich" },
  { word: "Respekt", tip: "stolz" },

  { word: "Handy", tip: "Technik" },
  { word: "Internet", tip: "online" },
  { word: "App", tip: "vielfältig" },
  { word: "Passwort", tip: "wichtig" },
  { word: "Kamera", tip: "alt" },
  { word: "Video", tip: "lang" },
  { word: "Kopfhörer", tip: "Geräusch" },
  { word: "Lautstärke", tip: "+" },
  { word: "Akku", tip: "kaputt" },
  { word: "WLAN", tip: "Passwort" },

  { word: "Auto", tip: "lenken" },
  { word: "Bus", tip: "Hupe" },
  { word: "Zug", tip: "spät" },
  { word: "Fahrrad", tip: "lenken" },
  { word: "Flugzeug", tip: "groß" },
  { word: "Koffer", tip: "Weltreise" },
  { word: "Urlaub", tip: "Berge" },
  { word: "Hotel", tip: "Sterne" },
  { word: "Camping", tip: "Holz" },
  { word: "Karte", tip: "Kompass" },

  { word: "Pizza", tip: "vielfältig" },
  { word: "Burger", tip: "Turm" },
  { word: "Pommes", tip: "Salz" },
  { word: "Döner", tip: "halber Mond" },
  { word: "Pasta", tip: "Pizza" },
  { word: "Schokolade", tip: "herzhaft" },
  { word: "Eis", tip: "kalt" },
  { word: "Kaffee", tip: "wach" },
  { word: "Tee", tip: "warm" },
  { word: "Wasserflasche", tip: "Sport" },

  { word: "Sonne", tip: "hell" },
  { word: "Mond", tip: "dunkel" },
  { word: "Stern", tip: "5" },
  { word: "Regen", tip: "nervig" },
  { word: "Schnee", tip: "kühl" },
  { word: "Wind", tip: "Meer" },
  { word: "Wolke", tip: "grau" },
  { word: "Gewitter", tip: "gefährlich" },
  { word: "Regenbogen", tip: "Topf" },
  { word: "Wüste", tip: "Wasser" },

  { word: "Hund", tip: "Treue" },
  { word: "Katze", tip: "vorsichtig" },
  { word: "Vogel", tip: "Flug" },
  { word: "Fisch", tip: "Wasser" },
  { word: "Pferd", tip: "Fortbewegegungsmittel" },
  { word: "Kuh", tip: "trinken" },
  { word: "Löwe", tip: "König" },
  { word: "Elefant", tip: "groß" },
  { word: "Biene", tip: "Wiese" },
  { word: "Spinne", tip: "Faden" },

  { word: "Geld", tip: "lebenswichtig" },
  { word: "Bank", tip: "arbeiten" },
  { word: "Preis", tip: "einkaufen" },
  { word: "Rabatt", tip: "Magnet" },
  { word: "Einkauf", tip: "Chip" },
  { word: "Supermarkt", tip: "Arbeit" },
  { word: "Rechnung", tip: "teuer" },
  { word: "Sparen", tip: "Bank" },
  { word: "Job", tip: "Supermarkt" },
  { word: "Chef", tip: "Koch" },

  { word: "Arzt", tip: "Heilung" },
  { word: "Krankenhaus", tip: "Notfall" },
  { word: "Pflaster", tip: "weich" },
  { word: "Medikament", tip: "Kapsel" },
  { word: "Sport", tip: "wichtig" },
  { word: "Fitness", tip: "Bewegung" },
  { word: "Laufen", tip: "Bahn" },
  { word: "Schwimmen", tip: "Meer" },
  { word: "Yoga", tip: "Ruhe" },
  { word: "Schlaf", tip: "Stunden" },

  { word: "Haus", tip: "leben" },
  { word: "Wohnung", tip: "teuer" },
  { word: "Tür", tip: "Schlüsselbund" },
  { word: "Fenster", tip: "Sand" },
  { word: "Lampe", tip: "lesen" },
  { word: "Bett", tip: "weich" },
  { word: "Küche", tip: "Tisch" },
  { word: "Bad", tip: "Spiegelbild" },
  { word: "Schrank", tip: "Kleidung" },
  { word: "Fernbedienung", tip: "Technik" },

  { word: "Stadt", tip: "chaotisch" },
  { word: "Dorf", tip: "ruhig" },
  { word: "Polizei", tip: "Ordnung" },
  { word: "Feuerwehr", tip: "Hilfe" },
  { word: "Museum", tip: "Paris" },
  { word: "Bibliothek", tip: "ruhig" },
  { word: "Park", tip: "grün" },
  { word: "Spielplatz", tip: "Sand" },
  { word: "Stau", tip: "Zeit" },
  { word: "Ampel", tip: "warten" },

  { word: "Rätsel", tip: "Spaß" },
  { word: "Geheimnis", tip: "versteckt" },
  { word: "Abenteuer", tip: "aufregend" },
  { word: "Magie", tip: "Narbe" },
  { word: "Held", tip: "gut" },
  { word: "Bösewicht", tip: "Gegner" },
  { word: "Roboter", tip: "Technik" },
  { word: "Alien", tip: "grün" },
  { word: "Universum", tip: "wir" },
  { word: "Zukunft", tip: "morgen" }
];

// 🎬 FILME/SERIEN – 50 Begriffe + Tipp
const moviesWords = [
  { word: "Harry Potter", tip: "Blitz" },
  { word: "Herr der Ringe", tip: "Zauber" },
  { word: "Star Wars", tip: "Krieg" },
  { word: "Marvel", tip: "vielfältig" },
  { word: "Avengers", tip: "Team" },
  { word: "Spider-Man", tip: "Faden" },
  { word: "Batman", tip: "Licht" },
  { word: "Joker", tip: "Chaos" },
  { word: "Titanic", tip: "traurig" },
  { word: "Avatar", tip: "farbig" },
  { word: "Matrix", tip: "Simulation" },
  { word: "Inception", tip: "Traum" },
  { word: "Interstellar", tip: "Raum" },
  { word: "Jurassic Park", tip: "Chaos" },
  { word: "Fast & Furious", tip: "Reifen" },
  { word: "James Bond", tip: "Abenteuer" },
  { word: "Mission: Impossible", tip: "Stunts" },
  { word: "Toy Story", tip: "Fantasie" },
  { word: "Findet Nemo", tip: "Meer" },
  { word: "Shrek", tip: "grün" },
  { word: "Die Eiskönigin", tip: "kalt" },
  { word: "König der Löwen", tip: "Tiere" },
  { word: "Fluch der Karibik", tip: "Kugeln" },
  { word: "SpongeBob", tip: "Meer" },
  { word: "Die Simpsons", tip: "gelblich" },
  { word: "South Park", tip: "Kinder" },
  { word: "Stranger Things", tip: "exotisch" },
  { word: "Breaking Bad", tip: "Anzüge" },
  { word: "Game of Thrones", tip: "brutal" },
  { word: "The Walking Dead", tip: "Untergang" },
  { word: "The Boys", tip: "Antihelden" },
  { word: "Peaky Blinders", tip: "Gang" },
  { word: "Money Heist", tip: "Genie" },
  { word: "Sherlock", tip: "schlau" },
  { word: "Wednesday", tip: "Woche" },
  { word: "Squid Game", tip: "Spiel" },
  { word: "Dark", tip: "Zeitreise" },
  { word: "How I Met Your Mother", tip: "Erzähler" },
  { word: "Friends", tip: "Café" },
  { word: "The Office", tip: "Büroklammer" },
  { word: "Modern Family", tip: "Familien" },
  { word: "Vikings", tip: "brutal" },
  { word: "Narcos", tip: "Kartell" },
  { word: "The Mandalorian", tip: "Kopfgeld" },
  { word: "The Witcher", tip: "Monster" },
  { word: "Lucifer", tip: "Teufel" },
  { word: "Better Call Saul", tip: "Gericht" },
  { word: "The Last of Us", tip: "Pilz" },
  { word: "Rick and Morty", tip: "Universum" },
  { word: "One Piece", tip: "Piraten" }
];

const supercellWords = [
  { word: "Clash Royale", tip: "Arena" },
  { word: "Hog Rider", tip: "4 Elixier" },
  { word: "P.E.K.K.A", tip: "Rüstung" },
  { word: "Mega Knight", tip: "Sprung" },
  { word: "Log", tip: "spitz" },
  { word: "Inferno Tower", tip: "Tank" },
  { word: "Goblin Barrel", tip: "Zauber" },
  { word: "X-Bow", tip: "Belagerung" },
  { word: "Clan Wars", tip: "Boot" },
  { word: "Legendary", tip: "besonders" },
  { word: "Princess", tip: "weit" },
  { word: "Miner", tip: "schnell" },
  { word: "Rocket", tip: "hohes Elixier" },
  { word: "Freeze", tip: "Kombo" },
  { word: "Mirror", tip: "ein Elixier" },
  { word: "Elixir Collector", tip: "ein Elixir" },
  { word: "Electro Wizard", tip: "betäubt" },
  { word: "Bandit", tip: "Dash" },
  { word: "Royal Giant", tip: "Kugel" },
  { word: "Goblin Drill", tip: "grün" },
  { word: "Champion", tip: "Elixirkosten" },
{ word: "Skeleton Army", tip: "Schwerter" },
{ word: "Fireball", tip: "Fläche" },
{ word: "Zap", tip: "reset" },
{ word: "Tornado", tip: "Bewegung" },
{ word: "Dark Prince", tip: "Schild" },
{ word: "Golden Knight", tip: "Dash" },
{ word: "Monk", tip: "Spiegel" },
{ word: "Electro Giant", tip: "Brille" },
{ word: "Ice Spirit", tip: "lachen" },
{ word: "Fire Spirit", tip: "Sprung" },
{ word: "Battle Ram", tip: "gelb" },
{ word: "Royal Hogs", tip: "fliegen" },
{ word: "Guards", tip: "Rüstung" },
{ word: "Lava Hound", tip: "langsam" },
{ word: "Balloon", tip: "Knochen" },
{ word: "Cannon Cart", tip: "rollt" },
{ word: "Goblin Gang", tip: "Messer" },
{ word: "Barbarian Barrel", tip: "gelb" },
{ word: "Three Musketeers", tip: "teuer" },
{ word: "Ice Golem", tip: "Tod" },
{ word: "Electro Dragon", tip: "Kette" },
{ word: "Baby Dragon", tip: "Splash" },
{ word: "Inferno Dragon", tip: "fliegen" },
{ word: "Royal Recruits", tip: "Rüstung" },
{ word: "Rage", tip: "schnell" },
{ word: "Poison", tip: "Totenkopf" },
{ word: "Graveyard", tip: "Tot" },
{ word: "Fisherman", tip: "schlagen" },
{ word: "Battle Healer", tip: "fliegt" },
{ word: "Phoenix", tip: "langsam" },

  { word: "Clash of Clans", tip: "Mauern" },
  { word: "Rathaus", tip: "Level" },
  { word: "Barbaren", tip: "gelb" },
  { word: "Bogenschützen", tip: "Zwei" },
  { word: "Riese", tip: "tankt" },
  { word: "Drache", tip: "fliegen" },
  { word: "Heiler", tip: "Support" },
  { word: "Inferno-Drache", tip: "Tank" },
  { word: "Clankrieg", tip: "Stars" },
  { word: "Juwelen", tip: "teuer" },
{ word: "Barbarenkönig", tip: "Schwert" },
{ word: "Bogenschützenkönigin", tip: "unbesiegbar" },
{ word: "Großer Wächter", tip: "Aura" },
{ word: "Rathaus", tip: "Ziel" },
{ word: "Clanburg", tip: "Verteidigung" },


  { word: "Brawl Stars", tip: "OG" },
  { word: "Shelly", tip: "Busch" },
  { word: "Colt", tip: "Laser" },
  { word: "Spike", tip: "spitz" },
  { word: "Crow", tip: "nervig" },
  { word: "Leon", tip: "schnell" },
  { word: "Gem Grab", tip: "Mitte" },
  { word: "Showdown", tip: "Wolken" },
  { word: "Mega Box", tip: "OG" },
  { word: "El Primo", tip: "Meme" },
{ word: "Grom", tip: "Bombe" },
{ word: "Mico", tip: "Sprung" },
{ word: "Sandy", tip: "Sand" },
{ word: "Darryl", tip: "Holz" },
{ word: "Mandy", tip: "Meme" },
{ word: "Surge", tip: "Sprung" },
{ word: "Buzz", tip: "Rettung" },
{ word: "Fang", tip: "Tritt" },
{ word: "Piper", tip: "Distanz" },
{ word: "Dynamike", tip: "Explosion" },
{ word: "Gene", tip: "ziehen" },
{ word: "Amber", tip: "heiß" },
{ word: "Mortis", tip: "Dash" },
{ word: "Frank", tip: "Schlag" },
{ word: "Brawl Ball", tip: "Frank" },

];


// =============================
// SPIEL LOGIK
// =============================
let words = [];
let playerCount = 0;
let playerNames = [];
let playOrder = [];
let currentPlayer = 0;
let selectedWord = null;
let imposterIndexes = [];
let imposterWithTip = null;

function $(id) { return document.getElementById(id); }
function show(el) { if (el) el.classList.remove("hidden"); }
function hide(el) { if (el) el.classList.add("hidden"); }

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// =============================
// INFO OVERLAY
// =============================
function toggleInfo() {
  const overlay = $("infoOverlay");
  if (!overlay) return;
  overlay.classList.toggle("hidden");
}

function overlayClickClose(e) {
  if (e.target && e.target.id === "infoOverlay") toggleInfo();
}

function categoryLabel(key){
  if (key === "football") return "Fußball";
  if (key === "general") return "Allgemein";
  if (key === "movies") return "Filme/Serien";
  if (key === "supercell") return "Supercell Games";
  return key;
}

function updateCategoryUI(){
  const info = document.getElementById("selectedInfo");
  const btn = document.getElementById("confirmCategoriesBtn");

  if (info){
    info.textContent = selectedCategories.length
      ? "Ausgewählt: " + selectedCategories.map(categoryLabel).join(", ")
      : "Ausgewählt: –";
  }

  if (btn){
    btn.disabled = selectedCategories.length === 0;
  }
}

function toggleNews() {
  const overlay = document.getElementById("newsOverlay");
  if (!overlay) return;
  overlay.classList.toggle("hidden");
}

function overlayClickCloseNews(e) {
  if (e.target && e.target.id === "newsOverlay") toggleNews();
}


function toggleCategory(category, buttonEl){
  // Max 3 Kategorien
  const idx = selectedCategories.indexOf(category);

  if (idx > -1){
    // entfernen
    selectedCategories.splice(idx, 1);
    if (buttonEl) buttonEl.classList.remove("selected");
  } else {
    if (selectedCategories.length >= 3){
      alert("Maximal 3 Kategorien auswählbar!");
      return;
    }
    selectedCategories.push(category);
    if (buttonEl) buttonEl.classList.add("selected");
  }

  updateCategoryUI();
}

function confirmCategories(){
  if (selectedCategories.length === 0){
    alert("Bitte mindestens 1 Kategorie auswählen!");
    return;
  }

  // Wörterpool aus gewählten Kategorien zusammenbauen
  words = [];
  for (const c of selectedCategories){
    if (c === "football") words = words.concat(footballWords);
    if (c === "general") words = words.concat(generalWords);
    if (c === "movies") words = words.concat(moviesWords);
    if (c === "supercell") words = words.concat(supercellWords);
  }

  // Weiter wie bisher: Kategorie-Screen aus, Setup an
  hide(document.getElementById("categoryScreen"));
  show(document.getElementById("setupScreen"));
}


// =============================
// Namenfelder erzeugen
// =============================
function createNameInputs() {
  const container = $("nameInputs");
  container.innerHTML = "";

  playerCount = parseInt($("playerCount").value, 10);

  if (isNaN(playerCount) || playerCount < 3) {
    alert("Mindestens 3 Spieler!");
    return;
  }

  for (let i = 0; i < playerCount; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Name Spieler " + (i + 1);
    input.id = "player" + i;
    container.appendChild(input);
  }
}

// =============================
// Runde starten
// =============================
function startRound() {

  // ❗ Kategorien-Check (hast du schon)
  if (!words || words.length === 0) {
    alert("Bitte zuerst Kategorien auswählen und bestätigen!");
    return;
  }

  // ❗ Spieleranzahl-Check
  playerCount = parseInt($("playerCount").value, 10);
  if (isNaN(playerCount) || playerCount < 3) {
    alert("Bitte Spieleranzahl und Spielernamen angeben!");
    return;
  }

  // ❗ Wurden Namensfelder erzeugt?
  if ($("nameInputs").children.length !== playerCount) {
    alert("Bitte Spielernamen eingeben!");
    return;
  }

  // ❗ Namen prüfen
  playerNames = [];
  for (let i = 0; i < playerCount; i++) {
    const input = $("player" + i);
    const name = input ? input.value.trim() : "";
    if (!name) {
      alert("Bitte Spieleranzahl und Spielernamen angeben!");
      return;
    }
    playerNames.push(name);
  }

  // 👉 Ab hier ist alles safe
  startNewRoundKeepingNames();

  hide($("setupScreen"));
  show($("gameScreen"));
  hide($("finalScreen"));
}


// =============================
// Neue Runde (gleiche Namen)
// =============================
function startNewRoundKeepingNames() {
  playOrder = shuffle(playerNames);
  selectedWord = words[Math.floor(Math.random() * words.length)];

  const imposterCount = playerCount >= 5 ? 2 : 1;
  imposterIndexes = [];

  while (imposterIndexes.length < imposterCount) {
    const r = Math.floor(Math.random() * playerCount);
    if (!imposterIndexes.includes(r)) imposterIndexes.push(r);
  }

  imposterWithTip = imposterIndexes[Math.floor(Math.random() * imposterIndexes.length)];
  currentPlayer = 0;
  showPlayer();
}

// =============================
// Spieler anzeigen
// =============================
function showPlayer() {
  $("playerName").innerText = playOrder[currentPlayer];
  $("roleText").innerText = "Bereit?";
  $("roleText").className = "";
  $("wordText").innerText = "Drücke auf „Wort anzeigen“";

  show($("revealButton"));
  hide($("nextButton"));
}

// =============================
// Wort anzeigen
// =============================
function revealWord() {
  const roleEl = $("roleText");
  const wordEl = $("wordText");

  const isImposter = imposterIndexes.includes(currentPlayer);

  if (isImposter) {
    roleEl.innerText = "IMPOSTER";
    roleEl.className = "imposter";
    wordEl.innerText =
      currentPlayer === imposterWithTip ? ("Tipp: " + selectedWord.tip) : "Kein Tipp!";
  } else {
    roleEl.innerText = "CREWMATE";
    roleEl.className = "crewmate";
    wordEl.innerText = selectedWord.word;
  }

  hide($("revealButton"));
  show($("nextButton"));
}

// =============================
// Nächster Spieler
// =============================
function nextPlayer() {
  currentPlayer++;

    if (currentPlayer >= playerCount) {
  hide($("gameScreen"));
  show($("finalScreen"));
  showDiscussionStarter();   // ✅ NEU
} else {
  showPlayer();
}

}

function showDiscussionStarter() {
  const starterEl = document.getElementById("starterText");
  if (!starterEl) return;

  const starter = playOrder[Math.floor(Math.random() * playOrder.length)];

  starterEl.textContent = "🎤 " + starter + " beginnt!";
  starterEl.classList.remove("hidden");

  // Nach 5 Sekunden ausblenden (sanft)
  setTimeout(() => {
    starterEl.style.opacity = "0";
    starterEl.style.transform = "scale(0.9)";
  }, 4500);

  // Komplett leeren
  setTimeout(() => {
    starterEl.textContent = "";
    starterEl.style.opacity = "";
    starterEl.style.transform = "";
  }, 5200);
}



// =============================
// Neues Spiel (gleiche Namen)
// =============================
function restartGame() {
  startNewRoundKeepingNames();
  hide($("finalScreen"));
  show($("gameScreen"));
  const starterEl = document.getElementById("starterText");
if (starterEl) starterEl.textContent = "";

}

// =============================
// Spiel beenden (Reset)
// =============================
function endGame() {
  hide($("gameScreen"));
  hide($("finalScreen"));
  hide($("setupScreen"));
  show($("categoryScreen"));
  const starterEl = document.getElementById("starterText");
if (starterEl) starterEl.textContent = "";


  $("nameInputs").innerHTML = "";
  $("playerCount").value = "";

  activeCategory = null;
  words = [];
  playerCount = 0;
  playerNames = [];
  playOrder = [];
  currentPlayer = 0;
  selectedWord = null;
  imposterIndexes = [];
  imposterWithTip = null;
  selectedCategories = [];
updateCategoryUI();

// Optional: ausgewählte Button-Markierungen entfernen
document.querySelectorAll(".cat-btn.selected").forEach(b => b.classList.remove("selected"));

}

// Globals für onclick
window.toggleInfo = toggleInfo;
window.overlayClickClose = overlayClickClose;
window.createNameInputs = createNameInputs;
window.startRound = startRound;
window.revealWord = revealWord;
window.nextPlayer = nextPlayer;
window.restartGame = restartGame;
window.endGame = endGame;
window.toggleCategory = toggleCategory;
window.confirmCategories = confirmCategories;
window.toggleNews = toggleNews;
window.overlayClickCloseNews = overlayClickCloseNews;



document.addEventListener("DOMContentLoaded", updateCategoryUI);
