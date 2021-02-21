// Calc
export const input = document.getElementById('main-input');

export function insertNum(n) {
  // console.log(`insertNum(${n}) Clicked!`)
  input.value = n;
}

export function opKey() {
  console.log("opKey() Clicked!")
}

export function eqKey() { // equal key -> result
  console.log("eqKey() Clicked!");
}

export function clearAll() {
  console.clear();
}

export var calc_body = `
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
