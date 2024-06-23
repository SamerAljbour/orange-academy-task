
let inputTxt = document.getElementById("input")
let addCommentButton = document.getElementById("button")
let showRealTimeComment = document.getElementById("txtComment")
let commentBox = document.getElementById("showTheComments");
let id;
let arrayOfComments = JSON.parse(localStorage.getItem("comments")) || []

let counter = arrayOfComments.length
console.log(arrayOfComments)

inputTxt.addEventListener("keyup", () => {
    showRealTimeComment.textContent = inputTxt.value
})
addCommentButton.addEventListener("click", () => {

    let commentTxt = inputTxt.value
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment: commentTxt })
    }).then((response) => {
        if (!response.ok)
            throw Error(`there is an error ${response.status}`)
        return response.json()
    }).then(data => {
        console.log("sending data" + JSON.stringify(data))
        createComment()
        arrayOfComments.push({ id: counter, comment: commentTxt });
        saveCommentInLocalStorage(commentTxt)
        showRealTimeComment.textContent = ""
        inputTxt.value = ""
    }).catch((err) => {
        console.error(` error : ${err}`)
    });
})


function saveCommentInLocalStorage() {
    localStorage.setItem("comments", JSON.stringify(arrayOfComments));
    console.log("Comments saved in local storage.");
}


function createComment() {
    let comment = document.createElement("div");
    comment.innerText = inputTxt.value;
    commentBox.appendChild(comment);
    counter++

}
window.onload = () => {
    for (let i = 0; i < counter; i++) {
        let comment = document.createElement("div");
        comment.innerText = arrayOfComments[i].comment;
        commentBox.appendChild(comment);
    }
};