alert("Welcome, To USA Site");
function hello() {
    let txt;
    let name = prompt("Please Enter Your Name :","");
    if(name==null || name==""){
        txt="User Cancelled.";
    }
    else{
        txt="Hello" + name + "! How Are You ?";
    }
    document.getElementById("hell").innerHTML=txt;
}
hello();

function f1(){

    document.getElementById('b1').style.display='block';
       
}
function f2(){
    document.getElementById('b1').style.display='none';
}