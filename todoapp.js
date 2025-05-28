let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});

//let delBtns=document.querySelectorAll(".delete");
//for(delBtn of delBtns){
   // delBtn.addEventListener("click",function(){
     //   let par =this.parentElement;
       // console.log(par);
        //par.remove();
   // });
//}
// Persist tasks in localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#task-list li").forEach(li => {
        tasks.push({ text: li.firstChild.textContent, done: li.classList.contains("done") });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
    saved.forEach(task => addTask(task.text, task.done));
}

document.addEventListener("DOMContentLoaded", loadTasks);
