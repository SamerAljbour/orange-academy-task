let addToCartIphone = document.getElementById("button1")
let addToCartHeadSet = document.getElementById("button2")
let addToCartKeyborad = document.getElementById("button3")

let isIphoneExist = false;
let isHeadsetExist = false;
let isKeyboardExit = false;

addToCartIphone.addEventListener("click", () => {
    const orignalValue = 900;
    const product = document.createElement(`div`);
    product.setAttribute("class", "item iphone");
    if (!isIphoneExist) {
        product.innerHTML = `
         <img class="cartImage" src="./images/iphone.png" alt="">
                <div class="addDeleteDiv">
                    <button class="decrement">-</button>
                    <input type="text" class="quantity" value="1" min="1">
                    <button class="increment">+</button>
                </div>
                <div class="priceInCart"> 900 JD </div>
                <button type="button" class="deleteFromCart">X</button>`
        isIphoneExist = true;
        document.getElementById("containerCart").appendChild(product)


        addProductEventListner(product, orignalValue, () => isIphoneExist = false)
        updateSessionStorage(product, orignalValue);
    }
    else {
        incrementQua(".iphone", orignalValue)
        updateSessionStorage(document.querySelector(".iphone"), orignalValue);
    }


})
addToCartHeadSet.addEventListener("click", () => {
    const orignalValue = 150;
    const product = document.createElement(`div`);
    product.setAttribute("class", "item headset")
    if (!isHeadsetExist) {
        product.innerHTML = `
         <img class="cartImage" src="./images/headset.png" alt="">
                <div class="addDeleteDiv">
                    <button class="decrement">-</button>
                    <input type="text" class="quantity" value="1" min="1">
                    <button class="increment">+</button>
                </div>
                <div class="priceInCart"> 150 JD </div>
                <button type="button" class="deleteFromCart">X</button>`
        isHeadsetExist = true;
        document.getElementById("containerCart").appendChild(product)


        addProductEventListner(product, orignalValue, () => isHeadsetExist = false)
        updateSessionStorage(product, orignalValue);

    }
    else {
        incrementQua(".headset", orignalValue)
        updateSessionStorage(document.querySelector(".headset"), orignalValue);
    }


})
addToCartKeyborad.addEventListener("click", () => {
    const orignalValue = 50;
    const product = document.createElement(`div`);

    product.setAttribute("class", "item keyboard")
    if (!isKeyboardExit) {
        product.innerHTML = `
         <img class="cartImage" src="./images/keyboard.png" alt="">
                <div class="addDeleteDiv">
                    <button class="decrement">-</button>
                    <input type="text" class="quantity" value="1" min="1">
                    <button class="increment">+</button>
                </div>
                <div class="priceInCart"> 50 JD </div>
                <button type="button" class="deleteFromCart">X</button>`
        isKeyboardExit = true;
        document.getElementById("containerCart").appendChild(product)


        addProductEventListner(product, orignalValue, () => isKeyboardExit = false)
        incrementQua(product, orignalValue)
        updateSessionStorage(product, orignalValue);

    }
    else {
        incrementQua(".keyboard", orignalValue)
        updateSessionStorage(document.querySelector(".keyboard"), orignalValue);
    }


})



//functions

function addProductEventListner(product, orignalValue, resetExistsFlag) {
    product.querySelector(".deleteFromCart").addEventListener("click", () => {
        product.remove()
        resetExistsFlag();
        if (isIphoneExist === true)
            isIphoneExist = false
        if (isHeadsetExist === true)
            isHeadsetExist = false
        if (isKeyboardExit === true)
            isKeyboardExit = false
        removeSessionStorage(product)
    })
    product.querySelector(".increment").addEventListener("click", () => {

        let quantityInput = product.querySelector(".quantity");
        let priceInCart = product.querySelector(".priceInCart");
        quantityInput.value = parseInt(quantityInput.value) + 1;
        priceInCart.textContent = orignalValue * parseInt(quantityInput.value) + " JD"
        updateSessionStorage(product, orignalValue);


    })
    product.querySelector(".decrement").addEventListener("click", () => {
        let quantityInput = product.querySelector(".quantity");
        let priceInCart = product.querySelector(".priceInCart");

        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1
            priceInCart.textContent = orignalValue * parseInt(quantityInput.value) + " JD"
        }

        updateSessionStorage(product, orignalValue);
    })

}
function incrementQua(selector, orignalValue) {
    let product = document.querySelector(selector);
    let quantityInput = product.querySelector(".quantity")
    let priceInCart = product.querySelector(".priceInCart")
    quantityInput.value = parseInt(quantityInput.value) + 1
    priceInCart.textContent = parseInt(quantityInput.value) * orignalValue + " JD"


}
let Total = document.querySelector(".buttonTotal");
Total.addEventListener("click", () => {
    let items = document.querySelectorAll(".item")
    let show = document.querySelector(".Totalprice")
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        let priceText = items[i].querySelector(".priceInCart").textContent;
        let price = parseInt(priceText);

        if (!isNaN(price)) {
            sum += price;
        }
    }
    sessionStorage.setItem("total paid", sum)
    show.textContent = sum + " JD";
})
function updateSessionStorage(product, originalPrice) {
    let productName = product.getAttribute("class").split(" ")[1];
    let quantity = parseInt(product.querySelector(".quantity").value);
    let totalPrice = quantity * originalPrice;

    sessionStorage.setItem(productName, JSON.stringify({
        name: productName,
        quantity: quantity,
        totalPrice: totalPrice
    }));
}
function removeSessionStorage(product) {
    let productName = product.getAttribute("class").split(" ")[1];

    sessionStorage.removeItem(productName);
}

