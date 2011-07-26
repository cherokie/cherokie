$(document).ready(function() {
        $.getScript('http://twitter.com/statuses/user_timeline/EA.json?callback=twitterCallback2&count=5');
        $.getScript('http://twitter.com/statuses/user_timeline/NintendoAmerica.json?callback=twitterCallback3&count=5');
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
function twitterCallback3(obj) {
    var twitters = obj;
    var statusHTML = "";
    var username = "";
    var today = new Date();
    for (var i=0; i<twitters.length; i++){
        username = twitters[i].user.screen_name
        statusHTML += ('<li><span>'+twitters[i].text+'</span> <a style="font-size:85%" href="http://twitter.com/'+username+'/statuses/'+twitters[i].id+'">'+today+'</a></li>')
    }
    $('#latest_tweet_NA').html(statusHTML);
}