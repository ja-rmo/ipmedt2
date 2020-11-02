window.onload = function() {
  showAndHideContent("js--start1", "js--start1");
  const start1 = document.getElementById("js--start1");
  const start2 = document.getElementById("js--start2");
  const start3 = document.getElementById("js--start3");
  const start4 = document.getElementById("js--start4");
  const startEnd = document.getElementById("js--startEnd");
  var style1 = getComputedStyle(start1);
  var style2 = getComputedStyle(start2);
  var style3 = getComputedStyle(start3);
  var style4 = getComputedStyle(start4);
  var styleEnd = getComputedStyle(startEnd);
  document.onclick = function() {
    if (style1.display === "block") {
      showAndHideContent("js--start1", "js--start2");
    } else if (style2.display === "block") {
      showAndHideContent("js--start2", "js--start3");
    } else if (style3.display === "block") {
      showAndHideContent("js--start3", "js--start4");
    } else if (style4.display === "block") {
      showAndHideContent("js--start4", "js--startEnd");
    }
  }
}

//while (true) {

//}

function showAndHideContent(contentHide, contentShow) {
  document.getElementById(contentHide).style.display = "none";
  document.getElementById(contentShow).style.display = "block";
}
