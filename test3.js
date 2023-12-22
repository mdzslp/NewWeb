const addMessage = document.querySelector(".message");
const addButton = document.querySelector(".add");
const todo = document.querySelector(".todo");
const delAllButton = document.querySelector(".delete");
let allTasks = document.querySelector(".result");

// массив данных списка
let todoList = [
  {
    id: 1,
    todo: 'Добавить кнопку "Удалить все"',
    checked: true,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "27.11.23",
  },
  {
    id: 2,
    todo: 'Добавить кнопку "Удалить одну задачу"',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    id: 3,
    todo: 'Добавить переключатель "Отображать/скрывать исполненные поручения"',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    id: 4,
    todo: 'Выводить информацию "Задач всего, из них исполнено"',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    id: 5,
    todo: "Важные задачи (important) выделять визуально (или стилем текста или фоном или границей или др.)",
    checked: true,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    id: 6,
    todo: "Обеспечить возможность пометки задачи как важной",
    checked: true,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    id: 7,
    todo: 'Добавить кнопку "Редактировать", позволяющую изменить текст, важность и прочие параметры задачи',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    id: 8,
    todo: 'Добавить поля "Дата постановки задачи", "Дата исполнения", отображать их, обеспечить заполнение при создании, при исполнении, чистку при снятии с исполнения',
    checked: false,
    important: true,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    id: 9,
    todo: "Увеличить ширину отображения задач",
    checked: false,
    important: false,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    id: 10,
    todo: "Обеспечить отображение задач при запуске сайта",
    checked: false,
    important: false,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    id: 11,
    todo: "Добавить параметр ТрудоёмкостьЗадачи, оценивать её по пятибальной системе",
    checked: false,
    important: true,
    assignmentDate: "28.11.23",
    performDate: "",
  },

  {
    id: 12,
    todo: "Реализовать вывод стат.отчёта, сколько задач в день закрывалось за отчетный период",
    checked: false,
    important: true,
    assignmentDate: "",
    performDate: "",
  },
  {
    id: 13,
    todo: "Вывести список задач в отдельный модуль, импортировать его из основного скрипта",
    checked: false,
    important: true,
    assignmentDate: "28.11.23",
    performDate: "",
  },
];

displayAllElements();

function getTaskHTML(item) {
  return `
  <li>
    <input type="checkbox" id="item_${item.id}" ${item.checked ? "checked" : ""}>
    <label for="item_${item.id}" class='${item.important ? "important" : ""}'>
      ${item.todo}
    </label>
    <button class="edit">edit</button>
    <button class="delete-element">X</button>
  </li>
  `;
}

function renderTasksCount() {
  const count = todoList.length;
  allTasks.textContent = `Всего задач: ${count}`;
}

function addOneElement(content) {
  const newTodo = newTask(content);
  todoList.push(newTodo);
  todo.innerHTML += getTaskHTML(newTodo);
  addMessage.value = "";

  renderTasksCount();
}


function newTask(content) {
  //сначала найдем максимальное значение id в maxId
  let maxId = -1;
  for (const item of todoList) {
    if (item.id > maxId) maxId = item.id;
  }
  //возвратим новую задачу со сгенерированным id
  return {
    id: maxId + 1,
    todo: content,
    checked: false,
    important: false,
    assignmentDate: "",
    performDate: "",
  };
}


addButton.addEventListener("click", function () {
  addOneElement();
});

function displayAllElements() {
  todo.innerHTML = todoList.map(getTaskHTML).join("");
  renderTasksCount();
}

// При нажатии на элемент правой кнопкой мышки, помечается Важным
todo.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  todoList.forEach(function (item) {
    if (item.todo === event.target.innerHTML) {
      item.important = !item.important;
      displayAllElements();
    }
  });
});

// Удаление задач
delAllButton.addEventListener("click", function () {
  todoList.splice(0, todoList.length);
  allTasks.innerHTML = "Задач нет";
  todo.innerHTML = "";
});
const editElementButton = document.querySelector(".edit");
const delElementButton = document.querySelector(".delete-element");

delElementButton.addEventListener("click", function (event) {
  alert("sad");
});

editElementButton.addEventListener("click", (e) => {
  alert("edit");
});
