const container = document.querySelector("#container");
const button = document.querySelector("button");
//let maxCells = 256;
let grid = 16;
//container.style.gridTemplateColumns = `repeat(${grid}, 1fr`;
//container.style.gridTemplateRows = `repeat(${grid}, 1fr`;

makeCells();

function makeCells() {
    for (let i = 0; i < (grid ** 2); i++) {
        cells = document.createElement("div");
        cells.classList.add("cell");
        container.appendChild(cells);
        container.style.gridTemplateColumns = `repeat(${grid}, 1fr`;
        container.style.gridTemplateRows = `repeat(${grid}, 1fr`;
    }
}

function hoverEffect(e) {
    const hover = e.target;
    hover.classList.add("hover");
}

function pixelSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    console.log(gridPixels);
    makeCells();
}

container.addEventListener("mouseover", hoverEffect);

button.addEventListener("click", function(e) {
    grid = parseInt(prompt("Enter a number of squares: "));
    if (grid > 100) return;
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr`;
    pixelSize();
});
