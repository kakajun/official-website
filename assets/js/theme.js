"use strict";
document.addEventListener("DOMContentLoaded", function () {
  /* =====================================================
        WORKS SLIDER
    ===================================================== */
  var worksSlider = new Swiper(".work-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });

  var mixer = mixitup("#content");

  /* =====================================================
        REVEAL ANIMATION
    ===================================================== */
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
    scrollContainer: null,
    resetAnimation: true,
  });
  wow.init();
});
