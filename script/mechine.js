function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("Current Balance:", balance);
    return Number(balance);
}
function setBalance(newBalance) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = newBalance;
}

function showOnly(id) {
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    // console.log(`add money- ${addmoney}, cashout- ${cashout}`);
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");



}