const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__form form", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 500,
});

const tabs = document.querySelector(".deals__tabs");

tabs.addEventListener("click", (e) => {
  const tabContents = document.querySelectorAll(
    ".deals__container .tab__content"
  );
  Array.from(tabs.children).forEach((item) => {
    if (item.dataset.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  tabContents.forEach((item) => {
    if (item.id === e.target.dataset.id) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

ScrollReveal().reveal(".choose__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".choose__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".choose__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".choose__card", {
  duration: 1000,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".subscribe__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".subscribe__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribe__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".subscribe__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("nav-links");
// const menuBtnIcon = menuBtn.querySelector("i");

// menuBtn.addEventListener("click", (e) => {
//   navLinks.classList.toggle("open");

//   const isOpen = navLinks.classList.contains("open");
//   menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
// });

// navLinks.addEventListener("click", (e) => {
//   navLinks.classList.remove("open");
//   menuBtnIcon.setAttribute("class", "ri-menu-line");
// });

// const scrollRevealOption = {
//   distance: "50px",
//   origin: "bottom",
//   duration: 1000,
// };

// ScrollReveal().reveal(".header__image img", {
//   ...scrollRevealOption,
//   origin: "right",
// });
// ScrollReveal().reveal(".header__content h2", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".header__content h1", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".header__content .section__description", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// ScrollReveal().reveal(".header__form form", {
//   ...scrollRevealOption,
//   delay: 2000,
// });

// ScrollReveal().reveal(".about__card", {
//   ...scrollRevealOption,
//   interval: 500,
// });

// const tabs = document.querySelector(".deals__tabs");

// tabs.addEventListener("click", (e) => {
//   const tabContents = document.querySelectorAll(
//     ".deals__container .tab__content"
//   );
//   Array.from(tabs.children).forEach((item) => {
//     if (item.dataset.id === e.target.dataset.id) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
//   tabContents.forEach((item) => {
//     if (item.id === e.target.dataset.id) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// });

// ScrollReveal().reveal(".choose__image img", {
//   ...scrollRevealOption,
//   origin: "left",
// });
// ScrollReveal().reveal(".choose__content .section__header", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".choose__content .section__description", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".choose__card", {
//   duration: 1000,
//   delay: 1500,
//   interval: 500,
// });

// ScrollReveal().reveal(".subscribe__image img", {
//   ...scrollRevealOption,
//   origin: "right",
// });
// ScrollReveal().reveal(".subscribe__content .section__header", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".subscribe__content .section__description", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".subscribe__content form", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

//  const swiper = new Swiper(".swiper", {
//    slidesPerView: 3,
//    spaceBetween: 20,
//    loop: true,
//      autoplay: {
//          delay: 3000, // 3 seconds
//          disableOnInteraction: false,
//     },
//  });

// new Swiper('.card-wrapper', {
//   loop: true,
//   spaceBetween: 30,
//   // Pagination bullets
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       dynamicBullets: true
//   },
//   // Navigation arrows
//   navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   },
//   // Responsive breakpoints
//   breakpoints: {
//       0: {
//           slidesPerView: 1
//       },
//       768: {
//           slidesPerView: 2
//       },
//       1024: {
//           slidesPerView: 3
//       }
//   }
// });
// var swiper = new Swiper(".mySwiper", {
//   loop: true,
//   autoplay: {
//       delay: 3000, // 3 seconds
//       disableOnInteraction: false,
//   },
//   navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//   },
// });
