// 요소 불러오기
const view = document.querySelector("#view");
const detail = document.querySelector("#detail");

// 클릭시 토글
view.addEventListener ("click", () => {
  detail.classList.toggle("hidden");
})