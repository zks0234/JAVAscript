// 모든 span 항목 가져오기
const spans = document.querySelectorAll("span");

// 항목 중에서 하나를 선택하여 클릭하면
for(let span of spans) {
    span.addEventListener("click", function() {
        // 해당 요소가 있는 내용 삭제
        // x를 누르면 x와 내용이 전부 삭제
        // span 항목을 클릭하면 부모 노드인 p 삭제
        this.parentNode.remove();
    });
}