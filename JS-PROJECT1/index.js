const addTaskButton = document.querySelectorAll(".add-task");
const taskBoxCloum = document.querySelectorAll(".task-cloum");
const taskModel = document.querySelector("#task-sumit-modal");
const mainSection = document.querySelector("#main");
const saveTask = document.querySelector("#save-task");
const closeModal = document.querySelector("#close-modal");
const titleId = document.querySelector("#title-input");
const descriptionId = document.getElementById("task-description");
const selectElement = document.querySelector("#task-options");
const allSwimlanes = document.querySelectorAll("#swimlane-task ");
const editTitle = document.querySelector(`.title`);
const taskDeskId = document.querySelector(`#task-description`);
//  const colorPicker = document.querySelector(`#color-wheel`);

//  const colorResult= document.querySelector(`#color-result`);
const colorBox = document.querySelector(`#color-box`);
const colorPannel = document.querySelector(`.color-picker`);
//  const ctx = colorPicker.getContext('2d', { willReadFrequently: true });

let taskArray = ["Critical", "Issuse-tickets", "Maintenance", "Unplaned"];
let storeKey = "UserTask";
let selectedTask = "";
let color = "";
let colorPicker;

addNewTask();

saveTask.addEventListener("click", getallInputs);
closeModal.addEventListener("click", close);
function addNewTask() {
  try {
    // Clicked buttonId get
    addTaskButton.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        selectedTask = e.target.id;
        // console.log("buttonId",selectedTask)
        if (selectedTask) {
          // enable the task submit Model-div
          editTitle.textContent = "Add Task";
          taskModel.style.display = "flex";
          mainSection.setAttribute("inert", "");
          mainSection.style.opacity = ".5";
          mainSection.style.color = "rgb(18, 18, 18)";
          mainSection.style.pointerEvents = "none";
          taskOptionsCreation();
        }
      }),
    );
  } catch (error) {
    console.error;
  }
}
colorBox.addEventListener("click", pickColorWheel);
function taskOptionsCreation() {
  //  add task category in modal- selection element

  const defaultOption = `${selectedTask[0].toUpperCase()}${selectedTask.slice(
    1,
  )}`; //covert to firstletter capitlize
  // Modify Array
  let allmodifyedTaskArray = taskArray.filter(
    (value) => value != defaultOption,
  );
  //Array reset and push first default task
  allmodifyedTaskArray.unshift(defaultOption);

  selectElement.innerHTML = "";
  // create all options
  allmodifyedTaskArray.map((task) => {
    let taskOptions = document.createElement("option");
    taskOptions.value = task;
    taskOptions.textContent = task;
    selectElement.appendChild(taskOptions);
  });
}

async function getallInputs() {
  try {
    // get Inputs
    let taskCategoryInput = await selectElement.value;
    selectElement.addEventListener("change", (e) => {
      taskCategoryInput = e.target.value;
      return taskCategoryInput;
    });
    let taskTitleInput = await titleId.value;
    titleId.addEventListener("change", (e) => {
      taskTitleInput = e.target.value;
      return taskTitleInput;
    });
      let taskDescInput = await taskDeskId.value;
    titleId.addEventListener("change", (e) => {
      taskDescInput = e.target.value;
      return taskDescInput;
    });

    saveState(taskCategoryInput, taskTitleInput,taskDescInput);
  } catch (error) {
    console.error;
  }
}
//  add task button click time remove the option/doument

function saveState(CategoryInput, titleInput,descInput) {
  console.log("runing savestate...");

  localStorage.setItem("taskCate", JSON.stringify(CategoryInput));
  localStorage.setItem("taskTitle", JSON.stringify(titleInput));
  localStorage.setItem("taskDesc", JSON.stringify(descInput));
  close();
  loadState();
}

