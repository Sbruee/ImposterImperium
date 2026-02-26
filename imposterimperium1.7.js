// =============================
// KATEGORIEN
// =============================
let selectedCategories = [];


// =============================
// WORTLISTEN
// =============================

// ⚽ FUSSBALL (deine Liste, unverändert)
const footballWords = [
  { word: "Lamine Yamal", spy: "Ansu Fati", tip: "Talent" },
  { word: "Cristiano Ronaldo", spy: "Lionel Messi", tip: "Portugal" },
  { word: "Lionel Messi", spy: "Cristiano Ronaldo", tip: "Argentinien" },
  { word: "Kylian Mbappé", spy: "Vinícius Júnior", tip: "Schnelligkeit" },
  { word: "Erling Haaland", spy: "Harry Kane", tip: "Torjäger" },
  { word: "Robert Lewandowski", spy: "Karim Benzema", tip: "Faust" },
  { word: "Neymar", spy: "Ronaldinho", tip: "5" },
  { word: "Kevin De Bruyne", spy: "Bruno Fernandes", tip: "Assists" },
  { word: "Mohamed Salah", spy: "Sadio Mané", tip: "König" },
  { word: "Sadio Mané", spy: "Mohamed Salah", tip: "Kabine" },
  { word: "Harry Kane", spy: "Erling Haaland", tip: "titellos" },
  { word: "Karim Benzema", spy: "Robert Lewandowski", tip: "Band" },
  { word: "Virgil van Dijk", spy: "Ibrahima Konate", tip: "TOTY" },
  { word: "Jan Oblak", spy: "Samir Handanovič", tip: "Torwart" },
  { word: "Joshua Kimmich", spy: "Leon Goretzka", tip: "6" },
  { word: "Marco Reus", spy: "Julian Brandt", tip: "Cover" },
  { word: "Son Heung-min", spy: "Yang Min Hyeug", tip: "Hamburg" },
  { word: "Luka Modrić", spy: "Casemiro", tip: "Kapitän" },
  { word: "Toni Kroos", spy: "Luka Modrić", tip: "Passspiel" },
  { word: "Trent Alexander-Arnold", spy: "Achraf Hakimi", tip: "Flanke" },
  { word: "Alisson Becker", spy: "Ederson", tip: "Brasilien" },
  { word: "Sergio Ramos", spy: "Pepe", tip: "brutal" },
  { word: "Paulo Dybala", spy: "Kenan Yildiz", tip: "Jubel" },
  { word: "Zlatan Ibrahimović", spy: "Hulk", tip: "stark" },
  { word: "Gianluigi Donnarumma", spy: "Gianluigi Buffon", tip: "Mario" },
  { word: "Romelu Lukaku", spy: "Victor Osimhen", tip: "wandern" },
  { word: "Jadon Sancho", spy: "Antony", tip: "wasted Talent" },
  { word: "Phil Foden", spy: "Jack Grealish", tip: "Tattoo" },
  { word: "Raheem Sterling", spy: "Marcus Rashford", tip: "Laufen" },
  { word: "Joshua Zirkzee", spy: "Rasmus Højlund", tip: "Downfall" },
  { word: "Frenkie de Jong", spy: "Quinten Timber", tip: "Bruder" },
  { word: "Matthijs de Ligt", spy: "Raphaël Varane", tip: "Grätschen" },
  { word: "Christian Pulisic", spy: "Sergiño Dest", tip: "USA" },
  { word: "Ansu Fati", spy: "Lamine Yamal", tip: "wasted Talent" },
  { word: "Pedri", spy: "Gavi", tip: "magisch" },
  { word: "Vinícius Júnior", spy: "Kylian Mbappé", tip: "overrated" },
  { word: "Philippe Coutinho", spy: "João Félix", tip: "teuer" },
  { word: "Gerard Piqué", spy: "Carles Puyol", tip: "King" },
  { word: "Ederson", spy: "Alisson Becker", tip: "Brasilien" },
  { word: "Raphaël Varane", spy: "Samuel Umtiti", tip: "2018" },
  { word: "Ciro Immobile", spy: "Lorenzo Insigne", tip: "Italien" },
  { word: "Dominik Szoboszlai", spy: "Florian Wirtz", tip: "Traumtore" },
  { word: "Leroy Sané", spy: "Kingsley Coman", tip: "Ragebait" },
  { word: "Kingsley Coman", spy: "Leroy Sané", tip: "verletzungsanfällig" },
  { word: "Kai Havertz", spy: "Julian Brandt", tip: "Deutschland" },
  { word: "Antonio Rüdiger", spy: "Jonathan Tah", tip: "Verrückt" },
  { word: "Nicolò Barella", spy: "Jorginho", tip: "Italien" },
  { word: "Marco Asensio", spy: "Isco", tip: "Real" },
  { word: "Rodri", spy: "Xavi", tip: "Ballon Dor" },
  { word: "Mason Mount", spy: "Kobie Mainoo", tip: "England" },
  { word: "Jorginho", spy: "Nicolò Barella", tip: "Italien" },

  // 50 NEUE (Trainer + Talente)
  { word: "Jude Bellingham", spy: "Jamal Musiala", tip: "Loch" },
  { word: "Jamal Musiala", spy: "Florian Wirtz", tip: "10er" },
  { word: "Florian Wirtz", spy: "Jamal Musiala", tip: "Talent" },
  { word: "Bukayo Saka", spy: "Gabriel Martinelli", tip: "schnell" },
  { word: "Bernardo Silva", spy: "Kevin De Bruyne", tip: "Technik" },
  { word: "Antoine Griezmann", spy: "Karim Benzema", tip: "Flop" },
  { word: "Victor Osimhen", spy: "Romelu Lukaku", tip: "Corona" },
  { word: "Khvicha Kvaratskhelia", spy: "Neymar", tip: "Stutzen" },
  { word: "Achraf Hakimi", spy: "Trent Alexander-Arnold", tip: "Madrid" },
  { word: "Theo Hernández", spy: "Joao Cancelo", tip: "Geld" },
  { word: "Declan Rice", spy: "Jude Bellingham", tip: "Real Madrid" },
  { word: "Martin Ødegaard", spy: "Antonio Nusa", tip: "Haaland" },
  { word: "Rafael Leão", spy: "Khvicha Kvaratskhelia", tip: "lustig" },
  { word: "Gavi", spy: "Pedri", tip: "Mentality" },
  { word: "João Félix", spy: "Philippe Coutinho", tip: "wasted Talent" },
  { word: "Darwin Núñez", spy: "Joshua Zirkzee", tip: "Geld" },
  { word: "Marcus Rashford", spy: "Antony", tip: "Comeback" },
  { word: "Bruno Fernandes", spy: "Kevin De Bruyne", tip: "Kapitän" },
  { word: "Thomas Müller", spy: "Marco Reus", tip: "Raumdeuter" },
  { word: "Manuel Neuer", spy: "Jerome Boateng", tip: "Legende" },
  { word: "Ilkay Gündogan", spy: "Manuel Akanji", tip: "BVB" },
  { word: "Xavi Simons", spy: "Yan Diomande", tip: "teuer" },
  { word: "Lennart Karl", spy: "Jamal Musiala", tip: "Talent" },
  { word: "Rodrigo Mora", spy: "Geovany Quenda", tip: "Talent" },
  { word: "Assan Ouedraogo", spy: "Lennart Karl", tip: "gross" },

  { word: "Pep Guardiola", spy: "Mikel Arteta", tip: "Tiki-Taka" },
  { word: "Jürgen Klopp", spy: "Thomas Tuchel", tip: "Comeback" },
  { word: "Carlo Ancelotti", spy: "Zinedine Zidane", tip: "Augenbraue" },
  { word: "Thomas Tuchel", spy: "Jürgen Klopp", tip: "Taktik" },
  { word: "Zinedine Zidane", spy: "Carlo Ancelotti", tip: "glatt" },
  { word: "Diego Simeone", spy: "José Mourinho", tip: "Schwein" },
  { word: "Mikel Arteta", spy: "Pep Guardiola", tip: "Guardiola" },
  { word: "Erik ten Hag", spy: "Julian Nagelsmann", tip: "kurz" },
  { word: "Hansi Flick", spy: "Julian Nagelsmann", tip: "Triple" },
  { word: "Julian Nagelsmann", spy: "Hansi Flick", tip: "Hammer" },
  { word: "Luis Enrique", spy: "Unai Emery", tip: "American Football" },
  { word: "Xabi Alonso", spy: "Carlo Ancelotti", tip: "Real" },
  { word: "Didier Deschamps", spy: "Luis Enrique", tip: "WM" },
  { word: "Sir Alex Ferguson", spy: "José Mourinho", tip: "Aura" },
  { word: "Unai Emery", spy: "Luis Enrique", tip: "Clip" },
  { word: "Vincent Kompany", spy: "Julian Nagelsmann", tip: "underrated Transfer" },
  { word: "Edin Terzić", spy: "Marco Reus", tip: "Magisch" },
  { word: "Sebastian Hoeneß", spy: "Vincent Kompany", tip: "Cap" },
  { word: "Oliver Glasner", spy: "Unai Emery", tip: "Kristall" },
  { word: "José Mourinho", spy: "Diego Simeone", tip: "Europa League" },
  { word: "Leo von Hammel", spy: "Haribo Kane", tip: "langsam" }
];



