// 소수 판단 스크립트
// 정수를 입력받는다. 프롬프트
// 소수는 1을 제외한 자기 자신으로 나누어 떨어지는 수.
// 나누어 떨어진다. = 나머지가 0이다.

const number = parseInt(prompt("자연수를 입력하세요"));
let i;

if(number === 1) {
     document.write('1은 소수도 합성수도 아닙니다.');
} 
else if (number === 2) {
     document.write('2는 소수입니다.');
} 
else {
     for (i = 2; i <= number; i++) {
          if (number % i === 0) {     
          break;
          }   
     }
}
if (number === i) {
     document.write("숫자 " + number + "은 소수 입니다.") 
}
else {
     document.write("숫자 " + number + "은 소수가 아닙니다.") 
}