let isDark;

if (localStorage.getItem('isDark')) {

  if (localStorage.getItem('isDark') === 'true') {
    isDark = true;
  }
  else {
    isDark = false;
    $('.mode-indicator').toggleClass('light');
  }

}
else {
  isDark = true;
}

updateTheme(isDark);

$('.mode-indicator').click(function () {
  $(this).toggleClass('light');
  isDark = !isDark;
  localStorage.setItem('isDark', isDark);
  updateTheme(isDark);
});

function updateTheme(isDark) {
  if (isDark) {
    // Dark mode
    $('body').css({
      '--font-color': '#fff',
      '--tags-color': '#000',
      '--sub-text-color': '#ffffff75',
      '--accent-color': '#08fdd8',
      '--glass-color': '#ffffff26',
      '--bg-color': '#000',
      '--filter-image': 'unset'
    });



  } else {
    // Light mode
    $('body').css({
      '--font-color': '#000',
      '--tags-color': '#000',
      '--sub-text-color': '#000000a3',
      '--accent-color': '#ff0000',
      '--glass-color': '#00000012',
      '--bg-color': '#fff',
      '--filter-image': 'invert(1)'
    });

  }
}


window.addEventListener('load', function () {
  var preloader = document.querySelector('.preloader');
  preloadImages();
  preloader.parentNode.removeChild(preloader);

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
});

function preloadImages() {
  const images = document.querySelectorAll('.work-card img');
  images.forEach(img => {
    const src = img.getAttribute('src');
    if (src) {
      const image = new Image();
      image.src = src;
    }
  });
}

function scrollContainer(direction) {
  const container = document.querySelector('.work-container');
  const scrollAmount = 300;
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

  $('section').css({
    'opacity': '0',
    'transition': 'top .5s ease-in-out, opacity 0s ease-in-out',
    'max-height': '0px',
    'min-height': '0px',
    'top': '140px',
    'z-index': '0'
  });

  $('#' + divId).css({
    'max-height': 'unset',
    'min-height': 'fit-content',
    'transition': 'top .5s ease-in-out, opacity .5s ease-in-out',
    'opacity': '1',
    'top': 'var(--top-value)',
    'pointer-events': 'all',
    'z-index': '999999'
  });

  if (divId === 'main-text' || divId === 'my-skills' || divId === 'main-work' || divId === 'contact-me' || divId === 'about') {
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

  if (divId == "main-text") {
    $('#main-text .text span').addClass('animate').one('animationend', function () {
      $(this).removeClass('opening-text');
      $(this).removeClass('animate');
    });

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
  $('a').removeClass('active');
  $(this).addClass('active');
});

$(".bouncing-blob").each(function () {
  var $blob = $(this);
  var containerWidth = $blob.parent().width();
  var containerHeight = $blob.parent().height();
  var blobWidth = $blob.width();
  var blobHeight = $blob.height();
  var maxX = containerWidth - blobWidth;
  var maxY = containerHeight - blobHeight;

  function randomPos() {
    return {
      left: Math.random() * maxX,
      top: Math.random() * maxY
    };
  }

  function moveBlob() {
    var pos = randomPos();
    $blob.animate(pos, 3000, function () {
      moveBlob();
    });
  }

  moveBlob();
});