// ♾️ ALLGEMEIN – 150 (wie eure Liste)
const generalWords = [
  { word: "Zeit", spy: "Zukunft", tip: "läuft" },
  { word: "Freiheit", spy: "Respekt", tip: "unbezahlbar" },
  { word: "Chaos", spy: "Sturm", tip: "verwirrt" },
  { word: "Energie", spy: "Sport", tip: "Kraft" },
  { word: "Geduld", spy: "Stille", tip: "Wartezimmer" },
  { word: "Schlüssel", spy: "Tür", tip: "öffnen" },
  { word: "Schatten", spy: "Mond", tip: "dunkel" },  // falls du "Dunkelheit" nicht willst: nimm "Mond"
  { word: "Erinnerung", spy: "Traum", tip: "Vergangenheit" }, // passt thematisch, wenn zu ähnlich: "Traum"
  { word: "Traum", spy: "Erinnerung", tip: "Schlaf" },
  { word: "Spiegel", spy: "Fenster", tip: "Reflexion" },
  { word: "Angst", spy: "schüchtern", tip: "Gefühl" },
  { word: "Hoffnung", spy: "Erwartungsvoll", tip: "Zukunft" },
  { word: "Feuer", spy: "Kamin", tip: "Temperatur" },
  { word: "Wasser", spy: "Regen", tip: "wichtig" },
  { word: "Sturm", spy: "Wind", tip: "Ruhe" },
  { word: "Stille", spy: "Bibliothek", tip: "Klausur" },
  { word: "Lüge", spy: "Geheimnis", tip: "falsch" },
  { word: "Wahrheit", spy: "ehrlich", tip: "Geständnis" }, // wenn zu nah: "Geheimnis"
  { word: "Zufall", spy: "Glück", tip: "unvorhersebar" },     // falls "Glück" nicht willst: "Abenteuer"
  { word: "Ordnung", spy: "Polizei", tip: "Strukturierung" }, // wenn zu nah: "Polizei"

  { word: "Schule", spy: "Prüfung", tip: "lernen" },
  { word: "Hausaufgaben", spy: "Schule", tip: "nervig" },
  { word: "Ferien", spy: "Urlaub", tip: "frei" },
  { word: "Lehrer", spy: "Chef", tip: "Zimmer" },
  { word: "Prüfung", spy: "Noten", tip: "stressig" },
  { word: "Noten", spy: "Prüfung", tip: "wichtig" },
  { word: "Buch", spy: "Bibliothek", tip: "Lampe" },
  { word: "Film", spy: "Serie", tip: "Abends" },
  { word: "Serie", spy: "Film", tip: "Mörder" },
  { word: "Musik", spy: "Konzert", tip: "laufen" },
  { word: "Konzert", spy: "Party", tip: "live" },
  { word: "Party", spy: "Konzert", tip: "Alkohol" },
  { word: "Freundschaft", spy: "Respekt", tip: "Vertrauen" },
  { word: "Liebe", spy: "Freundschaft", tip: "Schokolade" },
  { word: "Lachen", spy: "fröhlich", tip: "Witz" }, // wenn du "Witz" nicht in der Liste hast: nimm "Party"
  { word: "Tränen", spy: "Angst", tip: "Freude" },
  { word: "Wut", spy: "Eifersucht", tip: "laut" },
  { word: "Mut", spy: "Respekt", tip: "trauen" },
  { word: "Eifersucht", spy: "Wut", tip: "gefährlich" },
  { word: "Respekt", spy: "Mut", tip: "stolz" },

  { word: "Handy", spy: "Internet", tip: "Technik" },
  { word: "Internet", spy: "WLAN", tip: "online" },
  { word: "App", spy: "Browser", tip: "vielfältig" },
  { word: "Passwort", spy: "Geheimnis", tip: "wichtig" },
  { word: "Kamera", spy: "Video", tip: "alt" },
  { word: "Video", spy: "Kamera", tip: "lang" },
  { word: "Kopfhörer", spy: "Lautstärke", tip: "Geräusch" },
  { word: "Lautstärke", spy: "Kopfhörer", tip: "+" },
  { word: "Akku", spy: "Powerbank", tip: "kaputt" },
  { word: "WLAN", spy: "LAN Kabel", tip: "Passwort" },

  { word: "Auto", spy: "Bulli", tip: "lenken" },
  { word: "Bus", spy: "Zug", tip: "Hupe" },
  { word: "Zug", spy: "Stau", tip: "spät" },
  { word: "Fahrrad", spy: "E-Roller", tip: "lenken" },
  { word: "Flugzeug", spy: "Hubschrauber", tip: "groß" },
  { word: "Koffer", spy: "Handtasche", tip: "Weltreise" },
  { word: "Urlaub", spy: "Ferien", tip: "Berge" },
  { word: "Hotel", spy: "Camping", tip: "Sterne" },
  { word: "Camping", spy: "Hotel", tip: "Holz" },
  { word: "Karte", spy: "Pfadfinder", tip: "Kompass" }, // "Kompass" ist nicht in deiner Liste – wenn du willst, ersetze spy durch "Karte" -> "Weltreise" oder "Koffer"

  { word: "Pizza", spy: "Pasta", tip: "vielfältig" },
  { word: "Burger", spy: "Pommes", tip: "Turm" },
  { word: "Pommes", spy: "Burger", tip: "Salz" },
  { word: "Döner", spy: "Dönerspieß", tip: "halber Mond" },
  { word: "Pasta", spy: "Spaghetti", tip: "Pizza" },
  { word: "Schokolade", spy: "Vanille", tip: "herzhaft" },
  { word: "Eis", spy: "Eiswürfel", tip: "kalt" },
  { word: "Kaffee", spy: "Tee", tip: "wach" },
  { word: "Tee", spy: "Kaffee", tip: "warm" },
  { word: "Wasserflasche", spy: "Glas Wasser", tip: "Sport" },

  { word: "Sonne", spy: "Licht", tip: "hell" },
  { word: "Mond", spy: "Stern", tip: "dunkel" },
  { word: "Stern", spy: "Mond", tip: "5" },
  { word: "Regen", spy: "Gewitter", tip: "nervig" },
  { word: "Schnee", spy: "Kälte", tip: "kühl" },
  { word: "Wind", spy: "Sturm", tip: "Meer" },
  { word: "Wolke", spy: "Regen", tip: "grau" },
  { word: "Gewitter", spy: "Sturm", tip: "gefährlich" },
  { word: "Regenbogen", spy: "Sonne", tip: "Topf" },
  { word: "Wüste", spy: "Sand", tip: "Wasser" },

  { word: "Hund", spy: "Wolf", tip: "Treue" },
  { word: "Katze", spy: "Tiger", tip: "vorsichtig" },
  { word: "Vogel", spy: "Adler", tip: "Flug" },
  { word: "Fisch", spy: "Hai", tip: "Wasser" },
  { word: "Pferd", spy: "Esel", tip: "Fortbewegegungsmittel" },
  { word: "Kuh", spy: "Ziege", tip: "trinken" },
  { word: "Löwe", spy: "Elefant", tip: "König" },
  { word: "Elefant", spy: "Löwe", tip: "groß" },
  { word: "Biene", spy: "Fliege", tip: "Wiese" },
  { word: "Spinne", spy: "Floh", tip: "Faden" },

  { word: "Geld", spy: "Preis", tip: "lebenswichtig" },
  { word: "Bank", spy: "Geld", tip: "arbeiten" },
  { word: "Preis", spy: "Rabatt", tip: "einkaufen" },
  { word: "Rabatt", spy: "Preis", tip: "Magnet" },
  { word: "Einkauf", spy: "Supermarkt", tip: "Chip" },
  { word: "Supermarkt", spy: "Einkauf", tip: "Arbeit" },
  { word: "Rechnung", spy: "Preis", tip: "teuer" },
  { word: "Sparen", spy: "Bank", tip: "Bank" },
  { word: "Job", spy: "Chef", tip: "Supermarkt" },
  { word: "Chef", spy: "Job", tip: "Koch" },

  { word: "Arzt", spy: "Krankenhaus", tip: "Heilung" },
  { word: "Krankenhaus", spy: "Arzt", tip: "Notfall" },
  { word: "Pflaster", spy: "Medikament", tip: "weich" },
  { word: "Medikament", spy: "Pflaster", tip: "Kapsel" },
  { word: "Sport", spy: "Fitness", tip: "wichtig" },
  { word: "Fitness", spy: "Sport", tip: "Bewegung" },
  { word: "Laufen", spy: "Schwimmen", tip: "Bahn" },
  { word: "Schwimmen", spy: "Laufen", tip: "Meer" },
  { word: "Yoga", spy: "Schlaf", tip: "Ruhe" },
  { word: "Schlaf", spy: "Traum", tip: "Stunden" },

  { word: "Haus", spy: "Wohnung", tip: "leben" },
  { word: "Wohnung", spy: "Haus", tip: "teuer" },
  { word: "Tür", spy: "Schlüssel", tip: "Schlüsselbund" },
  { word: "Fenster", spy: "Spiegel", tip: "Sand" },
  { word: "Lampe", spy: "Sonne", tip: "lesen" },
  { word: "Bett", spy: "schlafen", tip: "weich" },
  { word: "Küche", spy: "Essen", tip: "Tisch" },
  { word: "Bad", spy: "Küche", tip: "Spiegelbild" },
  { word: "Schrank", spy: "Komode", tip: "Kleidung" }, // "Kleidung" nicht in deiner Liste – wenn du willst: spy "Schrank" -> "Wohnung"
  { word: "Fernbedienung", spy: "Telefon", tip: "Technik" },

  { word: "Stadt", spy: "Dorf", tip: "chaotisch" },
  { word: "Dorf", spy: "Stadt", tip: "ruhig" },
  { word: "Polizei", spy: "Feuerwehr", tip: "Ordnung" },
  { word: "Feuerwehr", spy: "Polizei", tip: "Hilfe" },
  { word: "Museum", spy: "Bibliothek", tip: "Paris" },
  { word: "Bibliothek", spy: "Museum", tip: "ruhig" },
  { word: "Park", spy: "Spielplatz", tip: "grün" },
  { word: "Spielplatz", spy: "Park", tip: "Sand" },
  { word: "Stau", spy: "Ampel", tip: "Zeit" },
  { word: "Ampel", spy: "Stau", tip: "warten" },

  { word: "Rätsel", spy: "Geheimnis", tip: "Spaß" },
  { word: "Geheimnis", spy: "Rätsel", tip: "versteckt" },
  { word: "Abenteuer", spy: "Magie", tip: "aufregend" },
  { word: "Magie", spy: "Abenteuer", tip: "Narbe" },
  { word: "Held", spy: "Bösewicht", tip: "gut" },
  { word: "Bösewicht", spy: "Held", tip: "Gegner" },
  { word: "Roboter", spy: "Alien", tip: "Technik" },
  { word: "Alien", spy: "Roboter", tip: "grün" },
  { word: "Universum", spy: "Zukunft", tip: "wir" },
  { word: "Zukunft", spy: "Zeit", tip: "morgen" }
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

  { word: "Clash Royale", spy: "Clash of Clans", tip: "Arena" },
  { word: "Hog Rider", spy: "Dark Prince", tip: "4 Elixier" },
  { word: "P.E.K.K.A", spy: "Mini P.E.K.K.A", tip: "Rüstung" },
  { word: "Mega Knight", spy: "Knight", tip: "Sprung" },
  { word: "Log", spy: "Barbarian Barrel", tip: "spitz" },
  { word: "Inferno Tower", spy: "Inferno Dragon", tip: "Tank" },
  { word: "Goblin Barrel", spy: "Goblin Drill", tip: "grün" },
  { word: "X-Bow", spy: "Cannon Cart", tip: "Belagerung" },
  { word: "Clan Wars", spy: "Clan", tip: "Boot" },
  { word: "Legendary", spy: "Champion", tip: "besonders" },
  { word: "Princess", spy: "Archer Queen", tip: "weit" },
  { word: "Miner", spy: "Fisherman", tip: "schnell" },
  { word: "Rocket", spy: "Lightning", tip: "hohes Elixier" },
  { word: "Freeze", spy: "Rage", tip: "Kombo" },
  { word: "Mirror", spy: "Clone", tip: "ein Elixier" },
  { word: "Elixir Collector", spy: "Elixirleiste", tip: "ein Elixir" },
  { word: "Electro Wizard", spy: "Electro Dragon", tip: "betäubt" },
  { word: "Bandit", spy: "Golden Knight", tip: "Dash" },
  { word: "Royal Giant", spy: "Electro Giant", tip: "Kugel" },
  { word: "Goblin Drill", spy: "Goblin Barrel", tip: "grün" },
  { word: "Champion", spy: "Legendary", tip: "Elixirkosten" },

  { word: "Skeleton Army", spy: "Skeletons", tip: "Schwerter" },
  { word: "Fireball", spy: "Poison", tip: "Fläche" },
  { word: "Zap", spy: "Tornado", tip: "reset" },
  { word: "Tornado", spy: "Zap", tip: "Bewegung" },
  { word: "Dark Prince", spy: "Guards", tip: "Schild" },
  { word: "Golden Knight", spy: "Bandit", tip: "Dash" },
  { word: "Monk", spy: "Golden Knight", tip: "Spiegel" },
  { word: "Electro Giant", spy: "Royal Giant", tip: "Brille" },
  { word: "Ice Spirit", spy: "Fire Spirit", tip: "lachen" },
  { word: "Fire Spirit", spy: "Ice Spirit", tip: "Sprung" },
  { word: "Battle Ram", spy: "Barbarians", tip: "gelb" },
  { word: "Royal Hogs", spy: "Hog Rider", tip: "fliegen" },
  { word: "Guards", spy: "Skeleton Army Evo", tip: "Rüstung" },
  { word: "Lava Hound", spy: "Balloon", tip: "langsam" },
  { word: "Balloon", spy: "Bomber", tip: "Knochen" },
  { word: "Cannon Cart", spy: "Sparky", tip: "rollt" },
  { word: "Goblin Gang", spy: "Goblins", tip: "Messer" },
  { word: "Barbarian Barrel", spy: "Barbarian Hut", tip: "gelb" },
  { word: "Three Musketeers", spy: "Royal Recruits", tip: "teuer" },
  { word: "Ice Golem", spy: "Golem", tip: "Tod" },
  { word: "Electro Dragon", spy: "Electro Spirit", tip: "Kette" },
  { word: "Baby Dragon", spy: "Inferno Dragon", tip: "Splash" },
  { word: "Inferno Dragon", spy: "Baby Dragon", tip: "fliegen" },
  { word: "Royal Recruits", spy: "Three Musketeers", tip: "Rüstung" },
  { word: "Rage", spy: "Freeze", tip: "schnell" },
  { word: "Poison", spy: "Graveyard", tip: "Totenkopf" },
  { word: "Graveyard", spy: "Skeleton Army", tip: "Tot" },
  { word: "Fisherman", spy: "Miner", tip: "schlagen" },
  { word: "Battle Healer", spy: "Heal Spirit", tip: "fliegt" },
  { word: "Phoenix", spy: "Baby Dragon", tip: "langsam" },

    { word: "Clash of Clans", spy: "Clash Royale", tip: "Mauern" },
  { word: "Rathaus", spy: "Clanburg", tip: "Level" },
  { word: "Barbaren", spy: "Bogenschützen", tip: "gelb" },
  { word: "Bogenschützen", spy: "Barbaren", tip: "Zwei" },
  { word: "Riese", spy: "Golem", tip: "tankt" },
  { word: "Drache", spy: "Inferno-Drache", tip: "fliegen" },
  { word: "Heiler", spy: "Battle Healer", tip: "Support" },
  { word: "Inferno-Drache", spy: "Drache", tip: "Tank" },
  { word: "Clankrieg", spy: "Clan Wars", tip: "Stars" },
  { word: "Juwelen", spy: "Gold", tip: "teuer" },
  { word: "Barbarenkönig", spy: "Großer Wächter", tip: "Schwert" },
  { word: "Bogenschützenkönigin", spy: "Barbarenkönig", tip: "unbesiegbar" },
  { word: "Großer Wächter", spy: "Bogenschützenkönigin", tip: "Aura" },
  { word: "Schiff", spy: "Builder Base", tip: "Ziel" },
  { word: "Clanburg", spy: "Rathaus", tip: "Verteidigung" },

    { word: "Brawl Stars", spy: "Clash Royale", tip: "OG" },
  { word: "Shelly", spy: "Bull", tip: "Busch" },
  { word: "Colt", spy: "Rico", tip: "Laser" },
  { word: "Spike", spy: "Moe", tip: "spitz" },
  { word: "Crow", spy: "Willow", tip: "nervig" },
  { word: "Leon", spy: "Alli", tip: "schnell" },
  { word: "Gem Grab", spy: "Hotzone", tip: "Mitte" },
  { word: "Solo-Showdown", spy: "Trio-Showdown", tip: "Wolken" },
  { word: "Mega Box", spy: "Brawlbox", tip: "OG" },
  { word: "El Primo", spy: "Rosa", tip: "Meme" },
  { word: "Grom", spy: "Dynamike", tip: "Bombe" },
  { word: "Mico", spy: "Surge", tip: "Sprung" },
  { word: "Sandy", spy: "Penny", tip: "Mütze" },
  { word: "Darryl", spy: "Griff", tip: "Holz" },
  { word: "Mandy", spy: "Piper", tip: "Meme" },
  { word: "Surge", spy: "Mico", tip: "Sprung" },
  { word: "Buzz", spy: "Fang", tip: "Rettung" },
  { word: "Fang", spy: "Chester", tip: "Tritt" },
  { word: "Piper", spy: "Mandy", tip: "Distanz" },
  { word: "Dynamike", spy: "Grom", tip: "Explosion" },
  { word: "Gene", spy: "Fisherman", tip: "ziehen" },
  { word: "Amber", spy: "Sandy", tip: "heiß" },
  { word: "Mortis", spy: "Kaze", tip: "Dash" },
  { word: "Frank", spy: "El Primo", tip: "Schlag" },
  { word: "Brawl Ball", spy: "Volley Brawl", tip: "Frank" }

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

// =============================
// KATEGORIE KONFIGURATION
// =============================
const categoryConfig = {
  football:   { spy: true },
  general:    { spy: true },
  supercell:  { spy: true },
  movies:     { spy: false }   // Filme/Serien ohne Spion
};

// 1.5: Spion + Modus
let roundMode = null;          // "two_imposters" | "imposter_spy" | "one_imposter"
let spyIndex = null;           // index im playOrder/currentPlayer index
let spyWord = null;            // abweichendes Spion-Wort



function $(id) { return document.getElementById(id); }
function show(el) { if (el) el.classList.remove("hidden"); }
function hide(el) { if (el) el.classList.add("hidden"); }

function isSpyAllowedByCategories() {
  // Spion ist NICHT erlaubt, wenn "movies" dabei ist
  return !selectedCategories.includes("movies");
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function hasSpyVariant(entry){
  return entry && typeof entry.spy === "string" && entry.spy.trim().length > 0;
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
// NEWS OVERLAY
// =============================
function toggleNews() {
  const overlay = $("newsOverlay");
  if (!overlay) return;
  overlay.classList.toggle("hidden");
}

function overlayClickCloseNews(e) {
  if (e.target && e.target.id === "newsOverlay") toggleNews();
}

// =============================
// Kategorien
// =============================
function categoryLabel(key){
  if (key === "football") return "Fußball";
  if (key === "general") return "Allgemein";
  if (key === "movies") return "Filme/Serien";
  if (key === "supercell") return "Supercell Games";
  return key;
}

function updateCategoryUI(){
  const info = $("selectedInfo");
  const btn = $("confirmCategoriesBtn");

  if (info){
    info.textContent = selectedCategories.length
      ? "Ausgewählt: " + selectedCategories.map(categoryLabel).join(", ")
      : "Ausgewählt: –";
  }

  if (btn){
    btn.disabled = selectedCategories.length === 0;
  }
}

function toggleCategory(category, buttonEl){
  const idx = selectedCategories.indexOf(category);

  if (idx > -1){
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
// NEU: Runden-Einstellungen Screen öffnen
// =============================
function openRoundSettings() {
  // Kategorien-Check
  if (!words || words.length === 0) {
    alert("Bitte zuerst Kategorien auswählen und bestätigen!");
    return;
  }

  // Spieleranzahl-Check
  playerCount = parseInt($("playerCount").value, 10);
  if (isNaN(playerCount) || playerCount < 3) {
    alert("Bitte Spieleranzahl und Spielernamen angeben!");
    return;
  }

  // Namensfelder müssen passen
  if ($("nameInputs").children.length !== playerCount) {
    alert("Bitte zuerst alle Spielernamen eingeben!");
    return;
  }

  // Namen sammeln & prüfen
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

  // Screen wechseln
  hide($("setupScreen"));
  show($("roundSettingsScreen"));

  // Buttons/Default je nach Spielerzahl
  initRoundSettingsUI();
}

// Zurück von Einstellungen zur Namenseingabe
function backToSetup(){
  hide($("roundSettingsScreen"));
  show($("setupScreen"));
}

// =============================
// NEU: RoundMode Auswahl + UI
// =============================
function initRoundSettingsUI(){
  const hint = $("roundSettingsHint");
  const info = $("roundModeInfo");

  const btnTwo = $("modeTwoImpostersBtn");
  const btnSpy = $("modeImposterSpyBtn");
  const btnOne = $("modeOneImposterBtn");

  // Auswahl reset
  [btnTwo, btnSpy, btnOne].forEach(b => b && b.classList.remove("selected"));

  // Default-Mode
  if (playerCount < 5){
    roundMode = "one_imposter"; // bei 3-4 automatisch
    if (hint) hint.textContent = "Bei 3–4 Spielern gibt es automatisch 1 Imposter.";
  } else {
    roundMode = "two_imposters"; // Standard ab 5
    if (hint) hint.textContent = "Wähle deinen Spielmodus für diese Runde.";
  }

  // Buttons aktivieren/deaktivieren sinnvoll
  if (btnTwo) btnTwo.disabled = playerCount < 5;
  if (btnSpy) btnSpy.disabled = playerCount < 5;   // Spion erst ab 5
  if (btnOne) btnOne.disabled = false;

  // Default selected markieren
  if (roundMode === "two_imposters" && btnTwo) btnTwo.classList.add("selected");
  if (roundMode === "imposter_spy" && btnSpy) btnSpy.classList.add("selected");
  if (roundMode === "one_imposter" && btnOne) btnOne.classList.add("selected");

  if (info){
    info.textContent = "Ausgewählt: " + prettyRoundMode(roundMode);
  }
}

function prettyRoundMode(mode){
  if (mode === "two_imposters") return "2 Imposter";
  if (mode === "imposter_spy") return "1 Imposter + 1 Spion";
  if (mode === "one_imposter") return "Nur 1 Imposter";
  return "–";
}

function setRoundMode(mode, buttonEl){
  // Guard
  if (mode === "two_imposters" && playerCount < 5){
    alert("2 Imposter ist erst ab 5 Spielern möglich!");
    return;
  }
  if (mode === "imposter_spy" && playerCount < 5){
    alert("Spion ist erst ab 5 Spielern möglich!");
    return;
  }

  roundMode = mode;

  // UI markieren
  document.querySelectorAll("#roundSettingsScreen .cat-btn.selected").forEach(b => b.classList.remove("selected"));
  if (buttonEl) buttonEl.classList.add("selected");

  const info = $("roundModeInfo");
  if (info) info.textContent = "Ausgewählt: " + prettyRoundMode(roundMode);
}

// =============================
// Runde starten (jetzt aus Runden-Einstellungen)
// =============================
function startRound() {

  // Safety: falls jemand startRound direkt irgendwie triggert
  if (!roundMode){
    // Wenn wir noch nicht im Settings-Screen waren:
    if (playerCount < 5) roundMode = "one_imposter";
    else roundMode = "two_imposters";
  }

  startNewRoundKeepingNames();

  hide($("roundSettingsScreen"));
  hide($("setupScreen"));
  show($("gameScreen"));
  hide($("finalScreen"));
}

// =============================
// Neue Runde (gleiche Namen) 1.5 ready: Modus + Spion
// =============================
function startNewRoundKeepingNames() {
  playOrder = shuffle(playerNames);

  // Wort wählen: für Spion-Modus brauchen wir (wenn möglich) eins mit spy
  if (roundMode === "imposter_spy"){
    // versuche ein Wort mit spy zu finden
    let picked = null;
    for (let tries = 0; tries < 60; tries++){
      const candidate = words[Math.floor(Math.random() * words.length)];
      if (hasSpyVariant(candidate)){
        picked = candidate;
        break;
      }
    }
    // fallback: wenn keines vorhanden ist
    if (!picked){
      alert("Für den Spion-Modus fehlen aktuell Spion-Wörter. Es wird mit 2 Impostern gespielt.");
      roundMode = "two_imposters";
      selectedWord = words[Math.floor(Math.random() * words.length)];
    } else {
      selectedWord = picked;
    }
  } else {
    selectedWord = words[Math.floor(Math.random() * words.length)];
  }

  // Rollen reset
  spyIndex = null;
  spyWord = null;

  // Imposter-Anzahl je nach Modus
  let imposterCount = 1;

  if (roundMode === "one_imposter") imposterCount = 1;
  if (roundMode === "two_imposters") imposterCount = (playerCount >= 5 ? 2 : 1);
  if (roundMode === "imposter_spy") imposterCount = 1;

  // Imposter wählen
  imposterIndexes = [];
  while (imposterIndexes.length < imposterCount) {
    const r = Math.floor(Math.random() * playerCount);
    if (!imposterIndexes.includes(r)) imposterIndexes.push(r);
  }

  // Imposter mit Tipp
  imposterWithTip = imposterIndexes[Math.floor(Math.random() * imposterIndexes.length)];

  // Spion wählen (nur im Spion-Modus)
  if (roundMode === "imposter_spy" && playerCount >= 5 && hasSpyVariant(selectedWord)) {
    spyWord = selectedWord.spy;

    let r;
    do {
      r = Math.floor(Math.random() * playerCount);
    } while (imposterIndexes.includes(r));
    spyIndex = r;
  }

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
  const isSpy = (spyIndex !== null && currentPlayer === spyIndex);

  if (isImposter) {
    roleEl.innerText = "IMPOSTER";
    roleEl.className = "imposter";
    wordEl.innerText =
      currentPlayer === imposterWithTip ? ("Tipp: " + selectedWord.tip) : "Kein Tipp!";
    } else if (isSpy) {
  // Spion merkt NICHT, dass er Spion ist:
    roleEl.innerText = "CREWMATE";
    roleEl.className = "crewmate";
    wordEl.innerText = spyWord;   // bekommt anderes Wort
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
  resetRevealUI();          // ✅ NEU: Reveal-UI vorbereiten
  showDiscussionStarter();
} else {
  showPlayer();
}
}

// =============================
// Diskussionsstarter
// =============================
function showDiscussionStarter() {
  const starterEl = $("starterText");
  if (!starterEl) return;

  const starter = playOrder[Math.floor(Math.random() * playOrder.length)];

  starterEl.textContent = "🎤 " + starter + " beginnt!";
  starterEl.classList.remove("hidden");

  setTimeout(() => {
    starterEl.style.opacity = "0";
    starterEl.style.transform = "scale(0.9)";
  }, 4500);

  setTimeout(() => {
    starterEl.textContent = "";
    starterEl.style.opacity = "";
    starterEl.style.transform = "";
  }, 5200);
}

// =============================
// 1.6 Brutal Reveal Animation
// =============================
function openRevealAnim(imposterNames, spyName){
  const overlay = $("revealAnimOverlay");
  const flash = $("revealFlash");
  const stage = $("revealStage");
  const knife = $("knifeAnim");
  const titleBlock = $("revealTitleBlock");
  const titleSpy = $("revealTitleSpy");
  const namesBox = $("revealNames");
  const btn = $("revealContinueBtn");

  // Fallback: wenn irgendwas fehlt -> direkt normal aufdecken
  if (!overlay || !stage || !knife || !namesBox || !btn || !flash || !titleBlock) {
    revealRolesFinalize();
    return;
  }

  // UI reset
  overlay.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");

  namesBox.innerHTML = "";
  namesBox.classList.add("hidden");
  btn.classList.add("hidden");

  titleBlock.classList.add("hidden");
  titleBlock.classList.remove("show");

  // SPION-Titel nur wenn vorhanden
  if (titleSpy) {
    if (spyName) titleSpy.classList.remove("hidden");
    else titleSpy.classList.add("hidden");
  }

  // Knife reset + Animation neu triggern
  knife.classList.remove("flyin", "slash");
  stage.classList.remove("shake");
  flash.classList.remove("flash");
  void knife.offsetWidth;

  // Start: fly in
  requestAnimationFrame(() => {
    knife.classList.add("flyin");

    // Impact + slash + flash + shake
    setTimeout(() => {
      knife.classList.remove("flyin");
      knife.classList.add("slash");

      flash.classList.add("flash");
      stage.classList.add("shake");

      setTimeout(()=> flash.classList.remove("flash"), 420);
      setTimeout(()=> stage.classList.remove("shake"), 420);
    }, 650);

    // Title pop
    setTimeout(() => {
      titleBlock.classList.remove("hidden");
      titleBlock.classList.add("show");
    }, 920);

    // Names pop
    setTimeout(() => {
      const lines = [];

      for (const n of imposterNames){
        lines.push({ name: n, cls: "imposter", icon: "🔴" });
      }
      if (spyName){
        lines.push({ name: spyName, cls: "spy", icon: "🟣" });
      }

      if (lines.length === 0){
        lines.push({ name: "Keine Sonderrollen aktiv.", cls: "", icon: "ℹ️" });
      }

      namesBox.classList.remove("hidden");

      lines.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "name " + (item.cls || "");
        div.style.animationDelay = (idx * 0.12) + "s";
        div.textContent = `${item.icon} ${item.name}`;
        namesBox.appendChild(div);
      });

      // Continue Button
      setTimeout(() => btn.classList.remove("hidden"), 400 + lines.length * 120);
    }, 1100);
  });
}

function closeRevealAnim(){
  const overlay = $("revealAnimOverlay");
  if (overlay){
    overlay.classList.add("hidden");
    overlay.setAttribute("aria-hidden", "true");
  }
  revealRolesFinalize();
}

function revealRolesFinalize(){
  const list = $("revealList");
  const btn = $("revealRolesBtn");
  const actions = $("afterRevealActions");

  if (!list || !btn || !actions) return;

  const imposterNames = (imposterIndexes || []).map(i => playOrder[i]).filter(Boolean);
  const spyName = (spyIndex !== null && spyIndex !== undefined) ? playOrder[spyIndex] : null;

  let html = "";

  if (imposterNames.length){
    for (const n of imposterNames){
      html += `
        <div class="line">
          <span class="name-imposter">🔴 ${n}</span>
          <span class="tag">IMPOSTER</span>
        </div>
      `;
    }
  }

  if (spyName){
    html += `
      <div class="line">
        <span class="name-spy">🟣 ${spyName}</span>
        <span class="tag">SPION</span>
      </div>
    `;
  }

  if (!html){
    html = `<div class="line"><span>Keine Sonderrollen aktiv.</span></div>`;
  }

  list.innerHTML = html;

  show(list);
  show(actions);
  hide(btn);
}

function revealRoles(){
  const imposterNames = (imposterIndexes || []).map(i => playOrder[i]).filter(Boolean);
  const spyName = (spyIndex !== null && spyIndex !== undefined) ? playOrder[spyIndex] : null;

  openRevealAnim(imposterNames, spyName);
}

function resetRevealUI(){
  const list = $("revealList");
  const btn = $("revealRolesBtn");
  const actions = $("afterRevealActions");

  if (list) { list.innerHTML = ""; hide(list); }
  if (actions) hide(actions);
  if (btn) show(btn);

  const overlay = $("revealAnimOverlay");
  if (overlay){
    overlay.classList.add("hidden");
    overlay.setAttribute("aria-hidden", "true");
  }
}


// =============================
// Neues Spiel (gleiche Namen)
// =============================
function restartGame() {
  startNewRoundKeepingNames();
  resetRevealUI();
  hide($("finalScreen"));
  show($("gameScreen"));

  const starterEl = $("starterText");
  if (starterEl) starterEl.textContent = "";
}

// =============================
// Spiel beenden (Reset)
// =============================
function endGame() {
  hide($("gameScreen"));
  hide($("finalScreen"));
  hide($("setupScreen"));
  hide($("roundSettingsScreen"));
  show($("categoryScreen"));
  resetRevealUI();
  

  const starterEl = $("starterText");
  if (starterEl) starterEl.textContent = "";

  $("nameInputs").innerHTML = "";
  $("playerCount").value = "";

  // Reset
  words = [];
  playerCount = 0;
  playerNames = [];
  playOrder = [];
  currentPlayer = 0;
  selectedWord = null;
  imposterIndexes = [];
  imposterWithTip = null;

  roundMode = null;
  spyIndex = null;
  spyWord = null;

  selectedCategories = [];
  updateCategoryUI();

  // Kategorie-UI reset
  document.querySelectorAll(".cat-btn.selected").forEach(b => b.classList.remove("selected"));
}


// =============================
// Neues Spiel (gleiche Namen)
// =============================
function restartGame() {
  startNewRoundKeepingNames();
  resetRevealUI();
  hide($("finalScreen"));
  show($("gameScreen"));

  const starterEl = $("starterText");
  if (starterEl) starterEl.textContent = "";
}

// =============================
// Spiel beenden (Reset)
// =============================
function endGame() {
  hide($("gameScreen"));
  hide($("finalScreen"));
  hide($("setupScreen"));
  hide($("roundSettingsScreen"));
  show($("categoryScreen"));
  resetRevealUI();
  

  const starterEl = $("starterText");
  if (starterEl) starterEl.textContent = "";

  $("nameInputs").innerHTML = "";
  $("playerCount").value = "";

  // Reset
  words = [];
  playerCount = 0;
  playerNames = [];
  playOrder = [];
  currentPlayer = 0;
  selectedWord = null;
  imposterIndexes = [];
  imposterWithTip = null;

  roundMode = null;
  spyIndex = null;
  spyWord = null;

  selectedCategories = [];
  updateCategoryUI();

  // Kategorie-UI reset
  document.querySelectorAll(".cat-btn.selected").forEach(b => b.classList.remove("selected"));
}

// =============================
// Globals für onclick
// =============================
window.toggleInfo = toggleInfo;
window.overlayClickClose = overlayClickClose;

window.toggleNews = toggleNews;
window.overlayClickCloseNews = overlayClickCloseNews;

window.toggleCategory = toggleCategory;
window.confirmCategories = confirmCategories;

window.createNameInputs = createNameInputs;
window.openRoundSettings = openRoundSettings;
window.backToSetup = backToSetup;

window.setRoundMode = setRoundMode;
window.startRound = startRound;

window.revealWord = revealWord;
window.nextPlayer = nextPlayer;
window.restartGame = restartGame;
window.endGame = endGame;
window.revealRoles = revealRoles;
window.closeRevealAnim = closeRevealAnim;

document.addEventListener("DOMContentLoaded", updateCategoryUI);
