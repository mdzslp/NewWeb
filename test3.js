const addMessage = document.querySelector(".message");
const addButton = document.querySelector(".add");
const todo = document.querySelector(".todo");
const delAllButton = document.querySelector(".delete");
let allTasks = document.querySelector(".result");

// массив данных списка
let todoList = [
  {
    todo: 'Добавить кнопку "Удалить все"',
    checked: true,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "27.11.23",
  },
  {
    todo: 'Добавить кнопку "Удалить одну задачу"',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    todo: 'Добавить переключатель "Отображать/скрывать исполненные поручения"',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    todo: 'Выводить информацию "Задач всего, из них исполнено"',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    todo: "Важные задачи (important) выделять визуально (или стилем текста или фоном или границей или др.)",
    checked: true,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    todo: "Обеспечить возможность пометки задачи как важной",
    checked: true,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    todo: 'Добавить кнопку "Редактировать", позволяющую изменить текст, важность и прочие параметры задачи',
    checked: false,
    important: true,
    assignmentDate: "20.11.23",
    performDate: "",
  },
  {
    todo: 'Добавить поля "Дата постановки задачи", "Дата исполнения", отображать их, обеспечить заполнение при создании, при исполнении, чистку при снятии с исполнения',
    checked: false,
    important: true,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    todo: "Увеличить ширину отображения задач",
    checked: false,
    important: false,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    todo: "Обеспечить отображение задач при запуске сайта",
    checked: false,
    important: false,
    assignmentDate: "28.11.23",
    performDate: "",
  },
  {
    todo: "Добавить параметр ТрудоёмкостьЗадачи, оценивать её по пятибальной системе",
    checked: false,
    important: true,
    assignmentDate: "28.11.23",
    performDate: "",
  },

  {
    todo: "Реализовать вывод стат.отчёта, сколько задач в день закрывалось за отчетный период",
    checked: false,
    important: true,
    assignmentDate: "",
    performDate: "",
  },
  {
    todo: "Вывести список задач в отдельный модуль, импортировать его из основного скрипта",
    checked: false,
    important: true,
    assignmentDate: "28.11.23",
    performDate: "",
  },
];

displayAllElements();

function getTaskHTML(item, i) {
  return `
  <li>
    <input type="checkbox" id="item_${i}" ${item.checked ? "checked" : ""}>
    <label for="item_${i}" class='${item.important ? "important" : ""}'>
      ${item.todo}
    </label>
    <button class="edit">edit</button>
    <button class="delete-element">X</button>
  </li>
  `;
}

function addOneElement() {
  const newItem = {
    id: 1,
    todo: addMessage.value,
    checked: false,
    important: true,
    assignmentDate: "",
    performDate: "",
  };
  todoList.push(newItem);
  todo.innerHTML += getTaskHTML(newItem, newItem.id);
  addMessage.value = "";
  displayAllElements();
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
  };
}

addButton.addEventListener("click", function () {
  addOneElement();
});

function displayAllElements() {
  const displayMessage = todoList
    .map((item, i) => getTaskHTML(item, i))
    .join("");

  todo.innerHTML = displayMessage;

  const count = todoList.length;
  allTasks.textContent = `Всего задач: ${count}`;
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
  displayAllElements();
});
const editElementButton = document.querySelector(".edit");
const delElementButton = document.querySelector(".delete-element");

delElementButton.addEventListener("click", function (event) {
  alert("sad");
});

editElementButton.addEventListener("click", (e) => {
  alert("edit");
});
