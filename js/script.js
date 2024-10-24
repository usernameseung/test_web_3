$(document).ready(function () {
  const cloudTypes = ["img/cloud01.png", "img/cloud02.png", "img/cloud03.png"];

  const minSize = 500; // 구름의 최소 크기 (픽셀)
  const maxSize = 800; // 구름의 최대 크기 (픽셀)

  // 구름 생성 함수
  function createRandomCloud() {
    const $cloud = $("<img>")
      .attr("src", cloudTypes[Math.floor(Math.random() * cloudTypes.length)]) // 랜덤 구름 이미지 선택
      .addClass("cloud") // 공통 클래스 추가
      .css({
        width: `${
          Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize
        }px`, // 랜덤 크기
        top: `${Math.random() * 30}vh`, // 랜덤 세로 위치 (0% ~ 30% 높이)
        left: "100vw", // 오른쪽 화면 바깥에서 시작
        "animation-delay": `${Math.random() * 10}s`, // 랜덤 딜레이
      });

    // 구름 애니메이션 종료 시 제거
    $cloud.one("animationend", function () {
      $(this).remove(); // 애니메이션이 끝난 구름 제거
    });

    // 구름을 배경에 추가
    $(".sky-background").append($cloud);
  }

  // 일정 시간마다 구름 생성 (5초마다 새 구름 생성)
  setInterval(createRandomCloud, 5000);
});
