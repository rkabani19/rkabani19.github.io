$(document).ready(function(){
   $(this).scrollTop(0);

   //Scroll animation
    var headerHeight = $('header').outerHeight();

    $('.scroll').click(function(e) {
      var linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top - headerHeight
      }, 1000);
      e.preventDefault();
    });

    //Navbar change on scroll
   var scroll_start = 0;
   var startchange = $('header');
   var offset = startchange.offset();

   $(window).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('header').css('box-shadow', '0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 40px 0 rgba(0, 0, 0, 0.07)');
          $('header').css('background', '#4C5364');
       } else {
         $('header').css('background', 'none');
         $('header').css('box-shadow', 'none');
       }
   });

  //  Animations
   window.sr = ScrollReveal({ duration: 200 });
   sr.reveal('#about-section');
   sr.reveal('.skills', 50);
   sr.reveal('#experience-section');
   sr.reveal('.fa-paper-plane', {origin: 'top'});

   var shiftWindow = function() { scrollBy(0, -75) };
   if (location.hash) shiftWindow();
   window.addEventListener("hashchange", shiftWindow);

   //Hamburger Menu
   $("#pull").on("click", function(){
     $("nav ul").fadeToggle("medium", function(){
       $("body").toggleClass("disableScroll");
     });
     $("header").css('background', '#4C5364');

     $("nav li").on("click", function(){
       $("nav ul").fadeOut("fast");
       $("body").removeClass("disableScroll");
     });
  });

  //Active navbar
  var aChildren = $("nav li").children();
  var aArray = [];
  for (var i=0; i < aChildren.length; i++) {
      var aChild = aChildren[i];
      var ahref = $(aChild).attr('href');
      aArray.push(ahref);
  }
  $(window).scroll(function(){
    var windowPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var docHeight = $(document).height();

    for (var i=0; i < aArray.length; i++) {
      var theID = aArray[i];
      var divPos = $(theID).offset().top -80;
      var divHeight = $(theID).height();
      if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
            $("a[href='" + theID + "']").addClass("active");
        } else {
              $("a[href='" + theID + "']").removeClass("active");
        }
      }

      //Other nav stuff
      if(windowPos + windowHeight == docHeight) {
        if (!$("nav li:last-child a").hasClass("active")) {
          var navActiveCurrent = $(".active").attr("href");
          $("a[href='" + navActiveCurrent + "']").removeClass("active");
          $("nav li:last-child a").addClass("active");
        }
      }
  });
});



//Particle JS
particlesJS("particles-js", {"particles":{"number":{"value":70,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":11.22388442605866,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
);
