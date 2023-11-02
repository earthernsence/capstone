const wrapper = document.getElementById("wrapper");
const gridEntry = () => {
    const cell = document.createElement("div");
    cell.className = "o-pixel";
    cell.classList.add("o-pixel__empty");
    const change = () => hover(cell);
    cell.addEventListener("mouseover", change);
    return cell;
}

const grid = [];
const GRID_DIMENSION = 500;

function getDimensionsFromBrowser() {
    // use slider for squares on one size
    // calculate pixel size from 500x500 /
}

for (let i = 1; i <= 400; i++) {
    const cell = gridEntry();
    cell.id = `${i}`;
    wrapper.append(cell);
    grid[i] = cell;
}

function hover(cell) {
    cell.className = "o-pixel";
    cell.classList.add("o-pixel__filled");
}