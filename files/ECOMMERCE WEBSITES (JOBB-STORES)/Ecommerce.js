const responsiveSlideMenu = () => {
  let hamburger = document.getElementById('hamburger');
  let menuItems = document.getElementById('mobile-items');

  menuItems.style.right = '-100%';
  menuItems.style.opacity = '0';

  let toggleList = () => {

      if (menuItems.style.right == '-100%') {
        menuItems.style.left = '5px';
      }
      if (menuItems.style.opacity == '0') {
        menuItems.style.opacity = '1'
      }
  
      else {
        menuItems.style.right = '-100%';
        menuItems.style.opacity = '0';
      }
  };
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    toggleList();
  })
};
responsiveSlideMenu();