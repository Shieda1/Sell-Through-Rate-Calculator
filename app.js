// https://www.omnicalculator.com/finance/sell-through-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const sellthroughrateRadio = document.getElementById('sellthroughrateRadio');
const numberofunitssoldRadio = document.getElementById('numberofunitssoldRadio');
const numberofunitsreceivedRadio = document.getElementById('numberofunitsreceivedRadio');

let sellthroughrate;
let numberofunitssold = v1;
let numberofunitsreceived = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

sellthroughrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Number of units sold';
  variable2.textContent = 'Number of units received';
  numberofunitssold = v1;
  numberofunitsreceived = v2;
  result.textContent = '';
});

numberofunitssoldRadio.addEventListener('click', function() {
  variable1.textContent = 'Sell-through rate';
  variable2.textContent = 'Number of units received';
  sellthroughrate = v1;
  numberofunitsreceived = v2;
  result.textContent = '';
});

numberofunitsreceivedRadio.addEventListener('click', function() {
  variable1.textContent = 'Sell-through rate';
  variable2.textContent = 'Number of units sold';
  sellthroughrate = v1;
  numberofunitssold = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(sellthroughrateRadio.checked)
    result.textContent = `Sell-through rate = ${computesellthroughrate().toFixed(2)}`;

  else if(numberofunitssoldRadio.checked)
    result.textContent = `Number of units sold = ${computenumberofunitssold().toFixed(2)}`;

  else if(numberofunitsreceivedRadio.checked)
    result.textContent = `Number of units received = ${computenumberofunitsreceived().toFixed(2)}`;
})

// calculation

function computesellthroughrate() {
  return (Number(numberofunitssold.value) / Number(numberofunitsreceived.value)) * 100;
}

function computenumberofunitssold() {
  return (Number(sellthroughrate.value) / 100) * Number(numberofunitsreceived.value);
}

function computenumberofunitsreceived() {
  return Number(numberofunitssold.value) / (Number(sellthroughrate.value) / 100);
}