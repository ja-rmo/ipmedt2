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
        dialogText.innerHTML = 'Nadat je bovengronds alles hebt gezien en hoe vreselijk het moet zijn om hier te leven, ga je met een groepje de mijn in. Daar is het nog erger, je begeeft je door tunnels van 1 meter doorsnede en het duurt een paar uur voordat je helemaal beneden bent.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        onderwegCounter = 1;
        verderButton.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 2) {
        dialogText.innerHTML = 'Omdat je alles wil vastleggen heb je je filmcamera met je mee, maar je kan geen meter verder kruipen voordat er weer mensen zijn die het er niet mee eens zijn en vinden dat ze geld moeten krijgen omdat je hier filmt.';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        onderwegCounter = 2;
        verderButton.style.display = "none";
        console.log(onderwegCounter);
    } else if (onderwegCounter === 3) {
        dialogText.innerHTML = 'Naarmate je verder de mijn in gaat wordt het warmer en warmer en zijn er steeds meer werkers. Chance laat je zien hoe je een stuk mineraal uithakt met een pikhouweel, maar hij is een goed half uur bezig voor een stuk wat lijkt op maar een halve kilo. ';
        currentPage.innerHTML = onderwegCounter + ' / 3';
        verderButton.style.display = "block";
        console.log(onderwegCounter);
    }
};
