// Get the modal elements (from W3Schools Modal tutorial)
var myModal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var artModal = document.getElementById("art-modal");

// Open project image modal when clicked
function openModal(element) {
  var imgSource = element.getAttribute("data-img");
  var imgTitle = element.getAttribute("data-title");

  modalImg.src = imgSource;
  modalImg.alt = imgTitle;
  myModal.style.display = "flex";
}

// Close project image modal
function closeModal() {
  myModal.style.display = "none";
}

// Open corkboard popup
function openArtModal() {
  artModal.style.display = "flex";
  filterArt("all");
}

// Close corkboard popup
function closeArtModal() {
  artModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
  if (event.target == artModal) {
    artModal.style.display = "none";
  }
};

// Filter function for the corkboard (adapted from W3Schools Portfolio Filter)
var tilts = [-4, 3, -2, 2, -3, 4];

function filterArt(category) {
  // remove active class from all buttons
  var btns = document.querySelectorAll(".board-buttons button");
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove("active");
  }
  // add active class to clicked button
  document.getElementById("btn-" + category).classList.add("active");

  var items = document.getElementsByClassName("item");
  var count = 0;

  for (var i = 0; i < items.length; i++) {
    var itemCategory = items[i].getAttribute("data-category");
    var inAll = items[i].getAttribute("data-all");

    if ((category == "all" && inAll == "yes") || itemCategory == category) {
      items[i].style.display = "block";
      // tilt the polaroid a bit
      var deg = tilts[count % tilts.length];
      items[i].style.transform = "rotate(" + deg + "deg)";
      count++;
    } else {
      items[i].style.display = "none";
    }
  }

  document.getElementById("board").scrollTop = 0;
}

// run filter on load
filterArt("all");


// Fade in elements when scrolling down (from online tutorial)
var revealElements = document.querySelectorAll(
  ".Introduction, .hero-polaroid, h2, .skill-box, .project, .logo, #campus h3, .roles li, .pair, .open-board, .links li, .copy"
);

// add reveal class to everything first
for (var i = 0; i < revealElements.length; i++) {
  revealElements[i].classList.add("reveal");
}

function checkScroll() {
  var windowHeight = window.innerHeight;
  var revealPoint = 100;

  for (var i = 0; i < revealElements.length; i++) {
    var elementTop = revealElements[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      revealElements[i].classList.add("visible");
    }
  }
}

// listen for scroll and also run once when page loads
window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

