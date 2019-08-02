$(document).ready(function() {
    

    $("#phrase1_video").waypoint(function() {
        $("#phrase1_video").hide().fadeIn(500);
        console.log('보여요');
    });
});