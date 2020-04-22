
// Open the Modal
function openModal() {
    document.getElementById("modalWindow").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("modalWindow").style.display = "none";
  }
  
  let slideIndex = 1;
    showSlides(slideIndex);
  
  
  // Next/previousious controls
  function addSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    
  }
  