let productName = document.querySelector(".productName");
let productDesc = document.querySelector(".productDescription");
let typeOfCat = document.querySelector(".selectCat");
let productPrice = document.querySelector(".productPrice");
let imageInput = document.querySelector(".imageInput");
let submitButton = document.querySelector(".submitButton");
let updateProduct = JSON.parse(localStorage.getItem("update product"))
let products = JSON.parse(localStorage.getItem("products"))

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(updateProduct.id)
    updateProductInfo(updateProduct)
    window.location = `../seller products.html`
})
window.onload = () => {
    showProductInfo(updateProduct)
}

function updateProductInfo(product) {
    product.productName = productName.value
    product.productDesc = productDesc.value
    product.typeOfCat = typeOfCat.value
    product.productPrice = productPrice.value
    let filteredArray = products.filter(p => p.id != product.productID)
    console.log(filteredArray)
    products.find(p => {
        if (p.id == product.id) {
            p.productName = productName.value
            p.productDesc = productDesc.value
            p.typeOfCat = typeOfCat.value
            p.productPrice = productPrice.value

        }

    })
    localStorage.setItem("products", JSON.stringify(filteredArray))
}
function showProductInfo(product) {
    productName.value = product.productName
    productDesc.value = product.productDesc
    typeOfCat.value = product.typeOfCat // return to it 
    productPrice.value = product.productPrice
    imageInput.value = product.imageUrl
}