const container = document.querySelector('.container');
const button = document.querySelector('#new-grid');
const randColor = document.querySelector('#rand-color');
const blackColor = document.querySelector('#black-color');
let myMediaQuery = window.matchMedia('(max-width: 520px)');

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.grid').forEach(element => {
        element.style.backgroundColor = 'white';
    })
})

function createGrid(x) {

    if(myMediaQuery.matches === false) {
        for(let rows = 0; rows < x; rows++) {
            for (let cols = 0; cols < x; cols++) {
                const div = document.createElement('div');
                div.classList.add('grid');
                div.style.width = 500 / x + 'px';
                div.style.height = 500 / x + 'px';
                container.appendChild(div);
            }
        }
    }

    if(myMediaQuery.matches === true) {
        for(let rows = 0; rows < x; rows++) {
            for (let cols = 0; cols < x; cols++) {
                const div = document.createElement('div');
                div.classList.add('grid');
                div.style.width = 250 / x + 'px';
                div.style.height = 250 / x + 'px';
                container.appendChild(div);
            }
        }
    }
}

function clearGrid() {
    container.innerHTML = '';
}

function newGrid() {
    let input = prompt("Introduce el número de recuadros que tendrá cada lado");

    if (input === '' || isNaN(input)) {
        alert('Introduce un número válido');
    } else {
        input = parseInt(input);

        if (input <= 0 || input > 100) {
            alert('Introduce un número mayor que 0 y menor o igual que 100')
        } else {
            clearGrid();
            createGrid(input);
        }
    }
}

function main() {
    
    createGrid(16);

    container.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('grid')) {
            e.target.style.backgroundColor = 'black';
        }
    });

    randColor.addEventListener('click', () => {
        container.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('grid')) {
                let randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
                e.target.style.backgroundColor = randomColor;
            }
        });
    });

    blackColor.addEventListener('click', () => {
        container.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('grid')) {
                e.target.style.backgroundColor = 'black';
            }
        });
    });

    button.addEventListener('click', () => {
        newGrid();
    })

}

main();
