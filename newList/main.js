window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	let input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	const date = document.querySelector("#start");
	const savedTasks = localStorage.getItem('#tasks');


	form.addEventListener('submit', (e) => {
		e.preventDefault();
		//const savedTasks = localStorage.getItem('task');
		const task = input.value + ' ' + date.value;
		const task_el = document.createElement('div');
		task_el.classList.add('task');
		//const savedTasks = localStorage.getItem('tasks')

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		//localStorage.setItem("tasks", JSON.stringify(savedTasks));
		//const task_date_el= document.createElement ('date')
		//task_date_el.className='date';
		//task_date_el.type = 'date';
		//task_date_el.value = date;
		//task_date_el.addEventListener ('date', )
		//console.log('date')
		//task_edit_el.className = 'bi-emoji-laughing-fill'

		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';
		task_edit_el.className = 'bi-emoji-laughing-fill'

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = '';
		task_delete_el.className = 'bi bi-trash3-fill'

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
		localStorage.setItem("tasks", JSON.stringify(savedTasks));	
		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
			
		});
	});
});

let savedTasks = JSON.parse(localStorage.getItem("tasks"));

