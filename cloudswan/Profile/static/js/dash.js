// Sidebar...

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}


// Profile module edit funtion...

function profileEdit(elmid){
    console.log("officalsit")
    var uniqueid = $(elmid).attr("data-id");
    var $row = $(elmid).parent().parent();
    $("#id").val(uniqueid);
    $("#pfname").val($row.find("td:eq(0)").html());
    $("#plname").val($row.find("td:eq(1)").html());
    $("#pemail").val($row.find("td:eq(2)").html());
    $("#pphone").val($row.find("td:eq(3)").html());
    $("#ppass").val($row.find("td:eq(4)").html());
    $("#pconfirmpass").val($row.find("td:eq(5)").html());
}

function operateProfile(){
     
        var proFrm = document.getElementById("profilevalid");//document.forms["profilevalid"];
        var id = $("#id").val();

        if(isEmpty(id)){
            proFrm.action = "/saveprofile";
            proFrm.submit();
        }

       if(!isEmpty(id)){
        proFrm.action = "/updateprofile/"+id;
        proFrm.submit();
       }
	  
}
 
function isEmpty(elmId){
     
    if(elmId == "" || elmId == null || elmId.length == 0 || elmId == undefined || elmId == "undefined"){
      return true;
    }else{
        return false;
    }

}

function operateCourse(){

    var courFrm = document.getElementById("coursevalid");//document.forms["profilevalid"];
    var id = $("#id").val();


    if(isEmpty(id)){
        courFrm.action = "/savecourse";
        courFrm.submit();
    }

   if(!isEmpty(id)){
    courFrm.action = "/updatecourse/"+id;
    courFrm.submit();
   }
  
}
