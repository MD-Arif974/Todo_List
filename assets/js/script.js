
let deleteBtn = document.querySelector(".deleteTask");
let body = document.querySelector("body");



function deleteAllTask() {
    console.log("ander sab thik hai bhai");
    body.style.backgroundColor = "red";
    
}
deleteBtn.addEventListener("click",deleteAllTask);

