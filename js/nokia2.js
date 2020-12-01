const dialogs = [
  {"id": "js--nokiaTextInput2.1", "dialog": "We zijn sinds 2001 bezig met dit probleem, dat het materiaal coltan uit congo gemaakt kan worden tot tantalum, wat weer gebruikt wordt in mobiele telefoons"},
  {"id": "js--nokiaTextInput2.2", "dialog": "Hierna zijn we naar onze leveranciers gegaan en hebben toen gevraagd of ze kunnen traceren waar de mineralen vandaan komen?"},
  {"id": "js--nokiaTextInput2.3", "dialog": "We kwamen er alleen snel achter dat er een grote uitdaging is in het traceren van de mineralen, je kunt niet de mineralen labelen"},
  {"id": "js--nokiaTextInput2.4", "dialog": "U zegt nu dus dat we de mineralen niet kunnen traceren, alleen Duitse onderzoekers hebben bewezen van wel"},
  {"id": "js--nokiaTextInput2.5", "dialog": "Dat hebben wij nog niet vernomen, we zullen er mee aan de slag gaan"},
  {"id": "js--nokiaTextInput2.6", "dialog": "Verder kunnen wij er moeilijk voor zorgen dat onze vraag naar helderheid in de supply chain ook volledig door komt"},
  {"id": "js--nokiaTextInput2.7", "dialog": "Het is een serieus probleem, we hopen dat er een oplossing komt waardoor wij veilig kunnen zeggen dat onze leveranciers verantwoordelijk zijn"},
  {"id": "js--nokiaTextInput2.8", "dialog": "Klik hier om verder te gaan naar de volgende pagina"}
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
