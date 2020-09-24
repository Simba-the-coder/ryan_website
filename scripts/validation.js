var attempt = 3; // Variable to count number of attempts.

// Below function Executes on click of login button.
function validate(){

    var username = document.getElementById("loginUser").value;
    var password = document.getElementById("loginPassword").value;

    if ( username == "admin" && password == "1234"){
        alert ("Login successfully");
        window.open("./galery.html");
        return false;
    }
    else
    {
        attempt --;     //Decrementing by one.
        alert("Try again: You have left " + attempt + " attempt(s) left;");

        // Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }  
    // window.location.href = "./html/Login.html"; 
}