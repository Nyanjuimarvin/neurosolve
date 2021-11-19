function validate(){
    var username = document.sign_up.name;
    var email =document.sign_up.email;
    var password = document.sign_up.password;

    if(username.value.length <= 0){
    alert("Name Required");
    username.focus();
    return false;
    }

    if(email.value.length <= 0){
    alert("Email Required");
    email.focus();
    return false;
    }

    if(password.value.length <= 0){
    alert("Password Required");
    password.focus();
    return false;
    }
}

function signup() {document.getElementById("sup").addEventListener("click",()=>{
    alert("Enter Credentials");
    })
}
var password = document.getElementsById("pswd");
var toggle_pswd = document.getElementById("toggle");
toggle_Pswd.addEventListener("click", toggleClicked);

function toggleClicked(){
    if (this.checked) {
        password.type = "text";
      } else {
        password.type = "password";
      }
    }