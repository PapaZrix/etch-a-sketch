const container = document.querySelector("#container");
const button = document.querySelector("button");
let maxCells = 256;
let allCells = makeCells();
let grid = 16;
container.style.gridTemplateColumns = `repeat(${grid}, 1fr`;
//container.style.gridTemplateRows = `repeat(${grid}, 1fr`;


function makeCells() {
    for (let i = 0; i < maxCells; i++) {
        cells = document.createElement("div");
        cells.classList.add("cell");
        container.appendChild(cells);
    }
}

function hoverEffect(e) {
    const hover = e.target;
    hover.classList.add("hover");
}

container.addEventListener("mouseover", hoverEffect);

button.addEventListener("click", function(e) {
    grid = parseInt(prompt("Enter a number of squares: "));
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr`;
    maxCells = grid * grid;
    console.log(maxCells);
    makeCells();
});