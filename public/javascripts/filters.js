'use strict';

/* Filters */

angular.module('app.filters', []).
    filter('millSecondsToSeconds', [function () {
        return function(ms){
            return Math.ceil(ms / 1000);
        }
    }]);