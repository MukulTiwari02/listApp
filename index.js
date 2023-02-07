let addbtn=document.getElementById("add-btn");
var ul = document.getElementById("list-items");
let input= document.getElementById("input");
let editbtn=document.querySelectorAll(".edit-btn");
let delbtn=document.querySelectorAll(".del-btn");


addbtn.addEventListener("click",addElement);

input.addEventListener("keypress",(event)=>{

    if(event.key == "Enter")
    addElement();
})


for(let i=0;i<delbtn.length;i++)
{
    delbtn[i].addEventListener('click',deleteEle);
    editbtn[i].addEventListener('click',editEle);
}



function addElement(){
    let newLi = document.createElement("li")
    newLi.innerHTML=`<h7>${input.value.toUpperCase()}</h7>
                    <button class="edit-btn but">EDIT</button>
                    <button class="del-btn but">REMOVE</button>`
                    
    if(input.value!= "")
    ul.appendChild(newLi);
    input.value="";

    newLi.querySelector(".del-btn").addEventListener('click',deleteEle);
    newLi.querySelector(".edit-btn").addEventListener('click',editEle);

   
    
    if(ul.firstElementChild == newLi)
    newLi.style.border = ".1px solid black";
    else newLi.style.borderTop = "0px";
}



function deleteEle()
{
    this.parentElement.remove();
    if(ul.firstElementChild)
        ul.firstElementChild.style.borderTop = ".1px solid black"
}


function editEle(){
    let typeText=this.parentElement.firstChild;
    let textNew = typeText.textContent;

    if(this.textContent == "EDIT")
    {
        typeText.innerHTML=`<input type="text" class="text-edit" name="new-text" id="text-editing" value="${textNew}" placeholder="Type Something">`
        this.textContent = "DONE";
    }
    else {
        textNew = typeText.firstElementChild.value;
        if(textNew=='')
        {
            alert("Can't leave Blank");
        }
        else 
        {
            typeText.innerHTML=`${textNew.toUpperCase()}`;
            this.textContent = "EDIT";
        }
    }
}


