import { getProducts } from "./database.js";

const products = getProducts();

document.addEventListener("click", (event) => {
  const itemClicked = event.target;
  if (itemClicked.id.startsWith("product")) {
    const [, productId] = itemClicked.id.split("--");
    // console.log(productId);
    //take captured product id. find the object that matches in the products array.
    const foundProduct = products.find(
      (product) => product.id == parseInt(productId)
    );

    window.alert(`${foundProduct.name} costs $${foundProduct.price}`);
  }
});

export const Products = () => {
  let html = "<ul>";

  for (const product of products) {
    html += `<li id="product--${product.id}">${product.name}</li>`;
  }

  html += "</ul>";

  return html;
};
