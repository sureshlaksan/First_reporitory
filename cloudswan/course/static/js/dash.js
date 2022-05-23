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



/////////..............PROFILE MANAGEMENT..............////////////////////


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

// Profile module save funtion...


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
/////////........................................................................................////////////////////



/////////..............COURSE MANAGEMENT..............////////////////////



// Course module edit funtion...


function courseEdit(elmid){
    var courid = $(elmid).attr("data-id");
    var $row = $(elmid).parent().parent();
    $("#id").val(courid);
    $("#coursename").val($row.find("td:eq(0)").html());
    $("#subname").val($row.find("td:eq(1)").html());
    $("#category").val($row.find("td:eq(2)").html());
    $("#description").val($row.find("td:eq(3)").html());
    $("#Noofchapter").val($row.find("td:eq(4)").html());
    $("#chaptername").val($row.find("td:eq(5)").html());
    $("#course_duration").val($row.find("td:eq(6)").html());
    $("#price").val($row.find("td:eq(7)").html());
}


// Profile module save funtion...

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


function isEmpty(elmId){
     
    if(elmId == "" || elmId == null || elmId.length == 0 || elmId == undefined || elmId == "undefined"){
      return true;
    }else{
        return false;
    }

}


/////////........................................................................................////////////////////