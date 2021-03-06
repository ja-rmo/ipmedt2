let dialogText = document.getElementById('js--dialogText');
let verderKnop = document.getElementById('js--verderKnop');
let terugKnop = document.getElementById('js--terugKnop');
let currentPage = document.getElementById('js--currentPage');
let verderButton = document.getElementById('js--verderButton');
let erts = document.getElementById('img-mine_cassiterite');
let newErts = document.getElementById('img-mine_cassiterite_2');

var onderwegCounter = 1;
let ertsClick = 0;
erts.style.display = "none";

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

erts.onclick = function() {
    ertsClick++;
    console.log(ertsClick);
    if (ertsClick === 10 ) {
        erts.style.display = "none";
        newErts.style.display = "block";
        console.log("Steen val");
        dialogText.innerHTML = 'Je hebt een stuk cassiteriet losgehakt, je hebt genoeg gezien. Je wil zo snel mogelijk weer naar boven. En dan te bedenken dat de mensen hier soms onafgebroken een week lang onder de grond zitten… Neem je het stuk erts mee?';
        terugKnop.style.display = "none";
        currentPage.style.display = "none";
        verderKnop.style.display = "none";
    }
};

newErts.onclick = function() {
    window.location.href = "kinderarbeid.html";
};

updateText = function() {
    if (onderwegCounter === 1) {
        dialogText.innerHTML = 'Hoe zou het zijn om in deze al enorm warme tunnels ook nog eens hard te moeten werken? Je besluit om Chance een beetje te helpen.';
        currentPage.innerHTML = onderwegCounter + ' / 2';
        onderwegCounter = 1;
        console.log(onderwegCounter);
    } else if (onderwegCounter === 2) {
        dialogText.innerHTML = 'Tik meerdere keren op het lichtere stuk steen om deze los te hakken.';
        currentPage.innerHTML = onderwegCounter + ' / 2';
        onderwegCounter = 2;
        if (ertsClick < 10) {
            erts.style.display = "block";
        }
        console.log(onderwegCounter);
    }
};
