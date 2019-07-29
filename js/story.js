var isNextClicked = 0;

$(document).ready(function () {
    var season1 = document.getElementById('season1_video');
    var season2 = document.getElementById('season2_video');
    var season3 = document.getElementById('season3_video');

    $('#main_container').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });

    $('.next').click(function () {
        pauseVideo();
        nextPage();
        playVideo();
    });

    $('.home').click(function () {
        pauseVideo();
        toHome();
    });

    $('#season1_video, #season2_video').on('ended', function () {
        nextPage();
        playVideo();
    });

    $('#season3_video').on('ended', function () {
        toHome();
    });

    $("#season1_video").on("timeupdate", function(event){
        $('#season1_progress').css('width', `${(season1.currentTime / season1.duration) * 100}%`);
    });

    $("#season2_video").on("timeupdate", function(event){
        $('#season2_progress').css('width', `${(season2.currentTime / season2.duration) * 100}%`);
    });

    $("#season3_video").on("timeupdate", function(event){
        $('#season3_progress').css('width', `${(season3.currentTime / season3.duration) * 100}%`);
    });
});

$(window).scroll(function() {
    var scroll = $(document).scrollLeft();
    console.log($(document).scrollLeft());

    if (scroll <= window.innerWidth) {
        $("#season1_topic").addClass("fade_out");
    } else if (scroll <= window.innerWidth * 2) {
       
    } else if (scroll <= window.innerWidth * 3) {
       
    }
});

window.onload = function() {playVideo()};

function playVideo() {
    console.log(`#season${isNextClicked + 1}_video`);
    $(`#season${isNextClicked + 1}_video`).get(0).play();
}

function pauseVideo() {
    console.log(`#season${isNextClicked + 1}_video`);
    $(`#season${isNextClicked + 1}_video`).get(0).pause();
}

function nextPage() {
    console.log(`#season${isNextClicked + 1}_video`);
    $('#main_container').css('margin-left', `-${++isNextClicked * 100}vw`);
}

function toHome() {
    window.location.href = "./index.html";
}





