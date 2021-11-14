{
    interface InputChangeEvent extends Event {
        target: HTMLInputElement;
    }

    let isSyncInputEnabled = false;
    const modeSwitcher = document.getElementById('modeSwitcher');

    const exchangeRateInputs = document.querySelectorAll<HTMLInputElement>("input[class*='exchange-rate-input-']");
    const exchangeRateInputsLabels = document.querySelectorAll<HTMLInputElement>(
        "span[class*='exchange-rate-input-value-label-']",
    );

    const currencyInputs = document.querySelectorAll<HTMLInputElement>("input[class*='currency-input-']");
    const currencyInputsLabels = document.querySelectorAll<HTMLInputElement>(
        "span[class*='currency-input-value-label-']",
    );

    const euroInputs = document.querySelectorAll<HTMLInputElement>("input[class*='euro-input-']");
    const euroInputsLabels = document.querySelectorAll<HTMLInputElement>("span[class*='euro-input-value-label-']");

    const updateEachEuroInputHandler = (event: InputChangeEvent) => {
        euroInputs.forEach((euroInput, index) => {
            euroInput.value = event.target.value;
            euroInputsLabels[index].innerText = event.target.value;
        });
        currencyInputs.forEach((currencyInput, index) => {
            const nextValue = `${Number(event.target.value) * Number(exchangeRateInputs[index].value)}`;

            currencyInput.value = nextValue;
            currencyInputsLabels[index].innerText = nextValue;
        });
    };

    const updateEachExchangeRateInputHandler = (event: InputChangeEvent) => {
        exchangeRateInputs.forEach((euroInput, index) => {
            euroInput.value = event.target.value;
            euroInputsLabels[index].innerText = event.target.value;
        });
        currencyInputs.forEach((currencyInput, index) => {
            const nextValue = `${Number(euroInputs[index].value) * Number(event.target.value)}`;

            currencyInput.value = nextValue;
            currencyInputsLabels[index].innerText = nextValue;
        });
    };

    exchangeRateInputs.forEach((exchangeRateInput, index) => {
        exchangeRateInput.addEventListener('input', (event: InputChangeEvent) => {
            exchangeRateInputsLabels[index].innerText = event.target.value;
        });
    });

    currencyInputs.forEach((currencyInput, index) => {
        currencyInput.addEventListener('input', (event: InputChangeEvent) => {
            currencyInputsLabels[index].innerText = event.target.value;
        });
    });

    euroInputs.forEach((euroInput, index) => {
        euroInput.addEventListener('input', (event: InputChangeEvent) => {
            euroInputsLabels[index].innerText = event.target.value;
        });
    });

    exchangeRateInputs.forEach(exchangeRateInput => {
        exchangeRateInput.addEventListener('change', () => {
            currencyInputs.forEach((currencyInput, index) => {
                const nextValue = `${Number(euroInputs[index].value) * Number(exchangeRateInputs[index].value)}`;

                currencyInputs[index].value = nextValue;
                currencyInputsLabels[index].innerText = nextValue;
            });
        });
    });

    euroInputs.forEach((input, index) => {
        input.addEventListener('input', (event: InputChangeEvent) => {
            const nextValue = `${Number(event.target.value) * Number(exchangeRateInputs[index].value)}`;

            currencyInputs[index].value = nextValue;
            currencyInputsLabels[index].innerText = nextValue;
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
}
