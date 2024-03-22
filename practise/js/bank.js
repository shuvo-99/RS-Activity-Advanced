// Step -1: Connect the js page with html page
console.log("Bank JS page connected");

// ====================================================================
// ====================================================================

// Step-2: Add click event handler with the  submit btn
document.getElementById("btn_deposit").addEventListener("click", function () {
  //   console.log("deposit btn clicked");
  // Step-3: Get the username inside the username input field
  // Remeber to use .value to get text from an input field
  const depositField = document.getElementById("deposit_num");
  const newDepositAmount = depositField.value;
  console.log(newDepositAmount);

  // Step-4: Get the current deposit total
  // for non-input (element other than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById("total_deposit");
  // place deposit amount on total deposit
  depositTotalElement.innerText = newDepositAmount;

  // Step-5: Clear the input field
  depositField.value = "";
});

// ====================================================================
// ====================================================================

// Step-2: Add click event handler with the  submit btn
document.getElementById("btn_deposit").addEventListener("click", function () {
  // console.log("deposit btn clicked");
  // Step-3: Get the username inside the username input field
  // Remeber to use .value to get text from an input field
  const depositField = document.getElementById("deposit_num");
  const newDepositAmount = depositField.value;
  console.log(newDepositAmount);

  // Step-4: Get the current deposit total
  // for non-input (element other than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById("total_deposit");

  const previousDepositTotal = depositTotalElement.innerText;
  // console.log(previousDepositTotal);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  // place deposit amount on total deposit
  depositTotalElement.innerText = currentDepositTotal;

  // Step-5: Clear the input field
  depositField.value = "";
});

// ====================================================================
// ====================================================================

// Step-2: Add click event handler with the  deposit btn
document.getElementById("btn_deposit").addEventListener("click", function () {
  // console.log("deposit btn clicked");
  // Step-3: Get the username inside the username input field
  // Remeber to use .value to get text from an input field
  const depositField = document.getElementById("deposit_num");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  // console.log(newDepositAmount);
  // console.log(typeof newDepositAmount);

  // Step-4: Get the current deposit total
  // for non-input (element other than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById("total_deposit");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  // console.log(previousDepositTotal);

  // Step-5: Add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = currentDepositTotal;

  // step-6: Get current balance total
  const balanceTotalElement = document.getElementById("total_balance");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // Step-7: Add numbers to set the total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  // Step-8: Clear the input field
  depositField.value = "";
});

// Step-9: Add click event handler with the withdraw btn
document.getElementById("btn_withdraw").addEventListener("click", function () {
  // console.log("deposit btn clicked");
  // Step-3: Get the username inside the username input field
  // Remeber to use .value to get text from an input field
  const withdrewField = document.getElementById("withdraw_num");
  const newWithdrawAmountString = withdrewField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  // console.log(newWithdrawAmount);
  // console.log(typeof newWithdrawAmount);

  // Step-4: Get the current deposit total
  // for non-input (element other than input, textarea) use innerText to get the text
  const withdrawTotalElement = document.getElementById("total_withdraw");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  // console.log(previousWithdrawTotal);

  // Step-5: Add numbers to set the total deposit
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step-6: Get current balance total
  const balanceTotalElement = document.getElementById("total_balance");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // Step-7: Add numbers to set the total balance
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  // Step-5: Clear the input field
  withdrewField.value = "";
});
