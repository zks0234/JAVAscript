// 섭씨 온도 = (화씨온도 - 32) / 1.8
// 프롬포트로 화씨 온도 입력 받는다.
// 섭씨 온도 계산하고, 출력한다.
// 출력은 alert() 또는 document.write() 중 하나 선택
// 화씨 온도 00도는 섭씨 온도 00도 입니다.

// 1. 화씨 온도 실수형으로 입력받기
let fah = parseFloat(prompt("화씨 온도 입력"))

// 2. 섭씨 온도 변환
let cel = ((fah - 32) / 1.8).toFixed(1);

// 3. 출력
alert(`화씨 ${fah}도 는 섭씨 ${cel}도 입니다.`);
document.write(`화씨 ${fah}도 는 섭씨 ${cel}도 입니다.`);