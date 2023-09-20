// 두 수를 입력 받아 곱한 결과를 리턴하여 화면에 출력하는 함수

// 사용자로부터 정수 입력 받기
let number1 = parseInt(prompt("첫 번째 정수 입력 : "));
let number2 = parseInt(prompt("두 번째 정수 입력 : "));

// 함수 선언 
function multiple(num1, num2) {
    let gop = 0;
    gop = num1 * num2;
    return gop; // 함수를 호출한 곳으로 돌려줌
}

// 입력 받은 수를 인수로 함수 호출
document.write(`<h1>${number1}과 ${number2}의 곱은 ${multiple(number1, number2)}입니다.</h1>`);