document.getElementById("login-btn").addEventListener("click", function () {
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    if (contactNumber === "01556644067" && pin === "1234") {
        alert("Login successful!");
        window.location.assign("home.html")
    } else {
        alert("Invalid contact number or PIN.");
        return;
    }
})