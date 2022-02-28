let mystr = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let web = mystr
  .split(",")
  .filter(function (el) {
    return isNaN(el);
  })
  .map(function (el) {
    if (el === "EE") {
      el = "E";
    }
    if (el === "_") {
      el = " ";
    }
    if (el === "Z") {
      el = "";
    }
    return el;
  })
  .reduce(function (acc, curent) {
    return acc + curent;
  });
console.log(web);
