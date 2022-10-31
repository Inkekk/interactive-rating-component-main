const rates = document.querySelectorAll("li");
const containerRate = document.querySelector("form");
const containerSucces = document.getElementById("success");
const numSpan = document.getElementById("num");

for (let i = 0; i < rates.length; i++) {
  const rateSelect = rates[i];

  rateSelect.addEventListener("click", () => {
    numSpan.textContent = rateSelect.textContent;
  });
}

containerRate.addEventListener("submit", (event) => {
  event.preventDefault();
  containerRate.classList.add("hidden");
  containerSucces.classList.remove("hidden");
});
