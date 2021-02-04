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


class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`Saya adalah hewan ${this.name}`);
    console.log(`Usia saya ${this.age}`);
  }
}

var anjing = new Animal("Anjing", 12);
anjing.info();


// Constructor Overriding concept in JavaScript
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // overriding using super()

    this.breed = breed; // new property
  }

  info() {
    super.info();
    // console.log(`Saya adalah hewan ${this.name}`);
    // console.log(`Usia saya ${this.age}`);

    // new method value
    console.log(`Jenis saya adalah ${this.name} ${this.breed}`);  // this.name -> old property/ inherited property
  }
}

var anjing2 = new Dog("Harimau", 4, "Sumatera");
anjing2.info();
