$(document).ready(function() {
    $("#more").click(function() {
        $("#more-description").slideDown(150);
        console.log('yess');
    });
    $("#close").click(function() {
        $("#more-description").slideUp(150);
    });
});