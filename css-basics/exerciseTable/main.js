// This script sums all the order amounts in the table

document.addEventListener("DOMContentLoaded", () => {
  let total = 0;
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach((row) => {
    const amountText = row.children[2].textContent;
    const amount = parseFloat(amountText.replace(/[^0-9.-]+/g, ""));
    total += amount;
  });

  document.getElementById("sum").textContent = `$${total.toLocaleString()}`;
});
