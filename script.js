var slideIndex = 1;
var slideInterval;

showSlides(slideIndex);

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }    
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex - 1].style.display = "block";  

  // Automatic slideshow
  slideInterval = setInterval(function() { 
    plusSlides(1);
  }, 10000); // Change slide every 15 seconds
}

// Pause slideshow on hover
var slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', function() {
  clearInterval(slideInterval);
});
slideshowContainer.addEventListener('mouseleave', function() {
  slideInterval = setInterval(function() { 
    plusSlides(1);
  }, 15000);
});


// Carousel Auto-Cycle
$(document).ready(function() {
  $('.carousel').carousel({
    interval: 6000
  })
});

