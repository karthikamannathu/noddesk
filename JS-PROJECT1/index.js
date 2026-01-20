const addTaskButton =  document.querySelectorAll('.add-task');
const taskBoxCloum =  document.querySelectorAll('.task-cloum');
const taskModel = document.querySelector('#task-sumit-modal');
const mainSection = document.querySelector('#main');
const saveTask = document.querySelector('#save-task');
const closeModal = document.querySelector('#close-modal');
const titleId = document.querySelector('#title-input')
const descriptionId = document.getElementById('task-description');
const selectTagId  = document.querySelector('#task-options');
const taskBoxContainer = document.querySelectorAll('#task-cloum-container')
 
let taskArray = ["Critical","Issuse-Tickets","Maintenance","Unplaned"]
let storeKey = 'UserTask';
let buttonId = '';

 addNewTask ();

function addNewTask () {
addTaskButton.forEach(btn =>
  btn.addEventListener("click",addTaskClick)
  
)
}

function addTaskClick(e) {
   buttonId = e.target.id;
// console.log(buttonId,"buttonId")

}




























// addTask()

// function addTask (){
// try {
//        addTaskButton.forEach(  button => {
//      button.addEventListener('click', (e) =>{
//        console.log('add button click')
//          let buttonId = e.target.id;
//         //  console.log(e.target,'e.target')
//         //  taskModel.dataset.activeCategory = await categoryId;
         
        
        
//         if  (buttonId ) {
//              taskModel.style.display = 'flex';
//              mainSection.setAttribute('inert','');
//              mainSection.style.opacity = '.4';
//              mainSection.style.pointerEvents = 'none';

//              taskCategoryDefaultSet(buttonId);
             
//             // console.log( 'buttonId',buttonId)
//              saveTask.addEventListener('click',saveTaskClick)
//             // closeModal.addEventListener('click',closeClick)
//             // taskOptionsInputs.addEventListener('click',taskOptionClick)
//         } })
//     });
    
//    } catch (error) {
//     console.log(error)};

//    }


// function taskCategoryDefaultSet(btnId){
//   // ckeck array include the current btn task
//   try {
//    const filterArray = taskArray.filter(value => value.toLowerCase() != btnId)
//    console.log( filterArray,"filterArray")
//   const defaulTask = `${btnId[0].toUpperCase()}${btnId.slice(1)}`;//convert the id first letter uppercase
//  filterArray.unshift(defaulTask);
//  const taskOptions = document.createElement('option');
// // append  selection options
//     filterArray.map (data  =>{
     
//        taskOptions.textContent = data;
//       taskOptions.value = data;
//       selectTagId.appendChild(taskOptions)
//       });




    
//   } catch (error) {
//   console.log(error)
//   }}





// async function saveTaskClick(){
//  try {
//   // category selection input
//    let selectInput = await selectTagId.value;
//     if (selectInput === ''){
//     console.log('selected is empty')
//     }
//      selectTagId.addEventListener('change',e =>
//       selectInput =  e.target.value 
//      );

// // title input get


// saveState(selectInput)
// loadState()
// // console.log(saveState,'saveState')
// // console.log(loadState(),'loadState')


//     } catch (error) {
//       console.error
//     } 
    
//     }

// function saveState(selectInput){
//  console.log('saveState is loding');
//  localStorage.setItem('task',JSON.stringify(selectInput));

// //  localStorage.setItem('title',JSON.stringify(titleInput));
// //  localStorage.setItem('description',JSON.stringify(descInput));

// //  localStorage.removeItem('Task');

// }

// async function loadState(){
//   try{
//       console.log('loadState loading');
//     const taskName = await JSON.parse(localStorage.getItem('task'));

//   if(taskName) {
// console.log('taskName');
//   runderBoard(taskName);

//   }
//   else{

//   }

// }catch(error){
// console.error
// }
// }

//  function runderBoard(taskName) {
//   // get  All input boxs classNames

// // find the taks store key equal, className  using element
// const filtertag =[...taskBoxContainer].filter(element =>
//   element.classList.contains((taskName).toLowerCase()
// ));
 
// // select to-do first colum
// const allChidern = filtertag.flatMap(parent =>
//   Array.from(parent.querySelectorAll('.task-cloum')))
// console.log(allChidern,"all chidern")
// let taskCard  = createTaskCard(taskName);
// console.log(taskCard,"taskCard")
//   allChidern[0].appendChild(taskCard) //create task cards



// close(); }

// function createTaskCard(taskName){
// const card = document.createElement('div');
//   card.className ='task-card'
//   card.innerText = taskName;
//   return card;

// }








// function updateTaskLocation(){

// }

// function close(){
//     taskModel.style.display = 'none';
//     mainSection.removeAttribute('inert');
//     mainSection.style.opacity = '1';
//     mainSection.style.pointerEvents = 'auto';
     
// }


// async function taskOptionSet(e) {
    
// }














// select to-do first colum
  // filtertag.forEach( cloums =>{
  // let todoColumn = cloums.querySelector(".task-cloum[data-status = 'to-do']");










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
