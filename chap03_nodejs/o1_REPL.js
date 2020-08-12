// Read -> Evaluate -> Print -> ... ( Loop )
// R, E, P, L

function helloWorld() {
  console.log('Hello World');
  helloNode();
}

function helloNode() {
  console.log('Hello Node');
}

helloWorld();

// > node o1_REPL.js
// Hello World
// Hello Node


// Tip) Power-Shell -> CMD (O)   in VSCode Console (windows10)