$(document).ready(function(){$("a[href*=#]:not([href=#])").click(function(){var e=$(this.hash),a=this.hostname,s=location.hostname,t=this.pathname.replace(/^\//,""),c=location.pathname.replace(/^\//,"");return e.length||(e=$("[name="+this.hash.slice(1)+"]")),!e.length||a!==s&&t!==c||($("html, body").animate({scrollTop:e.offset().top},1e3),!1)}),$(".js-open-modal").click(function(){$(".js-target-modal").addClass("js-active"),$("#overlay").addClass("js-active"),$("body").addClass("js-body-modal-active")}),$(".js-close-modal").click(function(){$(".js-target-modal").removeClass("js-active"),$("#overlay").removeClass("js-active"),$("body").removeClass("js-body-modal-active")}),$(".js-close-sticky").click(function(){$(".js-target-sticky").removeClass("js-active")}),$(".js-trigger-search").click(function(e){e.preventDefault(),$(this).parent().addClass("js-active"),$("#overlay").addClass("js-active")}),$(".js-trigger-menu").click(function(e){$(this).next().addClass("js-active-menu"),$("#overlay").addClass("js-active")}),$("#overlay").click(function(){$(".js-active").removeClass("js-active"),$(".js-active-menu").removeClass("js-active-menu")}),$(".slider").slick({arrows:!0,draggable:!1,swipeToSlide:!0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:800,settings:{draggable:!0}}]}),$(document).ready(function(){function e(){a.fadeIn(2e3).delay(2500).fadeOut(2e3,function(){e()}).html(s[t++]),t==s.length&&(t=0)}var a=$(".collective-banner").hide(),s=$(".collective-banner").children(),t=0;e()})});