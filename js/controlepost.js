let dialogText = document.getElementById('js--dialogText');
let verderKnop = document.getElementById('js--verderKnop');
let terugKnop = document.getElementById('js--terugKnop');
let currentPage = document.getElementById('js--currentPage');
let verderButton = document.getElementById('js--verderButton');

var onderwegCounter = 1;
verderButton.style.display = "none";

terugKnop.onclick = function () {
    if (onderwegCounter === 2) {
        onderwegCounter = 1;
    } else if (onderwegCounter === 3) {
        onderwegCounter = 2;
    }
    updateText();
};

verderKnop.onclick = function () {
    if (onderwegCounter === 1) {
        onderwegCounter = 2;
    } else if (onderwegCounter === 2) {
        onderwegCounter = 3;
    }
    updateText();
};

updateText = function() {
    if (onderwegCounter === 1) {
        dialogText.innerHTML = 'Jullie komen in de buurt van de mijn. Ondertussen zijn jullie heel veel mensen tegen gekomen die stuk voor stuk mineralen vervoeren. Je bent op het standaard pad gekomen nadat je de omweg genomen hebt. Jullie stoppen een klein stukje van tevoren omdat je een controlepost ziet staan.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        onderwegCounter = 1;
        verderButton.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 2) {
        dialogText.innerHTML = 'Er is geen weg omheen dus jullie moeten er wel langs, alleen je hebt geen idee hoe ze gaan reageren.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        onderwegCounter = 2;
        verderButton.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 3) {
        dialogText.innerHTML = 'Wanneer jullie aankomen bij de controlepost wordt er in een andere taal uitgelegd wie je bent en wat je komt doen. De groep met wie je reist geeft aan dat je alle toestemming hebt om door te mogen en een documentaire te maken. De controle post laat je gelukkig door gaan.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        verderButton.style.display = "block";
        console.log(onderwegCounter);
    }
};
