var toDoList = [];

function addToDo() {
    var addTextValue = document.getElementById("addContent").value;
    toDoList.push(addTextValue);


    var textToDo = "";
    for (var i = 0; i < toDoList.length; i++) {
        textToDo += "<td id=\"" + i + "\">" + toDoList[i] + "</td><br />"
    }

    document.getElementById("toDoList").innerHTML = textToDo ;
    document.getElementById("addContent").value = "";
}