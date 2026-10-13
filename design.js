document.addEventListener("DOMContentLoaded", function () {

  // Get the current page filename
  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

  // Get all sidebar navigation items
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(function (item) {

    const link = item.querySelector("a");
    const linkPage = link.getAttribute("href")
      .split("/")
      .pop()
      .toLowerCase();

    
    item.classList.remove("active");

    if (linkPage === currentPage) {
      item.classList.add("active");
    }

  });

});
