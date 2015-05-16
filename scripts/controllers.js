app.controller('showController', function($scope, myFactory){

    $scope.videos = myFactory.getVideos();
});

app.controller('submitController', function($scope, myFactory, $location){

    $scope.submit = function() {
        var newVideo = {};
        newVideo.title = $scope.title;
        newVideo.length = $scope.length;
        newVideo.category = $scope.category;
        newVideo.date = $scope.date;
        newVideo.subscribers = parseInt($scope.subscribers);
        newVideo.subtitles = $scope.subtitles;
        myFactory.addVideo(newVideo);
        $location.path('#/');
    };
});