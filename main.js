const addToCartButtons = document.getElementsByName("add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Flower Added to Cart");
  });
});
