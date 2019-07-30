$(document).ready(function() {
    $("#yellow_box").offset({left: $("#hinata").offset().left});

    $("#hinata").click(function() {
        setCharInfo(
            "히나타 쇼요", 
            "내가 약한 건 싫지만 말이야, 나보다 위가 잔뜩 있다는 건 엄-청 두근두근거리는구나", 
            "어릴 때 본 '작은 거인'의 모습을 동경하고 카라스노 고등학교의 문을 두드렸다.<br>" +
            "드문 순발력, 도약력, 그리고 어떤 때라도 포기하지 않는 강한 마음을 가지고있다.<br>",
            "미들블로커 | 162.8cm | 51.9kg | 생일 - 6월 12일",
            "hinata",
            this
        );
    });

    $("#kageyama").click(function() {
        setCharInfo(
            "카게야마 토비오", 
            "내가 무언가에 절망한다면, 배구를 할 수 없어진 때뿐이다", 
            "압도적인 센스로 코트를 지배해 사람들이 부르길 '코트 위의 제왕'.<br>" +
            "중학교 시절에는 독선적인 성격 탓에 팀에서 고립되었다.<br>",
            "세터 | 180.6cm | 66.3kg | 생일 - 12월 22일",
            "kageyama",
            this
        );
    });

    $("#tsukishima").click(function() {
        setCharInfo(
            "츠키시마 케이",
            "우리 팀 유인원들에게는 통할지 몰라도 저에겐 안 통하니까 잘 알아두세요.",
            "적극적인 1학년들 사이에서 무덤덤한 꾀 많은 블로커.<br>" + 
            "나긋나긋하게 상대를 비꼬는 냉소적인 독설가이다.<br>",
            "미들블로커 | 188.3cm | 68.4kg | 생일 - 9월 27일",
            "tsukishima",
            this
        );
    });

    $("#yamaguchi").click(function() {
        setCharInfo(
            "야마구치 타다시",
            "왜 더 이상은 무리라고 선 긋는 거야?",
            "밝고 수다스러우며 소심한 성격의 핀치서버<br>" +
            "츠키시마를 동경하다 자연스럽게 배구에 발을 들였다.<br>",
            "핀치서버 | 179.5cm | 63.0kg | 생일 - 10월 10일",
            "yamaguchi",
            this
        );
    })
});

function setCharInfo(name_ko, phrase, story, state, name_en, self) {
    $(".character_image").removeClass("selected");

    $("#name").text(name_ko);
    $("#desc_phrase").html('<strong>' + phrase + '</strong>');
    $("#desc_story").html(story);
    $("#desc_state").html(state);
    $("#desc_img").attr("src",`./image/${name_en}_02.jpg`);

    $(`#${name_en}`).addClass("selected");

    $("#yellow_box").offset({left: $(self).offset().left});
}

