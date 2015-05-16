app.factory('myFactory', function(){

    var factory = {};

    var videos = [{
        title: 'How to solve Rubik\'s cube',
        length: '3:32',
        category: 'DIY',
        subscribers: 405,
        date: new Date(2013, 11, 11),
        haveSubtitles: true
    }, {
        title: 'Funny videos mix',
        length: '4:52',
        category: 'Comedy',
        subscribers: 3205,
        date: new Date(2014, 8, 9),
        haveSubtitles: false
    }, {
        title: 'Eating hot-dog in under a minute',
        length: '1:00',
        category: 'Disgusting',
        subscribers: 11,
        date: new Date(2015, 3, 22),
        haveSubtitles: false
    }, {
        title: 'How to make a table out of a chair',
        length: '9:45',
        category: 'DIY',
        subscribers: 216,
        date: new Date(2015, 1, 15),
        haveSubtitles: true
    }, {
        title: 'Michael Jackson - Black or White',
        length: '4:29',
        category: 'Music',
        subscribers: 5126,
        date: new Date(1999, 10, 4),
        haveSubtitles: false
    }, {
        title: 'Ted 2 - Official Trailer (HD)',
        length: '2:40',
        category: 'Movie trailer',
        subscribers: 1723,
        date: new Date(2015, 3, 24),
        haveSubtitles: true
    }, {
        title: '20 funny facts about bears',
        length: '6:48',
        category: 'Comedy',
        subscribers: 813,
        date: new Date(2012, 0, 30),
        haveSubtitles: false
    }];

    factory.getVideos = function(){
        return videos;
    };

    factory.addVideo = function(video){
        videos.push(video);
    };

    return factory;
});