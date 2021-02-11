import * as Utils from "./utils.js"; // mengimport module dengan Desctructuring -> import {module} from "./path/to/module.js";

// print("Hello World");


// Desctructuring

// Object Desctructuring
var obj = {
  name: "Putra",
  division: "frontend"
};

// var {name, division} = obj; // Desctructuring

console.log(`${name}, ${division}`);

// Array Desctructuring
var arr = [1, 2];

var [el1, el2] = arr; // -> Array Desctructuring
console.log(`[${el1}, ${el2}]`);

// Desctructuring function from imported module
var {print, func1} = Utils; // Object properties knowledge is important
console.log(Utils);

print("object");
Utils.func1();
Utils.ini_variable(
  (required_param,...param1) => { // Callback with Rest (...) -> this is High Order Function
    console.log(`ini hof, print: ${param1[0]}, param2: ${param1[1]}, param3: ${required_param}`);
  }
);


// Backtic
// Rest -> Make given params into an array
