let dialogText = document.getElementById('js--dialogText');
let verderKnop = document.getElementById('js--verderKnop');
let terugKnop = document.getElementById('js--terugKnop');
let currentPage = document.getElementById('js--currentPage');
let opPadKnop = document.getElementById('js--opPadKnop');

var onderwegCounter = 1;
opPadKnop.style.display = "none";

terugKnop.onclick = function () {
    if (onderwegCounter === 2) {
        onderwegCounter = 1;
    } else if (onderwegCounter === 3) {
        onderwegCounter = 2;
    } else if (onderwegCounter === 4) {
        onderwegCounter = 3;
    }
    updateText();
};

verderKnop.onclick = function () {
    if (onderwegCounter === 1) {
        onderwegCounter = 2;
    } else if (onderwegCounter === 2) {
        onderwegCounter = 3;
    } else if (onderwegCounter === 3) {
        onderwegCounter = 4;
    }
    updateText();
};

updateText = function() {
    if (onderwegCounter === 1) {
        dialogText.innerHTML = 'Door alle geruchten die je op de markt gehoord hebt kom je er al snel achter waar deze jongen woont, hij heet Chance en is nu 16 jaar oud. Hij is op dit moment niet thuis, maar zijn moeder wel. Je loopt naar zijn moeder toe en vraagt haar om wat over Chance te vertellen.';
        currentPage.innerHTML = onderwegCounter + ' / 4';
        onderwegCounter = 1;
        opPadKnop.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 2) {
        dialogText.innerHTML = 'Zijn moeder vertelt je dat ze God enorm dankbaar is dat Chance weer naar huis is gekomen. Hij had 3 jaar geleden de droom om een eigen huis te bouwen, maar hij had geen geld. Daarom is hij in de mijn gaan werken, ook al was hij eigenlijk te jong.';
        currentPage.innerHTML = onderwegCounter + ' / 4';
        onderwegCounter = 2;
        opPadKnop.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 3) {
        dialogText.innerHTML = 'Chance heeft in 3 jaar tijd heel weinig geld verdient en daarom is hij weer terug gekomen. Je durft het eigenlijk niet maar je vraagt aan zijn moeder of hij je gids zou mogen zijn als je naar de mijn gaat. Ze wordt niet blij van de vraag, maar omdat je een documentaire maakt vindt ze het goed.';
        currentPage.innerHTML = onderwegCounter + ' / 4';
        opPadKnop.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 4) {
        dialogText.innerHTML = 'Chance gaat mee, je weet waar je heen moet. Het is ondertussen laat in de avond geworden en je hebt honger. Je besluit wat te gaan eten en daarna je slaapplek op te zoeken om de volgende dag naar de mijn te gaan.';
        currentPage.innerHTML = onderwegCounter + ' / 4';
        opPadKnop.style.display = "block";
    }
};
