const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

let slideIndex = 0;
showSlides(slideIndex);

function currentSlide(n) {
    slideIndex = (n - 1) * 3; // Adjust for three slides
    showSlides(slideIndex);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const slidesToShow = 3;

    // Hide all slides and remove active class from dots
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.className = dot.className.replace(' active', ''));

    // Show three slides at a time
    for (let i = 0; i < slidesToShow; i++) {
        const currentSlideIndex = (slideIndex + i) % slides.length;
        slides[currentSlideIndex].style.display = 'block';
    }

    // Update the active dot
    dots[Math.floor(slideIndex / slidesToShow)].className += ' active';
}

setInterval(() => {
    slideIndex = (slideIndex + 3) % document.querySelectorAll('.slide').length;
    showSlides(slideIndex);
}, 3000); // Change slide every 3 seconds