// 1. 정수를 입력받는다.
// 2. 만약 정수가 3의 배수이면
//      1) 3의 배수입니다. 출력
// 3. 아니면
//      2) 3의 배수가 아닙니다. 출력

// let num = parseInt(prompt("숫자 입력"))

// if (num % 3 === 0) {
//     alert(`${num}은(는) 3의 배수입니다`);
// }
// else {
//     alert(`${num}은(는) 3의 배수가 아닙니다`);
// }

let num = prompt("숫자 입력")

if (num != null) {
    number = parseInt(num);
    if (number % 3 === 0) {
        alert(`${num}은(는) 3의 배수입니다`);
    }
    else {
        alert(`${num}은(는) 3의 배수가 아닙니다`);
    }
}
else {
    alert("입력이 취소되었습니다.")
}