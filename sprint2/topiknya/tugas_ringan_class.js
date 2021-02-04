class HomePage {
  constructor() {
    this.state = {
      seconds: 0
    }
  }

  render() {
    console.log(`${this.state.seconds} telah berlalu`);
  }

  updateState(num) {
    }

  runApp() {
    setInterval(
      () => {
        this.state.seconds++;
        this.render();
      }
      ,1000
    )
    this.render();
  }
}


var page = new HomePage();
page.runApp();


class Plane {
  constructor(type, engine, seat, terserah) {
    this.type = type;
    this.engine = engine;
    this.seat = seat;
    this.terserah = terserah;
  }

  takeoff() {
    console.log("pesawat takeoff");
  }

  landing() {
    console.log("pesawat landing")
  }
}

var barangTerbang = new Plane("kuda", "intel core i3", 3, "terserah");
// barangTerbang.takeoff();
