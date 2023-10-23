function addtodo(){
    var input = document.getElementById("todo input");
    console.log(input.value);

    var list = document.getElementById("listitems");
    var listElement = document.creeateElement ("li");
    var listtext = document.createTextNode(input.value);
    listElement.appendchild("listtext");
    var delbtn = document.createElement("button");
    var delbtnText = document.createTextNode("Delete");
    delbtn.appendChild("delbtnText");
    listElement.appendChild(delbtn); 
    list.appendChild("listElement");
    console.log("listElement");
    input.value = "";
}

var editbtn = document.createElement("button");
var EditbtnText = document.createTextNode("Edit");
Editbtn.appendChild(EditbtnText);
listElement.appendChild(Editbtn);
list.appendChild(listElement);
Editbtn.setAttritbute("onclick,edittodo(this)");
console.log(listElement);
input.value ="";
function delbtntodo(){
    var list =  document.getElementById("listElements");
    list.innerHTML = "";

}
function edittodo()
{
    var current = e.parentNode.firstchild.NodeVaule;
    var inputField = prompt("Enter Updated Vaule".currentli);
    e.parentNode.firstchild.NodeVaule = inputField;


}

