 var myVar;

function preloader() {
    myVar = setTimeout(showPage, 6000);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("content").style.transition = "all 0.9s ease";
  document.getElementById('content').style.visibility = 'visible';
  document.getElementById('content').style.position = 'relative';
  $("#panel_left").addClass("panel_left");
        $("#panel_right").addClass("panel_right");
}

// Event Section JS
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel_section_ncs');
  var instances = M.carousel_section_ncs.init(elems, {
    padding: 200,
  });
});

function moveNextCarousel() {
  var elems = document.querySelector('.carousel_section_ncs.carousel_section_ncs-slider');
  var moveRight = M.carousel_section_ncs.getInstance(elems);
  moveRight.next(1);
}
function movePrevCarousel() {
  var elems = document.querySelector('.carousel_section_ncs.carousel_section_ncs-slider');
  var moveLeft = M.carousel_section_ncs.getInstance(elems);
  moveLeft.prev(1);
}

