window.addEventListener("load", firstTimeLoad)
window.addEventListener("click" , bindEvents);



function bindEvents(){
    document.getElementById('iAdd').addEventListener('click' , add);
}

function add(){
    let id = document.getElementById("iId").value;
    let name = document.getElementById("iName").value;
    let description = document.getElementById("iDescription").value;
    let endDate = document.getElementById("iEndDate").value;
    taskOperation.AddToDo(id,name,description,endDate);

    // Reload the task in list 
    var tasks = taskOperation.Read();
    displayTasks(tasks);
    clear();
    //console.log(tasks);
}

function firstTimeLoad(){
    document.getElementById("iUpdate").style.display = "none";
}

function clear(){
    document.getElementById("iId").value = "";
    document.getElementById("iName").value = "";
    document.getElementById("iDescription").value = "";
    document.getElementById("iEndDate").value = "";    
}

function displayTasks(tasks){
    var ul = document.getElementById("otask");
    ul.innerHTML="";
    for(let task of tasks){
        printTask(task);
    }    
}

function printTask(task){
    var ul = document.getElementById("otask");
    var li = document.createElement('li');
    // li.appendChild(addTaskId(task.id));
    // li.appendChild(addTaskName(task.name));
    // li.appendChild(addTaskDescription(task.description));
    // li.appendChild(addTaskEndDate(task.date));
    li.appendChild(createCheckBox(task.id));
    li.appendChild(createSpan(task.id , task.name , task.description,task.date));
    li.appendChild(createUpdateButton(task.id));
    li.appendChild(createDeleteButton(task.id));
    ul.appendChild(li);
}

function createSpan(id , name , description , endDate){
    var span = document.createElement('span');
    span.innerText = id + " " + name + " " + description + " " + endDate ;
    return span;
}

function createCheckBox(id){
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('checkbox-id',id);
    return checkbox;
}

function createUpdateButton(id){
    var button = document.createElement('button');
    button.innerHTML='<img src="Image/update.png" width="20" height="20"></img>';
    button.addEventListener('click',updateTask);
    button.setAttribute('update-id',id);
    return button;
}

function createDeleteButton(id){
    var button = document.createElement('button');
    button.innerHTML='<img src="Image/delete.png" width="20" height="20"></img>';
    button.addEventListener('click',deleteTask(id));
    button.setAttribute('delete-id',id);
    return button;
}

// function addTaskId(id){

// }

// function addTaskName(name){

// }

// function addTaskDescription(description){

// }

// function addTaskEndDate(endDate){

// }


function updateTask(){
    document.getElementById("iUpdate").style.display = "block";
    
}

function deleteTask(id){
    //taskOperation.DeleteById(id);
    //var tasks = taskOperation.Read();
    //displayTasks(tasks);    
}