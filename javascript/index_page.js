function passValue()
{
    var identity = document.getElementById("userid").value;
    sessionStorage.setItem("ID", identity);
}
function checkID(form)
{
    var re = /^[0-9]*$/;

    if(!re.test(form.userid.value)) {
      alert("Error: User ID should only contain numbers!");
      form.userid.value="";
      return false;
    }

    return true;
}