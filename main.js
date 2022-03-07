let input = document.querySelector("input");
let button = document.querySelector(".add");
button.style = "cursor:clickable";
let list = document.querySelector(".listelement");
let tabobj = [];

button.onclick = function () {
  window.localStorage.clear();

  if (input.value != "") {
    let elementtoadd = createelement(input.value);
    list.appendChild(elementtoadd);
  }
};
list.addEventListener("click", function (e) {
  let target = e.target;
  console.log(target);

  target.onclick = function () {
    list.removeChild(target.parentElement);
  };
});

function createelement(text) {
  let element = document.createElement("div");
  element.style =
    "display:flex; justify-content:space-between;width:400px;background-color:white;align-items:center;border-radius:10px;padding-right:10px";
  let para = document.createElement("p");
  para.textContent = text;
  let del = document.createElement("span");
  del.textContent = "Delete";
  del.style =
    "background-color:red; color white;height:fit-content;padding:5px 10px;border-radius:10px";
  element.appendChild(para);
  element.appendChild(del);
  let obj = {
    id: Math.random(),
    title: text,
  };

  tabobj.push(obj);
  console.log(tabobj);
  window.localStorage.setItem("task", JSON.stringify(tabobj));
  return element;
}
