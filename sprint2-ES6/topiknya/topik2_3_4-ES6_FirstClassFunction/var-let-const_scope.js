// Scope -> Jangkauan
let iniVar = 1; // let variable declaration

function scope() {  // Scope -> current context
  var funct1 = function() { // Variable that created inside scope cannot called outside scope1 -> only gettting called inside function, but can be called outside if or loop statement
    console.log(iniVar);
  }
  funct1();
}

scope();

// Scope adalah area di dalam {} dalam sebuah fungsi ataupun if


const iniConst = [];  // uneditable variable, cannot assigned

function pushConst(num) {
  for (let i = 0; i < num; i++) {
    iniConst.push(i+1); // only works using method from object, for assigning or adding something in this case const iniConst acts as an array
  }
  return iniConst;
}

let result = pushConst(12);
console.log(result);


// Difference between var and let
// let -> block scope, only works in one line
// var -> scope general, except used inside another function scope


// weak scope
// if, for, while, do while, switch

// strong scope1
// function declaration
