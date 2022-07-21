const container = document.querySelector("#container");
const maxCells = 256;

function makeCells() {
    for (let i = 0; i < maxCells; i++) {
        let cells = document.createElement("div");
        cells.innerHTML = "TEXT";
        container.appendChild(cells);
    }
}

let allCells = makeCells();