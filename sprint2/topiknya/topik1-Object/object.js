// Object

// Creating object
var murid = {
  nama: "nama",
  kota: "Jogja",
  kelas: "XII",
  no_absen: 18,
  "umur": 17,
  ngomong: function () {  // -> method: property with function data type
    console.log("nama saya " + this.nama);  // this -> calling different property inside function method
  },
  lari: function () {
    console.log("lari ke " + this.kota) // this
  }
}

var kucing = {
  name: "Dio",
  color: "ijo",
  size: "smol",
  bicara: () => {
    for (var i = 0; i < 3; i++) {
      console.log("meong")
    }
  },
  pipis: function (banyak_pipis) {
    berapa_kali = 0;
    for (let i = 0; i < banyak_pipis; i++) {
      berapa_kali++;
    }
    console.log(`${this.name} pipis ${berapa_kali}x`)
  }
}


// calling object
console.log(murid.nama);
console.log(murid["umur"]);
murid.ngomong();
murid.lari();

console.log(kucing.name);
console.log(kucing.color);
console.log(kucing.size);
kucing.bicara();
kucing.pipis(12);


// Class

// old class form/ build before ES6 (2015)
function Kucing(name, color, size) {  // create object builder function
  this.name = name; // define object property
  this.color = color;
  this.size = size;
  this.meong = function () {  // define object method
    console.log(`ini yang mengeong ${this.name}`);
  };
}

var jojo = new Kucing("jojo", "Ijo", "burjo");  // create object called variable name

jojo.meong(); // caliing object
console.log(jojo.color);
console.log(jojo);

var jack = new Kucing("Jack", "Black", "smol");

jack.meong();
console.log(jack.color);
console.log(jack);

var kucil = new Kucing("Kucil", "White", "smol");

kucil.meong();
console.log(kucil.color);
console.log(kucil);


// spread operator (ES6)
jojo = {
  ...jojo,  // stack old object except that want to change
  meong: function () {
    console.log("jojo bisa ngomong");
  }
}
jojo.meong();

// object assignment
jojo.meong = function () {  // new value assigned to old property
  console.log("jojo kembali normal");
}
jojo.meong();

jojo.name = "joestar";
jojo.meong = function () {
  console.log("namanya jojo jadi "+this.name);
}
jojo.meong();


// alternative for building object
