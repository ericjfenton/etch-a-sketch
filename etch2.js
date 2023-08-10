// define variables

let numRows = 16;
let choiceSlider = document.querySelector('input');
const choice = document.getElementById('choice');

const container = document.getElementById('container');

// define functions

const makeSquares = function() {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.appendChild(newSquare);
    for (let i = 1; i < numRows; i++) {
    newRow.appendChild(newSquare.cloneNode());
    }
    container.appendChild(newRow);
    for (let i = 1; i < numRows; i++) {
    container.appendChild(newRow.cloneNode(true));
    }
}

const updateGrid = function(e) {
    numRows = choiceSlider.value;
    choice.innerText = numRows;
    container.innerText = '';
    makeSquares();
  }

const etching = function(e) {
    if (e.target.className === 'square') {
      e.target.style.backgroundColor = 'black';
    }
  }

// main program

makeSquares();

choiceSlider.addEventListener('change', updateGrid);

let squares = document.querySelectorAll('.square');
squares.forEach(square => addEventListener('mouseover', etching));



