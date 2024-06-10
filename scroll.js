// Function to toggle the visibility of the menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Function to update the menu links based on the currently visible section
function updateMenu() {
  const menu = document.getElementById("menu");
  const sections = document.querySelectorAll("section");
  const menuLinks = {
    page0: '<a href="#page1">Best Sellers</a> <a href="#page2">Buy Books</a>',
    page1: '<a href="#page0">Home</a> <a href="#page2">Buy Books</a>',
    page2: '<a href="#page0">Home</a> <a href="#page1">Best Sellers</a>',
  };

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      menu.innerHTML = menuLinks[section.id];
    }
  });
}

// Event listener to update the menu when the window is scrolled
window.addEventListener("scroll", updateMenu);

// Initial menu update when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", updateMenu);

// Function to smooth scroll to a section
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({ behavior: "smooth" });
}

// Add smooth scrolling to menu links
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  menu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const target = event.target.getAttribute("href");
      smoothScroll(target);
    }
  });
});
