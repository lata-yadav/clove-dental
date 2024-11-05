// Dropdown Toggle
document.getElementById('helpButton').addEventListener('click', function () {
    const dropdown = document.getElementById('dropdownContent');
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  });
  
  // Close the dropdown if clicked outside
  window.onclick = function (event) {
    if (!event.target.matches('.help-button')) {
      const dropdowns = document.getElementsByClassName('dropdown-content');
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block') {
          openDropdown.style.display = 'none';
        }
      }
    }
  };

  

  
  let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slide index
  slideIndex++;
  
  // Reset to the first slide if at the end
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Show the current slide
  slides[slideIndex - 1].style.display = "block";

  // Change slide every 3 seconds (3000ms)
  setTimeout(showSlides, 3000);
}


const testimonialsGrid = document.querySelector('.testimonials-grid');
let isMouseDown = false;
let startX;
let scrollLeft;

document.querySelector('.testimonials-wrapper').addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - testimonialsGrid.offsetLeft;
  scrollLeft = testimonialsGrid.scrollLeft;
});

document.querySelector('.testimonials-wrapper').addEventListener('mouseleave', () => {
  isMouseDown = false;
});

document.querySelector('.testimonials-wrapper').addEventListener('mouseup', () => {
  isMouseDown = false;
});

document.querySelector('.testimonials-wrapper').addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - testimonialsGrid.offsetLeft;
  const walk = (x - startX) * 2; // Adjust the speed factor
  testimonialsGrid.scrollLeft = scrollLeft - walk;
});

