//Section: inserts form value into Ul
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");

const handleSubmit = (event) => {
    event.preventDefault();

    const inputValue = document.getElementById("todo-input").value;
    const newListItem = document.createElement("li");
    newListItem.className = "list-group-item";
    newListItem.innerHTML = ` ${inputValue}`;
    list.append(newListItem);
    const newListInput = document.createElement('input');
    newListInput.className = "form-check-input me-1";
    newListInput.type = "checkbox";
    newListInput.value ="";
    newListInput.ariaLabel = "...";
    newListItem.prepend(newListInput);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = "delete";
    newListItem.append(deleteButton);

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

