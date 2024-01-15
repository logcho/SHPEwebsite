$(document).ready(function() {

     // FUNCTIONS

     // Desktop Menu
     $(".menuNavBar span").hover(
          // Drop down menu when hovered
          function() {
               $(this).children("a").css("opacity", "0.8");
               $(this).children(".dropDown").css({"display": "block", "transition": "opacity .8s"});          },
          // Drop down collapses when no longer hovering
          function() {
               $(this).children("a").css("opacity", "1");
               $(this).children(".dropDown").css("display", "none");
          }
     );

     // Body Code
     $(".orangeDivider").eq(0).animate({width: '200px'}, 600);
     $(".orangeDivider").eq(1).animate({width: '200px'}, 600);
     $(".orangeDivider").eq(2).animate({width: '200px'}, 600);
     $(".orangeDivider").eq(3).animate({width: '200px'}, 600);
     $(".orangeDivider").eq(4).animate({width: '200px'}, 600);
});
