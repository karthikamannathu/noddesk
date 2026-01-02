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


const deleteButton = document.createElement('button');
deleteButton.textContent = 'remove';

}