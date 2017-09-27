/* 
  Based on Andreas Storm work
  URL: http://codepen.io/andreasstorm/pen/duBpt
*/
$(document).ready(function() {
    var $input = $('.form-fieldset > input');
    $input.blur(function(e) {
        $(this).toggleClass('filled', !!$(this).val());
    });
    var submitBtn = $('.form input[type=submit]');
    submitBtn.on("click", function() {
        if ($('.form:valid').length > 0) {
            console.log('valid');
        }
    })
})