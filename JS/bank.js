document.getElementById('btn-deposit').addEventListener('click', () => {
    let depositAmount = parseFloat(parseFloat(document.getElementById("deposit-amount").value).toFixed(2));

    if (depositAmount) {
        let totalDeposit = document.getElementById("total-deposit").innerText;
        document.getElementById('total-deposit').innerText = parseFloat(totalDeposit) + depositAmount;
        let totalBalance = document.getElementById("total-balance").innerText;
        document.getElementById("total-balance").innerText = parseFloat(totalBalance) + depositAmount;
    }
    else {
        alert("Enter Amount");
    }

    document.getElementById("deposit-amount").value = '';
})

document.getElementById('btn-withdraw').addEventListener('click', () => {
    let withdrawAmount = parseFloat(parseFloat(document.getElementById("withdraw-amount").value).toFixed(2));

    if (withdrawAmount) {
        let totalBalance = document.getElementById("total-balance").innerText;
        let balanceBalance = parseFloat(totalBalance) - withdrawAmount;
        if (balanceBalance >= 0) {
            let totalWithdraw = document.getElementById("total-withdraw").innerText;
            document.getElementById('total-withdraw').innerText = parseFloat(totalWithdraw) + withdrawAmount;
            document.getElementById("total-balance").innerText = balanceBalance;
        }
        else{
            alert("Low Balance");
        }
    }
    else {
        alert("Enter Amount");
    }
    document.getElementById("withdraw-amount").value = '';
})