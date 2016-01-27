$(document).ready(function(){

  //Google Analytics

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-72601012-1', 'auto');
  ga('send', 'pageview');

  // End Google script.

  $('li').click(function() {
    var content = $(this).attr('rel');
    $('.page.active').fadeOut(1000, nextPage);

    function nextPage(){
      $(this).removeClass('active');
      $('#' + content).fadeIn(1000, function(){
        $(this).addClass('active');
      });
    };
  });

  $('.fa.fa-bars.fa-2x').click(function(e){
    $('.dropdown').toggleClass('show');
  });

  $('.row').click(function(e){
    $('.dropdown').toggleClass('show');
  });
  //Stop propagation allows menu to remain down when clicked,
  //Then close it when user clicks out of menu.
  // $('#burger').click(function(e){
  //   $('.dropdown-nav').slideToggle(700);
  //   e.stopPropagation();
  // });
  //
  // $('html').click(function(){
  //   $('.dropdown-nav').slideUp(700);
  // });
  //
  // $('.row').click(function(){
  //   $('.dropdown-nav').toggleClass('show');
  // });

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
