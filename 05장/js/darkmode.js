const btn = document.querySelector("button");
// const btn = document.querySelector("#toggle-box button");

btn.onclick = () => {
    document.body.classList.toggle("dark");
    // 문서.바디 에 dark 스타일 토글로 적용
}