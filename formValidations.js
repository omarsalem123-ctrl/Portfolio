function checkEmails() {
    document.getElementById("email-warning").style.display = "none";
    document.getElementById("verification-warning").style.display = "none";
    
    var email = document.getElementById("email").value;
    var isEmailValid = validateEmail(email);
    
    if(isEmailValid){
        var confirmationEmail = document.getElementById("verify-email").value;
        if (email === confirmationEmail) {
            document.getElementById("verification-warning").style.display = "none";
            return true;
        }
        else {
            document.getElementById("verification-warning").style.display = "block";
        }
    }
    else{
        document.getElementById("email-warning").style.display = "block";
    }
    return false;
}

 function checkCountryState() {
    var country_code = document.getElementById("country_code").value;
    document.getElementById("state-warning").style.display = "none";
    if(country_code=="CA" || country_code=="US")
    {
        var state_code = document.getElementById("state_code").value;
        if(state_code)
        {
            return true;
        }
        else{
            document.getElementById("state-warning").style.display = "block";
            return false;
        }
    }
    return true;
}

function validateEmailCountry () {
    var isEmailValid = checkEmails()
    var isCountryDataValid = checkCountryState();
    
    if(isCountryDataValid && isEmailValid){
        return true;
    }
    
    return false;
}

function validateEmail(email) {
    if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))
    {
        return true;
    }
    return false;
}