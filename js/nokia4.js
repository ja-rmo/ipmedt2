const dialogs = [
  {"id": "js--nokiaTextInput4.1", "dialog": "Ik denk niet dat de mensen die hier werken slecht zijn, dat ze denken dat het goed is dat er mensen zijn die lijden in Congo. Maar hoe dan ook, dit probleem is al 10 jaar bekend. Wat heeft Nokia gedaan sinds 2001?"},
  {"id": "js--nokiaTextInput4.2", "dialog": "We zijn aan het werk met de brancheorganisatie GeSI, dat is een conglomeraat van leveranciers. En we hebben een onderzoek als opdracht op gekregen."},
  {"id": "js--nokiaTextInput4.3", "dialog": "Daarnaast werken we samen met sommige NGO’s (niet gouvernementele organisaties) en we hebben overlegd met de leverancier van de materialen. Wat we in eerste instantie willen bereiken is het probleem duidelijk vastleggen, zodat we goed weten waar we moeten beginnen"},
  {"id": "js--nokiaTextInput4.4", "dialog": "Je hebt het nu over de eerste stap, terwijl dit probleem 10 jaar geleden naar boven kwam?"},
  {"id": "js--nokiaTextInput4.5", "dialog": "Ik heb het over de eerste stap voor de internationale branche, wij kunnen namelijk niet dit probleem alleen aanpakken. Dit probleem is heel erg wijd gespreid, maar ik denk wel dat deze film de juiste dingen onder de aandacht zal brengen."},
  {"id": "js--nokiaTextInput4.6", "dialog": "klik hier om verder te gaan met het verhaal in Congo"}
];
window.onload = loadPage

let speed = 60
let moveOn = false

async function waitUserInput() {
  while (moveOn === false)  {await sleep(50);
    document.getElementById("js--keyboard").onclick = function() {moveOn = true;}
  } moveOn = false;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function loadPage() {
  for (var i = 0; i < dialogs.length; i++) {
    if (document.getElementById(dialogs[i].id).classList.contains("js--not-automatic")) {
      document.getElementById(dialogs[i].id).parentElement.style.display = "block";
      document.getElementById(dialogs[i].id).parentElement.scrollIntoView({behavior: "smooth", alignToTop: true, inline: "nearest"})
      await keyboardloadDialog(dialogs[i])
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
async function keyboardloadDialog(dialog) {

  for (let letter of dialog.dialog) {
    while (dialog.dialog.indexOf(letter) < dialog.dialog.length) {

      for (let i = 0; i<3;i++){
        await waitUserInput()
        for (let letter of dialog.dialog) {
          
          document.getElementById(dialog.id).parentElement.scrollIntoView({behavior: "smooth", alignToTop: true, inline: "nearest"})
          document.getElementById(dialog.id).innerHTML += letter
          await sleep(speed)
        }
      }
    }
  }
}
