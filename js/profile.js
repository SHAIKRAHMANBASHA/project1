window.onload = function () {
    if (sessionStorage.getItem("user") == null) {
        window.location.replace("index.html");
    }
    else {

        // logout
            var logout = document.getElementById("logout");
            logout.onclick = function()
            {
                sessionStorage.clear();
                var logout_text = document.getElementById("logout_text");
                logout_text.innerHTML="please wait...";
                setTimeout(function(){
                    window.location ="index.html";
                },2000)
            }
            
            //contact 

            var contact = document.getElementById("contact");
            contact.onclick = function()
            {
                window.location="contact/files/contact.html";
            }

        //profile name coding
        var user_email = sessionStorage.getItem("user");
        var local_store = localStorage.getItem(user_email);
        var obj_data = JSON.parse(local_store);
        var profile_name = document.getElementById("profile_name");
        profile_name.innerHTML = obj_data.username;

        //profile picture coding

        var profile_bg_image =localStorage.getItem(user_email+"image");
        var profile_main_circle = this.document.getElementById("profile_main_circle");
        profile_main_circle.style.backgroundImage= "url("+profile_bg_image+")";
        profile_main_circle.style.backgroundSize="cover";
        profile_main_circle.style.backgroundPosition="center";


        if(localStorage.getItem(user_email+"image")!==null)
        {
            var profile_container = document.getElementById("profile_container");
            profile_container.style.display="none";
                

        }
        //profile upload coding
        var profile_upload = document.getElementById("profile_upload");
        profile_upload.onchange = function () {
            var reader = new FileReader();
            reader.readAsDataURL(profile_upload.files[0]);

            reader.onload = function () {
                var profile_icon = document.getElementById("profile_user_icon");
                var file_name = reader.result;
                var profilecircle = document.getElementById("profile_circle");
                profilecircle.style.backgroundImage = "url(" + file_name + ")";
                profilecircle.style.backgroundSize = "cover";
                profilecircle.style.backgroundPosition = "center";
                profile_icon.style.display = "none";
                var profile_btn_next = document.getElementById("profile_btn_next");
                profile_btn_next.style.display="block";

                profile_btn_next.onclick =function()
                {
                    localStorage.setItem(user_email+"image",file_name);
                    var profile_container = document.getElementById("profile_container");
                    profile_container.style.display="none";
                    //var profile_main_circle =document.getElementById("profile_main_circle");
                    //profile_main_circle.style.display="block";
                    window.location =location.href;
                }
            }
        }
    }
}