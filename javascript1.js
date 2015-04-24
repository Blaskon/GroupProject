
function contact(){

    //get references
    
    
    var Name = document.getElementById('name');
  
    var Telephone = document.getElementById('telephone');
    var Email = document.getElementById('email');
	var Enquiry = document.getElementById('enquiry');        
    
    //Validation
    
    if(name.value == null || name.value=="") {
        alert("Please enter a name");
        return false;
       }
	else if(telephone.value == null || telephone.value == ""){
        alert("Please enter a phone number");
        return false;
    }
        else if(email.value == "" || email.value == null || email.value.indexOf("@")<1){
        alert("Please enter valid email");
        return false;
    }
        else if(enquiry.value == null || enquiry.value == ""){
        alert("Please enter enquiry");
        return false;
    }
    
    
}
