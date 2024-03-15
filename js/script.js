//dark mode white mode code
let isDark;

if (localStorage.getItem('isDark')) {
  if (localStorage.getItem('isDark') === 'true') {
    isDark = true;
  } else {
    isDark = false;
    document.querySelector('.mode-indicator').classList.toggle('light');
  }
} else {
  isDark = true;
}


updateTheme(isDark);

document.querySelector('.mode-indicator').addEventListener('click', function () {
  this.classList.toggle('light');
  isDark = !isDark;
  localStorage.setItem('isDark', isDark);
  updateTheme(isDark);
});


function updateTheme(isDark) {
  const bodyStyle = document.body.style;
  if (isDark) {
    bodyStyle.setProperty('--font-color', '#fff');
    bodyStyle.setProperty('--tags-color', '#000');
    bodyStyle.setProperty('--sub-text-color', '#ffffff75');
    bodyStyle.setProperty('--accent-color', '#08fdd8');
    bodyStyle.setProperty('--glass-color', '#ffffff26');
    bodyStyle.setProperty('--bg-color', '#000');
    bodyStyle.setProperty('--filter-image', 'unset');
  } else {
    bodyStyle.setProperty('--font-color', '#000');
    bodyStyle.setProperty('--tags-color', '#000');
    bodyStyle.setProperty('--sub-text-color', '#000000a3');
    bodyStyle.setProperty('--accent-color', '#ff0000');
    bodyStyle.setProperty('--glass-color', '#00000012');
    bodyStyle.setProperty('--bg-color', '#fff');
    bodyStyle.setProperty('--filter-image', 'invert(1)');
  }
}
//end dark mode white mode code

//add text animation when load
window.addEventListener('load', function () {
  var preloader = document.querySelector('.preloader');
  preloadImages();
  preloader.parentNode.removeChild(preloader);

  var textSpans = document.querySelectorAll(".text span");
  textSpans.forEach(function (span) {
    span.addEventListener("webkitAnimationEnd", removeAnimatedClass);
    span.addEventListener("mozAnimationEnd", removeAnimatedClass);
    span.addEventListener("animationEnd", removeAnimatedClass);
    span.addEventListener("mouseenter", addAnimatedClass);
  });

  var aboutTextSpans = document.querySelectorAll(".about-text span");
  aboutTextSpans.forEach(function (span) {
    span.addEventListener("mouseenter", addAnimatedClass);
    span.addEventListener("webkitAnimationEnd", removeAnimatedClass);
    span.addEventListener("mozAnimationEnd", removeAnimatedClass);
    span.addEventListener("animationEnd", removeAnimatedClass);
  });

  var mySkillsTextSpans = document.querySelectorAll(".my-skills-text span");
  mySkillsTextSpans.forEach(function (span) {
    span.addEventListener("mouseenter", addAnimatedClass);
    span.addEventListener("webkitAnimationEnd", removeAnimatedClass);
    span.addEventListener("mozAnimationEnd", removeAnimatedClass);
    span.addEventListener("animationEnd", removeAnimatedClass);
  });

  var myWorkTextSpans = document.querySelectorAll(".my-work-text span");
  myWorkTextSpans.forEach(function (span) {
    span.addEventListener("mouseenter", addAnimatedClass);
    span.addEventListener("webkitAnimationEnd", removeAnimatedClass);
    span.addEventListener("mozAnimationEnd", removeAnimatedClass);
    span.addEventListener("animationEnd", removeAnimatedClass);
  });

  var contactMeTextSpans = document.querySelectorAll(".contact-me-text span");
  contactMeTextSpans.forEach(function (span) {
    span.addEventListener("mouseenter", addAnimatedClass);
    span.addEventListener("webkitAnimationEnd", removeAnimatedClass);
    span.addEventListener("mozAnimationEnd", removeAnimatedClass);
    span.addEventListener("animationEnd", removeAnimatedClass);
  });

  function removeAnimatedClass() {
    this.classList.remove("animated", "opening-text");
  }

  function addAnimatedClass() {
    this.classList.add("animated");
  }
});
//endadd text animation when load

//preload images
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
//end preload images

//my work slider
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
//end my work

//highlight active nav menu
document.querySelectorAll('.links li a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    document.querySelectorAll('a').forEach(function (a) {
      a.classList.remove('active');
    });
    this.classList.add('active');
  });
});
//highlight active nav menu

