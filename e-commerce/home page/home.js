let cardContainer = document.querySelector(".cardContainer");
let clotheingConatiner = document.querySelector(".clotheingConatiner");
let ElectronicsContainer = document.querySelector(".ElectronicsContainer");
let HomeConatiner = document.querySelector(".HomeConatiner");
let search = document.querySelector(".search");
let inputSearch = document.querySelector(".inputSearch");
let products = JSON.parse(localStorage.getItem("products")) || [];
let savedproducts = JSON.parse(localStorage.getItem("saved products")) || [];
inputSearch.addEventListener("click", () => {
    window.location = `./search.html`
})
search.addEventListener("input", () => {
    console.log("entered search")
    products.filter(p => {

        if (p.productName.startsWith(search.value)) {
            createProduct(p.productName, p.productPrice, p.productDesc, p.imageUrl, p.id, p.typeOfCat);
        }
    }
    )
})
function createProduct(name, price, desc, image, id, cat) {
    console.log(cat)
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
    <button type="button" class="addToCart">Add to Cart</button>
  `;
    if (cat == "Clothing")
        clotheingConatiner.appendChild(product);
    if (cat == "Electronics")
        ElectronicsContainer.appendChild(product);
    if (cat == "Home")
        HomeConatiner.appendChild(product);

}

window.onload = () => {
    // localStorage.clear()
    for (let i = 0; i < products.length; i++) {
        createProduct(products[i].productName, products[i].productPrice, products[i].productDesc, products[i].imageUrl, products[i].id, products[i].typeOfCat);
    }

    cardContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("addToCart")) {
            console.log("Entered addToCart");
            let productCard = e.target.closest(".productCard");

            if (productCard) {
                let productId = productCard.getAttribute("id");
                console.log(`Product ID: ${productId}`);

                let product = products.find(p => p.id == productId);
                if (product) {
                    let isInCart = savedproducts.some(p => p.id == productId);
                    if (!isInCart) {
                        console.log("Added to cart:", product);
                        savedproducts.push(product);
                        localStorage.setItem("saved products", JSON.stringify(savedproducts));
                    } else {
                        console.log("Product already in cart");
                    }
                }
            } else {
                console.error("Product card not found");
            }
        }
    });
};
