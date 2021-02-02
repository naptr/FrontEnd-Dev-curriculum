// Scope -> Jangkauan
let iniVar = 1; // let variable declaration

function scope() {  // Scope -> current context
  var funct1 = function() { // Variable that created inside scope cannot called outside scope1
    console.log(iniVar);
  }
  funct1();
}

scope();

// Scope adalah area di dalam {} dalam sebuah fungsi ataupun if


const iniConst = [];  // uneditable variable, cannot assigned

function pushConst(num) {
  for (let i = 0; i < num; i++) {
    iniConst.push(i+1); // only works using method from object
  }
  return iniConst;
}

let result = pushConst(12);
console.log(result);


// Difference between var and let
// let -> block scope, only works in one line
// var -> scope general, except using inside another function scope


// weak scope
// if, for, while, do while, switch

// strong scope1
// function declaration
