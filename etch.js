console.log("hi");
const testButton = document.getElementById('test');
let squaresDesired = document.querySelector('input');
const choice = document.getElementById('choice');
console.log(testButton);
console.log(squaresDesired);
const tests = function(e) {
    console.log(e);
    console.log(squaresDesired.value);
    container.innerText = '';
}
let numRows = 16;
let sizeNum = Math.floor(961/numRows) - 1;
let sizeText = sizeNum + 'px';
let sizeText2 = '0 0 ' + sizeText;
console.log(sizeText);
console.log(typeof sizeText);
const updateGrid = function(e) {
  numRows = squaresDesired.value;
  choice.innerText = numRows;
  sizeNum = Math.floor(961/numRows) - 1;
  // if (960 - sizeNum * numRows > sizeNum) sizeNum++;
  //if (960 - sizeNum * numRows > sizeNum) sizeNum++;
  // doesn't work correctly for large numbers
  // actually looks worse with the "fix" with if statements
  // need to make one row at a time
  sizeText = sizeNum + 'px';
  sizeText2 = '0 0 ' + sizeText;
  container.innerText = '';
  makeSquares();
}

// the method for constructing is wrong
// should make separate rows, not rely on flexwrap

const makeSquares = function() {
  const newSquare = document.createElement('div');
newSquare.classList.add('square');
newSquare.style.height = sizeText;
newSquare.style.width = sizeText;
newSquare.style.flex = sizeText2;
container.appendChild(newSquare);
for (let i = 1; i < numRows ** 2; i++) {
container.appendChild(newSquare.cloneNode());
}

}

const etching = function(e) {
  if (e.target.className === 'square') {
    e.target.style.backgroundColor = 'black';
  }
  console.log(e.target.className);
}
makeSquares();
/*const newSquare = document.createElement('div');
newSquare.classList.add('square');
newSquare.style.height = sizeText;
newSquare.style.width = sizeText;
newSquare.style.flex = sizeText2;
container.appendChild(newSquare);
for (let i = 1; i < numRows ** 2; i++) {
container.appendChild(newSquare.cloneNode());
} */
let squares = document.querySelectorAll('.square');

squares.forEach(square => addEventListener('mouseover', etching));

testButton.addEventListener('click', tests);
squaresDesired.addEventListener('change', updateGrid);

/*
Project concept is to move the mouse across a grid,
with the squares changing colors. Initial grid would
be 16x16 and created in JavaScript. The user can
then input the number of rows and columns, with
a maximum of 100. That could be done with a slider,
or with input checking. Project options include
having the squares becoming increasingly darker shades
of gray, or to turn random colors.
Step 1: Make 16x16 grid work with html & css only
Step 2: Add the grid with JavaScript (should be a simple step),
  because a previous exercise added a div with JavaScript
Step 3: Add the variable grid capability

Things to figure out
1. Adding elements with JS.
2. Adding classes or styles with JS.
3. Using a variable to set square size or color.
4. Getting numerical input from the user.
5. Making the grid appear right: calculate square
    size, use justify and align options to space evenly
    (or would space between or another option be better)



*/