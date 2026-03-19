window.onload = function () {
    if (sessionStorage.getItem("user") == null) {
        window.location.replace("index.html");
    }
    else {
        //profile name coding
        var user_email = sessionStorage.getItem("user");
        var local_store = localStorage.getItem(user_email);
        var obj_data = JSON.parse(local_store);
        var profile_name = this.document.getElementById("profile_name");
        profile_name.innerHTML = obj_data.username;

        if(this.localStorage.getItem(user_email+"image")!==null)
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
                }
            }
        }
    }
}