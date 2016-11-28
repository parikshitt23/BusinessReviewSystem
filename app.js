var businessApp = angular.module('businessApp', ['ui.router', 'ui.bootstrap' ,'checklist-model','ngAnimate']);

businessApp.run(function($rootScope) {
    $rootScope.isHome = true;
    
});

businessApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'modules/partialHome.html'
    })
});