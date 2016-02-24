$(window).load(function(){
    $('#loading').fadeOut(2000);
});

$(document).ready(function(){

//Google Analytics script.
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-72601012-1', 'auto');
    ga('send', 'pageview');
// End Google Analytics script.

//Scroll to specified div when user clicks anchor tag.
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);

        $('*').stop().animate({
            'scrollTop': $target.offset().top
            }, 1200, 'swing', function () {
                window.location.hash = target;
        });
    });

  //Dropdown Nav menu for responsive design.
  $('#burger').click(function(event){
      $('.drop-down').slideToggle(800);
      event.stopPropagation();
  });

  //Close the drop down menu automatically on user click event.
  $('html').click(function(){
      $('.drop-down').slideUp(800);
  });

  // Fade out the nav bar when user clicks a link inside the dropdown.
  $('.responsive-nav').click(function(){
      $('.drop-down').fadeOut(250);
  });

  $(document).on('scroll',function(){ alert('Event Fired'); })

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
    else if ( message == '' ){
      e.preventDefault();
      $('.error').text('Please enter a message!');
      $('.error').css('visibility', 'visible');
    }
  });
//on document.ready
});
