// Step -1: Connect the js page with html page
console.log("Login JS page connected");

// ====================================================================
// ====================================================================

// Step-2: Add click event handler with the  submit btn
document.getElementById("btn-submit").addEventListener("click", function () {
  console.log("submit btn clicked");
});

// ====================================================================
// ====================================================================

// Step-2: Add click event handler with the  submit btn
document.getElementById("btn-submit").addEventListener("click", function () {
  // Step-3: Get the username inside the username input field
  // Remeber to use .value to get text from an input field
  const userNameField = document.getElementById("user-name");
  //   console.log(userNameField);
  const userName = userNameField.value;
  //   console.log(userName);
});

// ====================================================================
// ====================================================================

// Step-2: Add click event handler with the  submit btn
document.getElementById("btn-submit").addEventListener("click", function () {
  // Step-3: Get the username inside the username input field
  // Remeber to use .value to get text from an input field
  const userNameField = document.getElementById("user-name");
  const userName = userNameField.value;
  console.log(userName);

  const passwordField = document.getElementById("password");
  const password = passwordField.value;
  console.log(password);
});

// ====================================================================
// ====================================================================

// Step-2: Add click event handler with the  submit btn
document.getElementById("btn-submit").addEventListener("click", function () {
  // Step-3: Get the username inside the username input field
  // Remeber to use .value to get text from an input field
  const userNameField = document.getElementById("user-name");
  const userName = userNameField.value;
  console.log(userName);

  const passwordField = document.getElementById("password");
  const password = passwordField.value;
  console.log(password);

  // Step-4: Verify email and password
  if (userName === "admin" && password === "admin") {
    console.log("valid user");
    window.location.href = "bank.html";
  } else {
    console.log("Invalid User");
    alert("Incorrect Username or Password");
  }
});
