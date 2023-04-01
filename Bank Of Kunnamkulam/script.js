var balance = 0;

function showBalance() {
    alert("Current balance: ₹" + balance.toFixed(2));
}
function deposit() {
    var amount = parseFloat(document.getElementById("deposit").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Enter a Valid Amount.");
        return;
    }

    balance += amount;
    document.getElementById("balance").innerHTML = balance.toFixed(2);

}
function withdraw() {
    var amount = parseFloat(document.getElementById("withdraw").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }
    if (amount > balance) {
        alert("Insufficient funds.");
        return;
    }
    balance -= amount;
    document.getElementById("balance").innerHTML = balance.toFixed(2);
}

