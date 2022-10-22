const newTask = document.getElementById("addTask");
const button = document.getElementById("button");
const tasks = [];
const form = document.getElementById("form");
const todo = document.getElementById("todo");

// Hindrer siden i å lastes inn på nytt
form.addEventListener("submit", buttonClick);
function buttonClick() {
  event.preventDefault();
}

var i = 0; // variabel som teller antall tasks, slik at ikke alle har samme id

function addTask() {
  const node = document.createElement("li"); //Lager et li-element
  const checkbox = document.createElement("input"); //Lager checkbox
  checkbox.type = "checkbox";
  checkbox.id = "checkbox" + i;

  //Lager label til checkbox. Labelen har verdien til inputtet
  const label = document.createElement("label");
  label.htmlFor = "checkbox" + i;
  label.appendChild(document.createTextNode(newTask.value));
  i++;

  //Appender checkboxen og labelen inn i li-elementet
  node.appendChild(checkbox);
  node.appendChild(label);

  //Setter li-elementet inn i lista
  todo.prepend(node);

  //Bruker funksjonene new Date() og getTime() for å finne millisekund siden 01.01.1970
  const date = new Date();
  tasks.push(newTask.value + " " + date.getTime());
  console.log(tasks);

  checkbox.addEventListener("click", function () {
    toggleTextDecoration(checkbox, label);
  });
}

//Funksjonen lager strek gjennom det som blir trykket på
function toggleTextDecoration(checkbox, label) {
  if (checkbox.checked === true) {
    label.style.textDecoration = "line-through";
  } else {
    label.style.textDecoration = "none";
  }
}

// Sier hvor mange bokser som er krysset av
function checkedBoxes() {
  const output = document.getElementById("output");
  output.value =
    document.querySelectorAll('input[type="checkbox"]:checked').length +
    "/" +
    tasks.length +
    " completed";
}

//Kombinerer funksjonene, og kjøres når man trykke submit
function combined() {
  addTask();
  checkedBoxes();
}

button.onclick = combined;

//Endrer antallet bokser som er krysset av
todo.addEventListener("change", checkedBoxes);
