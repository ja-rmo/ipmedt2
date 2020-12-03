const eindvraag = document.getElementsByClassName('eindvraag');
const link = document.getElementsByClassName('eindvraag__link');

console.log(link);

function showButtons() {
    setTimeout(function () {
        link[0].style.animationName = "fadeIn";
        link[0].style.opacity = "1";
        link[1].style.animationName = "fadeIn";
        link[1].style.opacity = "1";
    }, 5000);
}

showButtons();

function meerInformatieButton() {
    eindvraag[0].style.animationName = "fadeOut";
    eindvraag[0].style.opacity = "0";
    setTimeout(function () {
        window.location.href = "kinderarbeid.html";
    }, 1500);
}

function terugNaarBeginButton() {
    eindvraag[0].style.animationName = "fadeOut";
    eindvraag[0].style.opacity = "0";
    setTimeout(function () {
        window.location.href = "index.html";
    }, 1500);
}

