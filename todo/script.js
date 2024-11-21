const input=document.querySelector("input");
const btn=document.querySelectorAll("button");
const div=document.querySelector(".input-group ");
const form=document.querySelector(".form")
const TodoList=document.querySelector(".list-group")

runEvents()
let todos=[]

function runEvents(){
    form.addEventListener("submit", addTodo);

    btn[4].addEventListener("click", clearToDo);




    // btn.forEach(button => {
    //     button.addEventListener("click", addTodo);
    // });
}


function addTodo(e){

    const inputText=input.value.trim();
    if(inputText==null || inputText==""){
        showAlert("warning", "bos qoymayin")
    }
   else{
    addTodoToUI(inputText)
    addToDoStorage(inputText);
    showAlert("success","todo eklendi")
      
   
   }
    e.preventDefault()
}

function addTodoToUI(newTodo){
    const li=document.createElement("li");
    li.className="list-group-item f-flex justify-content-between d-flex";
    li.textContent=newTodo;

    const a=document.createElement("a");
    a.href="#"
    a.className="delete-item"


    const i=document.createElement("i");
    i.className="fa fa-remove ";



    a.appendChild(i);
    li.appendChild(a);
    TodoList.appendChild(li)

    input.value=" "
}


function clearToDo(e){
   TodoList.innerHTML=" "
    
}


function addToDoStorage(newTodo){
    checkTodDosFromStorage()
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos))

}


function checkTodDosFromStorage(){
    if(localStorage.getItem("todos")== null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }
}

function showAlert(type,message){
//     <div class="alert alert-danger" role="alert">
//     A simple danger alert—check it out!
//   </div>

const alert=document.createElement("div");
alert.className=`alert alert-${type}`;
alert.textContent=message;
div.appendChild(alert)


setTimeout(function(){
    alert.remove()
},2500)
}