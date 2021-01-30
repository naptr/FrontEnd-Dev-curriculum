// function print(txt) {
//   console.log(txt);
// }
//
// function println(txt) {
//   console.log(txt+"\n");
// }
//
// function isRectangle(height, width) {
//   for (var x = 0; x < height; x++) {
//     result = ""
//     for (var y = 0; y < width; y++) {
//       if ((x == 0) || (y == 0) || (x == (height-1)) || (y == (width-1))) {
//         result += "+ ";
//       } else {
//         result += "  ";
//       }
//     }
//     print(result);
//   }
//
//   var rectangleArea = height*width;
//   var rectangleAround = (height*2) + (width*2);
//
//   print("The area of rectangle above is: " + rectangleArea);
//   print("The around of rectangle above is: " + rectangleAround);
//
// }
//
// isRectangle(7, 24);
//
//
// // Test Array
//
// const cafe = {
//   name: "Nin Cafe",
//   businessHours: {
//     opening: "10:00",
//     closing: '20:00'
//   },
//   menu: ["Kopi", "Teh", "Kue Cokelat"]
// };
//
// for (let i = 0; i < cafe.menu.length; i++) {
//   console.log(cafe.menu[i]);
// }
//
//
// var n = 9;
//
// for (let i = 0; i < n; i++) {
//   var result = "";
//   for (let j = 0; j < n; j++) {
//     if () {
//       result += "- ";
//     } else {
//       result += "+ ";
//     }
//   }
// console.log(result);
//
// let x = 0;
//
// while (true) {
//   if (x >= 120) {
//     break;
//   } else {
//     console.log(`${true} ` + (x+1));
//     x++;
//   }
// }


// let me = "I";
// let you = "U";
//
// const uAndMe = (name) => {
//   if (name == you) {
//     console.log(me+" love "+you);
//   } else {
//     console.log("Nope, Sorry");
//   }
// }
//
// uAndMe("U");

// kosongkan variabel array1 menggunakan looping for dan function pop()
// contoh: array1.pop();

var array1 = [1,2,3,4,5,6,7,8,9,10,11,12];

var array1_length = array1.length
for (var x = 0;x < array1_length; x++) {
  array1.pop();
}

// seharusnya menampilkan "[]" pada terminal
console.log(array1);

// masukkan setiap element pada variabel array3
// kedalam variabel array2.
// Gunakan index untuk mendapat value
// dari setiap element array
// contoh: array3[index];
// dan gunakan looping untuk memasukkan setiap element
// dan juga jangan lupa gunakan function push
// contoh: array2.push(...);

var array2 = [0,1,2];
var array3 = [9,8,7,6,5,4,3,2,1];

for (var x = 0;x < array3.length; x++) {
  array2.push(array3[x]);
}

// seharusnya menampilkan "[0,1,2,9,8,7,6,5,4,3,2,1]" pada terminal
console.log(array2);
