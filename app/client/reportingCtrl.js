app.controller("reportingCtrl", function($scope, $http) {

    $scope.link = "";
    $scope.websites = [];

    $scope.postReq = function () {
        $scope.data = '{ "link": "' + $scope.link + '" }';
        return {
            method: 'POST',
            url: 'https://cya.azure-mobile.net/tables/websites',
            headers: {
                'X-ZUMO-APPLICATION': 'WvxSgoLSUveSOSGWpcCyGxzzhQIFtV85'
            },
            data: $scope.data
        };
    }

    $scope.getReq = function () {
        return {
            method: 'GET',
            url: 'https://cya.azure-mobile.net/tables/websites',
            headers: {
                'X-ZUMO-APPLICATION': 'WvxSgoLSUveSOSGWpcCyGxzzhQIFtV85'
            }
        };
    }

    $scope.getWebsites = function() {
        $http($scope.getReq())
            .success(function(resuts){
                $scope.websites = [];
                angular.forEach(resuts, function(result) {
                    $scope.websites.push(result.link);
                })
            })
            .error(function(){
                alert("error loading the links");
            });
    }

    $scope.getWebsites();


    $scope.report = function () {
        if (!$scope.isValidLink()) {
            {alert("Link not valid");}
        }
        else {
            $http($scope.postReq()).success(function(){}).error(function(){alert("error");});
            $scope.getWebsites();
        }

    }

    $scope.isValidLink = function() {
        var patt = /((http:)|(www.))(\S)+(.)+(\S)+/i;
        return $scope.link.match(patt);
    }
});