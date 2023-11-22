let xhr =  new XMLHttpRequest();
xhr.open("GET", "student-2.json");
xhr.send();

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status == 200) {
        let students = JSON.parse(xhr.responseText)
        renderHTML(students);
    }
};

function renderHTML(content) {
    let output = "";
    for (let content of contents) {
        output += `
            <h2>${content.name}</h2>
            <ul>
                <li>전공 : ${content.major}</li>
                <li>학년 : ${content.grade}</li>
            </ul>
        `;
    }
    document.getElementById("result").innerHTML = output;
}