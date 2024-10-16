function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-icon");
    const menuLinks = document.querySelector(".menu-links");
  
    hamburgerMenu.addEventListener("click", function () {
      menuLinks.classList.toggle("open");
    });
  });
  
  document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    this.innerText = isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode";
});
