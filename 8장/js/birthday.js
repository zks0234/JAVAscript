const result = document.querySelector("#result");
const birthDay = new Date("2001-11-15");  // 생일
const today = new Date();   // 오늘날짜

// 생일로부터 오늘까지 흐른 시간 계산
let passedTime = today.getTime() - birthDay.getTime();

// 밀리초를 일로 계산
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

// 결과 출력
result.innerText = passedDay;