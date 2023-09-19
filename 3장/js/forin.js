const student = {
//  key : value
    major : "컴퓨터공학부",
    idnum : 202095098,
    name : '표건표'
}

for (key in student) {
    document.write(`${key} : ${student[key]}<br>`)
}