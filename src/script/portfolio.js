

//typewritter effect

    const words = ["Frontend developer.", "JavaScript enthusiast.", "Freelancer.", "React JS developer..."];
      let i = 0;
      let counter;
        function typeNow() {
      let word = words[i].split("");
    let loopTyping = () => {
          if (word.length > 0) {
            document.getElementById('text').innerHTML += word.shift();
        } else {
            deleteNow();
              return false;
          };  
      counter = setTimeout(loopTyping, 100);
              };
        loopTyping();
    };
        function deleteNow() {
          let word = words[i].split("");
          let loopDeleting = () => {
              if (word.length > 0) {
                word.pop();
                  document.getElementById('text').innerHTML = word.join("");
            } else {
            if (words.length > (i + 1)) {
                i++;
          } else {
            i = 0;
          };
            typeNow();
      return false;
      };
      counter = setTimeout(loopDeleting, 200);
    };
      loopDeleting();
          };
typeNow();
                
// About me inner page 
const slideMenu = () => {
  let aboutMeBtn = document.getElementById('about-me-btn');
  let aboutMePage = document.getElementById('aboutMePage');

  aboutMePage.style.display = 'none';
  
  let slidePage = () => {
    if (aboutMePage.style.display == 'none') {
      aboutMePage.style.display = 'block';
    } else {
      aboutMePage.style.display = 'none';
    }
  };

  aboutMeBtn.addEventListener('click', () => {
    slidePage();
  });
}

slideMenu();

//SlideShow - Testimonial Section
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
  setTimeout(showSlides, 7000); // Change image every 2 seconds
} 



// Menu Bar 
const menuBar = document.querySelector('.menu');
const homeBtn = document.querySelectorAll('#home-ctn');
const aboutBtn = document.querySelectorAll('#about-ctn');
const experienceBtn = document.querySelectorAll('#experience-ctn');
const servicesBtn = document.querySelectorAll('#services-ctn');
const contactBtn = document.querySelectorAll('#contact-ctn');
const portfolioBtn = document.getElementById('portfolio-ctn');
const testimonialsBtn = document.getElementById('testimonials-ctn');
const talkBtn = document.querySelectorAll('#talk-btn');
let home = document.querySelector('.intro');
let about = document.querySelector('.about');
let experience = document.querySelector('.my-experience');
let services = document.querySelector('.services-section');
let contact = document.querySelector('.contact-ctn');
let portfolio = document.querySelector('.porfolio');
let testimonials = document.querySelector('.testimony');


function scrollFunction() {

  menuBar.style.display = 'none';
  if ((document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) &&
    (menuBar.style.display == 'none')) {
      menuBar.style.display = 'flex';
  }
  else {
      menuBar.style.display = 'none';
  }
};

window.onscroll = () => {
  scrollFunction();
};


homeBtn.forEach(homeId => {
  homeId.addEventListener('click', () => {
    home.scrollIntoView(true);
  });
})

aboutBtn.forEach(aboutId => {
  aboutId.addEventListener('click', () => {
    about.scrollIntoView(true);
  });
})

experienceBtn.forEach(experienceId => {
  experienceId.addEventListener('click', () => {
    experience.scrollIntoView(true);
  });
})

servicesBtn.forEach(serviceId => {
  serviceId.addEventListener('click', () => {
    services.scrollIntoView(true);
  });
})

contactBtn.forEach(contactId => {
  contactId.addEventListener('click', () => {
    contact.scrollIntoView(true);
  });
})

talkBtn.forEach(talkId => {
  talkId.addEventListener('click', () => {
    contact.scrollIntoView(true);
  });
})

portfolioBtn.addEventListener('click', () => {
  portfolio.scrollIntoView(true);
});

testimonialsBtn.addEventListener('click', () => {
  testimonials.scrollIntoView(true);
});

