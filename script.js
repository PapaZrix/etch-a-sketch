const container = document.querySelector("#container");
const maxCells = 256;
let cells;

function makeCells() {
    for (let i = 0; i < maxCells; i++) {
        cells = document.createElement("div");
        cells.classList.add("cell");
        container.appendChild(cells);
    }
}

let allCells = makeCells();
