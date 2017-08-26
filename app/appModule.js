(function(){

	"use strict";

	var appModule = angular.module("appModule", ["ngRoute",
												 "searchModule"
												]);

	appModule.config(function($routeProvider){
		
		$routeProvider

		.when("/", {
			controller:"SearchController",
			templateUrl:"app/searchView.html"
		})

		.when("/search", {
			controller:"SearchController",
			templateUrl:"app/serachView.html"
		})

		.otherwise({
			redirectTo:"/"
		});	

	});


})();