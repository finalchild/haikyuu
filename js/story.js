$(document).ready(function () {
    $("#prev_arrow").click(function () {
        pauseVideo();
        prevPage();
        playVideo();
    });

    $("#next_arrow").click(function () {
        pauseVideo();
        nextPage();
        playVideo();
    });

    $("#back_key").click(function () {
        changeURL('./index.html');
    });

    $('#main_container').on('scroll touchmove mousewheel', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });

    $('#season1').on('ended', function() {
        nextPage();
        playVideo();
    });
    
    $('#season2').on('ended', function() {
        nextPage();
        playVideo();
    });

    $('#season3').on('ended', function() {
        nextPage();
        playVideo();
    });


});

function pauseVideo() {
    $(`${location.hash}`).get(0).pause();
}

function playVideo() {
    $(`${location.hash}`).get(0).play();
}

function getSeason() {
    return Number(location.hash.charAt(location.hash.length - 1));
}

function scrollToHash(hash) {
    $('html,body').animate({scrollTop:$(hash).offset().top}, 300);
}

function changeURL(url) {
    window.location.href = url;
}

function changeNumber() {
    $("#season_number").html(getSeason());
}

function prevPage() {
    var season = getSeason();

    if (season === 1){
        scrollToHash('#season3');
        changeURL('#season3');
    }else{
        scrollToHash('#season' + (season - 1));
        changeURL('#season' + (season - 1));
    }

    changeNumber();
}

function nextPage() {
    var season = getSeason();

    if (season === 3){
        scrollToHash('#season1');
        changeURL('#season1');
    } else {
        scrollToHash('#season' + (season + 1));
        changeURL('#season' + (season + 1));
    }


    changeNumber();
}


