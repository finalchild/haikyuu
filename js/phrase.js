$(document).ready(function () {
    $(".sub_video").mouseover(function () {
        this.play();
    });

    $(".sub_video").mouseout(function () {
        this.pause();
    });

    $(".sub_video").click(function () {
        setTopicVideo($(this).attr('id').substr(0, 7));
        playTopicVideo();
        moveToTopicVideo();
        removeCover();
        addCover(this);
    });
});

$(window).scroll(function () {
    scrollAni(".video_container", "video_container_ani");
    scrollAni(".phrase", "phrase_ani");
});

function setTopicVideo(name) {
    $("#topic_video")[0].load();
    $("#topic_video").attr("src", `./video/haikyuu_${name}.mp4`);
}

function playTopicVideo() {
    $("#topic_video").get(0).play();
}

function moveToTopicVideo() {
    $('html, body').animate({ scrollTop: $("html").offset().top }, 1000);
}

function addCover(self) {
    $(self).next().addClass("play");
}

function removeCover() {
    $(".sub_video").next().removeClass("play");
}

function scrollAni(self, ani) {
    $(`${self}`).each(function (index) {
        var rect = this.getBoundingClientRect();

        if (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= $(window).height() &&
            rect.right <= $(window).width()){
                $(this).addClass(`${ani}`);
                console.log(index);
            }
    });
}