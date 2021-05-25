function patientVerify()
{
    var epatient = document.getElementById("ecust");
    var npatient = document.getElementById("ncust");
    var userid = sessionStorage.getItem("ID");

    if(epatient.checked == true){
        document.getElementById("patientname").value = "Ramesh";
        document.getElementById("patientid").value = userid;
        document.getElementById("phone").value = "1234567890";
    }
    else if(npatient.checked == true){
        document.getElementById("logon").reset();  
    }
    var pname = document.getElementById("patientname").value;
    sessionStorage.setItem("name", pname);
}
function checkID(form)
{
    var re = /^[0-9]*$/;

    if(!re.test(form.userid.value)) {
      alert("Error: User ID should only contain numbers!");
      form.userid.value="";
      return false;
    }
    if(!re.test(form.patientphone.value)) {
        alert("Error: Phone Number should only contain numbers!");
        form.patientphone.value="";
        return false;
    }
    if(!re.test(form.aphone.value)) {
        alert("Error: Attender Contact should only contain numbers!");
        form.aphone.value="";
        return false;
    }

    return true;
}