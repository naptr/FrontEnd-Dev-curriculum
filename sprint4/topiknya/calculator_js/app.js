const box = document.getElementById("main-input");

const state = {
  firstNumber: null,
  secondNumber: null,
  operation: null,
  result: null
};

function numberClick(n) {
  if (state.result == null) {
    if (state.operation == null) {
      state.firstNumber = appendNumber(state.firstNumber, n);
      box.value = state.firstNumber;
    } else {
      state.secondNumber = appendNumber(state.secondNumber, n);
      box.value = state.secondNumber;
    }
  }

}

function operationClick(opr) {
  if (state.result == null) {
    if (state.operation == null || state.secondNumber == null) {
      state.operation = opr
      box.value = renderOperation(state.operation);
    } else {
      window.alert("sudah ada operasi");
    }
  }
}

function renderOperation(opr) {
  switch (opr) {
    case "addition":
      return "+";
    case "subtract":
      return "-";
    case "multiply":
      return "x";
    case "divide":
      return "/";
  }
}

function clearBox() {
  state.operation = null;
  state.firstNumber = null;
  state.secondNumber = null;
  state.result = null;
  box.value = "";
}

function findResult() {
  if (state.operation != null && state.secondNumber != null && state.result == null) {
    const n1 = parseNumber(state.firstNumber);
    const n2 = parseNumber(state.secondNumber);

    switch (state.operation) {
      case "addition":
        state.result = n1 + n2;
        break;
      case "subtract":
        state.result = n1 - n2;
        break;
      case "multiply":
        state.result = n1 * n2;
        break;
      case "divide":
        state.result = n1 / n2;
        break;
    }
    box.value = state.result;
  }
}

function parseNumber(n) {
  const int1 = Number.parseInt(n);
  const float1 = Number.parseFloat(n);
  if (float1 > int1) {
    return float1;
  } else {
    return int1;
  }
}

function appendNumber(n1, n2) {
  if (n2 == "." && n1 == null) {
    return "0.";
  } else if (n1 == null) {
    return n2;
  } else {
    return n1+n2;
  }
}
