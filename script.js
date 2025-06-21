document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("ativo");
  });

  document
    .querySelectorAll(
      'nav ul li a[href="#adocao"], nav ul li a[href="#passos"]'
    )
    .forEach((link) => {
      link.addEventListener("click", function () {
        menu.classList.remove("active");
        menuToggle.classList.remove("ativo");
      });
    });
});
