// Asynchronous

// example 1
// function naik_bus() {
//   return new Promise(
//     function (resolve, reject) {
//       setTimeout(resolve, 5000);
//     }
//   )
// }
//
// console.log("naik bus");
// naik_bus().then(() => {
//   console.log("bus sudah datang, ayo naik");
// })

// var cons_promise = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000);
// });
//
// console.log(cons_promise);

// example 2
function ride_the_bus(rainy) {
  return new Promise(
    function (resolve, reject) {
      setTimeout(
        () => {
          if (rainy == true) {
            reject("pulang ke rumah, tidak jadi naik bus");
          } else {
            resolve("jadi naik bus");
          }
        }, 2000
      )
    }
  )
}

console.log("naik bus");
function app() {
  var going = ride_the_bus(true);
  going.then(
    (text) => console.log(text),
    (error) => console.log(error)
  )
}

// app();


async function app_2() {
  try {
    console.log("sedang menunggu bus");
    var result = await ride_the_bus(false);
    console.log(result);
    console.log("selesai menunggu");
  } catch(error) {
    console.log(`errornya adalah: ${error}`);
  }
}

app_2();
