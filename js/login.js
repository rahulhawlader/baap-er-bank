document.getElementById("login-submit").addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    //get user password
    const passwordFiled = document.getElementById("user-password");
    const userPassword = passwordFiled.value;
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }

});

