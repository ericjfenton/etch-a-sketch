console.log("hi");

const newSquare = document.createElement('div');
newSquare.classList.add('square');
const newRow = document.createElement('div');
newRow.classList.add('row');
newRow.appendChild(newSquare);
for (let i = 1; i < 16; i++) {
newRow.appendChild(newSquare.cloneNode());
}


const container = document.getElementById('container');
container.appendChild(newRow);
for (let i = 1; i < 16; i++) {
container.appendChild(newRow.cloneNode(true));
}