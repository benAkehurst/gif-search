(function() {

    "use strict";

    var searchModule = angular.module("searchModule", []);

    searchModule.controller("SearchController", function($scope, $http) {

    	var baseUrl = "http://api.giphy.com/v1/gifs/search?q=";
    	var apiLimit = "&api_key=0ba59fa3a33748829f020bd4d8e4fd5d&limit=15";
    	
        var arr = [];
        $scope.searches = arr;

       	
        $scope.getGif = function(userSearch){
        	searchGif(userSearch).then(function(data){
        		$scope.userGif = data.data;
        		arr.push({term: userSearch});
        		$scope.userSearch = '';
        	});
        }

        function searchGif(userSearch) {
            return $http({ 
            	method: "GET", 
            	url: baseUrl + userSearch + apiLimit,
            	headers: { 'Content-Type': 'application/json' }
            })
            .then(function(response) {
                var userSearchResponse = response.data;
                return userSearchResponse;
            });
        };

    });

})();