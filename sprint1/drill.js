function isAnimalFor(name) {
  let x = 0;
  if (name == "kucing") {
    for (; x < 1; x++) {
      console.log("meow");
    }
  } else if (name == "react") {
    for (; x < 4; x++) {
      console.log("react");
    }
  } else {
    for (; x < 3; x++) {
      console.log(name)
    }
  }
}
console.log(" -- For Loop --\n")
isAnimalFor("kucing");
isAnimalFor("react");
isAnimalFor("lainnya");
console.log("\n");

function isAnimalWhile(name) {
  let x = 0;
  if (name == "kucing") {
    while (x < 1) {
      console.log("meow");
      x++;
    }
  } else if (name == "react") {
    while (x < 4) {
      console.log("react");
      x++;
    }
  } else {
    while (x < 3) {
      console.log(name)
      x++;
    }
  }
}

console.log(" -- While Loop --\n");
isAnimalWhile("kucing");
isAnimalWhile("react");
isAnimalWhile("lainnya");
console.log("\n");

function isAnimalDoWhile(name) {
  let x = 0;
  if (name == "kucing") {
    do {
      console.log("meow");
      x++;
    } while (x < 1);
  } else if (name == "react") {
    do {
      console.log("react");
      x++;
    } while (x < 4);
  } else {
    do {
      console.log(name)
      x++;
    } while (x < 3);
  }
}

console.log(" -- Do While --\n");
isAnimalDoWhile("kucing");
isAnimalDoWhile("react");
isAnimalDoWhile("lainnya");
console.log("\n");
