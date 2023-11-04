const wrapper = document.getElementById("wrapper");
const slider = document.getElementById("slider");
const gridEntry = () => {
    const cell = document.createElement("div");
    cell.className = "o-pixel";
    cell.classList.add("o-pixel__empty");
    cell.setAttribute("data-shading", 0);
    cell.addEventListener("mouseover", () => hover(cell));
    cell.style.width = `${getDimensionsFromBrowser()}px`;
    cell.style.height = `${getDimensionsFromBrowser()}px`;
    return cell;
}

let grid = [];
const GRID_DIMENSION = 500;
let penColour = "black";

function getDimensionsFromBrowser() {
    // use slider for squares on one size
    // calculate pixel size from 500x500 grid which is predefined
    const val = parseInt(slider.value, 10);
    return GRID_DIMENSION / val;
}

function getNeededNumberOfSquares() {
    const SQUARE_PIXELS = Math.pow(GRID_DIMENSION, 2);
    const SQUARE_PIXELS_OF_INDIVIDUAL_PIXEL = Math.pow(getDimensionsFromBrowser(), 2);
    return Math.round(SQUARE_PIXELS / SQUARE_PIXELS_OF_INDIVIDUAL_PIXEL);
}

function draw() {
    document.getElementById("dimensions-label").innerHTML = `Currently ${slider.value} x ${slider.value}`;
    
    wrapper.innerHTML = "";

    for (let i = 1; i <= getNeededNumberOfSquares(); i++) {
        const cell = gridEntry();
        cell.id = `${i}`;
        wrapper.append(cell);
        grid[i] = cell;
    }
}

let useEraser = false;
let useShading = false;

slider.onchange = () => {
    grid = [];
    draw();
}

function toggleEraser() {
    useEraser = !useEraser;
    document.getElementById("eraser-toggle").innerHTML = `Eraser: ${useEraser ? "ON" : "OFF"}`
}

function toggleShading() {
    useShading = !useShading;
    document.getElementById("shading-toggle").innerHTML = `Shading: ${useShading ? "ON" : "OFF"}`
}

function increment(up) {
    up ? slider.value++ : slider.value--;
    slider.onchange();
}

function hover(cell) {
    cell.className = "o-pixel";
    useEraser ? cell.classList.add("o-pixel__empty") : cell.classList.add("o-pixel__filled");
    cell.style["background-color"] = penColour;
    const shadingAsInteger = parseFloat(cell.dataset["shading"]);
    cell.dataset["shading"] = Math.min(useShading ? shadingAsInteger + 0.1 : 1, 1);
    cell.style["opacity"] = cell.dataset["shading"];
}

function changeColour(colour) {
    penColour = colour;
}

const COLOURS = ["black", "green", "red", "lightblue", "gray", "#37a4ba"];
const colourSelector = document.getElementById("colour-selectors");

for (const colour of COLOURS) {
    const cell = document.createElement("div");
    cell.classList.add("o-pixel", "o-pixel--selectable");
    cell.setAttribute("data-colour", colour)
    cell.style["background-color"] = colour;
    cell.addEventListener("click", () => changeColour(cell.dataset.colour))
    colourSelector.append(cell)
}