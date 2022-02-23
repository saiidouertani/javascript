let myAdmins = ["Ahmed","Jamel","Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
    "Amgad",
    "Samah",
    "Ameer",
    "Jamila",
    "Jalel",
    "Omar",
    "Othman",
    "Sami",
    "Amany",
    "Samia",
    "Anwar",
];
let numadmin = 2;
document.write(`<div>We Have ${numadmin} Admins</div>`);
document.write(`<hr>`);
let emplyoswithadmin = [];
for (let i = 0; i < myAdmins.length; i++) {
    document.write(`<p>the admin for team ${i + 1} is ${myAdmins[i]}</p>`);
    let firstletter = myAdmins[i][0];
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j][0] == firstletter) {
            emplyoswithadmin.push(myEmployees[j]);
        }
    }
    for (k = 0; k < emplyoswithadmin.length; k++) {
        document.write(`<p>-${k + 1} ${emplyoswithadmin[k]} </p>`);
    }
    emplyoswithadmin.splice(0);

    if (i == numadmin) {
        break;84
        
    }
}
