const addTaskButton =  document.querySelectorAll('.add-task');
const taskBoxInput =  document.querySelectorAll('.task-cloumm');
const taskModel = document.querySelector('#task-modal');
const mainSection = document.querySelector('#main');
const saveTask = document.querySelector('#save-task');
const closeModal = document.querySelector('#close-modal');
const titleId = document.querySelector('#title-input')
const descriptionId = document.getElementById('task-description');
const selectTagId  = document.querySelector('#task-options');
 
let taskArray = ["Critical","Issuse-Tickets","Maintenance","Unplaned"]
let storeKey = 'UserTask';




try {
       addTaskButton.forEach(  button => {
     button.addEventListener('click', async(e) =>{
       
         let buttonId = await e.target.id;
        //  console.log(e.target,'e.target')
        //  taskModel.dataset.activeCategory = await categoryId;
         
         if (buttonId ) {
              mainSection.setAttribute('inert','');
             mainSection.style.opacity = '.4';
             mainSection.style.pointerEvents = 'none';
             taskModel.style.display = 'flex';
             taskCategoryDefaultSet(buttonId);
             
            // console.log( 'buttonId',buttonId)
             saveTask.addEventListener('click',saveTaskClick)
            // closeModal.addEventListener('click',closeClick)
            // taskOptionsInputs.addEventListener('click',taskOptionClick)
        } })
    });
    
   } catch (error) {
    console.log(error)};




function taskCategoryDefaultSet(btnId){
  // ckeck array include the current btn task

  try {
   taskArray.filter(value => value.toLocaleLowerCase() !== btnId.toLocaleLowerCase())
  // console.log(filterArray,"filterArray")
  taskArray.unshift(btnId)

// append  selection options
    taskArray.map (data  =>{
      const taskOptions = document.createElement('option');
       taskOptions.textContent = data;
      taskOptions.value = data;
      selectTagId.appendChild(taskOptions)
      });




    
  } catch (error) {
  console.log(error)
  }}





async function saveTaskClick(){
 try {
  // category selection input
   let selectInput = await selectTagId.value;
    if (selectInput === ''){
    console.log('selected is empty')
    }
     selectTagId.addEventListener('change',e =>{
      selectInput =  e.target.value 
     });

// title input get
let titleInput = await titleId.value
  if (titleInput === '') {
     alert('plase add any task')
  } 
// describe input get
let descriptionInput = await descriptionId.data

saveState(selectInput,titleInput,descriptionInput)


 console.log(data.selectedTask)

    } catch (error) {
      console.error
    } 
    
    }

function saveState(){
localStorage.setItem(storeKey,selectInput);
localStorage.setItem(storeKey,titleInput);
localStorage.setItem(storeKey,descriptionInput);
}

function loadState(){
  
}
function closeClick(){
    
}


async function taskOptionSet(e) {
    
}

























// const firstOptions = document.createElement('option')
// const currentTask = taskArray.filter(value => value.toLowerCase().includes( btnId.toLowerCase() ) //check btn id equal element in task Array
// )
// firstOptions.textContent =  currentTask;
// firstOptions.value = currentTask;
// firstOptions.id = currentTask;
//  selectTagId.appendChild(firstOptions);


// const arrayIndex = taskArray.indexOf(String(currentTask))
//         taskArray.splice(arrayIndex,1);  //task Array iteration

// //append nest optons list
//  taskArray.map(value => {
//     const nextOptions = document.createElement('option');
//     nextOptions.textContent = value;
//     nextOptions.value = value;
   
//     selectTagId.appendChild(nextOptions)
   
    
// })

// emptyArray = btnId
 
// // console.log(btnId)
//  console.log(emptyArray,"optionId0")

// selectTagId.addEventListener('change',taskChange);

// async function taskChange(e) {
   
//   const optionId =  e.target.value; 
 
// console.log(emptyArray ,'optionId 2');    
// }  
 
//   console.log(emptyArray,"optionId1")
