const input = document.getElementById('input');

const data = {
  firstOperand: null,
  secondOperand: null,
  operator: null,
  result: null
}

function insertNum(n) {
  console.log(n);
  if (data.result == null) {
    if (data.operator == null) {
      data.firstOperand = joinInput(data.firstOperand,n);
      input.value = data.firstOperand;
    } else {
      data.secondOperand = joinInput(data.secondOperand, n);
      input.value = data.secondOperand;
      console.log(data.secondOperand);
    }
  }
}

function joinInput(n1, n2) {
  if (n2 == "." && n1 == null) {
    return "0.";
  } else if (n1 == null) {
    return n2;
  } else {
    return n1+n2;
  };
}

function insertOp(op) {
  if (data.operator == null) {
    data.operator = op;
    input.value = "";
  } else if (data.operator != null) {
    data.operator = op;
  }
  console.log(data.operator);
}
//
// function whichOp(op) {
//   switch (op) {
//     case 'add':
//       return '+';
//     case 'subtract':
//       return '-';
//     case 'multiply':
//       return '*';
//     case 'divide':
//       return '/';
//     }
// }

function calculateOperand() {
  const n1 = parseToNum(data.firstOperand);
  const n2 = parseToNum(data.secondOperand);

  const op = data.operator;

  console.log(data.result);

  if (data.result == null) {
    switch (op) {
      case 'add':
        data.result = n1 + n2;
        break;
      case 'subtract':
        data.result = n1 - n2;
        break;
      case 'multiply':
        data.result = n1 * n2;
        break;
      case 'divide':
        data.result = n1 / n2;
        break;
      default:
        break;
    }
  } else {
    input.value = "";
  }
  console.log(data.result);
  input.value = data.result;
  data.firstOperand = data.result;
  data.operator = null;
}

function parseToNum(num) {
  const ints = Number.parseInt(num);
  const floats = Number.parseFloat(num);

  if (floats > ints) {
    return floats;
  } else {
    return ints;
  }
}

function clearAll() {
  data.firstOperand = null;
  data.secondOperand = null;
  data.operator = null;
  data.result = null;

  input.value = "";
  console.clear();
}
