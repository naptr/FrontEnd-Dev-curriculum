const div = document.getElementById("display");
div.innerHTML = "Aplikasi sedang berjalan";

function buttonClicked() {
  console.log("fetching data to server");
  // getDataFromServer().then(
  //   (text) => {
  //     console.log(text);
  //   }, (error) => {
  //     console.log(error);
  //   }
  // )
  div.innerHTML = "accessing server please wait";
  // promiseWithAwait();
  promiseWithObject();
};

async function promiseWithAwait() {
  try {
    var result = await getDataFromServer();
    div.innerHTML = "Akses berhasil";
  } catch (error) {
    console.log("error");
    div.innerHTML = "Terjadi Error";
  }
};

function promiseWithObject() {
  getDataFromServer().then(
    () => {
      div.innerHTML = "Akses berhasil";
      console.log("done")
    }
  ).catch(
    () => {
      div.innerHTML = "Terjadi Error";
      console.log("error");
    }
  )
};

function getDataFromServer() {
  return new Promise(
    (resolve, reject) => {
      var timeout_callback = () => {
        var randomizer = Math.random(1)*10;
        if (randomizer < 5) {
          reject("error");
          console.log(randomizer);
        } else {
          resolve("berhasil");
          console.log(randomizer);
        }
      };
      setTimeout(timeout_callback, 5000);
    }
  );
};
