'use strict';

// Declare app level module which depends on filters, and services

angular.module('app', [
    'ngAnimate',
    'app.controllers',
    'app.services',
    'app.filters',
    'app.directives',
])
    .controller('AppController', ['$scope', 'consumerService', function ($scope, consumerService) {
        consumerService.initialize();
    }]);