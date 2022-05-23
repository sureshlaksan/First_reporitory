//...Login validation...//
function loginvalidation() {
    var formid = document.getElementById("logvalidation");
    var emailid = document.getElementById("txtfldlogEmailAddress");
    var passwordid = document.getElementById("txtfldlogpassword");

    if (NullorBlank(emailid, "Please fill the email")) { return false; }
    if (NullorBlank(passwordid, "Please fill the password")) { return false; }

    formid.action = "/validlogin";
    formid.submit();
}

$(document).ready(function(){
    $("#webdashlogin").click();
  });

function NullorBlank(elmid, message) {
    if (elmid.value == "" || elmid.value == null || elmid.value.length == 0) {
        alert(message);
        elmid.focus();
        elmid.style.border = "1px solid red";
        return true;
    } else {
        return false;
    }

}
function emailcheck(elmid) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (elmid.value.match(mailformat)) {
        elmid.style.border = "";
        return true;
    } else {
        alert("Enter the proper email ID!!!");
        elmid.value = "";
        elmid.focus();
        elmid.style.border = "1px solid red";
        return false;
    }
}
function passwordcheck(elmid) {
    return true;
    // var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,12}$/;
    // if (elmid.value.match(passformat)) {
    //     elmid.style.border = "";
    //     return true;
    // } else {
    //     alert("Enter the proper password!!");
    //     elmid.value = "";
    //     elmid.focus();
    //     elmid.style.border = "1px solid red";
    //     return false;
    // }
}

//...Register validation..//
function registervalidation() {
    var formid = document.getElementById("regvalid");
    var fnameid = document.getElementById("txtfldFirstname");
    var lnameid = document.getElementById("txtfldLastname");
    var emailid = document.getElementById("txtfldEmailAddress");
    var numberid = document.getElementById("number");
    var passid = document.getElementById("txtfldpass");
    var confirmpassid = document.getElementById("txtfldconfirmpass");

    if (NullorBlank(fnameid, "Please fill the firstname")) { return false; }
    if (NullorBlank(lnameid, "Please fill the lastname")) { return false; }
    if (NullorBlank(emailid, "Please fill the email")) { return false; }
    if (NullorBlank(numberid, "Please fill the phonenumber")) { return false; }
    if (NullorBlank(passid, "Please fill the password")) { return false; }
    if (NullorBlank(confirmpassid, "Please fill the confirmpassword")) { return false; }
    if (!rolecheckbox()) { return false; }

    formid.action = "login.html";
    formid.submit();
}

function rolecheckbox() {
    var g = document.getElementsByName("category");
    var msg = ' ';

    var j=0;
    //1<=3;2<=3;3<=3
    for(var i=1;i<= g.length ; i++){
        if(g[i-1].checked){  //g[1-1];g[2-1];g[3-1]
               j=i;
            }
    }
    if(j==0){
        msg = '<span style="color:red;">You must select your category!</span><br /><br />';
        document.getElementById('msg').innerHTML = msg;
        return false;
    }
    else{
        document.getElementById('msg').innerHTML = msg;
        return true;
    }
}


function letteronly(elmid) {
    var letterformat = /^[A-Za-z]+$/;
    if (elmid.value.match(letterformat)) {
        elmid.style.border = "";
        return true;
    } else {
        alert("Enter the proper firstname!!");
        elmid.value = "";
        elmid.focus();
        elmid.style.border = "1px solid red";
        return false;
    }
}
function letter(elmid) {
    var letterformat = /^[A-Za-z]+$/;
    if (elmid.value.match(letterformat)) {
        elmid.style.border = "";
        return true;
    } else {
        alert("Enter the proper last name");
        elmid.focus();
        elmid.value = "";
        elmid.style.border = "1px solid red";
        return false;
    }
}
function pnumber(elmid) {
    var numberformat = /^\d{10}$/;
    if (elmid.value.match(numberformat)) {
        elmid.style.border = "";
        return true;
    } else {
        alert("Enter the proper phone number");
        elmid.value = "";
        elmid.focus();
        elmid.style.border = "1px solid red";
        return false;
    }
}
function passcheck(elmid) {
    var passformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,12}$/;
    if (elmid.value.match(passformat)) {
        elmid.style.border = "";
        return true;
    } else {
        alert("Enter the proper password!!");
        elmid.focus();
        elmid.value = "";
        elmid.style.border = "1px solid red";
        return false;
    }
}


function matchpass(txtfldconfirmpass) {
    var password = document.getElementById("txtfldpass").value;
    var confirmpass = document.getElementById("txtfldconfirmpass").value;
    if (password == confirmpass) {
        document.getElementById("txtfldconfirmpass").style.border = "";
        return true;
    } else {
        alert("Password missmatch");
        txtfldconfirmpass.focus();
        txtfldconfirmpass.value = "";
        txtfldconfirmpass.style.border = "1px solid red"
        return false;
    }

}

//..function send() {
   //.. var genders = document.getElementsByName("category");
    //..if (genders[0].checked == true) {
       //.. alert("You select student");
    //..} else if (genders[1].checked == true) {
       //.. alert("You select trainer");
    //..} else if (genders[2].checked == true) {
       //.. alert("You select admin");
    //..} else {
        // no checked
        //..var msg = '<span style="color:red;">You must select your category!</span><br /><br />';
        //..document.getElementById('msg').innerHTML = msg;
        //..return false;
   //.. }
    //..return true;
//..}

function reset_msg() {
    document.getElementById('msg').innerHTML = '';
}




//..forget password validation..//
function forgive(stremailid) {
    var formid = $("#forgetform");
    //..var formid = document.getElementById("forgetform");..//
    var emailid = document.getElementById(stremailid);

    if (NullorBlank(emailid, "Please fill the email")) { return false; }

    formid.action = "login.html";
    formid.submit();
}


function styleRemove() {
    elmid.style.border == "";
}
