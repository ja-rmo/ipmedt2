const dialogs = [
  {"id": "js--nokia1.1", "dialog": "Je loopt naar binnen bij Nokia en vraagt naar Arja Suominen"},
  {"id": "js--nokia1.2", "dialog": "zou u zich even willen aanmelden?"},
  {"id": "js--nokia1.3", "dialog": "Terwijl je al je informatie neerzet is de medewerker aan het bellen naar Arja"},
  {"id": "js--nokia1.4", "dialog": "Arja is de hele dag in een meeting, heb je een afspraak met haar?"},
  {"id": "js--nokia1.5", "dialog": "ja, een paar maanden geleden hebben we contact gehad, ze weet er van af"},
  {"id": "js--nokia1.6", "dialog": "dit kan ik overigens niet ondertekenen, dit zegt dat ik niet mag filmen, alleen dat is geen optie gezien ik een documentaire maak"},
  {"id": "js--nokia1.7", "dialog": "Je moet het ondertekenen, anders kunnen we je niet toelaten in het pand"},
  {"id": "js--nokia1.8", "dialog": "Dan zal er een overeenkomst gemaakt moeten worden dat ik wel mag filmen"},
  {"id": "js--nokia1.9", "dialog": "Ik zal u anders even laten zien wat het precies betekent, kijk er staat hier dat je wel mag filmen, maar alleen op de momenten dat wij daar toestemming toe geven"},
  {"id": "js--nokia1.10", "dialog": "na een discussie wordt je naar een meetingroom genomen, hier wacht je op iemand die je vragen zal beantwoorden"}
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
      await waitUserInput();
      document.getElementById(dialogs[i].id).parentElement.style.display = "block";
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
