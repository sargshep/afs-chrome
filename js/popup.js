document.querySelector("#auth_btn").addEventListener('click', signin);

function signin () {
    var username = document.querySelector("#username").value;
    var password = document.querySelector('#password').value;
    if(username != "" && password != ""){
        // function to authenticate the user
        document.querySelector("#auth").style.display = "none";
        document.querySelector('#index').style.display = "block";
    } else {
        console.log("Please Fill the Blank Fields!");
    }
}

document.querySelector("#u2p_btn").addEventListener('click', upgrade2premium);

function upgrade2premium() {
    // move from index page to upgrade page
    document.querySelector("#index").style.display = "none";
    document.querySelector("#upgrade").style.display = "block";
}

document.querySelector("#activate_btn").addEventListener('click', upgrade);

function upgrade () {
    var license_key = document.querySelector("#licensekey").value;
    if(license_key != ""){
        // function to check for license key and upgrade the user
        document.querySelector("#upgrade").style.display = "none";
        document.querySelector("#index").style.display = "block";
        document.querySelector("#ext_version").innerHTML = "PREMIUM";
        document.querySelector("#u2p_btn").style.display = "none";

    } else {
        console.log("Please Insert License Key!")
    }
}

