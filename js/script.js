var myVar;

function preloader() {
  myVar = setTimeout(showPage, 6000);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("content").style.transition = "all 0.9s ease";
  document.getElementById("content").style.display = "block";
  $("#panel_left").addClass("panel_left");
  $("#panel_right").addClass("panel_right");
}
