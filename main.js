let url =
  "https://script.google.com/macros/s/AKfycbwMe9vJGW6ybItQ2Z7lhJvHGUwL86vLsiO23g21wfCvzj43ETJszqv045jERu-qV3DJOw/exec";
let form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  let d = new FormData(form);
  fetch(url, {
    method: "POST",
    body: d,
  })
    .then((res) => res.text())
    .then((finalRes) => {
      console.log(finalRes);
      document.getElementById("res").innerHTML = finalRes;
      form.reset();
      setTimeout(() => {
        document.getElementById("res").innerHTML = "";
      }, 3000);
    });
  e.preventDefault();
});

function change1() {
  document.getElementById("pic").src =
    "https://freepngimg.com/thumb/coffee/62115-tea-coffee-drink-starbucks-latte-free-download-image.png";

  document.getElementById("spiral").src =
    "https://64.media.tumblr.com/7d64ef11ae4ade4cf3af6f00ad7fa93b/tumblr_okcvkujApG1txe8seo1_500.gifv";
}

function change2() {
  document.getElementById("pic").src =
    "https://freepngimg.com/thumb/coffee/62120-coffee-frappuccino-drink-latte-starbucks-unicorn.png";

  document.getElementById("spiral").src =
    "https://windowscustomization.com/wp-content/uploads/2018/08/ribbons.gif";
}

function change3() {
  document.getElementById("pic").src =
    "https://freepngimg.com/thumb/starbucks/61291-cheesecake-frappuccino-milkshake-starbucks-cream-free-frame.png";

  document.getElementById("spiral").src =
    "https://64.media.tumblr.com/7d64ef11ae4ade4cf3af6f00ad7fa93b/tumblr_okcvkujApG1txe8seo1_500.gifv";
}

function change4() {
  document.getElementById("pic").src =
    "https://freepngimg.com/thumb/starbucks/77325-frappuccino-drink-chocolate-starbucks-matcha-white.png";

  document.getElementById("spiral").src =
    "https://media4.giphy.com/media/3o72EXihHbvvpzh6JW/giphy.gif?cid=ecf05e47ian2apilvm5eirbzu5ut1ia4bhue33ca6ogmslyu&ep=v1_gifs_related&rid=giphy.gif&ct=g";
}

function changeCircleColor(color) {
  const elements = [
    ".circle",
    ".small",
    "#facebook",
    "#twitter",
    "#instagram",
    ".first-circle",
    ".right-circle",
  ];
  elements.forEach((selector) => {
    const element = document.querySelector(selector);
    element.style.background = color;
  });
  const circles = document.querySelectorAll(".second-circle");
  circles.forEach((circle) => {
    circle.style.borderColor = color;
  });
  const spans = document.querySelectorAll(".coffeeText");
  spans.forEach((span) => {
    span.style.color = color; // Change the font color (customize as needed)
  });
}
function changeAboutMeText() {
  const aboutMeTexts = ["Starbucks"];
  const typingSpeed = 100; // in milliseconds
  const eraseSpeed = 50; // in milliseconds
  const pauseTime = 1500; // in milliseconds
  const aboutMeElements = document.querySelectorAll(".coffeeText"); // Select all elements with the class "coffeeText"

  let textIndex = 0; // Index of the text to display
  let charIndex = 0; // Index of the character in the current text
  let isDeleting = false; // Flag to indicate if we are deleting text

  function type() {
    const currentText = aboutMeTexts[textIndex]; // Get the current text to type

    aboutMeElements.forEach((element) => {
      // If not deleting and there are still characters to add
      if (!isDeleting && charIndex < currentText.length) {
        element.textContent += currentText[charIndex]; // Add the next character
      }
      // If deleting and there are characters to remove
      else if (isDeleting && charIndex > 0) {
        element.textContent = currentText.substring(0, charIndex - 1); // Remove the last character
      }
    });

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++; // Move to the next character
      setTimeout(type, typingSpeed); // Schedule the next typing event
    } else if (isDeleting && charIndex > 0) {
      charIndex--; // Move to the previous character
      setTimeout(type, eraseSpeed); // Schedule the next erasing event
    } else {
      isDeleting = !isDeleting; // Toggle the deleting flag
      if (!isDeleting) {
        textIndex = (textIndex + 1) % aboutMeTexts.length; // Move to the next text
      }
      setTimeout(type, pauseTime); // Pause before starting the next phase
    }
  }

  type(); // Start the typing effect
}

changeAboutMeText(); // Call the function to initiate the typing effect

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  });
  const allAnimatedElements = document.querySelectorAll(".animate");
  allAnimatedElements.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector("#menu-icon");
  const navMenu = document.querySelector("ul#options");

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("bx-x");
    navMenu.classList.toggle("active");
  });

  window.onscroll = () => {
    navToggle.classList.remove("bx-x");
    navMenu.classList.remove("active");
  };
});
