let searchButton = document.querySelector("#button")
let input = document.querySelector("#input")
let container = document.querySelector(".pokemonContainer")

input.addEventListener("keyup", () => {
    let inputValue = document.querySelector("#input").value.toLowerCase()
    let inputlength = inputValue.length
    if (inputlength === 0) {
        container.innerHTML = ""
        return
    }
    fetch(`https://pokeapi.co/api/v2/pokemon-form`).then(response => {
        return response.json()
    }).then(data => {
        container.innerHTML = ""
        for (let i = 0; i < data.results.length; i++) {
            if (data.results[i].name.slice(0, inputlength) === inputValue) {
                fetchImage(data.results[i].url)

            }
        }
    })
})

function fetchImage(url) {
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let charachter = document.createElement("div")
            charachter.innerHTML = `
                <img src = "${data.sprites.back_default}" alt = "" />
                <p>${data.name}</p> `
            container.appendChild(charachter)

        }).catch(err => {
            console.log("Error in Fetch image " + err)
        })
}