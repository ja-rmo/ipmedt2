const dialogs = [
{"id": "js--nokiaTextInput3.1", "dialog": "Het is vervelend dat de oplossing niet sneller komt, ik denk dat we als bedrijf en industrie zo hard mogelijk werken aan een oplossing."},
{"id": "js--nokiaTextInput3.2", "dialog": "Het ligt alleen niet aan de (mobiele) industrie alleen, wij kunnen dit als Nokia niet alleen oplossen, dit moet samen gebeuren met…"},
{"id": "js--nokiaTextInput3.3", "dialog": "Jullie zijn een van de 100 grootste bedrijven ter wereld, jullie hebben meer dan 100.000 werknemers, de grootste in de mobiele industrie."},
{"id": "js--nokiaTextInput3.4", "dialog": "Begin anders bij het openbaar maken van jullie leveranciers, waarom doen jullie dat niet?"},
{"id": "js--nokiaTextInput3.5", "dialog": "We zijn bezig met het betere transparantie, dit is alleen lastig..."},
{"id": "js--nokiaTextInput3.6", "dialog": "Hoe bedoel je het is lastig, jullie kunnen jullie leveranciers morgen al op de website plaatsen!"},
{"id": "js--nokiaTextInput3.7", "dialog": "Dat kunnen we niet doen, door nieuwe technologieën etcetera"},
{"id": "js--nokiaTextInput3.8", "dialog": "Dus door jullie doel van zo veel mogelijk winst behalen, de competitie verslaan, sterven er miljoenen, worden er duizenden vrouwen verkracht en nog meer?"},
{"id": "js--nokiaTextInput3.9", "dialog": "Dat zeg ik niet"},
{"id": "js--nokiaTextInput3.10", "dialog": "Dat klopt, alleen ik versimpel het voor je"},
{"id": "js--nokiaTextInput3.11", "dialog": "Klik hier om verder te gaan naar de volgende pagina"}
];
window.onload = loadPage

let speed = 60
let next = false

async function waitUserInput() {
  while (next === false)  {await sleep(50);
    document.getElementById("js--keyboard").onclick = function() {next = true;}
  } next = false;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function loadPage() {
  for (var i = 0; i < dialogs.length; i++) {
    if (document.getElementById(dialogs[i].id).classList.contains("js--not-automatic")) {
      document.getElementById(dialogs[i].id).parentElement.style.display = "block";
      document.getElementById(dialogs[i].id).parentElement.scrollIntoView({behavior: "smooth", alignToTop: true, inline: "nearest"})
      await waitUserInput();
      await loadDialog(dialogs[i])
    } else {
      document.getElementById(dialogs[i].id).parentElement.style.display = "block";
      await loadDialog(dialogs[i]);
    }
  }
}

async function loadDialog(dialog) {
  for (let letter of dialog.dialog) {
    document.getElementById(dialog.id).parentElement.scrollIntoView({behavior: "smooth", alignToTop: true, inline: "nearest"})
    document.getElementById(dialog.id).innerHTML += letter
    await sleep(speed)
  }
}
