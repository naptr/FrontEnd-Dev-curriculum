export function print(txt) {
  console.log(txt);
};

export function func1() {
  console.log("ini func 1");
}

export default {
  print: print,
  func1: func1
}


export var ini_variable = function(par_func) {  // this is how we declare first-class function
  par_func("Ini dari dalam first-class", 12, [1, 2, 3, 4, 5]);
  console.log("Function sebagai value/ first-classed function");
}
