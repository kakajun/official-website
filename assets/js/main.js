(function () {

  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;
    var logo = document.querySelector(".navbar-brand img");

    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
      logo.src = "assets/img/logo/logo-2.svg";
    } else {
      header_navbar.classList.remove("sticky");
      logo.src = "assets/img/logo/logo.svg";
    }

    // show or hide the back-top-top button
    var backToTo = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "flex";
    } else {
      backToTo.style.display = "none";
    }
  };

  // Get the navbar

  // for menu scroll
  var pageLink = document.querySelectorAll(".page-scroll");

  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      // document.querySelector(elem.getAttribute("href")).scrollIntoView({
      //   behavior: "smooth",
      //   offsetTop: 1 - 60,
      // });
      var element = document.querySelector(elem.getAttribute("href"));
      // 计算滚动到的位置，顶部偏移量
      var scrollPosition = element.offsetTop - 50;
      // 滚动到元素，同时传入一个选项对象
      element.scrollIntoView({
        behavior: "smooth", // 平滑滚动
        block: "start", // 元素的顶部与视口顶部对齐
      });
      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: "smooth",
      });
    });
  });

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".page-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });
  //======== tiny slider
  var slider = new tns({
    container: ".testimonial-active",
    slideBy: "page",
    autoplay: false,
    mouseDrag: true,
    gutter: 0,
    items: 1,
    nav: true,
    controls: false,
    responsive: {
      0: {
        items: 1,
      },

      992: {
        items: 2,
      },
    },
  });

  //====== counter up
  var cu = new counterUp({
    start: 0,
    duration: 2000,
    intvalues: true,
    interval: 100,
    append: " ",
  });
  cu.start();
})();
