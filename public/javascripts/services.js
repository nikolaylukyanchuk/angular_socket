'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
    .service('consumerService', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
        var initialize = function () {

            var socket = io.connect();
            socket.on('userMessage', function (data) {
                $rootScope.$apply(function(){
                    $rootScope.$emit('consumer::newMessage', data);
                })
            });
        };

        return {
            initialize: initialize
        };
    }]);
