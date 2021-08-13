const addBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-container');
const todoInput = document.querySelector('.todo-input');
const errorDiv = document.querySelector('.error');
const select = document.querySelector('.select');

addBtn.addEventListener( 'click' , addTodo);
todoList.addEventListener('click' , checkEditRemove);
select.addEventListener('click' , filterTodo);

function addTodo (e){
    e.preventDefault();
    if (todoInput.value == ""){
        errorDiv.innerHTML = `
        <span>
        Please fill the input !!!
        </span>`;
        errorDiv.style.display = 'block';
    }else{
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    const todo = `<li class ="taskName">${todoInput.value}</li>
    <span><i class="far fa-check-square"></i></span>
    <span><i class="fas fa-edit"></i></span>
    <span><i class="far fa-trash-alt"></i></span>`;
    todoDiv.innerHTML = todo ;
    todoList.appendChild(todoDiv);
    todoInput.value ="";
    errorDiv.style.display = 'none';
    }
}

function checkEditRemove(e){
    const classList = [...e.target.classList];
    const parent = e.target.parentElement.parentElement
    if (classList[1] == 'fa-trash-alt'){
        parent.remove();
    }else if (classList[1] == 'fa-check-square') {
        parent.classList.toggle('completed');
    }else if (classList[1] == 'fa-edit'){
       const taskName = document.querySelector('.taskName');
       todoInput.value =taskName.textContent 
    }
};

function filterTodo(e){
    const todos = [...todoList.childNodes]
    todos.forEach((todo) =>{
        switch(e.target.value){
            case 'all' :
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display ='none';
                }
                break;
            case 'uncompleted' :
                if (!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display ='none';
                }
                break;
        }
    })

}