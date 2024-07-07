let cardContainer = document.querySelector(".cardContainer")
let products = JSON.parse(localStorage.getItem("products"))




window.onload = () => {
    console.log(products.length)
    if (products.length == 0)
        alert("there is no products")

    for (let i = 0; i < products.length; i++) {
        createProduct(products[i].productName, products[i].productPrice, products[i].productDesc, products[i].imageUrl, products[i].id);
    }
}
function createProduct(name, price, desc, image, id) {
    const product = document.createElement("div");
    product.classList.add("productCard");
    product.setAttribute("id", id); // Store the id in a data attribute
    product.innerHTML = `
    <img
          src="${image}"
          alt=""
          class="productImage"
        />
        <p class="productTitle">${name}</p>
        <p class="productDesc">
          ${desc}
        </p>
        <p class="productprice">${price}</p>
        <div class ="buttonContainer">
        <button type="button" class="delete">delete</button>
        <button type="button" class="update">Update</button>
        </div>
  `;
    cardContainer.appendChild(product);
}

// delete product

cardContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        let productCard = e.target.closest(".productCard")
        if (productCard) {
            let productID = productCard.getAttribute("id");
            console.log(productID)
            products = products.filter(p => p.id != productID)
            localStorage.setItem("products", JSON.stringify(products));
            productCard.remove();
        }
    }
})