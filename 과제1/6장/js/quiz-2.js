// 버튼과 nav 가져오기
const button = document.querySelector("#bttn");
const nav = document.querySelector("#nav");

// 버튼 클릭 이벤트 추가
button.addEventListener("click", () => {
  // active 클래스 토글
  button.classList.toggle("active");
  nav.classList.toggle("active");
});
