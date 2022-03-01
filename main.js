let submite = document.forms[0];
let result = document.querySelector(".results");
let numberele = document.querySelectorAll(".input");

console.log(numberele);
submite.onsubmit = function (e) {
  e.preventDefault();
  result.remove;
  for (i = 0; i < parseInt(numberele[0].value); i++) {
    let appelem = document.createElement("div");
    appelem.innerHTML = numberele[1].value;

    result.appendChild(appelem);
  }
};
