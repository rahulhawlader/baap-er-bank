//handle deposite button event

document.getElementById("deposite-button").addEventListener('click', function () {
    //get the amuont deposite
    const depositeinput = document.getElementById("deposit-input");
    const newdepositeAmountText = depositeinput.value;
    const newdepositeAmount = parseFloat(newdepositeAmountText);
    // update deposite total
    const depositeTotal = document.getElementById("deposite-total");
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newDepositeTotal = newdepositeAmount + previousDepositeAmount;
    depositeTotal.innerText = newDepositeTotal;
    // update account balace
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newdepositeAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear the deposite input field
    depositeinput.value = '';

});
//handle withdraw event handler
document.getElementById("withdraw-button").addEventListener('click', function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const newwithdrawAmountText = withdrawInput.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountText);
    // // update withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newwithdrawTotal = previousWithdrawAmount + newwithdrawAmount;
    withdrawTotal.innerText = newwithdrawTotal;
    // update account balace

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposite input field
    withdrawInput.value = "";
})