const cdiv = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    cdiv.appendChild(div); 
}

// document.addEventListener ('mouseover', () => {
//     document.querySelector(div);
//     document.style.backgroundColor = 'red';
// })

cdiv.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'DIV') {
        event.target.style.backgroundColor = 'red';
    }
});

function gridSize() {
    window.prompt('Select the size of the grid', 16);
}

for (let i = 1; i < gridSize(); i++) {
    const div = document.createElement('div');
    cdiv.appendChild(div);
}