function loadState() {
  const taskCategory = JSON.parse(localStorage.getItem("taskCate"));
  const taskTitle = JSON.parse(localStorage.getItem("taskTitle"));
  const taskDesc = JSON.parse(localStorage.getItem("taskDesc"));
  //  console.log( taskCategory," taskCategory");
  //  console.log("loadState loading...",JSON.parse(localStorage.getItem('taskCate')));
  runderBoard(taskCategory, taskTitle,taskDesc);
  //  close();
}

// find current swimlane and colum
async function runderBoard(task,name,desc) {
  try {
    //  console.log(task,"runderBoard task")
    const swimlane = document.querySelector(
      `.swimlane-task.${task.toLowerCase()}`,
    );
    let cloumn = swimlane.querySelector(`.task-cloum[data-status = to-do`);
    // console.log("runderBord loading..." ,cloumn)
    //  console.log(createTaskCard(),"cloun append")

    if (cloumn) {
      let taskCard = createTaskCard(name,swimlane,desc);
      cloumn.innerHTML = "";
      cloumn.appendChild(taskCard);
      // console.log(cloumn,"cloun append")
    }
  } catch (error) {
    console.error;
  }
}

function createTaskCard(name,swimlane,desc) {
  const card = document.createElement("div");
  card.className = "task-cards";
  card.draggable = true;
  card.id = name + Date.now();
  card.style.background = color;
  card.innerHTML = `<h3>${name}</h3>\n\t
            <div class="pannel">
            <button class="card-edit">✎ Edit</button>
            <button class="card-close">✖ Close</button>
        </div><p> ${desc}</p>`;

  card.addEventListener("dragstart", (e) => {
    card.classList.add("dragging");
    e.dataTransfer.setData("text/plain", card.id);
  });
  card.addEventListener("dragend", () => card.classList.remove("dragging"));

  // 2. Hover Logic (Toggle display instead of overwriting innerHTML)
  card.addEventListener("mouseenter", (e) => {
    card.querySelector(".pannel").style.display = "flex";
    card.style.opacity = "0.8";
    card.style.cursor = "pointer";

    //  Edit the card
    const cardEdit = e.target.querySelector(".card-edit");
    cardEdit.addEventListener("click", (e) => {
      taskModel.style.display = "flex";
      editTitle.textContent = "Edit Task";
      saveTask.addEventListener("click", (e) => {
        card.remove();
      });
    });

    //  close the card
    const cardRemove = e.target.querySelector(".card-close");
    cardRemove.addEventListener("click", (e) => {
      card.remove();
    });
  });
  //
  //
  card.addEventListener("mouseleave", () => {
    card.querySelector(".pannel").style.display = "none";
    card.style.opacity = "1";
  });

  console.log(card);
  updateTaskLocation(swimlane);
  return card;
}

function pickColorWheel() {
  colorPannel.style.display = "flex";
  if (colorPicker) return;

  colorPicker = new iro.ColorPicker("#picker", {
    width: 130,
    layout: [
      {
        component: iro.ui.Wheel,
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: "value",
        },
      },
    ],
  });

  // live color preview
  colorPicker.on("color:change", (color) => {
    colorBox.style.background = color.hexString;
  });
  // close after user finished selecting
  colorPicker.on("input:end", () => {
  color = colorBox.style.background;
    colorPannel.style.display = "none";
  });
}

function updateTaskLocation(swimlane) {
  taskBoxCloum.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      zone.classList.add("zone-hover");
    });

    zone.addEventListener("dragleve", () => {
      zone.classList.remove("zone-hover");
    });

    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("zone-hover");
      const cardId = e.dataTransfer.getData("text/plain");
      const draggingCard = document.getElementById(cardId);
      if (draggingCard) {
        zone.appendChild(draggingCard);
      }
    });
  });
}

function close() {
  console.log("runing close...");
  taskModel.style.display = "none";
  mainSection.removeAttribute("inert");
  mainSection.style.opacity = "1";
  mainSection.style.pointerEvents = "auto";
}

// drop cards time current card was remove