//blob animation
document.querySelectorAll(".bouncing-blob").forEach(function (blob) {
  var container = blob.parentElement;
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var blobWidth = blob.offsetWidth;
  var blobHeight = blob.offsetHeight;
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
    blob.style.transition = "left 3s, top 3s";
    blob.style.left = pos.left + "px";
    blob.style.top = pos.top + "px";
  }

  moveBlob();

  setInterval(function () {
    moveBlob();
  }, 3000);
});
//end blob animation


//fucntion for revealing each section
function manipulateSections(divId) {
  var sections = document.querySelectorAll('section');
  sections.forEach(function (section) {
    section.style.opacity = '0';
    section.style.transition = 'top .5s ease-in-out, opacity 0s ease-in-out';
    section.style.maxHeight = '0px';
    section.style.minHeight = '0px';
    section.style.top = '140px';
    section.style.zIndex = '0';
  });

  var targetSection = document.getElementById(divId);
  targetSection.style.maxHeight = 'unset';
  targetSection.style.minHeight = 'fit-content';
  targetSection.style.transition = 'top .5s ease-in-out, opacity .5s ease-in-out';
  targetSection.style.opacity = '1';
  targetSection.style.top = 'var(--top-value)';
  targetSection.style.pointerEvents = 'all';
  targetSection.style.zIndex = '999999';

  if (divId === 'main-text' || divId === 'my-skills' || divId === 'main-work' || divId === 'contact-me' || divId === 'about') {
    targetSection.style.minHeight = 'calc(100vh - 75px)';
  }

  function removeOpeningTextAnimation(element) {
    element.classList.remove('opening-text');
    element.classList.remove('animate');
    element.removeEventListener('animationend', removeOpeningTextAnimation);
  }

  function addOpeningTextAnimation(elements) {
    elements.forEach(function (element) {
      element.classList.add('animate');
      element.addEventListener('animationend', function () {
        removeOpeningTextAnimation(element);
      }, { once: true });
    });
  }

  if (divId === "about") {
    var aboutTextSpans = document.querySelectorAll('.about-text span');
    addOpeningTextAnimation(aboutTextSpans);

    setTimeout(function () {
      document.querySelector(".about-me-sub-text").classList.add("animateit");
    }, 500);

    setTimeout(function () {
      document.querySelectorAll(".about-me-list li").forEach(function (li) {
        li.classList.add("animateit");
      });
    }, 1000);
  }

  if (divId === "my-skills") {
    var mySkillsTextSpans = document.querySelectorAll('.my-skills-text span');
    addOpeningTextAnimation(mySkillsTextSpans);

    var indicatorElements = document.querySelectorAll(".indicator");
    indicatorElements.forEach(function (element) {
      element.classList.add("animateindicator");
    });
  }

  if (divId === "main-text") {
    var mainTextSpans = document.querySelectorAll('#main-text .text span');
    addOpeningTextAnimation(mainTextSpans);
  }

  if (divId === "my-work") {
    var myWorkTextSpans = document.querySelectorAll('.my-work-text span');
    addOpeningTextAnimation(myWorkTextSpans);

    setTimeout(function () {
      document.querySelector(".my-work-sub-text").classList.add("animateit");
    }, 250);
    setTimeout(function () {
      document.querySelector(".work-wrapper").classList.add("animateit");
    }, 500);
  }

  if (divId === "contact-me") {
    var contactMeTextSpans = document.querySelectorAll('.contact-me-text span');
    addOpeningTextAnimation(contactMeTextSpans);

    setTimeout(function () {
      document.querySelector(".contact-me-sub-text").classList.add("animateit");
    }, 250);
  }
}
//end fucntion for revealing each section

//send email
document.getElementById('sendMessageBtn').addEventListener('click', function () {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  var data = {
    name: name,
    email: email,
    subject: subject,
    message: message
  };

  var xhr = new XMLHttpRequest();
  xhr.open('POST', './mail.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert('Email sent successfully');
    } else {
      alert('Error sending email. Status code: ' + xhr.status);
    }
  };
  xhr.onerror = function () {
    alert('Network error occurred');
  };
  xhr.send(JSON.stringify(data));
});
//end send email