const root = document.querySelector("#root");
const input = document.querySelector("#main-input");
const btnSub = document.querySelector("#sub");

const Data = [];
let currentTaskIndex = null;

btnSub.addEventListener("click", (e) => {
  e.preventDefault();
  const result = input.value.trim();
  if(result == "") return
  if (currentTaskIndex !== null) {
    Data[currentTaskIndex] = result;
    currentTaskIndex = null;
  } else {
    Data.push(result);
  }
  input.value = "";
  render();
});

const render = () => {
  const template = Data.map((item, index) => {
    return `<li class="item">
          <span class="task">${item}</span>
          <div class="btns">
            <button onclick="edit(${index})">Edit</button>
            <button  onclick="remove(${index})">Delete</button>
            <button onclick="done(${index})" >Done</button>
          </div>
        </li>`;
  });
  root.innerHTML = template.join("");
};

const remove = (index) => {
  Data.splice(index, 1);
  render();
};
const edit = (index) => {
  input.value = Data[index];
  currentTaskIndex = index;
};
const done = (index)=>{
    const span =document.querySelectorAll(".task")[index]
    span.classList.toggle("task-done")
}
