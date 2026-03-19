
/* sign up code start here*/
var signupfrm = document.getElementById("signup_frm");
signupfrm.onsubmit = function () {
    var sign_name = document.getElementById("sign_name").value;
    var sign_email = document.getElementById("sign_email").value;
    var sign_mobile = document.getElementById("sign_mobile").value;
    var sign_pass = document.getElementById("sign_pass").value;
    let sign_btn = document.getElementById("sign_btn");

    var signup_object_user = { username: sign_name, email: sign_email, mobileNo: sign_mobile, password: sign_pass }
    var signup_text_data = JSON.stringify(signup_object_user);

    if (sign_name !== "" && sign_email !== "" && sign_mobile !== "" && sign_pass !== "") {
        localStorage.setItem(sign_email, signup_text_data);
        sign_btn.innerHTML = "<i class='fa-regular fa-circle-check'></i>   Sign up Successfully !";
        sign_btn.style.background = "green";
        setTimeout(function () {
            sign_btn.innerHTML = "Sign Up";
            sign_btn.style.background = "linear-gradient(275deg, rgba(77, 82, 143, 1) 0%, rgba(199, 87, 100, 1) 50%, rgba(237, 221, 83, 1) 100%)";
            signupfrm.reset();
        }, 2000);
        return false;
    }
}
/* email valideation start here */

var email = document.getElementById("sign_email");
email.onchange = function () {


    var email_notice = document.getElementById("email_notice");
    if (localStorage.getItem(email.value) !== null) {
        email_notice.style.display = "block";
        email.style.borderBottomColor = "red";
        sign_btn.disabled = true;
        sign_btn.style.background = "#ccc";


        email.onclick = function () {
            email_notice.style.display = "none";
            email.style.borderBottomColor = "grey";
            sign_btn.disabled = false;
            email.value = "";
            sign_btn.style.background = "linear-gradient(275deg, rgba(77, 82, 143, 1) 0%, rgba(199, 87, 100, 1) 50%, rgba(237, 221, 83, 1) 100%)";
        }

    }
}

/* login form code start here */

let login_form = document.getElementById("login_frm");
login_form.onsubmit = function () {
    var email = document.getElementById("login_email");
    var password = document.getElementById("login_password");
    var login_email_warning = document.getElementById("login_email_notice");
    var login_password_warning = document.getElementById("login_password_notice");

    if (localStorage.getItem(email.value) == null) {
        login_email_warning.style.display = "block";
        email.style.borderBottomColor = "red";

        email.onclick = function () {
            email.value = "";
            login_email_warning.style.display = "none";
            email.style.borderBottomColor = "#ccc";
        }

    }
    else {
        var text_data = localStorage.getItem(email.value);
        var obj_data = JSON.parse(text_data);
        var correct_email = obj_data.email;
        var correct_password = obj_data.password;

        if (email.value == correct_email) {

            if (password.value == correct_password) {
                
                sessionStorage.setItem("user",email.value)
                window.location.replace("profile.html")
            }
            else {
                login_password_warning.style.display = "block";
                password.style.borderBottomColor = "red";

                password.onclick = function () {
                    password.value = "";
                    login_password_warning.style.display = "none";
                    password.style.borderBottomColor = "#ccc";
                }
            }
        }

    }

    return false;
}