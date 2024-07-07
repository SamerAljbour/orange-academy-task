let products = JSON.parse(localStorage.getItem("products")) || [];
let inputSearch = document.querySelector(".inputSearch");
let cardContainer = document.querySelector(".cardContainer");

// Event listener for search input
inputSearch.addEventListener("input", () => {
    console.log("Entered search");

    // Clear the current product list
    cardContainer.innerHTML = '';

    // Get the search value and convert to lowercase for case-insensitive comparison
    let searchValue = inputSearch.value.toLowerCase();

    // Filter products based on search input
    let filteredProducts = products.filter(p =>
        p.productName.toLowerCase().startsWith(searchValue)
    );

    // Debugging: Check filtered products
    console.log("Filtered Products: ", filteredProducts);

    // Create and append product elements for each filtered product
    filteredProducts.forEach(p => {
        createProduct(p.productName, p.productPrice, p.productDesc, p.imageUrl, p.id, p.typeOfCat);
    });
});

function createProduct(name, price, desc, image, id, cat) {
    console.log("Creating Product:", { name, price, desc, image, id, cat });
    const product = document.createElement("div");
    product.classList.add("productCard");
    product.setAttribute("id", id); // Store the id in a data attribute
    product.innerHTML = `
        <img src="${image}" alt="${name}" class="productImage" />
        <p class="productTitle">${name}</p>
        <p class="productDesc">${desc}</p>
        <p class="productPrice">${price}</p>
        <button type="button" class="addToCart">Add to Cart</button>
    `;

    cardContainer.appendChild(product);
}
