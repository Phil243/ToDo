//Section: inserts form value into Ul
const form = document.getElementById("todo-form");
const list = document.getElementById("todo-list");

const handleSubmit = (event) => {
    event.preventDefault();
    const date = document.querySelector('#start').value
    const inputValue = document.getElementById("todo-input").value;
    const newListItem = document.createElement("li");
    newListItem.className = "list-group-item";
    newListItem.innerHTML = ` ${inputValue}, ${date}`;
    list.append(newListItem);
    const newListInput = document.createElement('input')
    newListInput.className = "form-check-input me-1";
    newListInput.type = "checkbox";
    newListInput.value ="";
    newListInput.ariaLabel = "...";

    newListItem.prepend(newListInput);


  };

  form.addEventListener("submit", handleSubmit);

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

