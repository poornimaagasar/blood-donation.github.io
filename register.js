function validate()
{
    var fname=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var dob=document.getElementById('dob').value;
    var mb_number=document.getElementById('mb_number').value;
    var error=document.getElementById('error_msg');
    if(fname == "" || email == "" || password == "" || dob == "" || mb_number == "")
    {
        error.innerHTML="Please fill the required fields!";
        return false;
    }
    
   
    return true;
}