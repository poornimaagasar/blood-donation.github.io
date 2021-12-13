function loginValidate()
{
    var loginEmail=document.getElementById('login_email').value;
    var loginPassword=document.getElementById('login_password').value;
    var login_email_error=document.getElementById('login_email_error');
    var login_password_error=document.getElementById('login_password_error');
    if(loginEmail == "")
    {
        login_email_error.innerHTML="provide your name!";
        return false;
        
        
    }
    if(loginPassword == "")
    {
        
        login_password_error.innerHTML="provide your password!";
        return false;
    }
    return true;
    
}
