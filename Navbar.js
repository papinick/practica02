document.addEventListener("DOMContentLoaded", function() {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownContent = document.querySelector(".dropdown-content");
    const socialIcons = document.querySelector(".social-icons");
  
    let isDropdownOpen = false;
  
    dropdownBtn.addEventListener("click", function() {
      if (!isDropdownOpen) {
        dropdownContent.style.display = "block";
        dropdownContent.style.opacity = "1";
        socialIcons.style.opacity = "0";
      } else {
        dropdownContent.style.opacity = "0";
        setTimeout(function() {
          dropdownContent.style.display = "none";
          socialIcons.style.opacity = "1";
        }, 300);
      }
      
      isDropdownOpen = !isDropdownOpen;
    });
  
    const closeDropdown = function() {
      if (isDropdownOpen) {
        dropdownContent.style.opacity = "0";
        setTimeout(function() {
          dropdownContent.style.display = "none";
          socialIcons.style.opacity = "1";
        }, 300);
        isDropdownOpen = false;
      }
    };
  
    // Agregar evento para cerrar el menú desplegable al hacer clic en cualquier lugar
    document.addEventListener("click", function(event) {
      if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
        closeDropdown();
      }
    });
  
    const brandsDropdown = document.querySelector(".navbar .dropdown");
    const brandsDropdownContent = document.querySelector(".navbar .dropdown-content");
  
    let isBrandsDropdownOpen = false;
  
    brandsDropdown.addEventListener("click", function(event) {
      if (event.target.classList.contains("dropdown-btn")) {
        if (!isBrandsDropdownOpen) {
          brandsDropdownContent.style.display = "block";
          brandsDropdownContent.style.opacity = "1";
        } else {
          brandsDropdownContent.style.opacity = "0";
          setTimeout(function() {
            brandsDropdownContent.style.display = "none";
          }, 300);
        }
  
        isBrandsDropdownOpen = !isBrandsDropdownOpen;
      }
    });
  
    // Agregar evento para cerrar el menú de marcas al hacer clic en cualquier lugar
    document.addEventListener("click", function(event) {
      if (!brandsDropdown.contains(event.target) && !brandsDropdownContent.contains(event.target)) {
        isBrandsDropdownOpen = false;
        brandsDropdownContent.style.opacity = "0";
        setTimeout(function() {
          brandsDropdownContent.style.display = "none";
        }, 300);
      }
    });
  
    const lightModeBtn = document.getElementById("light-mode-btn");
    const darkModeBtn = document.getElementById("dark-mode-btn");
  
    lightModeBtn.addEventListener("click", function() {
      document.body.style.backgroundColor = "white";
    });
  
    darkModeBtn.addEventListener("click", function() {
      document.body.style.backgroundColor = "#333";
    });
  
    const navbar = document.querySelector(".navbar");
    const socialIconsContainer = document.querySelector(".social-icons");
    const title = document.querySelector(".title");
  
    navbar.insertBefore(socialIconsContainer, title.nextSibling);
  });