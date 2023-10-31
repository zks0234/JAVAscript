// 반지름을 입력받아 원의 넓이와 둘레를 출력
// 반지름은 프롬프트로 입력 받는다
// 원의 넓이와 둘레를 구하는 함수를 각각 작성
// 넓이와 둘레는 소수 3자리 까지 출력

// 1. 함수 생성
// 넓이 
function area(r) {
    return Math.PI * r * r;
}
// 둘레
function circum(r) {
    return Math.PI * r * 2;
}

// 2. 가져오기
const result = document.querySelector("#result");

// 3. 입력 받기
const radius = prompt("반지름의 크기는? ");

// 4. 결과 출력
result.innerText = `반지름 : ${radius}
                    원의 넓이 : ${area(radius).toFixed(3)}
                    원의 둘레 : ${circum(radius).toFixed(3)}`;
