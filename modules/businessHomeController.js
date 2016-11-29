businessApp.controller('businessHomeController', function ($scope, $rootScope, $http, $stateParams, $state) {
    this.tab = 1;
    var city = $stateParams.cityName;
    var category = 'Food';
    $rootScope.isHome = false;
    
    var init = function () {
        var url = 'http://localhost:8080/BusinessReviewRest/city/' + city;
        $http.get(url).success(function (data) {
            $scope.businesses = data;
        }).error(function (data) {
            $scope.businesses = data;
        });
    }
    
    this.click2ndEvent = function (cities, category, review_count) {
        
        this.category = category;
        
        var url = 'http://localhost:8080/BusinessReviewRest/city/' + city + '/' + category
        
        $http.get(url).success(function (data) {
            $scope.businesses = data;
        }).error(function (data) {
            $scope.businesses = data;
        });
    }
    
     this.openBusinessProfile = function(businessId) {
        console.log(businessId);
        $state.go('businessProfile', {
            businessName: businessId
        });
    }
    
    init();
});