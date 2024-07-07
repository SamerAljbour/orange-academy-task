let productName = document.querySelector(".productName");
let productDesc = document.querySelector(".productDescription");
let typeOfCat = document.querySelector(".selectCat");
let productPrice = document.querySelector(".productPrice");
let imageInput = document.querySelector(".imageInput");
let submitButton = document.querySelector(".submitButton");
let validProductName = document.querySelector(".validProductName");
let validProductDescription = document.querySelector(".validProductDescription");
let validProductPrice = document.querySelector(".validProductPrice");
let validImageInput = document.querySelector(".validImageInput");
let arrayOfProduct = [] || JSON.parse(localStorage.getItem("products"));
let id = arrayOfProduct.length;
let isValid = false;
let productInfoOBJ = {};

submitButton.addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent default form submission

    checkValidation();
    if (isValid) {
        await saveData();
    } else {
        console.log("Validation failed");
    }
});

function checkValidation() {
    isValid = true; // Start with true and set to false if any field is invalid

    // Validate product name
    if (productName.value === "") {
        validProductName.textContent = "Fill the input please";
        isValid = false;
    } else {
        validProductName.textContent = "";
    }

    // Validate product description
    if (productDesc.value === "") {
        validProductDescription.textContent = "Fill the input please";
        isValid = false;
    } else {
        validProductDescription.textContent = "";
    }

    // Validate product price
    if (productPrice.value === "") {
        validProductPrice.textContent = "Fill the input please";
        isValid = false;
    } else {
        validProductPrice.textContent = "";
    }

    // Validate image input
    if (imageInput.files.length === 0) {
        validImageInput.textContent = "You should choose an image";
        isValid = false;
    } else {
        validImageInput.textContent = "";
    }
}

async function saveData() {
    console.log("Entered saveData function");

    const imageUrl = await saveImage();
    if (imageUrl) {
        productInfoOBJ = {
            id: ++id,
            productName: productName.value,
            productDesc: productDesc.value,
            typeOfCat: typeOfCat.value,
            productPrice: productPrice.value,
            imageUrl: imageUrl
        };
        arrayOfProduct.push(productInfoOBJ);
        localStorage.setItem("products", JSON.stringify(arrayOfProduct));

        resetForm();
    } else {
        console.error("Image saving failed");
    }
}

function saveImage() {
    return new Promise((resolve, reject) => {
        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageUrl = e.target.result;
                localStorage.setItem("savedImage", imageUrl);
                resolve(imageUrl); // Resolve promise with image URL
            };
            reader.onerror = function (error) {
                console.error("Error reading file:", error);
                reject(error); // Reject promise if there is an error
            };
            reader.readAsDataURL(file);
        } else {
            validImageInput.textContent = "You should choose an image";
            resolve(null); // Resolve with null if no file is selected
        }
    });
}

function resetForm() {
    productName.value = "";
    productDesc.value = "";
    productPrice.value = "";
    imageInput.value = "";
    typeOfCat.selectedIndex = 0; // Reset the select box
    localStorage.removeItem("savedImage")
}
