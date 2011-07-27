$(document).ready(function() {
    $.getScript('http://twitter.com/statuses/user_timeline/cherokienet.json?callback=twitterCallback2&count=5');

    $('.menubar').removeClassName('current_page_item');
    if ($('#hMenubar').val() != ''){
        $('.' + $('#hMenubar').val() + '').addClassName('current_page_item');
    }else{
        $('.home').addClassName('current_page_item');
    }
});

function twitterCallback2(obj) {
    var twitters = obj;
    var statusHTML = "";
    var username = "";
    var today = new Date();
    for (var i=0; i<twitters.length; i++){
        username = twitters[i].user.screen_name
        statusHTML += ('<li><span>'+twitters[i].text+'</span> <a style="font-size:85%" href="http://twitter.com/'+username+'/statuses/'+twitters[i].id+'">'+today+'</a></li>')
    }
    $('#latest_tweet').html(statusHTML);
}