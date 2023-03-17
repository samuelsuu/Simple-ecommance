const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".total");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItemCount = document.querySelector(".cart-item-count");
// Select the "Buy" button
const buyButton = document.getElementById("buy-button");

// Add an event listener to the "Buy" button

function buy() {
    if (cart.length === 0) {
      alert("Your cart is empty.");
    } else {
      const confirmation = confirm("Are you sure you want to buy these items?");
      if (confirmation) {
        alert("Thank you for your purchase!");
        cart = [];
        updateCart();
        location.reload();
      }
    }
  }
  

addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

let cart = [];

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const cartItem = document.createElement("li");
    cartItem.innerText = cart[i].name + " - N" + cart[i].price;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = 'delete';
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("data-index", i);
    cartItem.appendChild(deleteButton);
    cartItems.appendChild(cartItem);
    total += cart[i].price;
  }
  cartTotal.innerText = "Total: N" + total.toFixed(2);
  cartItemCount.innerText = cart.length;
}

function addToCart(event) {
  const button = event.target;
  const name = button.getAttribute("data-name");
  const price = button.getAttribute("data-price");
  const item = {
    name: name,
    price: parseFloat(price),
  };
  cart.push(item);
  updateCart();
}

function removeCartItem(event) {
  if (event.target.classList.contains("delete-button")) {
    const index = parseInt(event.target.dataset.index);
    cart.splice(index, 1);
    updateCart();
  }
}

addToCartButtons.forEach((button) =>
  button.addEventListener("click", addToCart)
);
cartItems.addEventListener("click", removeCartItem);



/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "360px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }