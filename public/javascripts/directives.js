'use strict';

/* Directives */

angular.module('app.directives', []).
  directive('presenter', ['$rootScope', '$interval', function ($rootScope, $interval) {
      return {
        restrict: 'E',
        templateUrl: '/javascripts/views/presenter.html',
        scope : {
          lifetime : '=lifetime'
        },
        controller : function($scope){
          $scope.lifetime = $scope.lifetime || 10000;
          $scope.messages = [];
          var newMessageOff = $rootScope.$on('consumer::newMessage', function(evt, msg){
            msg.published = new Date();
            msg.showMilliseconds = moment(msg.published).add($scope.lifetime, 'milliseconds').diff(msg.published, 'milliseconds');
            $scope.messages.unshift(msg);
          });

          function hideOldMessages (){

            var now = moment();
            for(var i =  $scope.messages.length -1; i >=0; i--){
              $scope.messages[i].showMilliseconds -= 100;
              if (now.diff($scope.messages[i].published, 'milliseconds') >= $scope.lifetime){
                $scope.messages.splice(i, 1);
              }
            }
          };

          $interval(hideOldMessages, 100);

          $scope.$on("$destroy", function() {
            newMessageOff();
          });
        }
      };
  }]);
