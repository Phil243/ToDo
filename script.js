//Section: inserts form value into Ul
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");

const handleSubmit = (event) => {
    event.preventDefault();
    const date = document.querySelector('#start').value;
    const privat = document.querySelector('privat');
    const inputValue = document.getElementById("todo-input").value;
    const deleteValue = document.getElementById("todo-input").value="";
    const newListItem = document.createElement("li");
    newListItem.className = "d-flex list-group-item justify-content-between align-items-center";
    newListItem.innerHTML = ` ${inputValue}, ${date}`;
    list.append(newListItem);
    const newListInput = document.createElement('input');
    newListInput.className = "form-check-input me-1";
    newListInput.type = "checkbox";
    newListInput.value ="";
    
    //newListInput.ariaLabel = "...";

    newListItem.prepend(newListInput);
    const editButton = document.createElement('editbutton')
    const deleteButton = document.createElement('button');
    //deleteButton.innerHTML = '< id="trash" class="bi bi-trash3-fill"></i>';
    
    deleteButton.className = " bi bi-trash3-fill muell" ;
    editButton.className = " bi bi-trash3-fill muell" ;
    //deleteButton.style.color = "red"; 
    

    newListItem.append(editButton);
    newListItem.append(deleteButton);

  //handle edit
  const editItem = (event) => {
    console.log('Handle edit is working');

    let item = event.target.innerHTML;
    let itemInput = document.createElement('input');
    itemInput.type = 'text';
    itemInput.value = item;
    itemInput.classList.add('edit');
    itemInput.addEventListener('keypress', saveItem);
    itemInput.addEventListener('click', saveItem);
    event.target.parentNode.prepend(itemInput);
    event.target.remove();
    itemInput.select();


function saveItem(event) {
  let inputValue = event.target.value;
  if (event.target.value.length > 0 && (event.keyCode === 13 || event.type === 'click')) {
  let li = document.createElement('li');
  //li.addEventListener('click', toggleDone);
  //li.addEventListener('dblclick', editItem);
  li.textContent = event.target.value;
  event.target.parentNode.prepend(li);
  event.target.remove();
  }
  }
   };



    editButton.addEventListener('click', editItem);

  //const deleteButton = document.querySelector('.delete');
    const handleDelete = (event) => {

        newListItem.remove();

    };
  
    deleteButton.addEventListener('click', handleDelete);

  };

  form.addEventListener("submit", handleSubmit);
  

 




  //Section: delete button effects

const deleteButton = document.querySelector('.delete');

  const handleDelete = (event) => {
    deleteButton.innerText = "I was clicked!"
    event.target.innerHTML = "The event target was clicked!"
  };

  //deleteButton.addEventListener('click', handleDelete);
  //deleteButton.innerHTML = handleDelete;

//Datepicker
  const headerDate = document.querySelector('#start').value;
  //console.log(headerDate)
  const Überschrift = document.querySelector('.heading-date');
  console.log(Überschrift)
  const handleDate = () => {
    Überschrift.innerHTML = headerDate;
    //console.log(header-date);
  }
  form.addEventListener("submit", handleDate);
  //date.addEventListener('add', handleDate )
  
  //Section:

  
