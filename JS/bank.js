// Deposit section
document.getElementById('btn-deposit').addEventListener('click', () => {
    const newDepositValue = getInputFieldValueById('deposit-amount');
    const currentDepositValue = getDepositWithDrawBalanceValueById("total-deposit");

    if (isNaN(newDepositValue)) {
        alert("Enter Amount .....")
        return
    }

    const newDepositTotal = newDepositValue + currentDepositValue;
    setValueById("total-deposit", newDepositTotal);

    const currentBalanceValue = getDepositWithDrawBalanceValueById("total-balance");
    const newBalanceValue = currentBalanceValue + newDepositValue;
    setValueById("total-balance", newBalanceValue);
})

// WithDraw 
document.getElementById('btn-withdraw').addEventListener('click', () => {
    const newWithdrawValue = getInputFieldValueById('withdraw-amount');
    const currentWithdrawValue = getDepositWithDrawBalanceValueById("total-withdraw");



    const newWithdrawTotal = newWithdrawValue + currentWithdrawValue;
    const currentBalanceValue = getDepositWithDrawBalanceValueById("total-balance");
    const newBalanceValue = currentBalanceValue - newWithdrawValue;

    if (isNaN(newWithdrawValue)) {
        alert("Enter Amount .....");
        return
    } else if (newBalanceValue < 0) {
        alert("Low Balance");
    } else {
        setValueById("total-withdraw", newWithdrawTotal);
        setValueById("total-balance", newBalanceValue);
    }
})



