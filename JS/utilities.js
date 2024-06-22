function getInputFieldValueById(ID) {
    const value = parseFloat(parseFloat(document.getElementById(ID).value).toFixed(2));
    document.getElementById(ID).value = "";
    return value;
}


function getDepositWithDrawBalanceValueById(ID) {
    const depositAmount = parseFloat(document.getElementById(ID).innerText);
    return depositAmount;
}

function setValueById(ID , value) {
    document.getElementById(ID).innerText = value;
}