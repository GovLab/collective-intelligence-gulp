$(document).ready(function(){function e(){a.fadeIn(2e3).delay(2500).fadeOut(2e3,function(){e()}).html(s[t++]),t==s.length&&(t=0)}$("a[href*=#]:not([href=#])").click(function(){var e=$(this.hash),a=this.hostname,s=location.hostname,t=this.pathname.replace(/^\//,""),c=location.pathname.replace(/^\//,"");return e.length||(e=$("[name="+this.hash.slice(1)+"]")),!e.length||a!==s&&t!==c||($("html, body").animate({scrollTop:e.offset().top},1e3),!1)}),$(".js-open-modal").click(function(){$(".js-target-modal").addClass("js-active"),$("#overlay").addClass("js-active"),$("body").addClass("js-body-modal-active")}),$(".js-close-modal").click(function(){$(".js-target-modal").removeClass("js-active"),$("#overlay").removeClass("js-active"),$("body").removeClass("js-body-modal-active")}),$(".js-close-sticky").click(function(){$(".js-target-sticky").removeClass("js-active")}),$(".js-trigger-search").click(function(e){e.preventDefault(),$(this).parent().addClass("js-active"),$("#overlay").addClass("js-active")}),$(".js-trigger-menu").click(function(e){$(this).next().addClass("js-active-menu"),$("#overlay").addClass("js-active")}),$("#overlay").click(function(){$(".js-active").removeClass("js-active"),$(".js-active-menu").removeClass("js-active-menu")});var a=$(".collective-banner").hide(),s=$(".collective-banner").children(),t=0;e()});ault();
        $(this).parent().addClass('js-active');
        $('#overlay').addClass('js-active');
    });

    // Main Menu Click Behavior
    $('.js-trigger-menu').click(function (e) {
        $(this).next().addClass('js-active-menu');
        $('#overlay').addClass('js-active');
    });

    // General Click Behavior for Overlay
    $('#overlay').click(function () {
        $('.js-active').removeClass('js-active');
        $('.js-active-menu').removeClass('js-active-menu');
    });

    // Slider
    // $('.slider').slick({
    //     arrows: true,
    //     draggable: false,
    //     swipeToSlide: true,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     responsive: [
    //         {
    //             breakpoint: 800,
    //             settings: {
    //                 draggable: true
    //             }
    //         }
    //     ]
    // });

    //FadeIn banner
    // $(document).ready(function() {
      var target = $('.collective-banner').hide(),
          items = $('.collective-banner').children(),
          counter = 0;
      function bannerFade() {
          target.fadeIn(2000).delay( 2500 ).fadeOut(2000,function() {
              bannerFade();
          }).html(items[counter++]);
          if (counter == items.length) {
              counter = 0;
          }
      }
      bannerFade();
    // });

}); // doc.ready

