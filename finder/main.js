$(document).ready(function(){
    $(menu).bind("click", function(){
        $('.appsContainerDiv').toggle();
        $('.appsContainerDiv_data').toggle('slow');
    });
    $('.appsContainerDiv').hide();
    $('.appsContainerDiv_data').hide();
});