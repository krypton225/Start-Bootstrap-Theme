window.addEventListener("scroll", function () {
  const navBar = document.querySelector("#navBar");
  navBar.classList.toggle("sticky", window.scrollY > 0);

  const goToTop = document.querySelector("#goToTop");
  goToTop.classList.toggle("block", window.scrollY > 300);
});

function toggleMenu() {
  var toggle = document.querySelector(".toggle");
  toggle.classList.toggle("active");

  var menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}
