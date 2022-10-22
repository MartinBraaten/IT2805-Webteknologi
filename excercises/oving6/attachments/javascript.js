const income = document.getElementById("income");
const wealth = document.getElementById("wealth");

function Tax() {
  const incomeVal = income.value;
  const wealthVal = wealth.value;
  const tax = 0.35 * incomeVal + 0.25 * wealthVal;
  document.getElementById("tax").value = tax;
}

income.oninput = Tax;
wealth.oninput = Tax;
