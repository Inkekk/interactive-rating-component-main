const buttonRate = document.querySelectorAll(".btn-rate");
const buttonSubmit = document.querySelector(".button");

const containerRate = document.querySelector(".container");
const containerSuccess = document.querySelector("#success");

const spanNum = document.querySelector("#num");

var ehValido = false;

for (let i = 0; i < buttonRate.length; i++) {
  const buttonRateSelect = buttonRate[i];
  buttonRateSelect.addEventListener("click", () => {
    ehValido = true;
    spanNum.textContent = buttonRateSelect.textContent;
  });
}

buttonSubmit.addEventListener("click", () => {
  if (!ehValido) {
  } else {
    containerRate.classList.add("hidden");
    containerSuccess.classList.remove("hidden");
  }
});
