// 버튼 클릭하면 배경색 바꾸기
// id가 btn1인 요소 가져오기
const button1 = document.querySelector("#btn1");

button1.onclick = function() {
    document.body.style.backgroundColor = "green";
}

// 배경 바꾸는 함수 따로 정의하기
function changeBackground() {
    document.body.style.backgroundColor = "pink";
    document.body.style.color = "white";
}

const button2 = document.querySelector("#btn2");
button2.onclick = changeBackground;

// 두가지 이벤트 처리하기
/*
    onclick = alert('두가지 이벤트 처리')는 실행되지 않는다
    on 이벤트 프로퍼티는 하나만 사용이 가능하기 때문이다
    마지막 사용한 onclick이 적용되어 배경색만 바뀐다
    하나의 이벤트에 여려 함수를 연결하려면 addEventListener() 을 사용하여야 한다
*/
const button3 = document.querySelector("#btn3");

button3.onclick = function() {
    document.body.style.backgroundColor = "orange";
}

// 이벤트 리스너 사용
const button4 = document.querySelector("#btn4");

button4.addEventListener("click", () => {
    document.body.style.backgroundColor = "tomato";
})


// 배경색과 글자색 토글하기
const button5 = document.querySelector("#btn5");
// const btn = document.querySelector("#toggle-box button");

button5.addEventListener("click", () => {
    document.body.style = ""; // 기존 스타일 삭제
    document.body.classList.toggle("convert");    
})

// 텍스트 필드에 입력한 글자수 알아보기
const button6 = document.querySelector("#btn6");

button6.addEventListener("click", () => {
    const word = document.querySelector("#word").value; // 텍스트 상자의 내용 가져오기
    const result = document.querySelector("#result");
    
    let count = word.length; // 문자열 길이
    
    result.innerText = `${count}`;  // 결과 표시
})