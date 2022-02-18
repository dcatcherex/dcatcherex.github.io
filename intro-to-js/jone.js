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

function calAge(){
    const thisYear = 2022;
    const yearOfAge = Number(prompt("ป้อน ค.ศ. ปีเกิดด้วยครับผม"));
    if(yearOfAge!=null){
        let ageToday = thisYear - yearOfAge;
        alert(`ยินดีด้วย นายอยู่ในประเทศนี้มา ${ageToday} ปีแล้ว`)
    }
    
}

function loadProfile(){
    let name = 'Jone';
    let province = 'Petchaburi';

    document.getElementById('my-name').innerHTML = name;
    document.getElementById('my-province').innerHTML = province;

    
}