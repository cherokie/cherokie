$(document).ready(function() {
    $('.jq_twits').each(function(){
        $.getScript('http://twitter.com/statuses/user_timeline/' + $(this).val() + '.json?callback=twitterCallback2&count=3');
    });
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
    $('#latest_tweet_EA').html(statusHTML);
}
