
/*angular.module('cya.service', [])

    .value('greeter', {
        salutation: 'Hello',
        localize: function(localization) {
            this.salutation = localization.salutation;
        },
        greet: function(name) {
            return this.salutation + ' ' + name + '!';
        }
    })

    .value('user', {
        load: function(name) {
            this.name = name;
        }
    });

angular.module('cya.reporting', [])
    .value('report', {
        report: function(link) {

        }
    })
;

angular.module('xmpl.filter', []);
*/

angular.module('cya')
/*
    .run(function(greeter, user) {
        // This is effectively part of the main method initialization code
        greeter.localize({
            salutation: 'Bonjour'
        });
        user.load('World');
    })
    */

    .controller('CyaController', function($scope){

        $scope.link = '';

        $scope.report = function ($scope) {
            //$scope.link
        }

        $scope.isValidLink = function($scope) {
            var patt = /((http)|(www))(\S)+/i;
            return $scope.link.match(patt);
        }
    });