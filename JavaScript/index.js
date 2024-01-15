$(document).ready(function() {

     // FUNCTIONS

     // Desktop Menu
     $(".menuNavBar span").hover(
          // Drop down menu when hovered
          function() {
               $(this).children(".menuDrop").css("opacity", "0.8");
               $(this).children(".dropDown").css({"display": "block", "transition": "opacity .8s"});
          },
          // Drop down collapses when no longer hovering
          function() {
               $(this).children(".menuDrop").css("opacity", "1");
               $(this).children(".dropDown").css("display", "none");
          }
     );

     // Gallery

     // ANIMATIONS

     // Intro Message
     $("#welcome").delay(100).animate({opacity: '1'}, 1500);
     $("#mission").delay(500).animate({opacity: '1'}, 1500);

     // Core Values/Pillars
     $(document).scroll(function(){
          $(".coreItem:nth-child(1)").animate({opacity: '1'}, 400);
          $(".coreItem:nth-child(2)").delay(150).animate({opacity: '1'}, 400);
          $(".coreItem:nth-child(3)").delay(300).animate({opacity: '1'}, 400);
          $(".coreItem:nth-child(4)").delay(450).animate({opacity: '1'}, 400);
          $(".coreItem:nth-child(5)").delay(600).animate({opacity: '1'}, 400);
     });

     // Animations based on scroll location
     $(window).scroll(function() {

          // About Section
          // Anchor 1 is the title mission statement
          if ($(document).scrollTop() > $("#anchor1").offset().top) {
               $(".orangeDivider").eq(0).animate({width: '200px'}, 600);
               $(".logos img").first().delay(300).animate({opacity: '1'}, 1000);
               $(".logos img").last().delay(600).animate({opacity: '1'}, 1000);
          }

          // Events Section
          // Anchor 2 is SMU logo in About section
          if ($(document).scrollTop() > $("#anchor2").offset().top){
               $("hr").eq(0).animate({width: '50%'}, 600);
               $("hr").eq(1).delay(200).animate({width: '50%'}, 600);
               $("hr").eq(2).delay(400).last().animate({width: '50%'}, 600);
          }

          // Membership Section
          // Anchor 3 is the first image on the events section
          if ($(document).scrollTop() > $("#anchor3").offset().top){
               $(".orangeDivider").eq(1).animate({width: '200px'}, 600);
               $(".joinSteps li").eq(0).animate({opacity: '1'}, 600);
               $(".joinSteps li").eq(1).delay(300).animate({opacity: '1'}, 600);
               $(".joinSteps li").eq(2).delay(600).last().animate({opacity: '1'}, 600);
          }

          // Sponsor Section
          // Anchor 4 is the gallery table
          if ($(document).scrollTop() > $("#anchor4").offset().top){
               $(".orangeDivider").eq(2).animate({width: '200px'}, 600);
               $("#quote p").eq(0).animate({opacity: '1'}, 800);
               $("#quote p").eq(1).delay(300).animate({opacity: '1'}, 800);
          }
     });
});
