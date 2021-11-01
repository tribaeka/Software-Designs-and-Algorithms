interface InputChangeEvent extends Event {
    target: HTMLInputElement;
}

let isSyncInputEnabled = false;
const modeSwitcher = document.getElementById('modeSwitcher');
let exchangeRateInputs = document.querySelectorAll<HTMLInputElement>("input[class*='exchange-rate-input-']");
const currencyInputs = document.querySelectorAll<HTMLInputElement>("input[class*='currency-input-']");
const euroInputs = document.querySelectorAll<HTMLInputElement>("input[class*='euro-input-']");

const refreshExchangeRateInputs = () => {
    exchangeRateInputs = document.querySelectorAll<HTMLInputElement>("input[class*='exchange-rate-input-']");
};

const updateEachEuroInputHandler = (event: InputChangeEvent) => {
    euroInputs.forEach(euroInput => {
        euroInput.value = event.target.value;
    });
    currencyInputs.forEach((currencyInput, index) => {
        currencyInput.value = `${Number(event.target.value) * Number(exchangeRateInputs[index].value)}`;
    });
};

const updateEachExchangeRateInputHandler = (event: InputChangeEvent) => {
    exchangeRateInputs.forEach(euroInput => {
        euroInput.value = event.target.value;
    });
    refreshExchangeRateInputs();
    currencyInputs.forEach((currencyInput, index) => {
        currencyInput.value = `${Number(euroInputs[index].value) * Number(event.target.value)}`;
    });
};

exchangeRateInputs.forEach(exchangeRateInput => {
    exchangeRateInput.addEventListener('change', () => {
        refreshExchangeRateInputs();
        currencyInputs.forEach((currencyInput, index) => {
            currencyInput.value = `${Number(euroInputs[index].value) * Number(exchangeRateInputs[index].value)}`;
        });
    });
});

euroInputs.forEach((input, index) => {
    input.addEventListener('change', (event: InputChangeEvent) => {
        currencyInputs[index].value = `${Number(event.target.value) * Number(exchangeRateInputs[index].value)}`;
    });
});

modeSwitcher.addEventListener('change', () => {
    isSyncInputEnabled = !isSyncInputEnabled;

    if (isSyncInputEnabled) {
        euroInputs.forEach(euroInput => {
            euroInput.addEventListener('change', updateEachEuroInputHandler);
        });
        exchangeRateInputs.forEach(exchangeRateInput => {
            exchangeRateInput.addEventListener('change', updateEachExchangeRateInputHandler);
        });
    } else {
        euroInputs.forEach(euroInput => {
            euroInput.removeEventListener('change', updateEachEuroInputHandler);
        });
        exchangeRateInputs.forEach(exchangeRateInput => {
            exchangeRateInput.removeEventListener('change', updateEachExchangeRateInputHandler);
        });
    }
});
