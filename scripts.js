const container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.textContent = i + 1;
    container.appendChild(square);
}

const body = document.querySelector('body');
body.appendChild(container);