const container = document.querySelector(".container");
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
grid.textContent = 'A';

//need to make several rows/columns with flexbox. how?

let rows = 16;
let columns = 16;



//append child usercolumns to grid
//keep rows as children of columns
//how to append a specific numbr of children to grid/column/row???
//loop over a number of times input by the user??

let getGridSize = function () {
   return Number.(window.prompt('How many rows and columns would you like?, 16'));
}

getGridSize();

for (let i = 0; i < userRows; i++) {
    const userRows = document.createAttribute('div');
    const userColumns = document.createAttribute('div');
    userRows.classList.add('rows');
    userColumns.classList.add('columns');
    grid.appendChild(userColumns);
    userColumns.appendChild(userRows);
}