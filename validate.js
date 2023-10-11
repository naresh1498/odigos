const validate = () => {
    let username = document.contact.username.value;
    let mobile = document.contact.mobile.value;
    let user_status = mobile_status = false;
    let alphaExp = /^[A-Za-z]+$/;
    let numExp = /^[0-9]+$/;
    // Username Validation
    if (username === "") {
        document.getElementById('usernote').innerHTML = "Name is Mandatory";
        user_status = false;
    }
    else {
       if (username.match(alphaExp)) {
        document.getElementById('usernote').innerHTML = "";
        user_status = true;
       }
       else {
        document.getElementById('usernote').innerHTML = "Name in Words";
        user_status = false;      
     } 
    }

if (mobile === ""){
    document.getElementById('mobilenote').innerHTML = "where is your number";
    mobile_status = false;
}
else{
    if(mobile.match(numExp)){
        if(mobile.length == 10){
            document.getElementById('mobilenote').innerHTML = "" ;
            mobile_status = true;
        }
        else{
            document.getElementById('mobilenote').innerHTML = "enter 10 digit numbers" ; 
            mobile_status = false;
        }
    }
    else{
        document.getElementById('mobilenote').innerHTML = "number only" ;  
        mobile_status = false;
    }
}
    if (user_status === true && mobile_status === true ) {
      
        return true;
    }
    else{
        return false;
    }
   
}