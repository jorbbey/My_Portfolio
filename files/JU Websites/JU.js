// Toggle menu
const responsiveMenuSlider =  function() {

var menuItems = document.getElementById('menuLinks');
var menuClose = document.getElementById('closeMenu');
var menuOpen = document.getElementById('openMenu');


    var menuSlideOpen = function () {

            menuItems.style.right = '10px';
        
    };

    var menuSlideClose = function () {

            menuItems.style.right = '-100%';
    };


    menuOpen.addEventListener('click', () => {
        menuSlideOpen();
    });


    menuClose.addEventListener('click', () => {
        menuSlideClose();
    });
};

responsiveMenuSlider();



// courses inner pages

const dropMenu = () => {

    const firstBody = document.getElementById('first-page');
    const secondBody = document.getElementById('second-page');
    const thirdBody = document.getElementById('third-page');
    const firstBtn = document.getElementById('first-arrow');
    const secondBtn = document.getElementById('second-arrow');
    const thirdBtn = document.getElementById('third-arrow');

    firstBody.style
    firstBtn.addEventListener('click', () => {
        if (firstBody.style.overflowY == 'hidden' && firstBody.style.height == '100px') {
            firstBody.style.overflowY = 'none';
            firstBody.style.height = 'auto';
        } else {
            firstBody.style.overflowY = 'hidden';
            firstBody.style.height = '100px';
        }
    })

    secondBtn.addEventListener('click', () => {

        if (secondBody.style.overflowY == 'hidden' && secondBody.style.height == '100px') {
            secondBody.style.overflowY = 'none';
            secondBody.style.height = 'auto';
        } else {
            secondBody.style.overflowY = 'hidden';
            secondBody.style.height = '100px';
        }
    })

    thirdBtn.addEventListener('click', () => { 

        if (thirdBody.style.overflowY == 'hidden' && thirdBody.style.height == '100px') {
            thirdBody.style.overflowY = 'none';
            thirdBody.style.height = 'auto';
        } else {
            thirdBody.style.overflowY = 'hidden';
            thirdBody.style.height = '100px';
        }
    })

   /* firstBtn.addEventListener('click', () => {
        firstBody.forEach(body => {
            if (body.style.overflowY == 'hidden' && body.style.height == '100px') {
                body.style.overflowY = 'none';
                body.style.height = '1500px';
            } else {
                body.style.overflowY = 'hidden';
                body.style.height = '100px';
            }
        });
    }) */
    

};

dropMenu();



// Scroll to top menu
let scrollBtn = document.getElementById("scrollBtn");


function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        scrollBtn.style.display = 'block';
    }
    else {
        scrollBtn.style.display = 'none';
    }
}

//this function displays button when user scrolls down 20px from the top of the page
window.onscroll = function () {
    scrollFunction();
};

// this scrolls to the top of the page when the user clicks the button
function topFunction() {
    document.body.scrollTop = '0'; // for safari
    document.documentElement.scrollTop = '0'; // for chrome, firefox, IE, and opera
}