console.log("hi");
const testButton = document.getElementById("test");
console.log(testButton);
const tests = function(e) {
    console.log(e);
}
testButton.addEventListener('click', tests);

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