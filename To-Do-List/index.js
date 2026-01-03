const input = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-btn');
const list =document.querySelector('#todo-list')


function addTask(){
    const taskText = input.ariaValueMax;
    
    if(taskText() ===  ''){
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


listItem.appendChild(addBtn);

list.appendChild(listItem)

input.value = '';

}

addBtn.addEventListener('click',addTask);

