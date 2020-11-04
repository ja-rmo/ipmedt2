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
        dialogText.innerHTML = 'Je kiest voor de veilige route, dus jullie rijden nog 2 uur verder op de scooter. Vervolgens zijn jullie van de scooter afgestapt en lopen jullie richting de mijn.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        onderwegCounter = 1;
        verderButton.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 2) {
        dialogText.innerHTML = 'Je denkt tijdens de trek door het bos erover na dat de mensen hier 90 kilometer lopen in twee dagen om van de mijn naar het dorp te komen. En of dat nog niet erg genoeg was hebben ze elk ook nog eens zakken met 50 kilogram aan mineralen op hun rug.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        onderwegCounter = 2;
        verderButton.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 3) {
        dialogText.innerHTML = 'Ben jij even blij dat je alleen je rugzak mee hebt…';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        verderButton.style.display = "block";
        console.log(onderwegCounter);
    }
};
