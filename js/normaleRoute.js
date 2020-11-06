let dialogText = document.getElementById('js--dialogText');
let verderKnop = document.getElementById('js--verderKnop');
let terugKnop = document.getElementById('js--terugKnop');
let currentPage = document.getElementById('js--currentPage');
let verderButton = document.getElementById('js--verderButton');

let onderwegCounter = 1;
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
        dialogText.innerHTML = 'Je hebt ervoor gekozen om de normale route te nemen, nu maar hopen dat jullie niemand tegenkomen.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        onderwegCounter = 1;
        verderButton.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 2) {
        dialogText.innerHTML = 'Jullie komen de ene mijnwerker na de andere tegen. Allemaal hebben ze een zak met 50 kilo aan mineralen op hun rug. Elke 10 meter loopt er wel eentje en ze lopen erg snel achter elkaar aan. Dan valt je oog op de soldaat die midden op het pad staat. Het is nu te laat om terug te gaan, daar gaan jullie.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        onderwegCounter = 2;
        verderButton.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 3) {
        dialogText.innerHTML = 'Hij kijkt jullie aan en maakt aanstalte om jullie aan te spreken, maar het blijft bij een simpele begroeting. Je mag gewoon doorlopen? Weet hij iets dat jullie zelf nog niet weten?';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        verderButton.style.display = "block";
        console.log(onderwegCounter);
    }
};
