// 요소 가져오기
const bttn = document.querySelector('#bttn');
const notiBox = document.querySelector('#noti-box');


bttn.addEventListener('click', () => {
  // 알림 요소 생성
  const noti = document.createElement('div');
  noti.classList.add('noti'); // 'noti' 클래스를 추가하여 스타일을 적용할 수 있게 합니다.
  noti.innerText = "알림 내용이 표시됩니다."; // 알림 내용 설정
  notiBox.appendChild(noti); // 알림 상자에 알림 요소를 추가합니다.

  // 3초 후에 알림 요소 제거
  setTimeout(() => {
    noti.remove();
  }, 3000);
});
