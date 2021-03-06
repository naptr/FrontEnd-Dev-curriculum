class Try {
  constructor(user, password) {
    this.user = user;
    this.password = password;
  };

  isTrue() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            if ((this.user == "admin") && (this.password == "password")) {
              resolve("Login berhasil");
            } else {
              reject("Maaf, coba lagi nanti");
            }
          }, 3000
        );
      }
    );
  };
};

const login = (usr, pwd) => {
  var _try = new Try(usr, pwd);
  _try.isTrue().then(
    (text) => {
      console.log(text);
    }, (error) => {
        console.log(error);
    }
  )
}

login("admin", "password");
