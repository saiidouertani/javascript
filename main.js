document.forms[0].style = "width:500px; margin: 20px auto;";

let input = document.querySelectorAll("input");

input.forEach((element) => {
  element.style =
    "display :block;height:30px; width:100%;margin-top:20px;padding:0px;border:0px ";
});

curentelement = document.getElementById("curentelement");
curentelement.textContent = "Curent element";
curentelement.style =
  "background-color:#777; text-align:center;height:40px ;line-height:40px; width:100% ;margin-top:20px";

let result = document.getElementsByClassName("result");
console.log(result);
result[0].style =
  "background-color:#777; text-align:center;height:40px ;line-height:40px; width:100% ;margin-top:20px";
input[0].onblur = function () {
  let classadd = input[0].value.split(" ");

  console.log(classadd);
  for (i = 0; i < classadd.length; i++) {
    curentelement.classList.add(classadd[i]);
    let div = document.createElement("div");
    div.textContent = classadd[i];
    result[0].appendChild(div);
  }
  input[0].value = "";
};
input[1].onblur = function () {
  let classadd = input[1].value.split(" ");

  console.log(classadd);
  for (i = 0; i < classadd.length; i++) {
    curentelement.classList.remove(classadd[i]);
  }
  input[1].value = "";
};
