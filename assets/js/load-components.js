document.addEventListener("DOMContentLoaded", function () {
  // 加载header
  var header = document.querySelector("header");
  header.innerHTML = '<include src="header.html"></include>'; // 假设服务器支持SSI
  // import("./main.js");
  // import("./carousel.js");
  // import("./carouselHandle.js");
  // // 加载主体内容
  // var mainContent = document.querySelector("#main-content");
  // mainContent.innerHTML = '<include src="main_content.html"></include>';

  // // 加载联系我们部分
  // var contactSection = document.querySelector("#contact-section");
  // contactSection.innerHTML = '<include src="contact.html">';
});
