//var div = document.getElementById("list");
//var ul = document.createElement("ul");
//var li = document.createElement("li");
//div.appendChild(ul);
//ul.appendChild(li);
//li.innerHTML = "Khang";
//console.log(div);
// var li= document.getElementById("khang");
// li.remove(li)
function todolist() {
    var text = document.getElementById('nhap');
    if (text.value != " ") {
    }
    else{
        var ul = document.getElementById('items');
        var li = document.createElement('li');
        var buttonremove = document.createElement('input');
        buttonremove.type = "button";
        buttonremove.value = "X";
        //error
        buttonremove.onclick ='removeItem()';
        li.classList = "item";
        li.innerHTML = text.value;
        console.log(li);
        ul.appendChild(li);
        text.value= "";
        li.appendChild(buttonremove);
        text.value="";
    }
}
function removeItem() {

}