function askMyName(){
    const name = prompt("ชื่ออะไรเอ่ย");
    
    if (name != null) {
        document.getElementById("myname").innerHTML = "My name is " + name;
    }
}

function helloWorld(){
    const h1message = document.getElementById("myname").innerHTML;
    alert(h1message + " งานท่วมหัว ทำตัว slowlife");
}
