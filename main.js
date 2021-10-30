function callTasks(){
    $.get("https://immense-plateau-68535.herokuapp.com/list", function(data){
        for(let i = 0;  i < data.data.length; i++){
            let tasksList = document.getElementById("tasks-container");
            let sharedTasks = `<div class="col task"><h6>${data.data[i].value}</h6>`+
            `<i class="fas fa-trash" id="trash" onclick="deleteTask('${data.data[i].id}','${data.data[i].value}'); window.location.reload()">`+
            `</i></div>`;
            tasksList.innerHTML += sharedTasks;
        }
    })
}
callTasks();

function addTask(){ 
    let task = document.getElementById("new-task").value;
    $.post("https://immense-plateau-68535.herokuapp.com/add",{
        todoitem: task + " - Andrés"
    }, function(data){
    });
}

function deleteTask(id,userName){
    let owner = userName.split("-").pop();
    console.log(owner);
    if(owner == " Andrés"){
        $.post("https://immense-plateau-68535.herokuapp.com/remove",{
            todoitemId:id,
            userName: owner
        }, function(data){
        });
        callTasks();
    }
    else{
        alert("ERROR: You can only delete the tasks you own")
        callTasks();
    }
}