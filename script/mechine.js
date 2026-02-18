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