// Class
// equivalent to creating object using constructor function

class Person {  // Creating object
  constructor(name) { // initialized once the class called
    this.name = name;
  }

  talk() {   // declaring function inside class
    console.log(`ini ${this.name} dari class Person`);
  }
}

var person = new Person("juan");

person.talk();


function Person2(string) {
  this.string = string;
  this.func = function () { // declaring function inside constructor function
    console.log(`ini ${string} dari constructor function`);
  }
}

var person1 = new Person2("juan");

person1.func();
