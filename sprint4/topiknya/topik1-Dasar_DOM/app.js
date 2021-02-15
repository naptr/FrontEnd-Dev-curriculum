console.log(
  document.getElementById('app')
);

var div1 = document.getElementById('app');
div1.innerHTML = "Hello World";
var input1 = document.getElementById('input')

function onClicked() {
  div1.innerHTML = `HELLO WORLD MENGGUNAKAN BUTTON`;
};

function button2Clicked() {
  // div1.innerHTML = `
  //   <h1>Ini judul</h1>
  //   <p>Ini paragraf</p>`
  // console.log(input1.value);

  if (input1.value == "satu") {
    div1.innerHTML = "Input menghasikan angka satu";
  } else {
    div1.innerHTML = "Input bukan merupakan angka satu";
  }
};

function showSquare() {
  div1.innerHTML = `
    <p>Hitung luas persegi</p>
    <input type="number" id="square_input">
    <div id="square_result"></div>
    <button onclick="evalSquare()">Hitung luas persegi</button>
  `
};

function evalSquare() {
  var inputnya = document.getElementById('square_input');
  var valueInputnya = inputnya.value;
  if (inputnya != null) {
    var divSquare = document.getElementById('square_result');
    divSquare.innerHTML = valueInputnya*valueInputnya;
  }
}
