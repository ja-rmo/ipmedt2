const speed = 50;

window.onload = function() {
  const keyboard = document.getElementById("js--keyboard");
  keyboard.onclick = function() {
  typeWriter('test', 'Je loopt naar binnen bij Nokia en vraagt naar Arja Suominen');}
  typeWriter("test2", "zou u zich even willen aanmelden?");
}

function typeWriter(id, txt, i=0) {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed, id, txt, i);
  }
}
