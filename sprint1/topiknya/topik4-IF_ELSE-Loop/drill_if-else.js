function print(txt) {
  console.log(txt);
}

// Drill 1
function isNum(num) {
  if (num == 5) {
    print("Ini angka Lima");
  } else if (num == 9) {
    print("Ini angka Sembilan");
  } else if (num == 11) {
    print("Ini angka Sebelas");
  } else {
    print("Ini angka lainnya");
  }
}

isNum(5);
isNum(9);
isNum(11);
isNum(27);
