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

$(".text span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
  $(this).removeClass("opening-text");
});

$(".about-text span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
  $(this).removeClass("animated");
});

$(".my-skills-text span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
  $(this).removeClass("animated");
});

$(".my-work-text span").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
  $(this).removeClass("animated");
});


$(".text span").addClass("opening-text");
$(".about-text span").addClass("opening-text");
$(".my-skills-text span").addClass("opening-text");
$(".my-work-text span").addClass("opening-text");

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



//scroll animation
function intersectionObserver(classNameOrId, callbackFunction) {
  // Get the target element based on class name or ID
  const targetElement = document.querySelector(classNameOrId);

  if (!targetElement) {
    console.error("Element not found!");
    return;
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callbackFunction();
        observer.unobserve(entry.target); // Stop observing once the callback is executed
      }
    });
  }, options);

  observer.observe(targetElement);
}

//about me text
intersectionObserver('.about-text', function () {
  console.log("Hello");
  $(".about-text span").each(function (index) {
    var $span = $(this);
    $span.css({
      'animation': 'jello-horizontal 1s ease-in-out',
      'animation-delay': (index * 0.1) + 's'
    });

    // Add animation end event listener
    $span.one('animationend', function () {
      $span.css('animation', '');
      $span.removeClass("opening-text");
    });
  });
});


intersectionObserver('#about', function () {
  $(".about-me-sub-text").addClass("animateit");
});





intersectionObserver('#about', function () {
  setTimeout(function () {
    $(".about-me-list li").addClass("animateit");
  }, 1000);
});

intersectionObserver('#my-skills', function () {
  $(".indicator").addClass("animateindicator");
});


//my skills texts
intersectionObserver('.my-skills-text', function () {
  console.log("Hello");
  $(".my-skills-text span").each(function (index) {
    var $span = $(this);
    $span.css({
      'animation': 'jello-horizontal 1s ease-in-out',
      'animation-delay': (index * 0.1) + 's'
    });

    // Add animation end event listener
    $span.one('animationend', function () {
      $span.css('animation', '');
      $span.removeClass("opening-text");
    });
  });
});

//my work texts
intersectionObserver('.my-work-text', function () {
  console.log("Hello");
  $(".my-work-text span").each(function (index) {
    var $span = $(this);
    $span.css({
      'animation': 'jello-horizontal 1s ease-in-out',
      'animation-delay': (index * 0.1) + 's'
    });

    // Add animation end event listener
    $span.one('animationend', function () {
      $span.css('animation', '');
      $span.removeClass("opening-text");
    });
  });
});


//highlight nav links
// Get all the sections and nav elements
var $sections = $('section');
var $navLinks = $('.links li a');

// Create an array to store the position of each section
var sectionPositions = [];
$sections.each(function () {
  sectionPositions.push($(this).offset().top - ($(window).height() * 0.9));
});

// Highlight the first nav element when the page loads
$navLinks.first().addClass('active');

$('#content').on("scroll", function () {
  var scrollPosition = $(window).scrollTop();
  // Get the current scroll position
  var scrollPosition = $(this).scrollTop();

  // Check which section is in the viewport
  for (var i = 0; i < sectionPositions.length; i++) {
    if (scrollPosition >= sectionPositions[i] && (i === sectionPositions.length - 1 || scrollPosition < sectionPositions[i + 1])) {
      $navLinks.removeClass('active');
      $navLinks.eq(i).addClass('active');
      break;
    }
  }


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



// ///////////////
// // Initialize draggable for work container
// $(".work-container").draggable({
//   axis: "x", // Restrict dragging to horizontal axis
//   scroll: false, // Disable auto-scrolling while dragging
//   start: function (event, ui) {
//     // Store the initial position of the dragged element
//     $(this).data("startPosition", ui.position);
//   },
//   drag: function (event, ui) {
//     // Calculate the delta position
//     var dx = ui.position.left - $(this).data("startPosition").left;

//     // Update the scroll position of the parent container
//     var parent = $(this).closest('.work-wrapper');
//     var scrollLeft = parent.scrollLeft();

//     parent.scrollLeft(scrollLeft - dx);

//     // Reset the vertical position to prevent vertical movement
//     ui.position.top = $(this).data("startPosition").top;
//   }
// });

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

