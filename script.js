const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".button_item");
let notes = document.querySelector(".input_box");

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input_box";
  inputBox.setAttribute("contenteditable", true);
  img.src = "images/delete.png";
  noteContainer.appendChild(inputBox).appendChild(img);
  saveData();
});

noteContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "p") {
    notes = document.querySelectorAll(".input_box");
    notes.forEach((element) => {
      element.onkeyup = function () {
        saveData();
      };
    });
  }
});

function saveData() {
  localStorage.setItem("data", noteContainer.innerHTML);
}

function showData() {
  noteContainer.innerHTML = localStorage.getItem("data");
}

showData();

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
