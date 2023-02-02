// sign-up-form.js

function validateEmail()
{
	let name = document.getElementById("name").value;
	let address = document.getElementById("address").value;
	let email1 = document.getElementById("email1").value;
	let email2 = document.getElementById("email2").value;
	
	if (email1 == email2)
		{
		alert("Thank you for signing up! You told us:\n\nYour name is "+name+",\nYour address is "+address+",\nAnd your email is "+email1+"");
		return true;
		}
	else
		{
		alert("Error!\n\nEmails do not match, please try again");
		return false;
		}
}
