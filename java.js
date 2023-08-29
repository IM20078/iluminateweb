AOS.init({
  duration: 800, // Duración de la animación en milisegundos
  once: false,    // Animar solo una vez cuando se desplaza al elemento
});
document.addEventListener("DOMContentLoaded", function() {
  function slideMenu() {
      var menuList = document.querySelector("#menu-container .menu-list");
      var activeState = menuList.classList.contains("active");
      menuList.style.left = activeState ? "0%" : "-100%";
  }

  var menuWrapper = document.getElementById("menu-wrapper");
  menuWrapper.addEventListener("click", function(event) {
      event.stopPropagation();
      var hamburgerMenu = document.getElementById("hamburger-menu");
      var menuList = document.querySelector("#menu-container .menu-list");

      hamburgerMenu.classList.toggle("open");
      menuList.classList.toggle("active");
      slideMenu();

      document.body.classList.toggle("overflow-hidden");
  });

  var accordionToggles = document.querySelectorAll(".menu-list .accordion-toggle");
  accordionToggles.forEach(function(toggle) {
      toggle.addEventListener("click", function() {
          var accordionContent = this.nextElementSibling;
          accordionContent.classList.toggle("open");
          accordionContent.style.display = accordionContent.classList.contains("open") ? "block" : "none";

          this.classList.toggle("active-tab");
          var menuLink = this.querySelector(".menu-link");
          menuLink.classList.toggle("active");

          var allAccordionContents = document.querySelectorAll(".menu-list .accordion-content");
          allAccordionContents.forEach(function(content) {
              if (content !== accordionContent) {
                  content.classList.remove("open");
                  content.style.display = "none";
              }
          });

          var allAccordionToggles = document.querySelectorAll(".menu-list .accordion-toggle");
          allAccordionToggles.forEach(function(otherToggle) {
              if (otherToggle !== toggle) {
                  otherToggle.classList.remove("active-tab");
                  otherToggle.querySelector(".menu-link").classList.remove("active");
              }
          });
      });
  });
});
