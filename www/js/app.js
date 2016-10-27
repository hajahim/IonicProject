// Ionic ionic-todo App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'ionic-todo' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('ionic-todo', ['ionic', 'ionic-todo.controllers', 'ionic-todo.services']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.views.maxCache(0);
	$stateProvider
	.state('tab', {
		url: '/tab',
		abstract: true,
		controller: 'tabCtrl',
		templateUrl: 'templates/menu.html'
	})
	.state('tab.home', {
		url: '/home',
		views: {
			'tab-home': {
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			}
		}
	})
	.state('tab.detail', {
        url: '/detail/:code',
        views: {
			'tab-home': {
				templateUrl: 'templates/details.html',
				controller: 'detailsCtrl'
			}
        }
    })
	.state('tab.voiture', {
        url: '/voiture',
        views: {
			'tab-voiture': {
				templateUrl: 'templates/voiture.html',
				controller: 'voitureCtrl'
			}
        }
    });
	$urlRouterProvider.otherwise('/tab/home');
});
