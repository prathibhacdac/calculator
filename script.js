function divide(){
    a=Number(document.getElementById("numA").value);
    b=Number(document.getElementById("numB").value);
    if(b!=0){
        var c = a / b;
        document.getElementById("operator").innerHTML = "/";
        document.getElementById("result").innerHTML = c;
    }
    else{
        document.getElementById("operator").innerHTML = "/";
        document.getElementById("result").innerHTML = 'N/A';
        document.getElementById("msg").innerHTML = '** Division by 0 is not allowed';
    }
}
