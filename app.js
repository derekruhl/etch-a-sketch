const grid = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
    const square = document.createElement('div');
    grid.classList = 'grid';
    grid.appendChild(square);
    square.style.cssText = 'border: 1px solid black; height: 25px; width: 25px';
    
}