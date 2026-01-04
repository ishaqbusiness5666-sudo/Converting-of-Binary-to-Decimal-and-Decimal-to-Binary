// 🌐 Element references
const changeBtn = document.getElementById('changingBtn');
const switching = document.getElementById('changingSpan');
const changeHeading = document.getElementById('heading');
const convertBtn = document.getElementById('convertBtn');
const input = document.querySelector('input');
const output = document.getElementById('Output');
const label=document.querySelector('label');
const OutputText=document.getElementById('outputText');
let isBinary = true;

// 🎨 Toggle mode (Binary ↔ Decimal)
changeBtn.addEventListener('click', () => {
  switching.classList.toggle('btn');
  if (isBinary === true) {
    changeHeading.innerText = "Decimal to Binary Converter";
    label.innerText="Decimal Input";
    input.placeholder="Enter Number...";
    OutputText.innerText="Binary Output";
    input.value="";
    output.innerText="Output";
    output.style.color="#b1b1b1";
    isBinary = false;
  } else {
    changeHeading.innerText = "Binary to Decimal Converter";
    label.innerText="Binary Input";
    input.placeholder="Enter 0 or 1";
    OutputText.innerText="Decimal Output";
    input.value="";
    output.innerText="Output";
    output.style.color="#b1b1b1";
    isBinary= true;
  }
});

// 🔢 Conversion logic
convertBtn.addEventListener('click', (e) => {
  let num = input.value.trim();
  let result;

  if (isBinary === true) {
    result = binaryToDecimal(num);
  } else {
    result = decimalToBinary(num);
  }

  output.innerText = result;
  output.style.color = "#0d2440";
});

// 🧠 Helper functions
function binaryToDecimal(binary) {
  if (!/^[01]+$/.test(binary)) return "Invalid binary input";
  return parseInt(binary, 2);
}

function decimalToBinary(decimal) {
  if (isNaN(decimal)) return "Invalid decimal input";
  return Number(decimal).toString(2);
}