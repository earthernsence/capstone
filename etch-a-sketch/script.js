const wrapper = document.getElementById("wrapper");
const slider = document.getElementById("slider");
const gridEntry = () => {
    const cell = document.createElement("div");
    cell.className = "o-pixel";
    cell.classList.add("o-pixel__empty");
    const change = () => hover(cell);
    cell.addEventListener("mouseover", change);
    return cell;
}

let grid = [];
const GRID_DIMENSION = 500;

function getDimensionsFromBrowser() {
    // use slider for squares on one size
    // calculate pixel size from 500x500 /
    const val = parseInt(slider.value, 10);
    return GRID_DIMENSION / val;
}

function getNeededNumberOfSquares() {
    const SQUARE_PIXELS = Math.pow(GRID_DIMENSION, 2);
    const SQUARE_PIXELS_OF_INDIVIDUAL_PIXEL = Math.pow(getDimensionsFromBrowser(), 2);
    return SQUARE_PIXELS / SQUARE_PIXELS_OF_INDIVIDUAL_PIXEL;
}

function draw() {
    for (let i = 1; i <= getNeededNumberOfSquares(); i++) {
        const cell = gridEntry();
        cell.id = `${i}`;
        wrapper.append(cell);
        grid[i] = cell;
    }
}

slider.onchange = () => {
    grid = [];
    wrapper.children = [];
    draw();
}

function hover(cell) {
    cell.className = "o-pixel";
    cell.classList.add("o-pixel__filled");
}