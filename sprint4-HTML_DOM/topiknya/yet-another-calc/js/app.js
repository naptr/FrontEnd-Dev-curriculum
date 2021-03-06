const main_body = document.getElementById('content');

// features


// working functions
function toCalc() {
  const manipulate = document.getElementById('app-greet');
  const back = document.getElementById('menus');

  document.title = "Yet Another App | Calc";
  manipulate.innerHTML = `
    <main>
      <input type="text" id="main-input">
      <div class="calc">
        <button onclick="insertNum('7')">7</button>
        <button onclick="insertNum('8')">8</button>
        <button onclick="insertNum('9')">9</button>
        <button class="operator" onclick="opKey()">+</button>
        <button onclick="insertNum('4')">4</button>
        <button onclick="insertNum('5')">5</button>
        <button onclick="insertNum('6')">6</button>
        <button class="operator" onclick="opKey()">-</button>
        <button onclick="insertNum('1')">1</button>
        <button onclick="insertNum('2')">2</button>
        <button onclick="insertNum('3')">3</button>
        <button class="operator" onclick="opKey()">x</button>
        <button onclick="clearAll()">C</button>
        <button onclick="insertNum('0')">0</button>
        <button onclick="insertNum('.')">.</button>
        <button class="operator" onclick="opKey()">/</button>
      </div>
      <div>
        <button class="operator eq-key" onclick="eqKey()">=</button>
      </div>
      <div id="back">
        <button onclick="start()">Back</button>
      </div>
    </main>
  `
  menus.innerHTML = null;
}

// buttons onclick
function start() {
  document.title = "Yet Another App | Start";

  main_body.innerHTML = `
    <div id="app-greet">
      <h1>Welcome to App</h1>
      <p>This app includes several tools that work like a charm</p>
    </div>
    <div id="menus">
      <button onclick="toCalc()"><i class="fas fa-calculator"></i></button>
      <button onclick="isClicked('1')">TBA</button>
      <button onclick="isClicked('2')">TBA</button>
      <button onclick="isClicked('3')">TBA</button>
    </div>
    <footer>
      <p id="me">by Putra Krishna <a href="https://github.com/ziunadev" target="-blank"><i class="fas fa-home"></i></a> with Love</p>
    </footer>
  `
  console.clear();
}

// debug ala-ala
function isClicked(n) {
  console.log(`Clicked ${n}`)
}
