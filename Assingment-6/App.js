let input=document.getElementById("todo");
let table=document.querySelector("table");
function addWork(){
    if(input.value!=""){
        let text=input.value
        let row=document.createElement('tr')
        table.append(row)
        let taskInput=document.createElement('input')
        let task=document.createElement('td')
        let moveUp=document.createElement('td')
        let moveDown=document.createElement('td')
        let remove=document.createElement('td')
        let update=document.createElement('td')
        taskInput.value=text
        taskInput.disabled=true
        task.append(taskInput)
        let updateSign=document.createElement('i')
        updateSign.classList.add('las','la-edit')
        update.append(updateSign)
        let removeSign=document.createElement('i')
        removeSign.classList.add('las','la-trash')
        remove.append(removeSign)
        let moveDownSign=document.createElement('i')
        moveDownSign.classList.add('las','la-arrow-down')
        moveDown.append(moveDownSign)
        let moveUpSign=document.createElement('i')
        moveUpSign.classList.add('las','la-arrow-up')
        moveUp.append(moveUpSign)
        updateSign.addEventListener('click',()=>{
            taskInput.disabled=false
        })
        taskInput.addEventListener('keypress',(e)=>{
            if(e.key==="Enter")
            taskInput.disabled=true
        })
        removeSign.addEventListener('click',()=>{
            row.remove();
        })
        moveUp.addEventListener('click',()=>{
            let prevRow=row.previousSibling;
            let x=row;
            if(prevRow!=null){
            
            prevRow.before(x)
            }
        });
        moveDown.addEventListener('click',()=>{
            let nextRow=row.nextSibling;
            console.log(nextRow)
            let x=row;     
            if(nextRow!=null){
            nextRow.after(x);       
            }
        });
        row.append(task)
        row.append(moveUp)
        row.append(moveDown)
        row.append(remove)
        row.append(update)
        table.append(row)
        input.value=""
    }   
}
input.addEventListener('keypress',(e)=>{
    if(e.key==="Enter")
    addWork();
})
