document.getElementById('btn-deposit').addEventListener('click', () => {
    let depositAmount = parseFloat(parseFloat(document.getElementById("deposit-amount").value).toFixed(2));

    if (depositAmount) {
        console.log("ok", depositAmount);
        let totalDeposit = document.getElementById("total-deposit").innerText;
        document.getElementById('total-deposit').innerText = parseFloat(totalDeposit) + depositAmount;
    }
    else {
        alert("Enter Number");
    }
})