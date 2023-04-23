var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

function toggleMenu(menu) {
    var menu = document.getElementById(menu);
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }