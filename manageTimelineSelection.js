$(document).ready(function(){var e=$(".e-event"),t=$(".e-timebox"),n=$(".b-timeline-list"),a=!0;e.each(function(e){var i=new Date($(this).find("time").attr("datetime"));a&&i>=$.now()&&($(this).addClass("m-current"),$(t.get(e)).addClass("m-current"),$(n.children().get(e)).addClass("m-current"),a=!1)})});