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

  // var mixer = mixitup("#content", {
  //   load: {
  //     filter: ".algorithm", // 设置默认激活的过滤器
  //   },
  //   // ... 其他配置
  // });
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

  // 初始化地图
  var map = new AMap.Map("gaodemap", {
    zoom: 14, // 缩放级别
    center: [113.924898, 22.531384], // 地图中心点坐标，这里以北京为例
    // 其他地图参数...
  });

  // 创建标注点
  var marker = new AMap.Marker({
    position: [113.924898, 22.531384], // 标注点坐标
    title: "深圳市汇择科技有限公司", // 鼠标悬停时显示的标题
  });

  // 将标注点添加到地图上
  map.add(marker);
});
