let dialogText = document.getElementById('js--dialogText');
let verderKnop = document.getElementById('js--verderKnop');
let terugKnop = document.getElementById('js--terugKnop');
let currentPage = document.getElementById('js--currentPage');
let marktButton = document.getElementById('js--marktButton');
let chanceButton = document.getElementById('js--chanceButton');

var onderwegCounter = 1;
marktButton.style.display = "none";
chanceButton.style.display = "none";

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
        dialogText.innerHTML = 'Je bent in Walikale aangekomen na een schokkerige vlucht. Je weet dat je naar de mijn in Bisie moet om met eigen ogen te zien wat er daar gebeurt, maar voordat je daarheen kan moet je eerst toestemming hebben van de lokale autoriteiten. Het is nu echter weekend en je moet op maandag wachten totdat je toestemming kan vragen.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        onderwegCounter = 1;
        marktButton.style.display = "none";
        chanceButton.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 2) {
        dialogText.innerHTML = 'In de tussentijd loop je wat rond in Walikale, je ziet daar een markt en heel veel mensen die aan het werk zijn. Het is er super druk maar je loopt toch even naar het begin van de markt. Daar vang je geruchten op dat er een jongen is weggerend van de mijn van Bisie, hij schijnt weer terug te zijn in Walikale.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        onderwegCounter = 2;
        marktButton.style.display = "none";
        chanceButton.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 3) {
        dialogText.innerHTML = 'Je bedenkt je dat het lekker is om even rond te neuzen op de markt, wat te eten en dan te gaan slapen, maar aan de andere kant is het fijn om een soort gids te hebben rondom de mijn als je daar naartoe gaat, als deze jongen met je mee zou willen. Wat doe je?';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        marktButton.style.display = "block";
        chanceButton.style.display = "block";
        console.log(onderwegCounter);
    }
};
