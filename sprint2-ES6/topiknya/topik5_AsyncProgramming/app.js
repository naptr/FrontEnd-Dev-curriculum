class Login {
  constructor(id, pass) {
    this.id = id;
    this.pass = pass;
  }

  login() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            if((this.id == "user") && (this.pass == "user")) {
              resolve("Berhasil masuk");
            } else {
              reject("Maaf, login belum berhasil");
            }
          }, 3000
        );
      }
    );
  }

  info() {
    console.log(this);
  }
}

let usr_id = "user";
let usr_passwd = "user";

function current_info(id, passwd) {
  var current_usrInfo = new Login(id, passwd);
  current_usrInfo.info();
  // console.log("Ini dari current_info");
}

async function login_user(id, passwd) {
  var login_usr = new Login(id, passwd);
  try {
    let result = await login_usr.login();
    console.log(result);
    current_info(usr_id, usr_passwd);
    
  } catch (error) {
    console.log("Maaf, login belum berhasil");
  }
  // login_usr.info();
}


login_user(usr_id, usr_passwd);
