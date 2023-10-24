// 요소 가져오기
const username = document.querySelector("#username");
const major = document.querySelector("#major");
const button = document.querySelector("form > button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let tbody = document.querySelector("#attendant > tbody");  // 이름과 전공 올릴 body
  let newTr = document.createElement("tr");  // 새로운 tr 요소 만들기

  // 첫번째 셀에 입력한 이름 넣기
  let nameTd = document.createElement("td");
  nameTd.innerText = username.value; // 이름 값 가져오기
  username.value = ""; // 저장 후 빈칸만들기
  
  // 두번째 셀에 입력한 전공 넣기
  let majorTd = document.createElement("td");  
  majorTd.innerText = major.value;  // 전공 값 가져오기
  major.value = "";

  // 두 셀을 새 줄에 추가하기
  newTr.appendChild(nameTd);
  newTr.appendChild(majorTd);

  // 새 줄을 tbody에 추가하기
  tbody.appendChild(newTr);
});