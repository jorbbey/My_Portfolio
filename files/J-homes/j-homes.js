// toggle menu
  
const slideBar = function () {
  
  let btn = document.getElementById('menu-btn');
  let nav = document.getElementById('mobile-menu');
  
  let slideView = () => {
    if (nav.style.display == 'none') {
      nav.style.display = 'flex';
    } else {
      nav.style.display = 'none';
    }
  };

  btn.addEventListener('click', () => {
    slideView();
  });
};

slideBar();
/*  
btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('block');
     nav.classList.toggle('hidden');
  })
  */
  






let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "flex";  
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// Flip side
/*
function flipSide() {
  let flipElem = document.getElementById('flip-side');

  let flipContent = () => {
    flipElem.style.transform = 'rotateY(360deg)';
  };

  setInterval(() => {
    
    flipElem.addEventListener('click', () => {
      flipContent();
    }, 1000);

});
};

flipSide(); */

//flip slide for smaller screens
/*let x = window.matchMedia("(max-width: 700px)");

function flipSlide(x) {
  if (x.matches) {
    let flipElem = document.getElementById('flip-side');
    let flipContent = () => {
      if (flipElem.style.marginLeft = '200px') {
        flipElem.style.marginLeft = '400px';
      }
      else {
        flipElem.style.transform = 'translateX(0px)';
      }
      
      flipElem.addEventListener('click', () => {
        flipContent();
      });
    };
}
  };

x.addEventListener('change', flipSlide);
*/
