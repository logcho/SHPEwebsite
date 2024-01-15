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
});
