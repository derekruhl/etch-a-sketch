const container = document.querySelector(".container");
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
grid.textContent = 'A';

//need to make several rows/columns with flexbox. how?

let rows = 16;
let columns = 16;

const userRows = document.createAttribute('div');
const userColumns = document.createAttribute('div');

//append child usercolumns to grid
//keep rows as children of columns
//how to append a specific numbr of children to grid/column/row???