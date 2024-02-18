$("#year").text(new Date().getFullYear());

$(".text span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
  $(this).removeClass("animated");
});

$(".text span").hover(function () {
  $(this).addClass("animated");
});

$(".about-text span").hover(function () {
  $(this).addClass("animated");
});

$(".my-skills-text span").hover(function () {
  $(this).addClass("animated");
});

$(".my-work-text span").hover(function () {
  $(this).addClass("animated");
});

$(".contact-me-text span").hover(function () {
  $(this).addClass("animated");
});

$(".text span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
  $(this).removeClass("opening-text");
});

$(".about-text span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
  $(this).removeClass("animated");
});

$(".my-skills-text span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
  $(this).removeClass("animated");
});

$(".contact-me-text span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
  $(this).removeClass("animated");
});

$(".my-work-text span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
  $(this).removeClass("animated");
});

//blob

const blob = document.getElementById('blob');

document.body.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, {
    duration: 1000,
    fill: 'forwards'
  });
}

//blob

$('#content').on("scroll", function () {
  var container = $(this);
  var contentHeight = container.prop('scrollHeight');
  var scrollPosition = container.scrollTop();
  var containerHeight = container.outerHeight();

  if (scrollPosition + containerHeight >= contentHeight - 100) {
    $(".scroll-down-left").html("<i class='fa-solid fa-arrow-up-long'></i> Scroll up");
    $(".scroll-down-right").html("<i class='fa-solid fa-arrow-up-long'></i> Scroll up");
  } else {
    $(".scroll-down-left").html("Scroll down <i class='fa-solid fa-arrow-down-long'></i>");
    $(".scroll-down-right").html("Scroll down <i class='fa-solid fa-arrow-down-long'></i>");
  }
});
//highlight nav links


if (!$('#technology').tagcanvas({
  textColour: '#fff',
  outlineColor: "transparent",
  maxSpeed: 0.05,
  depth: 0.5,
  weight: true,
  reverse: true,
  wheelZoom: false,
  noSelect: true,
  initial: [0.3, 0.2],

}, "tags")) {
  // TagCanvas failed to load
  $('#CanvasContainer').hide();
}

const slider = document.querySelector('.work-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX; // use the distance cursor moved
  slider.scrollLeft = scrollLeft - walk;
});


//
function scrollContainer(direction) {
  const container = document.querySelector('.work-container');
  const scrollAmount = 300; // Adjust as needed
  if (direction === 'left') {
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'right') {
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}
$('section').css({
  'opacity': '0',
  'transition': 'top .5s ease-in-out, opacity 0s ease-in-out',
  'max-height': '0px',
  'min-height': '0px',
  'top': '140px',
  'z-index': '0'
});



$('#main-text').css({
  'max-height': 'unset',
  'min-height': 'calc(100dvh - 75px)',
  'opacity': '1',
  'top': 'var(--top-value)',
  'pointer-events': 'all',
  'z-index': '999999'
})

function manipulateSections(divId) {


  // Set opacity and position for all sections
  $('section').css({
    'opacity': '0',
    'transition': 'top .5s ease-in-out, opacity 0s ease-in-out',
    'max-height': '0px',
    'min-height': '0px',
    'top': '140px',
    'z-index': '0'
  });

  // Set opacity and position for the section with the provided ID
  $('#' + divId).css({
    'max-height': 'unset',
    'min-height': 'fit-content',
    'transition': 'top .5s ease-in-out, opacity .5s ease-in-out',
    'opacity': '1',
    'top': 'var(--top-value)',
    'pointer-events': 'all',
    'z-index': '999999'
  });

  if (divId === 'main-text' || divId === 'main-work' || divId === 'contact-me' || divId === 'about') {
    $('#' + divId).css({

      'min-height': 'calc(100dvh - 75px)',

    });
  }




  if (divId == "about") {
    $('.about-text span').addClass('animate').one('animationend', function () {
      $(this).removeClass('opening-text');
      $(this).removeClass('animate');
    });

    setTimeout(function () {
      $(".about-me-sub-text").addClass("animateit");
    }, 500);

    setTimeout(function () {
      $(".about-me-list li").addClass("animateit");
    }, 1000);
  }

  if (divId == "my-skills") {
    $('.my-skills-text span').addClass('animate').one('animationend', function () {
      $(this).removeClass('opening-text');
      $(this).removeClass('animate');
    });

    setTimeout(function () {
      $(".indicator").addClass("animateindicator");
    }, 500);

  }

  if (divId == "my-work") {
    $('.my-work-text span').addClass('animate').one('animationend', function () {
      $(this).removeClass('opening-text');
      $(this).removeClass('animate');
    });
    setTimeout(function () {
      $(".my-work-sub-text").addClass("animateit");
    }, 250);
    setTimeout(function () {
      $(".work-wrapper").addClass("animateit");
    }, 500);

  }

  if (divId == "contact-me") {
    console.log(divId);
    $('.contact-me-text span').addClass('animate').one('animationend', function () {
      $(this).removeClass('opening-text');
      $(this).removeClass('animate');
    });
    setTimeout(function () {
      $(".contact-me-sub-text").addClass("animateit");
    }, 250);

  }
}

$('.links li a').on('click', function () {
  // Remove 'active' class from all <a> tags
  $('a').removeClass('active');
  // Add 'active' class to the clicked <a> tag
  $(this).addClass('active');
});