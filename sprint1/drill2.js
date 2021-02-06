function isStringFor(string) {
  var i = 0;
  if (string == "kucing") {
    for(; i < 1; i++) {
      console.log("meow");
    }
  } else if (string == "react") {
    for(; i < 3; i++) {
      console.log("react");
    }
  } else {
    for(; i < 4; i++)
    console.log(string);
  }
}

isStringFor("kucing");
isStringFor("react");
isStringFor("lainnya");

function isStringWhile(string) {
  var i = 0;
  if (string == "kucing") {
    while(i < 1) {
      console.log("meow");
      i++;
    }
  } else if (string == "react") {
    while(i < 3) {
      console.log("react");
      i++;
    }
  } else {
    while(i < 4) {
      console.log(string);
      i++;
    }
  };
};

isStringWhile("kucing");
isStringWhile("react");
isStringWhile("lainnya");


function isStringDoWhile(string) {
  var i = 0;
  if (string == "kucing") {
    do {
      console.log("meow");
      i++;
    } while (i < 1);
  } else if (string == "react") {
    do {
      console.log("react");
      i++;
    } while (i < 3);
  } else {
    do {
      console.log(string);
      i++;
    } while (i < 4);
  };
};

isStringDoWhile("kucing");
isStringDoWhile("react");
isStringDoWhile("lainnya");
