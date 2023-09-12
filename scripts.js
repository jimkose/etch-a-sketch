function createGrid() {
    const gridSize = Number(prompt("Enter grid size (max 100)"));
    const body = document.querySelector('body');
    
    if(document.querySelector('.container')) body.removeChild(document.querySelector('.container'));
    
    const container = document.createElement('div');
    container.classList.add('container');

    for (let i = 0; i < gridSize ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        // square.textContent = i + 1;
        
        square.addEventListener('mouseover', event => {
            event.target.classList.add('hovering');
        })
        square.addEventListener('mouseout', event => {
            setTimeout(() => {
                event.target.classList.remove('hovering');
            }, '60');
        })

        container.appendChild(square);
    }

    body.appendChild(container);
}

const button = document.querySelector('button');
button.addEventListener('click', createGrid);