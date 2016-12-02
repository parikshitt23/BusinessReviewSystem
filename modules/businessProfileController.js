businessApp.controller('businessProfileController', function($scope, $http, $state, $stateParams) {
    
    var isMemcached = $stateParams.isMemcached;
    
    $scope.rate = 3;
    
      $scope.hoveringOver = function(value) {
      $scope.overStar = value;
    
  };

    var init = function(){
        $scope.businessId = $stateParams.businessName;
        
       
        
        if(isMemcached){
        var url = 'http://localhost:8080/BusinessReviewRest/business/' + $scope.businessId;
        }else{
            var url = 'http://localhost:8080/BusinessReviewRest/off/business/' + $scope.businessId;
        }
        
        console.log(url);
        
        $http.get(url).success(function(data) {
            $scope.businessData = data;
            $scope.reviews = $scope.businessData.reviews;
            console.log($scope.reviews);
            setBusinessInfo();
        }).error(function(data) {
            $scope.businessData = data;
        });
    }
    
    
    var setBusinessInfo = function() {
        var businessInfo = [];

        if ($scope.businessData.attributes.hasOwnProperty('ATTRIBUTES_TAKES_RESERVATIONS'))
            businessInfo.push({
                "key": "Takes Reservations",
                "value": $scope.businessData.ATTRIBUTES_TAKES_RESERVATIONS == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.attributes.hasOwnProperty('ATTRIBUTES_DELIVERY'))
            businessInfo.push({
                "key": "Delivery",
                "value": $scope.businessData.ATTRIBUTES_DELIVERY == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.attributes.hasOwnProperty('Takeout'))
            businessInfo.push({
                "key": "Take-out",
                "value": $scope.businessData.ATTRIBUTES_TAKEOUT == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.attributes.hasOwnProperty('Accept Credit Cards'))
            businessInfo.push({
                "key": "Accepts Credit Cards",
                "value": $scope.businessData.ATTRIBUTES_ACCEPTSCREDITCARDS == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.attributes.hasOwnProperty('WheelChair'))
            businessInfo.push({
                "key": "Wheelchair Accessible",
                "value": $scope.businessData.ATTRIBUTES_WHEELCHAIR == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.attributes.hasOwnProperty('GoodForKids'))
            businessInfo.push({
                "key": "Good for Kids",
                "value": $scope.businessData.ATTRIBUTES_GOODFOR_KIDS == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.attributes.hasOwnProperty('Good For Groups'))
            businessInfo.push({
                "key": "Good for Groups",
                "value": $scope.businessData.ATTRIBUTES_GOODFOR_GROUPS == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.attributes.hasOwnProperty('Alchohol'))
            businessInfo.push({
                "key": "Alcohol",
                "value": $scope.businessData.ATTRIBUTES_ALCOHOL == "none" ? "No" : "Yes"

            });

        if ($scope.businessData.attributes.hasOwnProperty('NoiseLevel'))
            businessInfo.push({
                "key": "Noise Level",
                "value": $scope.businessData.ATTRIBUTES_NOISELEVEL

            });

        if ($scope.businessData.attributes.hasOwnProperty('ByAppointment'))
            businessInfo.push({
                "key": "By Appointment Only",
                "value": $scope.businessData.ATTRIBUTES_BYAPPOINTMENTONLY == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.attributes.hasOwnProperty('WaiterService'))
            businessInfo.push({
                "key": "Waiter Service",
                "value": $scope.businessData.ATTRIBUTES_GOODFOR_KIDS == "TRUE" ? "Yes" : "No"

            });

        if ($scope.businessData.attributes.hasOwnProperty('Parking Lot'))
            businessInfo.push({
                "key": "Parking Lot",
                "value": $scope.businessData.ATTRIBUTES_PARKINGLOT == "TRUE" ? "Available" : "Not Available"

            });
        if ($scope.businessData.attributes.hasOwnProperty('Parking Valet'))
            businessInfo.push({
                "key": "Parking Valet",
                "value": $scope.businessData.ATTRIBUTES_PARKING_VALET == "TRUE" ? "Available" : "Not Available"

            });


        $scope.businessInfo = businessInfo;


    }
    
    $scope.review = {
        userId : '',
        businessId : '',
        stars : 0,
        text : ''
        
    }
    
    
    
    $scope.onReviewSubmit = function(){
        var name = $scope.review.username;
        var comment = $scope.review.comment;
        $scope.review.businessId = $scope.businessId;
        console.log(name);
        console.log(comment);
        console.log($scope.rate);
        
        var url = 'http://192.168.0.21:8080/BusinessReviewRest/addReview';
        
        $http.post(url,$scope.review).success(function(data){
            $scope.businesses = data;
            $scope.businessData = data;
            $scope.reviews = $scope.businessData.reviews;
            console.log($scope.reviews);
            setBusinessInfo();
        }).error(function(data){
             $scope.businesses = data;
        });
        
        
        
        
        
        
        //var url = 'http://192.168.0.21:8080/BusinessReviewRest/postReview/' + $scope.businessId + '/' + name + '/' + comment + '/' + $scope.rate;
            
        
        
//         $http.get(url).success(function (data) {
//            $scope.businesses = data;
//            //console.log(this.category);
//            $scope.category = "hello";
//            
//        }).error(function (data) {
//            $scope.businesses = data;
//            $scope.category = "Hello";
//        });
        
    }
    
    
    init();
    
});