document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel_section_ncs');
  var instances = M.carousel_section_ncs.init(elems, {
    indicators: true,
    padding: 200,
  });
});
// $('.moveNextcarousel_section_ncs').click(function(e){
//   e.preventDefault();
//   e.stopPropagation();
//   $('.carousel_section_ncs').carousel_section_ncs('next');
// });

// // move prev carousel_section_ncs
// $('.movePrevcarousel_section_ncs').click(function(e){
//   // e.preventDefault();
//   // e.stopPropagation();
//   $('.carousel_section_ncs').carousel_section_ncs('prev');
// });
