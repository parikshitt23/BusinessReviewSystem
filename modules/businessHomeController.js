businessApp.controller('businessHomeController', function ($scope, $rootScope, $http, $stateParams, $state) {
    this.tab = 1;
    var city = $stateParams.cityName;
    var isMemcached = $stateParams.isMemcached;
    var category = 'Food';
    $rootScope.isHome = false;
    $scope.category = 'Food';

    
    var init = function () {
        $rootScope.isHome = false;
        if(isMemcached){
            
        var url = 'http://10.136.14.42:8080/BusinessReviewRest/city/' + city;
        }else{
            var url = 'http://10.136.14.42:8080/BusinessReviewRest/off/city/' + city;
        }
        
        console.log(url);
        
        $http.get(url).success(function (data) {
            
            
            
            $scope.businesses = data;
            $scope.runTime = $scope.businesses[0].runTime;
        }).error(function (data) {
            $scope.businesses = data;
        });
    }
    
    this.click2ndEvent = function (cities, category, review_count) {
        
  //this.category = category;
        $scope.category = category;
        
        if(isMemcached){
      
        var url = 'http://10.136.14.42:8080/BusinessReviewRest/city/' + city + '/' + category
        }else{
            var url = 'http://10.136.14.42:8080/BusinessReviewRest/off/city/' + city + '/' + category
        }
        
        
        console.log(url);
        
        $http.get(url).success(function (data) {
            $scope.businesses = data;

            $scope.runTime = $scope.businesses[0].runTime;

        }).error(function (data) {
            $scope.businesses = data;
            //$scope.category = "Hello";
        });
    }
    
     this.openBusinessProfile = function(businessId) {
        console.log(businessId);
        $state.go('businessProfile', {
            businessName: businessId,
            isMemcached : isMemcached
        });
    }
    
    init();
});