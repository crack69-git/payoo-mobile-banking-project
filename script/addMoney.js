document.getElementById("add-money-btn").addEventListener("click", function () {
    const backAccount = getValueFromInput("add-money-bank");
    // console.log("Bank Account:", backAccount);
    if (backAccount === "Select a Bank") {
        alert("Please select a bank");
        return;
    }
    const accno = getValueFromInput("add-money-number");
    if (accno.length != 11) {
        alert("Invalid Account Number");
        return;
    }
    const amount = getValueFromInput("add-money-amount");
    const newBalance = getBalance() + Number(amount);
    console.log("new balance:", newBalance);
    if (amount < 0) {
        alert("Invalid Amount");
        return;
    }
    const pin = getValueFromInput("add-money-pin");
    if (pin === '1234') {
        alert(`Add money successful from ${backAccount} at ${new Date()}`);
        setBalance(newBalance);
        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Add money successful from ${backAccount},Acc No ${accno} at ${new Date()}
        </div>
        `
        history.appendChild(newHistory);
    }
    else {
        alert("Invalid Pin");
        return;
    }
});