



const input = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-btn');


const list =document.querySelector('#todo-list')


function addTask(){
    const taskText = input.value;
    
    if(taskText ===''){
        console.log('plz enter a task')
        return;
    }
  
//   create li
const listItem = document.createElement('li');
listItem.textContent = taskText;

//  create Remove button
const deleteButton = document.createElement('button');
deleteButton.textContent = 'remove';

// Add event to delete button
deleteButton.addEventListener('click',function(){
    listItem.remove()
})

console.log(deleteButton)

listItem.appendChild(deleteButton);

list.appendChild(listItem)

input.value = '';
    }


addBtn.addEventListener('click',addTask);

