document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    handleToDo(e.target['new-task-description'].value);
    console.log(e.target['new-task-description'].value)
    form.reset();
  });
  
});

function handleToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.getElementById('tasks').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}