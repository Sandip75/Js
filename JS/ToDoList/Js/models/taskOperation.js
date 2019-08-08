const taskOperation = {
    tasks : [] , 

    Add(){

    },

    Read(){
        return this.tasks;
    },

    AddToDo(id , name , description , enddate){
        let newTask = new Task(id,name,description,enddate);
        this.tasks.push(newTask);
    }
}