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
        dialogText.innerHTML = 'Chance laat je eerst bovengronds alles zien. Ze sliepen met z’n allen in tentjes en hele kleine hutten. Deze tenten zijn niet groter dan 10 vierkante meter en er moeten ongeveer 6 jongens van Chance zijn leeftijd in slapen.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        onderwegCounter = 1;
        verderButton.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 2) {
        dialogText.innerHTML = 'Je hoort dat er 5 jaar geleden nog jungle was hier, maar ondertussen werken er 10.000 tot 15.000 mensen in en rond de mijn waar jij bovenop staat.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        onderwegCounter = 2;
        verderButton.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 3) {
        dialogText.innerHTML = 'Bovengronds zie je allemaal mensen die puin aan het ruimen zijn en met zakken mineralen rondlopen. Hoe zou dit ondergronds zijn?';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        verderButton.style.display = "block";
        console.log(onderwegCounter);
    }
};
