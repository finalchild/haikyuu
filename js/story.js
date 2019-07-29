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
        fadeOut();
        nextPage();
        playVideo();
        fadeIn();
    });

    $('.home').click(function () {
        fadeOut();
        pauseVideo();
        toHome();
    });

    $('#season1_video, #season2_video').on('ended', function () {
        fadeOut();
        nextPage();
        playVideo();
        fadeIn();
    });

    $('#season3_video').on('ended', function () {
        fadeOut();
        toHome();
    });

    $("#season1_video, #season2_video, #season3_video").on("timeupdate", function(event){
        $('#season1_progress').css('width', `${(season1.currentTime / season1.duration) * 100}%`);
        $('#season2_progress').css('width', `${(season2.currentTime / season2.duration) * 100}%`);
        $('#season3_progress').css('width', `${(season3.currentTime / season3.duration) * 100}%`);
    });
});

window.onload = function() {
    playVideo();
    fadeIn();
};

// 보여지기
function fadeIn() {
    console.log(`#season${isNextClicked + 1} 보여지기`);
    $(`#season${isNextClicked + 1}_topic`).hide().fadeIn(500);
    $(`#season${isNextClicked + 1}_description`).hide().fadeIn(1000);
    $(`#season${isNextClicked + 1}_next`).hide().fadeIn(1500);
    $(`#season${isNextClicked + 1}_progress`).hide().fadeIn(2000);
}

// 사라지기
function fadeOut() {
    console.log(`#season${isNextClicked + 1} 사라지기`);
    $(`#season${isNextClicked + 1}_topic`).fadeOut(500);
    $(`#season${isNextClicked + 1}_description`).fadeOut(1000);
    $(`#season${isNextClicked + 1}_next`).fadeOut(1500);
    $(`#season${isNextClicked + 1}_progress`).fadeOut(2000);
}

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







