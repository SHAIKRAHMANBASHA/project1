
if (sessionStorage.getItem("user") == null) {
    window.location.replace("../../index.html");
}
else {
    // all contacts profile pic code 

    var current_user = sessionStorage.getItem("user");
    var local_img = localStorage.getItem(current_user + "image");
    var bg_image = document.getElementById("profile_pic");
    bg_image.style.backgroundImage = "url(" + local_img + ")";
    bg_image.style.backgroundPosition = "center";
    bg_image.style.backgroundSize = "cover";
    //contact add box coding here

    var plus_icon = document.getElementById("plus_icon");
    plus_icon.onclick = function () {
        var contact_bg = document.getElementById("contact_bg");
        contact_bg.style.display = "block";
    }

    //close coding start here

    var close = document.getElementById("close_contact");
    close.onclick = function () {
        var contact_bg = document.getElementById("contact_bg");
        contact_bg.style.display = "none";

    }
    // add button contact start here

    var add_btn = document.getElementById("add_contact");
    add_btn.onclick = function () {
        var c_name = document.getElementById("c_name");
        var c_num = document.getElementById("c_num");

        if (c_name.value && c_num.value !== "") {
            var new_contact = { name: c_name.value, number: c_num.value };
            var json_text = JSON.stringify(new_contact);
            localStorage.setItem(current_user + "_contact" + c_name.value, json_text);
        }
        else {
            alert("enter name and contact number");
            return false;
        }
    }

    function all_contacts() {
        var i;
        for (i = 0; i < localStorage.length; i++) {
            var all_keys = localStorage.key(i);

            if (all_keys.match(sessionStorage.getItem("user") + "_contact")) {
                var json_text = localStorage.getItem(all_keys);
                var obj = JSON.parse(json_text);

                var contact_box = document.createElement("DIV");
                contact_box.setAttribute("id", "contact");
                var name_p = document.createElement("P");
                name_p.setAttribute("class", "contact_search");
                var name_i = document.createElement("I");
                name_i.setAttribute("class", "fas fa-user");
                var tool = document.createElement("DIV");
                tool.setAttribute("id", "tool");
                var edit_i = document.createElement("I");
                edit_i.setAttribute("class", "fas fa-edit");
                var trash_i = document.createElement("I");
                trash_i.setAttribute("class", "fas fa-trash");
                var line = document.createElement("HR");
                line.setAttribute("width", "75%");
                line.setAttribute("color", "purple");
                line.setAttribute("size", "1");
                var num_p = document.createElement("P");
                var num_i = document.createElement("I");
                num_i.setAttribute("class", "fas fa-mobile-alt");

                name_p.appendChild(name_i);
                name_p.innerHTML += " " + obj.name;
                tool.appendChild(edit_i);
                tool.appendChild(trash_i);
                num_p.appendChild(num_i);
                num_p.innerHTML += " " + obj.number;
                contact_box.appendChild(name_p);
                contact_box.appendChild(tool);
                contact_box.appendChild(line);
                contact_box.appendChild(num_p);

                var all_contact = document.getElementById("allcontact");
                all_contact.appendChild(contact_box);


            }
        }
    }
    all_contacts();

    // contact search coding start here //

    var search = document.getElementById("search");
    search.oninput = function () {
        var contact_name = document.getElementsByClassName("contact_search");
        var i;
        for (i=0;i<contact_name.length;i++)
        {
            if(contact_name[i].innerHTML.toUpperCase().match(search.value.toUpperCase()))
            {
              contact_name[i].parentElement.style.display="block";
            }
            else
            {
                contact_name[i].parentElement.style.display="none";
            }
        }
    }

}