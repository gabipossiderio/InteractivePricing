window.addEventListener("load", function () {
  let checkbox = document.querySelector("#switch");
  let price = document.getElementById("price");
  let input = document.getElementById("slider");

  checkbox.addEventListener("change", applyDiscount);
  input.addEventListener("change", updateSlider);
  window.addEventListener("resize", putDiscountText);

  let plans = ["10K", "50K", "100K", "500K", "1M"];
  let prices = ["8", "12", "16", "24", "36"];

  function applyDiscount() {
    let priceValue = parseFloat(prices[(input.value - 1)]);
    if (this.checked) {
      let newPrice = priceValue - priceValue * 0.25;
      price.textContent = '$' + newPrice + '.00';
    } else {
      price.textContent = '$' + priceValue + '.00';
    }
  }

  function putDiscountText() {
    let discount = document.getElementById("discount");
    const screenWidth = window.screen.width;
    if (screenWidth > 1200) {
      discount.textContent = "25% discount";
    } else {
      discount.textContent = "25%";
    }
  }

  function updateSlider() {
    let pages = document.getElementById("pages");
    checkbox.checked = false;

    switch (input.value) {
      case "1":
        price.textContent = '$' + prices[input.value - 1] + '.00';
        pages.textContent = plans[input.value - 1];
        input.style.background = "hsl(224, 65%, 95%)";
        break;
      case "2":
        price.textContent = '$' + prices[input.value - 1] + '.00';
        pages.textContent = plans[input.value - 1];
        input.style.background = "linear-gradient(to right, #10D5C2 25%, hsl(224, 65%, 95%) 25%";
        break;
      case "3":
        price.textContent = '$' + prices[input.value - 1] + '.00';
        pages.textContent = plans[input.value - 1];
        input.style.background = "linear-gradient(to right, #10D5C2 50%, hsl(224, 65%, 95%) 50%)";
        break;
      case "4":
        price.textContent = '$' + prices[input.value - 1] + '.00';
        pages.textContent = plans[input.value - 1];
        input.style.background = "linear-gradient(to right, #10D5C2 75%, hsl(224, 65%, 95%) 75%)";
        break;
      case "5":
        price.textContent = '$' + prices[input.value - 1] + '.00';
        pages.textContent = plans[input.value - 1];
        input.style.background = "#10D5C2";
        break;
      }
  }
});
