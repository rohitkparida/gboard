$(document).ready(function() {
    $("#more").click(function() {
        $("#more-description").slideDown(200);
        console.log('yess');
    });
    $("#close").click(function() {
        $("#more-description").slideUp(200);
    });
});