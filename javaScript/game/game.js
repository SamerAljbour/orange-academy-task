const CELL_SIZE = 60;
var objImage;
var wall;
const mazeContainer = document.getElementById("map")
const maze = [
    [0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1, 0],
];
const rows = maze.length
const cols = maze[0].length
function printDisplay(id) {
    const mazeContainer = document.getElementById(id)



    mazeContainer.style.width = `${cols * CELL_SIZE}px`
    mazeContainer.style.height = `${rows * CELL_SIZE}px`

    mazeContainer.innerHTML = ""
    let end;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell")
            if (maze[row][col] === 1) {
                cell.classList.add("wall")
            }
            if (row === 0 && col === 0) {
                end = document.createElement("img")
                end.setAttribute("src", "./finsh line.png");
                end.style.width = `${CELL_SIZE}px`
                end.style.height = `${CELL_SIZE}px`
                cell.appendChild(end)
            }

            cell.style.width = `${CELL_SIZE}px`
            cell.style.height = `${CELL_SIZE}px`
            cell.style.left = `${col * CELL_SIZE}px`
            cell.style.top = `${row * CELL_SIZE}px`

            mazeContainer.appendChild(cell)
        }

    }




}
function init() {

    const mazeContainer = document.getElementById("map")
    objImage = document.createElement("img");
    objImage.setAttribute("src", "./player pic.png")
    objImage.style.position = "absolute"
    objImage.style.right = "0px"
    objImage.style.bottom = "0px"
    objImage.style.height = `${CELL_SIZE}px`
    objImage.style.width = `${CELL_SIZE}px`
    mazeContainer.appendChild(objImage)
    document.addEventListener("keydown", getKeyAndMove)
    function getKeyAndMove(e) {
        var key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37: //left arrow key
                moveLeft();
                break;
            case 38: //Up arrow key
                moveUp();
                break;
            case 39: //right arrow key
                moveRight();
                break;
            case 40: //down arrow key
                moveDown();
                break;
        }

    }
}

function moveLeft() {
    let currentLeft = parseInt(objImage.style.left) || 300;
    if (parseInt(objImage.style.left) - CELL_SIZE === -60)
        isInMaze()
    else {
        objImage.style.left = `${currentLeft - CELL_SIZE}px`;
    }
    prev = currentLeft
    isWall()
    if (wall)
        objImage.style.left = `${currentLeft}px`

    wall = false
    isWon()
}

function moveUp() {
    // to check if the value nan
    let currentTop
    if (isNaN(parseInt(objImage.style.top)))
        currentTop = 240;
    else
        currentTop = parseInt(objImage.style.top)


    if (currentTop === 0)
        isInMaze()
    else
        objImage.style.top = `${currentTop - CELL_SIZE}px`;
    isWall()
    if (wall)
        objImage.style.top = `${currentTop}px`

    wall = false



}

function moveRight() {
    let currentLeft = parseInt(objImage.style.left) || 300;
    if (parseInt(currentLeft) + CELL_SIZE === 360)
        isInMaze()
    else
        objImage.style.left = `${parseInt(objImage.style.left) + CELL_SIZE}px`;

    isWall()
    if (wall)
        objImage.style.left = `${currentLeft}px`

    wall = false

}

function moveDown() {
    let currentTop
    if (isNaN(parseInt(objImage.style.top)))
        currentTop = 240;
    else
        currentTop = parseInt(objImage.style.top)
    if (currentTop === 240)
        isInMaze()
    else
        objImage.style.top = `${parseInt(objImage.style.top) + CELL_SIZE}px`;


    isWall()
    if (wall)
        objImage.style.top = `${currentTop}px`

    wall = false

}
function isInMaze() {
    if (parseInt(objImage.style.left) === 300) {
        console.log("you reached the end from right")
        return
    }
    if (parseInt(objImage.style.left) === 0) {
        console.log("you reached the end from left")
        return
    }
    if (parseInt(objImage.style.top) === 240) {
        console.log("you reached the end from bottom")
        return
    }
    if (parseInt(objImage.style.top) === 0) {
        console.log("you reached the end from top")
        return
    }
}
function isWall() {
    // column 4
    if (parseInt(objImage.style.left) === 240 && (parseInt(objImage.style.top) === 180)) {
        wall = true
        console.log("wall detected")

    }
    if (parseInt(objImage.style.left) === 240 && (parseInt(objImage.style.top) === 60)) {
        wall = true
        console.log("wall detected")

    }
    if (parseInt(objImage.style.left) === 240 && (parseInt(objImage.style.top) === 0)) {
        wall = true
        console.log("wall detected")

    }

    if (parseInt(objImage.style.left) === 240 && (parseInt(objImage.style.top) === 240)) {
        wall = true
        console.log("wall detected")

    }


    // column 3
    if (parseInt(objImage.style.left) === 180 && (parseInt(objImage.style.top) === 180)) {
        wall = true
        console.log("wall detected")

    }
    if (parseInt(objImage.style.left) === 180 && (parseInt(objImage.style.top) === 0)) {
        wall = true
        console.log("wall detected")

    }
    // column 2
    if (parseInt(objImage.style.left) === 120 && (parseInt(objImage.style.top) === 120)) {
        wall = true
        console.log("wall detected")

    }
    if (parseInt(objImage.style.left) === 120 && (parseInt(objImage.style.top) === 180)) {
        wall = true
        console.log("wall detected")

    }

    if (parseInt(objImage.style.left) === 120 && (parseInt(objImage.style.top) === 0)) {
        wall = true
        console.log("wall detected")

    }
    // column 1
    if (parseInt(objImage.style.left) === 0 && (parseInt(objImage.style.top) === 60)) {
        wall = true
        console.log("wall detected")

    }
    if (parseInt(objImage.style.left) === 0 && (parseInt(objImage.style.top) === 120)) {
        wall = true
        console.log("wall detected")

    }
    if (parseInt(objImage.style.left) === 0 && (parseInt(objImage.style.top) === 180)) {
        wall = true
        console.log("wall detected")

    }
    if (parseInt(objImage.style.left) === 0 && (parseInt(objImage.style.top) === 240)) {
        wall = true
        console.log("wall detected")

    }

    if (parseInt(objImage.style.left) === 120 && (parseInt(objImage.style.top) === 0)) {
        wall = true
        console.log("wall detected")
    }
}
function isWon() {
    if (parseInt(objImage.style.left) === 0 && (parseInt(objImage.style.top) === 0)) {

        alert("congrate you won")
    }
}

window.onload = function () {
    printDisplay("map");
    init();
};
