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

function clear(){
    document.getElementById("iId").value = "";
    document.getElementById("iName").value = "";
    document.getElementById("iDescription").value = "";
    document.getElementById("iEndDate").value = "";    
}

function displayTasks(tasks){
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

    li.appendChild(createSpan(task.id , task.name , task.description,task.date));
    ul.appendChild(li);
}

function createSpan(id , name , description , endDate){
    var span = document.createElement('span');
    span.innerText = id + " " + name + " " + description + " " + endDate ;
    return span;
}

// function addTaskId(id){

// }

// function addTaskName(name){

// }

// function addTaskDescription(description){

// }

// function addTaskEndDate(endDate){

// }