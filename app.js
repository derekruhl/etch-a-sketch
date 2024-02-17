const cdiv = document.querySelector('.container');

for (let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    cdiv.appendChild(div); 
}

document.addEventListener ('mouseover', () => {
    document.querySelector(div);
    document.style.backgroundColor = 'red';
})