$(document).ready(function(){


$( '.nav .nav-bar li' ).click( function() {
      var content = $( this ).attr('rel');
      $( '.panel.active' ).fadeOut(1000, nextPage);

      function nextPage(){
        $(this).removeClass('active');
        $('#' + content).fadeIn(1000, function(){
          $(this).addClass('active');
        });
     };
  });


//on document.ready
});
