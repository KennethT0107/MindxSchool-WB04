var valueA, valueB, valueC, toanTu;
var temp = true;
function print (number) {
    var input = document.getElementById("input");
    valueC = input.value;
    if (temp) {  
        input.value += number + "";
    }
    else {
        input.value = number + "";
        temp=true;
    } 
}
function Clear () {
    var input = document.getElementById("input");
    valueA= 0;
    valueB= 0;
    valueC= 0;
    input.value = "";
}
function Tinh (str) {
    var input = document.getElementById("input");
    toanTu = str;
    valueA = parseInt(input.value);
    input.value = "";
}
function Binhphuong (str) {
    var input = document.getElementById("input");
    toanTu=str;
    valueC = parseInt(input.value)
    input.value += "^2";

}
function Ketqua (str) {
    var input = document.getElementById("input");
    valueB = parseInt(input.value);
    if(toanTu == "+")
    {
        input.value = valueA + valueB + "";
        console.log(input) ;
    } 
    else if(toanTu == "x")
    {
        input.value = valueA * valueB + "";
        console.log(input) ;
    } 
    else if(toanTu == "/")
    {
        input.value = valueA / valueB + "";
        console.log(input) ;
    }
    else if(toanTu == "^2")
    {
        input.value = valueC * valueC + "";
        console.log(input)
    }
    temp=false;
}