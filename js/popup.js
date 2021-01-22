document.querySelector("#auth_btn").addEventListener('click', signin);

function signin () {
    var username = document.querySelector("#username").value;
    var password = document.querySelector('#password').value;
    if(username != "" && password != ""){
        // function to authenticate the user
        if(username == "admin" && password == "pass"){
            document.querySelector("#auth").style.display = "none";
            document.querySelector('#index').style.display = "block";
            console.log("User Signed In");
        } else {
            console.log("Invalid Username/Password");
            document.querySelector("#alert_msg").style.color = "Red";
            document.querySelector("#alert_msg").innerHTML = "Invalid Username/Password";
            setTimeout(() => {
                document.querySelector("#alert_msg").innerHTML = "";
            }, 3000);
        }
        
    } else {
        console.log("Please Fill the Blank Fields!");
        document.querySelector("#alert_msg").style.color = "Red";
        document.querySelector("#alert_msg").innerHTML = "Please Fill the Blank Fields!";
        setTimeout(() => {
            document.querySelector("#alert_msg").innerHTML = "";
        }, 3000);
    }
}


document.querySelector("#u2p_btn").addEventListener('click', upgrade2premium);

function upgrade2premium() {
    // move from index page to upgrade page
    document.querySelector("#index").style.display = "none";
    document.querySelector("#upgrade").style.display = "block";
    console.log("from index to upgrade page");
}


document.querySelector("#activate_btn").addEventListener('click', upgrade);

function upgrade () {
    var license_key = document.querySelector("#licensekey").value;
    if(license_key != ""){
        document.querySelector("#activate_btn").innerHTML = "Activating...";
        // function to check for license key and upgrade the user
        var options = {
            method: "POST",
            body: JSON.stringify({key: license_key})
        }
        fetch("https://script.google.com/macros/s/AKfycbwSM8u07N6RM1W7hQDP82WMCXBugKar8_jKqmjodYj5gz5swh_gYTc8_Q/exec", options).then(res =>{
             return res.text();
        }).then(res2 =>{
            if(res2 == "active"){
                document.querySelector("#upgrade").style.display = "none";
                document.querySelector("#index").style.display = "block";
                document.querySelector("#ext_version").innerHTML = "PREMIUM";
                document.querySelector("#u2p_btn").style.display = "none";
                console.log("User Upgraded"); 
                document.querySelector("#alert_msg").style.color = "Green";
                document.querySelector("#alert_msg").innerHTML = "Your Membership has been Upgraded";
                document.querySelector("#activate_btn").innerHTML = "Activate";
                document.querySelector("#licensekey").value = "";
                setTimeout(() => {
                  document.querySelector("#alert_msg").innerHTML = "";  
                }, 3000);
                
            } else if (res2 == "inactive"){
                // document.querySelector("#upgrade").style.display = "none";
                // document.querySelector("#index").style.display = "block";
                document.querySelector("#ext_version").innerHTML = "FREE";
                console.log("User Subscription is Cancelled");
                document.querySelector("#alert_msg").style.color = "Red";
                document.querySelector("#alert_msg").innerHTML = "User Subscription has been Cancelled";
                document.querySelector("#activate_btn").innerHTML = "Activate";
                document.querySelector("#licensekey").value = "";
                setTimeout(()=>{
                    document.querySelector("#alert_msg").innerHTML = "";
                }, 3000);
            } else if (res2 == "user doesnot exist"){
                // document.querySelector("#upgrade").style.display = "none";
                // document.querySelector("#index").style.display = "block";
                document.querySelector("#ext_version").innerHTML = "FREE";
                console.log("Invalid License Key");
                document.querySelector("#alert_msg").style.color = "Red";
                document.querySelector("#alert_msg").innerHTML = "Invalid License Key";
                document.querySelector("#activate_btn").innerHTML = "Activate";
                document.querySelector("#licensekey").value = "";
                setTimeout(()=>{
                    document.querySelector("#alert_msg").innerHTML = "";
                }, 3000);
            }
        })
        

    } else {
        console.log("Please Insert License Key!");
        document.querySelector("#alert_msg").style.color = "Red";
        document.querySelector("#alert_msg").innerHTML = "Please Insert License Key";
        setTimeout(() => {
            document.querySelector("#alert_msg").innerHTML = "";
        }, 3000);
    }
}


document.querySelector("#back_btn").addEventListener("click", back);

function back () {
    // function to move back to index screen
    document.querySelector("#upgrade").style.display = "none";
    document.querySelector("#index").style.display = "block";
    document.querySelector("#licensekey").value = "";
}

