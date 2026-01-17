const addTaskButton =  document.querySelectorAll('.add-task');
const taskBoxInput =  document.querySelectorAll('.task-cloumm');
const taskModel = document.querySelector('#task-modal');
const mainSection = document.querySelector('#main');
const saveTask = document.querySelector('#save-task');
const closeModal = document.querySelector('#close-modal')


try {
       addTaskButton.forEach(  button => {
     button.addEventListener('click', async(e) =>{
         const categoryId = e.target.id;
         taskModel.dataset.activeCategory = await categoryId;
         if (taskModel.dataset.activeCategory = true) {
              mainSection.setAttribute('inert','');
             mainSection.style.opacity = '.4';
             mainSection.style.pointerEvents = 'none';
             taskModel.style.display = 'flex';
            // console.log(taskModel.dataset.activeCategory )
            saveTask.addEventListener('click',saveTaskClick)
            closeModal.addEventListener('click',closeClick)
            
         } 
    
     })
    })
    
   } catch (error) {
    
    console.log(error)
 
   }




function saveTaskClick(){

}



function closeClick(){
    
}