// Button click event
var myButton = document.getElementById("myButton"); 
myButton.addEventListener("click", function() {
  alert("Button clicked!");
});



// Button hover effect
myButton.addEventListener("mouseenter", function() {
  this.classList.add("hovered");
});
myButton.addEventListener("mouseleave", function() {
  this.classList.remove("hovered");
});



// Slideshow
var slideIndex = 0;
var slides = document.getElementsByTagName("img");
showSlides();
setInterval(showSlides, 3000); // Change image every 3 seconds

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
}



// Tabs
var tabButtons = document.querySelectorAll(".tab-button");
var tabPanes = document.querySelectorAll(".tab-pane");

tabButtons.forEach(function(btn, index) {
  btn.addEventListener("click", function() {
    // Remove active class from all tab buttons and panes
    tabButtons.forEach(function(t) {
      t.classList.remove("active");
    });
    tabPanes.forEach(function(p) {
      p.classList.remove("active");
    });

    // Add active class to the clicked tab button and pane
    this.classList.add("active");
    tabPanes[index].classList.add("active");
  });
});



// Form validation
var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    alert("Please fill in the required fields correctly.");
  } else {
    alert("Form submitted successfully!");
  }
});