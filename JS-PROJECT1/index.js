const addTaskButton =  document.querySelectorAll('.add-task');
const taskBoxCloum =  document.querySelectorAll('.task-cloum');
const taskModel = document.querySelector('#task-sumit-modal');
const mainSection = document.querySelector('#main');
const saveTask = document.querySelector('#save-task');
const closeModal = document.querySelector('#close-modal');
const titleId = document.querySelector('#title-input')
const descriptionId = document.getElementById('task-description');
const selectElement  = document.querySelector('#task-options');
const allSwimlanes = document.querySelectorAll('#swimlane-task ')
 const editTitle = document.querySelector(`.title`)
 
let taskArray = ["Critical","Issuse-tickets","Maintenance","Unplaned"]
let storeKey = 'UserTask';
let selectedTask = ''

 
 addNewTask ();
 
saveTask.addEventListener('click',getallInputs);
closeModal.addEventListener('click',close);
function addNewTask (){
  try {
    // Clicked buttonId get
    addTaskButton.forEach(btn =>
      btn.addEventListener("click",(e) =>{
       selectedTask = e.target.id;
    // console.log("buttonId",selectedTask)
  if(selectedTask){
      // enable the task submit Model-div
       editTitle.textContent ='Add Task';
           taskModel.style.display ='flex';
             mainSection.setAttribute('inert','');
             mainSection.style.opacity = '.5';
             mainSection.style.color = 'rgb(18, 18, 18)';
             mainSection.style.pointerEvents = 'none';
           taskOptionsCreation();
    }}) 
    );
  } catch (error) {
    console.error
  }
}

function taskOptionsCreation(){

  //  add task category in modal- selection element
      
  const  defaultOption = `${selectedTask[0].toUpperCase()}${
  selectedTask.slice(1)}`;//covert to firstletter capitlize 
    // Modify Array 
 let allmodifyedTaskArray = taskArray.filter(value=> value != defaultOption)
  //Array reset and push first default task
 allmodifyedTaskArray.unshift(defaultOption)
    
 selectElement.innerHTML = '';
      // create all options
   allmodifyedTaskArray.map(task =>{
   let taskOptions = document.createElement('option');
   taskOptions.value = task;
   taskOptions.textContent = task;
   selectElement.appendChild(taskOptions);
});
}


async function getallInputs(){
 try{ 
  // get taskCategory Inputs
  let taskCategoryInput = await selectElement.value;
  selectElement.addEventListener('change',e =>{
      taskCategoryInput =  e.target.value;
    return taskCategoryInput
  });
  
     saveState( taskCategoryInput )

   } catch(error){
      console.error
    }

}
//  add task button click time remove the option/doument

function saveState(CategoryInput){
// console.log('runing savestate...')
close();
localStorage.setItem('task',JSON.stringify(CategoryInput))
loadState()
}

 

function loadState() {
 const taskCategory = JSON.parse(localStorage.getItem('task'));
  //  console.log( taskCategory," taskCategory");
//  console.log("loadState loading...",JSON.parse(localStorage.getItem('task')));
 runderBoard(taskCategory);
//  close();
}

// find current swimlane and colum
async function runderBoard(task){
  try {
    // console.log(task,"runderBoard task")
    const swimlane = document.querySelector(`.swimlane-task.${task.toLowerCase()}`);
   let cloumn = swimlane.querySelector(`.task-cloum[data-status = to-do`);
    // console.log("runderBord loading..." ,cloumn)
  //  console.log(createTaskCard(),"cloun append")

    if(cloumn){
      let taskCard = createTaskCard(task,swimlane); 
      cloumn.innerHTML = '';   
      cloumn.appendChild(taskCard);
      console.log(cloumn,"cloun append")
    }




  } catch (error) {
    console.error;
    }
}

function createTaskCard(task,swimlane){
 
const card = document.createElement('div');
 card.className = 'task-cards';
 card.draggable = true;
 card.id = task + Date.now();
 card.innerHTML = `${task}
            <div class="pannel">
            <button class="card-edit">✎ Edit</button>
            <button class="card-close">✖ Close</button>
        </div>`;
   
   card.addEventListener('dragstart', (e) =>{
    card.classList.add('dragging');
    e.dataTransfer.setData('text/plain',card.id);
   } );
  card.addEventListener('dragend', () => card.classList.remove('dragging'));

    // 2. Hover Logic (Toggle display instead of overwriting innerHTML)
    card.addEventListener('mouseenter', (e) => {
        card.querySelector('.pannel').style.display = 'flex';
        card.style.opacity = '0.8';
       
        //  Edit the card
        const cardEdit = e.target.querySelector('.card-edit');
          cardEdit.addEventListener('click',(e) => {
           taskModel.style.display ='flex';
        editTitle.textContent ='Edit Task';
        saveTask.onClick = () => card.remove();
     });
   
     //  close the card
      const cardRemove =  e.target.querySelector('.card-close')
      cardRemove.addEventListener('click',(e)=>{
      card.remove()
      })
    });
//  
    //   
    card.addEventListener('mouseleave', () => {
        card.querySelector('.pannel').style.display = 'none';
        card.style.opacity = '1';
    });
  
  console.log(card)
  updateTaskLocation(swimlane);
    return card;
}

// function dragstart(e, cards) { 
//     // e is now automatically passed correctly
//     e.dataTransfer.setData('text/plain', cards.id);
//     cards.classList.add('dragging');
// }


function updateTaskLocation(swimlane ) {

  taskBoxCloum.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('zone-hover');
    });

    zone.addEventListener('dragleve',() =>{
      zone.classList.remove('zone-hover');
    });


    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('zone-hover');
      const cardId = e.dataTransfer.getData('text/plain');
      const draggingCard = document.getElementById(cardId);
      if (draggingCard) {
        zone.appendChild(draggingCard)
        
      }
    });
  }) ;
}




function close(){
  console.log('runing close...')
    taskModel.style.display = 'none';
    mainSection.removeAttribute('inert');
    mainSection.style.opacity = '1';
    mainSection.style.pointerEvents = 'auto';
     
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

// 







// function updateTaskLocation(){

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
