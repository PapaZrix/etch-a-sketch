const container = document.querySelector("#container");
const sizeSlider = document.querySelector(".range");
const size = document.querySelector(".num");
const toggleLinesBtn = document.querySelector(".toggle")
const clearBtn = document.querySelector(".clear")
let grid = 16;
size.textContent = `Grid size: ${grid} x ${grid}`
let drawing = false

makeCells();

container.addEventListener("click", draw)

sizeSlider.addEventListener("mousemove", (e) => {
    updateOnSlide(e.target.value)
})

sizeSlider.addEventListener("mouseup", (e) => {
    grid = e.target.value
    resetGrid()
})

toggleLinesBtn.addEventListener("click", toggleGridLines)

clearBtn.addEventListener("click", clearGrid)

function makeCells() {
    for (let i = 0; i < (grid ** 2); i++) {
        cells = document.createElement("div");
        cells.classList.add("cell");
        container.appendChild(cells);
        container.style.gridTemplateColumns = `repeat(${grid}, 1fr`;
        container.style.gridTemplateRows = `repeat(${grid}, 1fr`;
    }
}

function paint(e) {
    const hover = e.target;
    hover.classList.add("hover");
}

function remove(e) {
    const hover = e.target
    hover.classList.remove("hover")
}

function resetGrid() {
    let cells = container.querySelectorAll('div');
    cells.forEach(cell => cell.remove());
    makeCells();
}

function draw() {
    let children = container.childNodes
    let cells = Array.from(children)
    if (!drawing) {
        cells.forEach((cell) => {
            cell.addEventListener("mouseleave", paint)
        })
        drawing = true
    } else {
        cells.forEach((cell) => {
            cell.removeEventListener("mouseleave", paint)
        })
        drawing = false
    }
}

function updateOnSlide(value) {
    size.textContent = `Grid size: ${value} x ${value}`
}

function clearGrid() {
    let cells = container.querySelectorAll("div")
    cells.forEach((cell) => cell.classList.remove("hover"))
}

function toggleGridLines() {
    const toggleLinesBtn = document.querySelector(".toggle")
    let cells = container.querySelectorAll("div")
    cells.forEach((cell) => cell.classList.toggle("cell"))  
    toggleLinesBtn.classList.toggle("active")  
}
