import $ from 'jquery';


$(document).ready(function () {
  $(document).scroll(function () {
    if($("#mainNav").offset()){
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    }
    })
    
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    var target = $(this.hash);
    // console.log(target[0])
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 54)
      }, "slow");
      return false;
    }


  })

})


