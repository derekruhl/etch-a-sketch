const container = document.querySelector(".container");

for (let i = 1; i < 257; i++) {
    const grid = document.createElement('div');
    userRows.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    container.appendChild(grid);
}
