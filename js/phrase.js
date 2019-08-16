$(document).ready(function () {
    addBox(10);

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
    scrollAni1(".video_container", "video_container_ani");
    scrollAni1(".phrase", "phrase_ani");
    scrollAni2(".box", ".box_before", "box_before_ani");
    scrollAni2(".box", ".box_after", "box_after_ani");
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

function scrollAni1(self, ani) {
    $(`${self}`).each(function (index) {
        var rect = this.getBoundingClientRect();

        if (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= $(window).height() &&
            rect.right <= $(window).width()){
                $(this).addClass(`${ani}`);
            }
    });
}

function scrollAni2(self, child, ani) {
    $(`${self}`).each(function (index) {
        var rect = this.getBoundingClientRect();

        if (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= $(window).height() &&
            rect.right <= $(window).width()){
                $(this).children(child).addClass(`${ani}`);
            }
    });
}

function addBox (number) {
    for (i = 0; i < number; i++) 
        $("<div class='box'><div class='box_before'></div><div class='box_after'></div></div>").appendTo("#box_container");

    $(".box").each(function (index, item) {
        $(item).css( 
            {
                "top": `${index * 20 + 80}%`,
                "left": `${Math.cos(index * Math.PI / 2) * 30 + 50}%`,
                "width": `${getRandomNumber(80,320)}px`,
                "height": `${getRandomNumber(80,320)}px`
            }
        );
    });
}

function getRandomNumber (start, end){
    return Math.floor(Math.random() * (end - start)/20) * 20 + start;
}