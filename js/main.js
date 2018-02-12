$('.modal-background').hide();


$('#close').on('click', function() {
  $('.modal-background').fadeOut(300);
});
// Event for when the form is submitted

$('form').on('submit', function (event) {
  event.preventDefault();
  var fullName = $('#name').val();
  if (fullName.length <= 0){
    $('#name').addClass('error');
    $('#errorName').fadeIn('300')
  } else{
    $('#name').removeClass('error');
    $('#errorName').fadeOut('hidden')
    // $('.modal-background').fadeIn(300);
  }
  var fullEmail = $('#email').val();
  if (fullEmail.length <= 0){
    $('#email').addClass('error');
    $('#errorEmail').fadeIn('300')
  } else{
    $('#email').removeClass('error');
    $('#errorEmail').fadeOut('300')
  }
  if (fullEmail.length > 0 && fullName.length >= 0){
    $('.modal-background').fadeIn(300);
  }
});



// $('#showModal').on('click', function() {
//   $('.modal-background').fadeIn(300);
// });
//
// $('#close').on('click', function() {
//   $('.modal-background').fadeOut(300);
// });

// if fullname field value is 0
  //add red border to #name
