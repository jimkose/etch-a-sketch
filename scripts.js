function createGrid() {
    const gridSize = Number(prompt("Enter grid size (max 100)"));
    const body = document.querySelector('body');
    
    if(document.querySelector('.container')) body.removeChild(document.querySelector('.container'));
    
    const container = document.createElement('div');
    container.classList.add('container');

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');

            square.addEventListener('mouseover', event => {
                event.target.classList.add('hovering');
            })
            square.addEventListener('mouseout', event => {
                setTimeout(() => {
                    event.target.classList.remove('hovering');
                }, '60');
            })

            row.appendChild(square);
        }

        container.appendChild(row);
    }

    body.appendChild(container);
}

const button = document.querySelector('button');
button.addEventListener('click', createGrid);
