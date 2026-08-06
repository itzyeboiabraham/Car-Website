let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('#search-btn');
let searchBox = document.querySelector('.search-box');
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let closeLoginForm = document.querySelector('#close-login-form');
let homeSection = document.querySelector('.home');

if (menu && navbar) {
  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

    if (searchBox) {
      searchBox.classList.remove('active');
    }

    if (searchBtn) {
      searchBtn.setAttribute('aria-expanded', 'false');
      const sIcon = searchBtn.querySelector('i');
      if (sIcon) {
        sIcon.classList.remove('fa-times');
        sIcon.classList.add('fa-search');
      }
      searchBtn.setAttribute('aria-label', 'Open search');
    }
  };
}

if (loginBtn && loginForm) {
  loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
  };
}

if (closeLoginForm && loginForm) {
  closeLoginForm.onclick = () => {
    loginForm.classList.remove('active');
  };
}

if (searchBtn && searchBox) {
  searchBtn.onclick = () => {
    const isActive = searchBox.classList.toggle('active');
    searchBtn.setAttribute('aria-expanded', String(isActive));
    const icon = searchBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-search', !isActive);
      icon.classList.toggle('fa-times', isActive);
    }
    searchBtn.setAttribute('aria-label', isActive ? 'Close search' : 'Open search');
  };
}

window.onscroll = () => {
  if (menu) {
    menu.classList.remove('fa-times');
  }

  if (navbar) {
    navbar.classList.remove('active');
  }

  if (searchBox) {
    searchBox.classList.remove('active');
  }

  if (searchBtn) {
    searchBtn.setAttribute('aria-expanded', 'false');
    const sIcon = searchBtn.querySelector('i');
    if (sIcon) {
      sIcon.classList.remove('fa-times');
      sIcon.classList.add('fa-search');
    }
    searchBtn.setAttribute('aria-label', 'Open search');
  }

  let header = document.querySelector('.header');

  if (header) {
    if (window.scrollY > 0) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }
};

  const reviewsSwiper = new Swiper('.review-slider', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 3,
    grabCursor: true,
    autoplay: { delay: 3500, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.carousel-nav.next', prevEl: '.carousel-nav.prev' },
    breakpoints: {
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });