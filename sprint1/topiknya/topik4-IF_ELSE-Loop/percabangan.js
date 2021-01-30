// Percabangan


// IF - ELSE -- Part II
function tulis(text) {
  console.log(text);
}

function cek_jumlah_apel(jumlah) {
  if (jumlah > 0) {
    tulis("Apel masih ada, jumlahnya "+jumlah+" buah")
  } else {
    tulis("Apel habis, karena jumlahnya sudah "+jumlah+" buah")
  }
}

cek_jumlah_apel(12);
cek_jumlah_apel(0);

function isAppleExist(value) {
  // var apple = 1;

  if (value > 0) {
    tulis("Apple exists")
  } else {
    tulis("Apple doesn't exist")
  }
}

isAppleExist(2);
isAppleExist(0);


// IF - ELSE -- Part II
// bentuk - bentuk penulisan IF - Else (Percabangan)

// 1 IF - ELSE
if (true) {

} else {

}

// 2 IF tanpa ELSE
if (true) {

}

// 3 IF - ELSE IF - ELSE
if (true) {

} else if (true) {

} else {

}

// 4 IF - ELSE IF tanpa ELSE
if (true) {

} else if (true) {

}



// Switch - Case - Break

// Switch form
// switch (expression) {
//   case expression:
//
//     break;
//   default:
//
// }

// Contoh Switch
var x = 0;

switch (x) {
  case 0:
    console.log("x nilainya 0");
    break;
  case 1:
    console.log("x nilainya 1");
    break;
  case false:
    console.log("x nilainya false");
    break;
  default:
}

// EOF
