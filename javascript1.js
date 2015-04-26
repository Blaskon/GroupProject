function contact(){
	
	// Get users input
	var name = document.getElementById("userName").value;
	var telephone = document.getElementById("userPhone").value;
	var email = document.getElementById("userEmail").value;
	
	// Regular expressions to validate fields
	var nameRegEx = /^[a-zA-Z]+$/;
	var phoneRegEx = /^\d+$/;
	var emailRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	
	// Validation logic
	
	//alert("This is your name " + name);
	if((name === "") || (name === null) || (!name.match(nameRegEx))){
		alert("Please enter a valid name");
		//matches("^[\\p{L} .'-]+$")
		return false;
	}
	if(!telephone.match(phoneRegEx)){
		alert("Please enter a valid number");
		return false;
	}
	
	if(!email.match(emailRegEx)){
		alert("Please enter a valid email");
		return false;
	}
	
	document.getElementById("myForm").submit();
	return true;
}
