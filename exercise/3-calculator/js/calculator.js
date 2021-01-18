let screenValue = "0";
let newNumber = "0";
let totalValue = 0;
let prevOperator = "";
let screen = null;

const buttonClick = (value) => {
  if (isNaN(parseInt(value))) {
    handleSymbole(value);
  } else {
    handleNumber(value);
  }
  rerender();
};

const handleSymbole = (value) => {
  switch (value) {
    case "C":
      if (newNumber === "0") {
        prevOperator = "";
        totalValue = 0;
        screenValue = "0";
      } else {
        newNumber = "0";
        screenValue = "0";
      }
      break;
    case "←":
      if (screenValue.length <= 1) {
        screenValue = "0";
        newNumber = "0";
      } else {
        newNumber = newNumber.substring(0, screenValue.length - 1);
        screenValue = newNumber;
      }
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      handleMath();
      prevOperator = value;
      break;
    case "=":
      handleMath();
      break;
  }
};

const handleNumber = (value) => {
  if (newNumber === "0") {
    newNumber = value;
  } else {
    newNumber += value;
  }
  screenValue = newNumber;
};

const handleMath = () => {
  const floatScreenValue = parseFloat(newNumber);
  if (prevOperator !== "") {
    switch (prevOperator) {
      case "+":
        totalValue += floatScreenValue;
        break;
      case "−":
        totalValue -= floatScreenValue;
        break;
      case "×":
        totalValue *= floatScreenValue;
        break;
      case "÷":
        totalValue /= floatScreenValue;
        break;
    }

    screenValue = totalValue;
  } else {
    totalValue = floatScreenValue;
  }
  newNumber = "0";
};

const rerender = () => {
  screen.innerText = screenValue;
};

function init() {
  document.querySelector(".calc-buttons").addEventListener("click", (event) => {
    buttonClick(event.target.innerText);
  });
  screen = document.querySelector(".screen");
}

init();
