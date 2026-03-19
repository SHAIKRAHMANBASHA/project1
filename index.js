var login = document.getElementById("login");
var signup = document.getElementById("signup");
var login_span = document.getElementById("login_span");
var sign_span = document.getElementById("sign_span");
let login_frm = document.getElementById("login_frm");
let signup_frm = document.getElementById("signup_frm");

sign_span.onclick = function ()
{
    login.style.display ="none";
    signup.style.display ="block";
}
login_span.onclick = function()
{
    signup.style.display="none";
    login.style.display="block";
}