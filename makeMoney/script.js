const countInput = document.querySelector(".count-input");
const coinTypeSelect = document.querySelector("#coin-type");
const coinButton = document.querySelector("#coin-button");
const coinContainer = document.querySelector(".coin-container");

const addCoin = (coinType) => {
  const coin = document.createElement("div");
  coin.className = "coin";
  coin.textContent = coinType;
  coin.addEventListener("click", () => {
    coinContainer.removeChild(coin);
  });
  coinContainer.appendChild(coin);
};

coinButton.addEventListener("click", () => {
  const coinType = coinTypeSelect.value;
  const count = parseInt(countInput.value);

  if (!isNaN(count) && count > 0) {
    for (let i = 0; i < count; i++) {
      addCoin(coinType);
    }
  }
  countInput.value = "";
});

coinContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("coin")) {
    event.target.remove();
  }
});
