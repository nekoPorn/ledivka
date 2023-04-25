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

  var menuButton = document.getElementById("show-cart-btn");
var menu = document.getElementById("cart");

function togglecart(cart) {
    var menu = document.getElementById(cart);
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }


  // Get references to the button and list
const addBtn = document.querySelector("#addBtn");
const cartList = document.querySelector("#cart");

// Add a click event listener to the button
addBtn.addEventListener("click", function() {
  // Create a new list item and add it to the list
  const newItem = document.createElement("<li> hej</li>");
  newItem.textContent = "New item";
  cartList.appendChild(newItem);
});