var businessApp = angular.module('businessApp', ['ui.router', 'ui.bootstrap' ,'checklist-model','ngAnimate','ui.toggle']);

businessApp.run(function($rootScope) {
    $rootScope.isHome = true;
    $rootScope.isMemcached = true;
});

businessApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
        url: '/home',
        templateUrl: 'modules/partialHome.html'
    })
    
     .state('businessHome', {
        url: '/businessHome',
        templateUrl: 'modules/businessHome.html',
        params:{
            cityName : null,
            isMemcached : true
        }

    })
    
    .state('businessProfile', {
            url: '/businessProfile',
            templateUrl: 'modules/businessProfile.html',
            params: {
                businessName: null,
                isMemcached : true
            }

        })
    
});