const addTaskButton =  document.querySelectorAll('.add-task');
const taskBoxInput =  document.querySelectorAll('.task-cloumm');
const taskModel = document.querySelector('#task-modal');
const mainSection = document.querySelector('#main');
const saveTask = document.querySelector('#save-task');
const closeModal = document.querySelector('#close-modal');
const titleInput = document.querySelector('#title-input')
const description = document.querySelector('#task-description');
const selectTagId  = document.querySelector('#task-options');

const taskArray = ["Critical","Issuse-Tickets","Maintenance","Unplaned"]

try {
       addTaskButton.forEach(  button => {
     button.addEventListener('click', async(e) =>{
       
         const buttonId = await e.target.id;
        //  console.log(e.target,'e.target')
        //  taskModel.dataset.activeCategory = await categoryId;
         
         if (buttonId ) {
              mainSection.setAttribute('inert','');
             mainSection.style.opacity = '.4';
             mainSection.style.pointerEvents = 'none';
             taskModel.style.display = 'flex';
             taskCategoryDefaultSet(buttonId);
            // console.log( 'buttonId',buttonId)
            // saveTask.addEventListener('click',saveTaskClick)
            // closeModal.addEventListener('click',closeClick)
            // taskOptionsInputs.addEventListener('click',taskOptionClick)
        } })
    });
    
   } catch (error) {
    console.log(error)};




async function taskCategoryDefaultSet(btnId){

//  console.log(btnId,"btnId")

const options = document.createElement('option')
const currentTask = taskArray.filter(value => value.toLowerCase().includes( btnId.toLowerCase() )
)


options.textContent =  currentTask;
selectTagId.appendChild(options);
const arrayIndex = taskArray.indexOf(String(currentTask))
taskArray.splice(arrayIndex,1);

taskArray.map(value => {
    const nextOptions = document.createElement('option');
    nextOptions.textContent = value;
    nextOptions.value = value;
    selectTagId.appendChild(nextOptions)
})
// optins.textContent = btnId;
// selectTagId.appendChild(optins)
}

// function taskOptionClick(e) {
//     const event = e.target
//     console.log(event,"event")
// }


async function saveTaskClick(){
  
}



function closeClick(){
    
}


async function taskOptionSet(e) {
    
}