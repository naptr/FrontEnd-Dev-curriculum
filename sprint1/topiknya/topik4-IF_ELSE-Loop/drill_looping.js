function print(txt) {
  console.log(txt);
}

function sayString(count) {
  for (var x = 0; x < count; x++) { // -> using increment
    print("Hello World");
  }
}

sayString(12);
