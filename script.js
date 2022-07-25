const container = document.querySelector("#container");
const maxCells = 256;
let allCells = makeCells();

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