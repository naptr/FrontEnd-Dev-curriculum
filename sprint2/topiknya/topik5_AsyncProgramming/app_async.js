function naik_bus() {
  return new Promise(
    function (resolve, reject) {
      setTimeout(resolve, 5000);
    }
  )
}

console.log("naik bus");
naik_bus().then(() => {
  console.log("bus sudah datang, ayo naik");
})

var cons_promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000);
});

console.log(cons_promise);
