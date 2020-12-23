function xulyTen() {
    var inputTen = document.getElementById("input");
    var p = document.getElementById("khang");
    var xinchao= "Xin chào " + inputTen.value;
    console.log(xinchao);
    p.innerHTML = xinchao;
}