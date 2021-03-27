// var fname=document.getElementById("fname");
var email=document.getElementById("email");
// var phno=document.getElementById("phno");
var pwd=document.getElementById("pwd");
// var repwd=document.getElementById("repwd");

function login()
	{
		var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
        var regexp1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
		if(email.value=="")
		{
			alert("Please enter your email id.");
            return false;
		}
		else if(pwd.value=="")
		{
        	alert("Please enter the password");
            return false;
		}
		else if(!regexp.test(email.value))
		{
			alert("Enter valid email id.");
            return false;
		}
		else if(pwd.value.length <  8)
		{
			alert("Password min length is 8.");
            return false;
		}
        else if(!regexp1.test(pwd.value))
		{
			alert("Enter valid password.");
            return false;
		}
		else
		{
            return true;
        }
	}


// function validate()
// {
//     let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/

//     if(fname.value.trim()=="")
//     {
//         alert("Enter Full Name");
//         return false;
//     }
//     else if(email.value.trim()=="")
//     {
//         alert("Enter Email");
//         return false;
//     }
//     else if(!regexp.test(email.value))
//     {
//         alert("Invalid Email!!");
//         email.style.border="2px solid red";
//         return false;
//     }
//     else if(phno.value.trim()=="")
//     {
//         alert("Enter Phone Number");
//         return false;
//     }
//     else if(pwd.value.trim()=="")
//     {
//         alert("Enter Password");
//         return false;
//     }
//     else if(pwd.value!=repwd.value)
//     {
//         alert("Wrong Password");
//         return false;
//     }
//     else
//     {
//         return true;
//     }
// }