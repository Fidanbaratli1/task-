let input=document.querySelector(".todo-input")
let add=document.querySelector(".btn-warning")
let list=document.querySelector("ul");
let errorMsg=document.querySelector(".text-danger");
let clrBtn=document.querySelector("#clear");
let updateBtn = document.querySelector("#update");
var count = document.querySelector("#count");
input.addEventListener("keyup",function(e){
if(e.target.value.length<3 || e.target.value.trim()==""){
    errorMsg.style.display="inline";
    add.setAttribute("disabled" ,"")
    updateBtn.setAttribute("disabled", " ")
}
else{
    errorMsg.style.display="none";
    add.removeAttribute("disabled","")
    updateBtn.removeAttribute("disabled")
}
});
add.addEventListener("click" ,function(e){
    e.preventDefault();
    let listItem=document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.classList.add("d-flex");
    listItem.classList.add("justify-content-center");
    listItem.classList.add("align-items-center");
    let span=document.createElement("span");
    span.classList.add("lead");
span.innerText=input.value;
let btn=document.createElement("button");
btn.classList.add("btn");
btn.classList.add("btn-danger");
btn.textContent="Delete";
btn.style.marginRight="5px";
let markBtn=document.createElement("button");
markBtn.textContent="Done";
markBtn.classList.add("btn");
markBtn.classList.add("btn-info");
let btnwrapper=document.createElement("div");
btnwrapper.append(btn,markBtn);
listItem.append(span,btnwrapper);
list.append(listItem);
input.value="";
btn.addEventListener("click",function(){
    btn.parentElement.parentElement.remove();
})
markBtn.addEventListener("click",function(){
    span.style.textDecoration="line-through"
})
clrBtn.addEventListener("click" ,function(){
        while (list.firstChild) {
          list.firstChild.remove();
        }
})
let update=document.querySelector(".update")
let editBtn=document.createElement("button")
editBtn.classList.add("btn")
editBtn.classList.add("btn-info")
editBtn.classList.add("btn-dan")
editBtn.textContent="edit"
btnwrapper.append(editBtn)
listItem.append(btnwrapper)
editBtn.addEventListener("click" ,function(e){
    e.preventDefault
    add.setAttribute("disabled" ,"")
    clrBtn.removeAttribute("disabled" ,"")
    updateBtn.addEventListener("click", function (e) {
        e.preventDefault();
        editBtn.parentElement.previousElementSibling.textContent = input.value;
        updateBtn.style.display = "none";
        input.value = "";
})
})
})