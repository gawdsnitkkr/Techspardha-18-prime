$(function(){

    const $button = $(".navbar .activate_button");
    const $navbar = $(".wrapper .navbar");
    const $content = $(".content");
    $button.on('click',function(){
        $navbar.toggleClass("hide");
        $button.toggleClass("nav_active");

    })
    const $events = $navbar.find('.events_list_item');
    $events.on('click',function(){
        $events.removeClass("active_event");
        $(this).addClass("active_event");
    })

})