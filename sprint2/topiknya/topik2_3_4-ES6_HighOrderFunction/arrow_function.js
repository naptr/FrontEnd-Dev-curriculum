
// Arrow function
// function with auto return feature

var obj = {
  myFunc: () => "value ini direturn",   // using arrow function to simplify in making funtion with return value (auto return)
  myFunc2: (param) => "value ini kembali direturn "+param,   // auto return with params
  myFunc3: (param2) => {  // using {}, remove auto return feature from arrow function
    console.log(param2);
  },
  myFuncFunc: function () {
    console.log(this);
  },
  myFuncArrow: () => {  // arrow function doesn't catch the main object
    console.log(this)
  }  // undefined
}

console.log(obj.myFunc());
console.log(obj.myFunc2('yusuf'));
console.log(obj.myFuncFunc());
console.log(obj.myFuncArrow());
