businessApp.controller('homeController', function ($scope, $rootScope, $http, $stateParams, $state) {
    
    $scope.setHome = function () {
        $rootScope.isHome = true;
    }
    
    var init = function () {
        var url = 'http://localhost:8080/BusinessReviewRest/city';
        $http.get(url).success(function (data) {
            $scope.cities = data;
        }).error(function (data) {
            $scope.cities = data;
        });
    }
    
    $scope.citiesList = false;
    
    $scope.openCityDropDown = function () {
        $scope.citiesList = true;
    }
    
    $scope.setSearchBox = function (searchString) {
        $rootScope.searchCities = searchString.trim();
        $scope.citiesList = false;
    }
    
    $scope.onClickSearch = function(){
        $state.go('businessHome',{
            cityName : $rootScope.searchCities
        });
    }
    
    init();
});