/*Name: Lien Hua
File: hw3.js
Date created: 09-25-2025
Version: 1.0
Description: Style sheet for MIS 3371 HW3*/

// Get user's browser date
    const d = new Date();
    let date = d.toLocaleDateString();
    document.getElementById("today").innerHTML = date;


 // Check username
function checkid() {
    const useridInput = document.getElementById("userid");
    const userid = useridInput.value.toLowerCase();
    const passwordInput = document.getElementById("pw").value.toLowerCase();
    const emailInput = document.getElementById("email").value.toLowerCase();
    let idoutput = "";
    
    // Check if password contains userid
    if (passwordInput.includes(userid) && userid.length > 0) {
        idoutput = "Password cannot contain UserID! ";
        error_flag = 1;
    }
    // Check if userid equals email
    if (userid === emailInput && userid.length > 0) {
        idoutput += "UserID cannot be the same as email address!";
        error_flag = 1;
    }
    if (idoutput === "") {
        error_flag = 0;
    }
    document.getElementById("idpw").innerHTML = idoutput;
}

// Convert username to lowercase on blur (when user leaves field)
function convertUseridToLowercase() {
    const useridInput = document.getElementById("userid");
    useridInput.value = useridInput.value.toLowerCase();
    checkid(); // Re-check after conversion
}
// Add event listener when page loads
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("userid").addEventListener('blur', convertUseridToLowercase);
}); 


//Check DOB
function checkDOB() {
    const dobInput = document.getElementById("DOB").value;
    const today = new Date();
    const selectedDate = new Date(dobInput);
    
    // DOB cannot be 120 years ago or in the future
    const min120YearsAgo = new Date(today);
    min120YearsAgo.setFullYear(today.getFullYear() - 120);
    
    if (dobInput === "") {
        document.getElementById("dob_text").innerHTML = "Date of birth is required!";
        error_flag = 1;
    } else if (selectedDate > today) {
        document.getElementById("dob_text").innerHTML = "Date of birth cannot be in the future!";
        error_flag = 1;
    } else if (selectedDate < min120YearsAgo) {
        document.getElementById("dob_text").innerHTML = "Date of birth cannot be more than 120 years ago!";
        error_flag = 1;
    } else {
  document.getElementById("dob_text").innerHTML = "";
    }
}

// Check password  
function passwordentry() 
    {
    var passwordoutput;
    var passwordinput = document.getElementById("pw").value;
    console.log(passwordinput);
    // Validate lowercase letters
    if(passwordinput.search(/[a-z]/) < 0 ) {
      passwordoutput = "Enter At least 1 lower case letter";
      error_flag = 1;
    } else {
      passwordoutput = " ";
    }
    document.getElementById("password_message1").innerHTML = passwordoutput;
    // Validate capital letters
    if(passwordinput.search(/[A-Z]/)< 0)  {  
      passwordoutput = "Enter at least 1 upper case letter";
      error_flag = 1;
    } else {
      passwordoutput = " ";
    }
    document.getElementById("password_message2").innerHTML = passwordoutput;
  // Validate numbers
   if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "Enter At least 1 number";
    error_flag = 1;
    } else {
    passwordoutput = " ";
    }
    document.getElementById("password_message3").innerHTML = passwordoutput;
    // Validate special chars
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter At least 1 special character";
    error_flag = 1;
    } else {
    passwordoutput = " ";
    }
    document.getElementById("password_message4").innerHTML = passwordoutput;
  // Validate length
  if(passwordinput.length < 8) {
      passwordoutput = "Enter minimum 8 characters";
      error_flag = 1;
  } else {
      passwordoutput = " ";
  }
  document.getElementById("password_message5").innerHTML = passwordoutput;
  }

// Check that both passwords match
function checkpw2() {
    x=document.getElementById("pw").value;
    y=document.getElementById("pw2").value;
    if ( x==y ) 
    {
      document.getElementById("password2_text").innerHTML = "Passwords match!";
    } else  
      {
         document.getElementById("password2_text").innerHTML = "Passwords DO NOT match!";
         error_flag = 1;
      }
    }

//Check address
function checkadd1() {
    x = document.getElementById("address1").value;
    if (x.length < 2 ) {  
      document.getElementById("addr1_message").innerHTML = "Enter something on address line";  
      error_flag = 1;
      }
      else { 
          document.getElementById("addr1_message").innerHTML = "";  
      }
}





// Review form data
function reviewForm() {
    // Get all form values
    document.getElementById("review_fname").innerHTML = document.getElementById("fname").value || "N/A";
    document.getElementById("review_mi").innerHTML = document.getElementById("mi").value || "N/A";
    document.getElementById("review_lname").innerHTML = document.getElementById("lname").value || "N/A";
    document.getElementById("review_userid").innerHTML = document.getElementById("userid").value || "N/A";
    document.getElementById("review_email").innerHTML = document.getElementById("email").value || "N/A";
    document.getElementById("review_phone").innerHTML = document.getElementById("phone").value || "N/A";
    document.getElementById("review_dob").innerHTML = document.getElementById("DOB").value || "N/A";
    document.getElementById("review_addr1").innerHTML = document.getElementById("address1").value || "N/A";
    document.getElementById("review_addr2").innerHTML = document.getElementById("address2").value || "N/A";
    document.getElementById("review_city").innerHTML = document.getElementById("city").value || "N/A";
    document.getElementById("review_state").innerHTML = document.getElementById("state").value || "N/A";
    document.getElementById("review_zip").innerHTML = document.getElementById("zip").value || "N/A";
    
    // Get selected gender
    const genderRadios = document.getElementsByName("gender");
    let selectedGender = "N/A";
    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            selectedGender = genderRadios[i].value;
            break;
        }
    }
    document.getElementById("review_gender").innerHTML = selectedGender;
    
    // Show review section
    document.getElementById("reviewSection").style.display = "block";
    
}

