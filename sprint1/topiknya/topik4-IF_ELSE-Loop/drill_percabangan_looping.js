function isAnimalFor(name) {
  let i = 0;
  if (name == "kucing") {
    for (; i < 1; i++) {
      console.log("meow");
    }
  } else if (name == "react") {
    for (; i < 4; i++) {
      console.log("react");
    }
  } else {
    for (; i < 3; i++) {
      console.log(name);
    }
  }
}

console.log("For Loop");
isAnimalFor("kucing");
isAnimalFor("react");
isAnimalFor("lainnya");
console.log("\n");


function isAnimalWhile(name) {
  let i = 0;
  if (name == "kucing") {
    while (i < 1) {
      console.log("meow");
      i++;
    }
  } else if (name == "react") {
    while (i < 4) {
      console.log("react");
      i++;
    }
  } else {
    while (i < 3) {
      console.log(name);
      i++;
    }
  }
}

console.log("While Loop");
isAnimalWhile("kucing");
isAnimalWhile("react");
isAnimalWhile("lainnya");
console.log("\n");


function isAnimalDoWhile(name) {
  let i = 0;
  if (name == "kucing") {
    do {
      console.log("meow");
      i++;
    } while (i < 1);
  } else if (name == "react") {
    do {
      console.log("react");
      i++;
    } while (i < 4);
  } else {
    do {
      console.log(name);
      i++;
    } while (i < 3);
  }
}

console.log("Do While Loop");
isAnimalDoWhile("kucing");
isAnimalDoWhile("react");
isAnimalDoWhile("lainnya");
