let cardContainer = document.querySelector(".cardContainer")
let products = JSON.parse(localStorage.getItem("saved products"))
window.onload = () => {
    console.log(products.length)
    if (products.length == 0)
        alert("your cart empty")

    for (let i = 0; i < products.length; i++) {
        createProduct(products[i].productName, products[i].productPrice, products[i].productDesc, products[i].imageUrl, products[i].id);
    }
    cardContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("removeFromCart")) {

            let productCard = e.target.closest(".productCard")

            if (productCard) {
                let productId = productCard.getAttribute("id");
                console.log(productId + " id")
                let product = products.find(p => p.id == productId)
                if (product) {
                    for (let i = 0; i < products.length; i++) {
                        console.log("entered for")
                        console.log(product.id)
                        if (productId == product.id) {
                            products.splice(i, 1)
                            console.log(products)
                            console.log("entered if")
                            localStorage.setItem("saved products", JSON.stringify(products))
                            productCard.remove()
                            break
                        }
                    }

                }
            }

        }
    })
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
        <button type="button" class="removeFromCart">remove from cart</button>
  `;
    cardContainer.appendChild(product);
}
