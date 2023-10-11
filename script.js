const convertButton = document.querySelector(".converter-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(
        ".currency-value-to-convert"
    );
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 5.2;
    const euroToday = 6.2;

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);
    // currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    //     style: "currency",
    //     currency: "USD",
    // }).format(convertedValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.getElementById("currency-img");

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dollar";
        currencyImg.src = "./assets/estados-unidos (1) 1.png";
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/Design sem nome 3.png";
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
