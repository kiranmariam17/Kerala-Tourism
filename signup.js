var fname=document.getElementById("fname");
var email=document.getElementById("email");
var phno=document.getElementById("phno");
var pwd=document.getElementById("pwd");
var repwd=document.getElementById("repwd");

function signup()
{
    var email_exp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
	var pwd_exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

	if(fname.value=='')
	{
		alert('Please enter your full name');
        return false;
	}
	else if(email.value=='')
	{
		alert('Please enter your email id');
        return false;
	}
	else if (!email_exp.test(email.value))
	{
		alert('Invalid Email id!!');
        return false;
	}
	else if(phno.value=='')
	{
		alert('Please enter the phone number.');
        return false;
	}
    // else if(phno.value!=10)
    // {
    //     alert('Please enter a valid phone number.  [Length should be 10,of the following format XXX-XXX-XXXX/XXX.XXX.XXXX/XXX XXX XXXX]');
    //     return false;
    // }
    // else if(phno.value!="^\d{3}\.-\d{3}\.-\d{4}$")
    // {
    //     alert('Please enter a valid phone number.  [Length should be 10,of the following format XXX-XXX-XXXX/XXX.XXX.XXXX/XXX XXX XXXX]');
    //     return false;
    // }
	else if(pwd.value=='')
	{
		alert('Please enter the password.');
        return false;
	}
    else if(!pwd_exp.test(pwd.value))
	{
		alert ('Minimum 8 characters, at least one uppercase, at least one lower case and at least one number are required in password field');
        return false;
    }
	else if(repwd.value=='')
	{
		alert('Enter Confirm Password');
        return false;
	}
	else if(pwd.value != repwd.value)
	{
		alert ('Password not Matched');
        return false;
	}
	else
	{				                            
        return true;
    }
}