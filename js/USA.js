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
function dark(){
    document.getElementById('body').style.backgroundColor='black';
    document.getElementById('p1').style.color='white';
    document.getElementById('p2').style.color='white';
    document.getElementById('p3').style.color='white';
    document.getElementById('p4').style.color='white';
    document.getElementById('p5').style.color='white';
    document.getElementById('p6').style.color='white';
    document.getElementById('p7').style.color='white';
    document.getElementById('p8').style.color='white';
    document.getElementById('fo').style.backgroundColor='gray';
    document.getElementById('fop').style.backgroundColor='gray';
    document.getElementById('b2').style.backgroundColor='gray';
    document.getElementById('b3').style.backgroundColor='gray';
    
}
function white(){
        document.getElementById('body').style.backgroundColor='white';
        document.getElementById('p1').style.color='black';
        document.getElementById('p2').style.color='black';
        document.getElementById('p3').style.color='black';
        document.getElementById('p4').style.color='black';
        document.getElementById('p5').style.color='black';
        document.getElementById('p6').style.color='black';
        document.getElementById('p7').style.color='black';
        document.getElementById('p8').style.color='black';
        document.getElementById('fo').style.backgroundColor='#000016';
        document.getElementById('fop').style.backgroundColor='#000016';
        document.getElementById('b2').style.backgroundColor='#000016';
        document.getElementById('b3').style.backgroundColor='#000016';

}