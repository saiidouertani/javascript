function sayHello(theName, theGender) {
  if (theGender == "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender == "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello  ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sa

console.log("----------------exercice2-------------------");

function calculate(firstNum, secondNum, operation = "+") {
  if (
    (firstNum == undefined) |
    (secondNum == undefined) |
    (typeof secondNum != "number")
  ) {
    console.log("Second Number Not Found");
  } else {
    if (operation == "add") {
      console.log(firstNum + secondNum);
    } else {
      if (operation == "subtract") {
        console.log(firstNum - secondNum);
      } else {
        if (operation == "multiply") {
          console.log(firstNum * secondNum);
        }
      }
    }
  }
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
calculate(20, "add");

console.log("----------------exercice3-------------------");

function ageInTime(theAge) {
  if ((10 > theAge) | (theAge > 100)) {
    console.log("age out of the Range");
  } else {
    console.log(`${theAge} Years`);
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * 12 * 365} days`);
    console.log(`${theAge * 12 * 365 * 24} hours`);
    console.log(`${theAge * 12 * 365 * 24 * 60} Minnuts`);
    console.log(`${theAge * 12 * 365 * 24 * 60 * 60} Seconds`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(26); // Months Example => 456 Months

console.log("----------------exercice4-------------------");

function checkStatus(a, b, c) {
  let arr = [a, b, c];
  let status;
  let status1;
  let status2;
  let status3;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      status1 = "hellow " + arr[i];
    }
    if (typeof arr[i] == "number") {
      status2 = ", Your age is" + arr[i];
    }
    if (typeof arr[i] == "boolean") {
      if (arr[i] == true) {
        status3 = ", You Are Available For Hire";
      } else {
        status3 = ", You Are NOt Available For Hire";
      }
    }
  }
  status = status1 + status2 + status3;
  console.log(status);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("-------------exercice5-------------");

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);

  for (i = startYear; i <= endYear; i++) {
    document.write(`<option>${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2021, 2021);

console.log("-------------exercice6 ----------------");
function multiply(...numbers) {
  let n = 1;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] == "string") {
      continue;
    } else {
      n = n * Math.trunc(numbers[i]);
    }
  }
  console.log(n);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
