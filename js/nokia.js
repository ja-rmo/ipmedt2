const dialogs = [
  {"id": "js--nokia1.1", "dialog": "Je loopt naar binnen bij Nokia en vraagt naar Arja Suominen"},
  {"id": "js--nokia1.2", "dialog": "Zou u zich even willen aanmelden?"},
  {"id": "js--nokia1.3", "dialog": "Terwijl je al je informatie neerzet is de medewerker aan het bellen naar Arja"},
  {"id": "js--nokia1.4", "dialog": "Arja is de hele dag in een meeting, heb je een afspraak met haar?"},
  {"id": "js--nokia1.5", "dialog": "Ja, een paar maanden geleden hebben we contact gehad, ze weet er van af"},
  {"id": "js--nokia1.6", "dialog": "Dit kan ik overigens niet ondertekenen, dit zegt dat ik niet mag filmen, alleen dat is geen optie gezien ik een documentaire maak"},
  {"id": "js--nokia1.7", "dialog": "Je moet het ondertekenen, anders kunnen we je niet toelaten in het pand"},
  {"id": "js--nokia1.8", "dialog": "Dan zal er een overeenkomst gemaakt moeten worden dat ik wel mag filmen"},
  {"id": "js--nokia1.9", "dialog": "Ik zal u anders even laten zien wat het precies betekent, kijk er staat hier dat je wel mag filmen, maar alleen op de momenten dat wij daar toestemming toe geven"},
  {"id": "js--nokia1.10", "dialog": "Na een discussie wordt je naar een meetingroom genomen, hier wacht je op iemand die je vragen zal beantwoorden"},
  {"id": "js--nokia1.11", "dialog": "Klik hier om verder te gaan naar de volgende pagina"}
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
