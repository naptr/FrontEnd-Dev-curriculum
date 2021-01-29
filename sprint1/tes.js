function print(txt) {
  console.log(txt);
}

function println(txt) {
  console.log(txt+"\n");
}

function isRectangle(height, width) {
  for (var x = 0; x < height; x++) {
    result = ""
    for (var y = 0; y < width; y++) {
      if ((x == 0) || (y == 0) || (x == (height-1)) || (y == (width-1))) {
        result += "+ ";
      } else {
        result += "  ";
      }
    }
    print(result);
  }

  var rectangleArea = height*width;
  var rectangleAround = (height*2) + (width*2);

  print("The area of rectangle above is: " + rectangleArea);
  print("The around of rectangle above is: " + rectangleAround);

}

isRectangle(7, 24);


// Test Array

const cafe = {
  name: "Nin Cafe",
  businessHours: {
    opening: "10:00",
    closing: '20:00'
  },
  menu: ["Kopi", "Teh", "Kue Cokelat"]
};

for (let i = 0; i < cafe.menu.length; i++) {
  console.log(cafe.menu[i]);
}


var n = 9;

for (let i = 0; i < n; i++) {
  var result = "";
  for (let j = 0; j < n; j++) {
    if () {
      result += "- ";
    } else {
      result += "+ ";
    }
  }
console.log(result);

let x = 0;

while (true) {
  if (x >= 120) {
    break;
  } else {
    console.log(`${true} ` + (x+1));
    x++;
  }
}
