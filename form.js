function formAuthentication(event){
    event.preventDefault();
    // Accepting my user input
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // validating the password

    if( password.length < 12 || !/[A-Z]/.test(password[0])){
        alert("Password must be atleast 12 character long and starts with an uppercase letter");
    }
}