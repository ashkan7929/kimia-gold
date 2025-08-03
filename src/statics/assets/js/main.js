
function toggleMenu() {
  $(".menu").toggleClass("active");
}

function initializeSwipers() {
  if ($(".swiper-starter").length) {
    const swiperStarter = new Swiper(".swiper-starter", {
      slidesPerView: 1, // نمایش یک اسلاید در هر بار
      spaceBetween: 10,
      navigator: false,
      loop: false, // حلقه‌ای کردن اسلایدر
      pagination: {
        el: ".starter-swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return `
          <div key="starter-swiper-pagination${index}" class="${className}">
          </div>
        `;
        },
      },
      // allowTouchMove: false,
      // touchReleaseOnEdges: true,
    });
    document
      .getElementById("prevBtn_starter")
      .addEventListener("click", () => swiperStarter.slidePrev());
    document
      .getElementById("nextBtn_starter")
      .addEventListener("click", () => swiperStarter.slideNext());
  }
}

$(document).ready(function () {
  if ($(".swiper").length) {
    initializeSwipers();
  }
});
