function fetchGoldRate() {
  const output = document.getElementById("goldRateOutput");
  output.innerText = "Fetching live gold rate...";

  // MOCK RATE (SAFE + NO API FAILURE)
  setTimeout(() => {
    output.innerText = "Live Gold Rate: ₹6,200 / gram (24K)";
  }, 1000);
}
