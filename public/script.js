$(document).ready(function(){


$('.nav .nav-bar li').click(function() {
      var content = $(this).attr('rel');
      $('.page.active').fadeOut(1000, nextPage);

      function nextPage(){
        $(this).removeClass('active');
        $('#' + content).fadeIn(1000, function(){
          $(this).addClass('active');
        });
     };
  });

// Form validations should generally be done server-side,
// in case user's browser has jS turned off.  Re-factoring coming soon.
$('.submit').click(function(e){
  var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  var email = $('[data-rel="email"]').val();
  var username = $('[data-rel="username"]').val();
  var message = $('[data-rel="message"]').val();

  if ( !regex.test(email) ){
    e.preventDefault();
    $('.error').text('Plese enter a valid email!');
    $('.error').css('visibility', 'visible');
  }
  else if ( username == '' ){
    e.preventDefault();
    $('.error').text('Please enter your name!');
    $('.error').css('visibility', 'visible');
  }
  else if ( message == ''){
    e.preventDefault();
    $('.error').text('Please enter a message!');
    $('.error').css('visibility', 'visible');
  }
});


//on document.ready
});
