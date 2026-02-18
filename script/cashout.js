document.getElementById("cashout-btn").addEventListener("click", function () {
    const cashoutNumber = getValueFromInput("cashout-number");
    // console.log("Cashout Number:", cashoutNumber);
    const cashoutAmount = getValueFromInput("cashout-amount");
    // console.log("Cashout Amount:", cashoutAmount);
    const balanceElement = getBalance();
    const newBalance = balanceElement - Number(cashoutAmount);
    console.log("cashout amount:", cashoutAmount);
    console.log("New Balance:", newBalance);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    const pin = getValueFromInput("cashout-pin");
    if (pin === '1234') {
        alert("Cashout Successful");
        setBalance(newBalance);
    }
    else {
        alert("Invalid Pin");
        return;
    }
});
