/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('navMenu'),
  navToggle = document.getElementById('navToggle'),
  navClose = document.getElementById('navClose'),
  sections = document.querySelectorAll('section[id]');

// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('showMenu');
  });
}

// HIDE MENU
// Validate if constant exists
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('showMenu');
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.navLink');

const linkAction = () => {
  // On each link click
  navMenu.classList.remove('showMenu');
};

navLink.forEach((link) => {
  link.addEventListener('click', linkAction);
});

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');
  // when scroll is greater than 50 viewport height add blurHeader
  this.scrollY >= 50
    ? header.classList.add('blurHeader')
    : header.classList.remove('blurHeader');
};

window.addEventListener('scroll', blurHeader);
/*=============== SWIPER FAVORITES ===============*/
let swiperFavourite = new Swiper('.favouriteSwiper', {
  // optional parameter
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  grabCursor: true,

  breakpoint: {
    768: {
      slidesPerView: 3,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById('scrollup');
  this.scrollY >= 350
    ? scrollUpBtn.classList.add('showScroll')
    : scrollUpBtn.classList.remove('showScroll');
};

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionClass = document.querySelector(`.navMenu a[href*=${sectionId}]`);

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('activeLink');
    } else {
      sectionClass.classList.remove('activeLink');
    }
  });
};
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.homeSocial, .favouriteContainer, .sponsorContainer,.footer`);
sr.reveal(`.homeTitle span:nth-child(1)`, { origin: 'left', opacity: 1 });
sr.reveal(`.homeTitle span:nth-child(3)`, { origin: 'right', opacity: 1 });
sr.reveal(`.homeTooltip, .homeButton, .modelButton`, { origin: 'bottom' });

sr.reveal(`.aboutData`, { origin: 'left' });
sr.reveal(`.aboutImg, .modelTooltip`, { origin: 'right' });
