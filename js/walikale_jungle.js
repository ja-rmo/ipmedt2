let dialogText = document.getElementById('js--dialogText');
let verderKnop = document.getElementById('js--verderKnop');
let terugKnop = document.getElementById('js--terugKnop');
let currentPage = document.getElementById('js--currentPage');
let veiligeRoute = document.getElementById('js--veiligeRoute');
let normaleRoute = document.getElementById('js--normaleRoute');

veiligeRoute.style.display = "none";
normaleRoute.style.display = "none";
var onderwegCounter = 1;

terugKnop.onclick = function () {
    if (onderwegCounter === 2) {
        onderwegCounter = 1;
    }
    updateText();
};

verderKnop.onclick = function () {
    if (onderwegCounter === 1) {
        onderwegCounter = 2;
    }
    updateText();
};

updateText = function() {
    if (onderwegCounter === 1) {
        dialogText.innerHTML = 'Alle spullen worden gepakt, vervoer is geregeld en iedereen is er klaar voor. Met 5 scooters en 2 man per scooter gaan jullie op pad…';
        currentPage.innerHTML = onderwegCounter + ' / 2';
        onderwegCounter = 1;
        console.log(onderwegCounter);
    } else if (onderwegCounter === 2) {
        dialogText.innerHTML = 'Na een tocht van iets meer dan 2 dagen komen jullie op de plek aan waar de mensen van de mijn het bos uit komen. Zij vertellen je echter dat je beter een andere route kan nemen omdat er heel veel soldaten op het normale pad lopen. Welke route neem je?';
        currentPage.innerHTML = onderwegCounter + ' / 2';
        onderwegCounter = 2;
        console.log(onderwegCounter);
        veiligeRoute.style.display = 'block';
        normaleRoute.style.display = 'block';
    }
};
