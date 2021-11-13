window.addEventListener("scroll", function () {
  const navBar = document.querySelector("#navBar");
  navBar.classList.toggle("sticky", window.scrollY > 0);

  const goToTop = document.querySelector("#goToTop");
  goToTop.classList.toggle("block", window.scrollY > 300);
});
