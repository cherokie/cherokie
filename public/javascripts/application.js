$(document).ready(function() {
    $('.menubar').removeClass('current_page_item');
    if ($('#hMenubar').val() != ''){
        $('.' + $('#hMenubar').val() + '').addClass('current_page_item');
    }else{
        $('.home').addClass('current_page_item');
    }
});