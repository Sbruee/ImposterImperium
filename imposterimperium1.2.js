// =============================
// KATEGORIEN
// =============================
let activeCategory = null;

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
    { word: "José Mourinho", tip: "Europa League" }
];

// ♾️ ALLGEMEIN – 150 (wie eure Liste)
const generalWords = [
  { word: "Zeit", tip: "läuft" },
  { word: "Freiheit", tip: "unbezahlbar" },
  { word: "Chaos", tip: "Unordnung" },
  { word: "Energie", tip: "Kraft" },
  { word: "Geduld", tip: "abwarten" },
  { word: "Schlüssel", tip: "öffnet" },
  { word: "Schatten", tip: "dunkel" },
  { word: "Erinnerung", tip: "Vergangenheit" },
  { word: "Traum", tip: "Schlaf" },
  { word: "Spiegel", tip: "Reflexion" },
  { word: "Angst", tip: "Gefühl" },
  { word: "Hoffnung", tip: "Zukunft" },
  { word: "Feuer", tip: "heiß" },
  { word: "Wasser", tip: "flüssig" },
  { word: "Sturm", tip: "Wind" },
  { word: "Stille", tip: "kein Ton" },
  { word: "Lüge", tip: "falsch" },
  { word: "Wahrheit", tip: "echt" },
  { word: "Zufall", tip: "ungeplant" },
  { word: "Ordnung", tip: "Struktur" },

  { word: "Schule", tip: "lernen" },
  { word: "Hausaufgaben", tip: "nervig" },
  { word: "Ferien", tip: "frei" },
  { word: "Lehrer", tip: "unterrichtet" },
  { word: "Prüfung", tip: "Stress" },
  { word: "Noten", tip: "Bewertung" },
  { word: "Buch", tip: "lesen" },
  { word: "Film", tip: "Kino" },
  { word: "Serie", tip: "Folgen" },
  { word: "Musik", tip: "hören" },
  { word: "Konzert", tip: "live" },
  { word: "Party", tip: "Feiern" },
  { word: "Freundschaft", tip: "Vertrauen" },
  { word: "Liebe", tip: "Herz" },
  { word: "Lachen", tip: "Witz" },
  { word: "Tränen", tip: "traurig" },
  { word: "Wut", tip: "laut" },
  { word: "Mut", tip: "trauen" },
  { word: "Eifersucht", tip: "Neid" },
  { word: "Respekt", tip: "Achtung" },

  { word: "Handy", tip: "Anruf" },
  { word: "Internet", tip: "online" },
  { word: "App", tip: "download" },
  { word: "Passwort", tip: "geheim" },
  { word: "Kamera", tip: "Foto" },
  { word: "Video", tip: "Aufnahme" },
  { word: "Kopfhörer", tip: "Sound" },
  { word: "Lautstärke", tip: "Regler" },
  { word: "Akku", tip: "leer" },
  { word: "WLAN", tip: "Netz" },

  { word: "Auto", tip: "fahren" },
  { word: "Bus", tip: "Haltestelle" },
  { word: "Zug", tip: "Schienen" },
  { word: "Fahrrad", tip: "Pedale" },
  { word: "Flugzeug", tip: "fliegt" },
  { word: "Koffer", tip: "Reise" },
  { word: "Urlaub", tip: "Strand" },
  { word: "Hotel", tip: "Zimmer" },
  { word: "Camping", tip: "Zelt" },
  { word: "Karte", tip: "Navigation" },

  { word: "Pizza", tip: "Italien" },
  { word: "Burger", tip: "Fastfood" },
  { word: "Pommes", tip: "Salz" },
  { word: "Döner", tip: "Soße" },
  { word: "Pasta", tip: "Nudeln" },
  { word: "Schokolade", tip: "süß" },
  { word: "Eis", tip: "kalt" },
  { word: "Kaffee", tip: "wach" },
  { word: "Tee", tip: "warm" },
  { word: "Wasserflasche", tip: "trinken" },

  { word: "Sonne", tip: "Tag" },
  { word: "Mond", tip: "Nacht" },
  { word: "Stern", tip: "Himmel" },
  { word: "Regen", tip: "nass" },
  { word: "Schnee", tip: "weiß" },
  { word: "Wind", tip: "weht" },
  { word: "Wolke", tip: "grau" },
  { word: "Gewitter", tip: "Blitz" },
  { word: "Regenbogen", tip: "Farben" },
  { word: "Wüste", tip: "Sand" },

  { word: "Hund", tip: "bellt" },
  { word: "Katze", tip: "miaut" },
  { word: "Vogel", tip: "fliegt" },
  { word: "Fisch", tip: "Wasser" },
  { word: "Pferd", tip: "reiten" },
  { word: "Kuh", tip: "Milch" },
  { word: "Löwe", tip: "König" },
  { word: "Elefant", tip: "Rüssel" },
  { word: "Biene", tip: "Honig" },
  { word: "Spinne", tip: "Netz" },

  { word: "Geld", tip: "bezahlen" },
  { word: "Bank", tip: "Konto" },
  { word: "Preis", tip: "teuer" },
  { word: "Rabatt", tip: "günstig" },
  { word: "Einkauf", tip: "Wagen" },
  { word: "Supermarkt", tip: "Kasse" },
  { word: "Rechnung", tip: "Zahlen" },
  { word: "Sparen", tip: "Zurücklegen" },
  { word: "Job", tip: "Arbeit" },
  { word: "Chef", tip: "Boss" },

  { word: "Arzt", tip: "heilt" },
  { word: "Krankenhaus", tip: "Notfall" },
  { word: "Pflaster", tip: "Wunde" },
  { word: "Medikament", tip: "Tablette" },
  { word: "Sport", tip: "Bewegung" },
  { word: "Fitness", tip: "Training" },
  { word: "Laufen", tip: "rennen" },
  { word: "Schwimmen", tip: "Pool" },
  { word: "Yoga", tip: "Dehnen" },
  { word: "Schlaf", tip: "müde" },

  { word: "Haus", tip: "wohnen" },
  { word: "Wohnung", tip: "Miete" },
  { word: "Tür", tip: "öffnen" },
  { word: "Fenster", tip: "Glas" },
  { word: "Lampe", tip: "Licht" },
  { word: "Bett", tip: "schlafen" },
  { word: "Küche", tip: "kochen" },
  { word: "Bad", tip: "duschen" },
  { word: "Schrank", tip: "Kleidung" },
  { word: "Fernbedienung", tip: "TV" },

  { word: "Stadt", tip: "viele" },
  { word: "Dorf", tip: "ruhig" },
  { word: "Polizei", tip: "Ordnung" },
  { word: "Feuerwehr", tip: "löscht" },
  { word: "Museum", tip: "Kunst" },
  { word: "Bibliothek", tip: "Bücher" },
  { word: "Park", tip: "grün" },
  { word: "Spielplatz", tip: "Kinder" },
  { word: "Stau", tip: "Autos" },
  { word: "Ampel", tip: "rot/gelb/grün" },

  { word: "Rätsel", tip: "knifflig" },
  { word: "Geheimnis", tip: "versteckt" },
  { word: "Abenteuer", tip: "Action" },
  { word: "Magie", tip: "Zauber" },
  { word: "Held", tip: "rettet" },
  { word: "Bösewicht", tip: "Gegner" },
  { word: "Roboter", tip: "Maschine" },
  { word: "Alien", tip: "Weltall" },
  { word: "Universum", tip: "unendlich" },
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
  { word: "Fast & Furious", tip: "Auto" },
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

// =============================
// Kategorie wählen
// =============================
function selectCategory(category) {
  activeCategory = category;

  if (category === "football") words = footballWords;
  else if (category === "general") words = generalWords;
  else if (category === "movies") words = moviesWords;
  else words = generalWords;

  hide($("categoryScreen"));
  show($("setupScreen"));
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
  if (!activeCategory) {
    alert("Bitte zuerst eine Kategorie auswählen!");
    return;
  }

  playerNames = [];

  for (let i = 0; i < playerCount; i++) {
    const input = $("player" + i);
    const name = input ? input.value.trim() : "";
    if (!name) {
      alert("Bitte alle Spielernamen ausfüllen!");
      return;
    }
    playerNames.push(name);
  }

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
  } else {
    showPlayer();
  }
}

// =============================
// Neues Spiel (gleiche Namen)
// =============================
function restartGame() {
  startNewRoundKeepingNames();
  hide($("finalScreen"));
  show($("gameScreen"));
}

// =============================
// Spiel beenden (Reset)
// =============================
function endGame() {
  hide($("gameScreen"));
  hide($("finalScreen"));
  hide($("setupScreen"));
  show($("categoryScreen"));

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
}

// Globals für onclick
window.toggleInfo = toggleInfo;
window.overlayClickClose = overlayClickClose;
window.selectCategory = selectCategory;
window.createNameInputs = createNameInputs;
window.startRound = startRound;
window.revealWord = revealWord;
window.nextPlayer = nextPlayer;
window.restartGame = restartGame;
window.endGame = endGame;
