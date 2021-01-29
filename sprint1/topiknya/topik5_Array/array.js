// Array/ Larik
var arr = ["nol", "satu", "dua", "tiga"];

for (var index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

console.log(arr);

arr.pop();  // -> remove last element in array
console.log(arr);
arr.push("empat"); // -> add element to the last index of array
console.log(arr);

arr.shift();  // -> remove first element in array
console.log(arr);
arr.unshift("nol");  // -> add element to the first index of array
console.log(arr);

arr = ["nol", "satu", "dua", "new"]

arr[4] = "ok";

// Mean dari sebuah Array

newArray = [2, 3, 4, 5, 6, 0, 99, 21, 78, 998, 201]
result = 0;

for (var i = 0; i < newArray.length; i++) {
  result += newArray[i];
}

console.log(result/newArray.length);

// another string manipulation functions form

console.log(arr.toString()); // -> change the array elements into String
console.log(arr.join(', ')); // -> change the array elements into String with additional parameter given, in this case add ", "'s to the end of each elements

arr.splice(2, 0, "new 2", "new 3"); // -> add some given parameter to the array based on where to put the index and how many elements will be deleted
console.log(arr);

var myBoy = ["Bob", "Juan", "Hernandes"];
var myGirl = ["Rika", "Hina", "Miku"];
var myPeople = ["Josh", "Hana", "Chris", "Yuki"];

var groups = myBoy.concat(myGirl, myPeople);  // -> combine arrays given with the calling function array into one arrays with each array's given members inside
console.log(groups);

var fruits = ["apple", "grape", "kiwi", "orange", "rambutans", "guava"];
console.log(fruits.slice(3)); // -> take elements from the array starts from given parameter index until the last element of array, if the second parameter were not given
console.log(fruits.slice(1, 3));  // -> take elements from the array starts with first parameter given as index until the second parameter given index.
