const base = {
  main: document.querySelector("#main"),
  amount: document.querySelector("#bill"),
  percentage: document.querySelector("#perc"),
  tip: document.querySelector("#tip"),
  total: document.querySelector("#total"),
  button: document.querySelector("#submit"),
  listDiv: document.querySelector("#list"),
  clearButton: document.querySelector("#clear"),
};
base.amount.focus();

function main() {
  const amount = base.amount.value;
  const percentage = base.percentage.value;
  if (amount && percentage) {
    const tip = (base.tip.value = ((amount * percentage) / 100).toFixed(2));
    base.total.value = eval(`${tip} + ${amount}`);
  }
}

// const billsArr = [];

base.button.addEventListener("click", (e) => {
  if (base.total.value !== "")
    base.listDiv.insertAdjacentHTML(
      "beforeend",
      `
    <div class="item">
          <h1>Bill amount: ${base.total.value}$</h1>
        </div>
    `
    );
  base.amount.value = "";
  base.percentage.value = "";
  base.tip.value = "";
  base.total.value = "";
  base.amount.focus();
});

base.clearButton.addEventListener("click", (e) => {
  base.listDiv.innerHTML = "";
  base.amount.focus();
});
