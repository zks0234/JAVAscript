// 제목 가져오기
const title = document.querySelector("#title");
// 이름 가져오기
const userName = document.querySelector("#desc p");
// const userName = document.querySelectorAll("#desc.user")[0];
// 프로필 이미지 가져오기
const pfImg = document.querySelector("#profile img");


// 제목 영역을 클릭하면 내용을 바꿈
title.onclick = () => title.innerText = "프로필";
// 이름 영역을 클릭하면 이름만 진하게 만듦
userName.onclick = () => userName.innerHTML = "이름 : <b>표건표</b>";
// 이미지 영역을 클릭하면 이미지를 바꿈(이미지의 파일(경로포함)을 바군다.)
pfImg.onclick = () => pfImg.src = "images/pf2.png";