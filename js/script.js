$("#year").text(new Date().getFullYear());

$("#main-text .text span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
  $(this).removeClass("animated");
});

$("#main-text .text span").hover(function () {
  $(this).addClass("animated");
});

$("#main-text .text span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
    $(this).removeClass("opening-text");
  });
  

$("#main-text .text span").addClass("opening-text");