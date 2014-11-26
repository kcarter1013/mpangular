'use strict';

/**
 * @ngdoc object
 * @name settings.Controllers.SettingsController
 * @description SettingsController
 * @requires ng.$scope
*/
angular
    .module('settings')
    .controller('SettingsController', [
        '$scope',
        'mpSettings',
        function($scope, mpSettings) {
        	$scope.x = mpSettings.getDeviceName();
        	$scope.y = mpSettings.getDevicePin();
        	$scope.isCollapsed= true;
  

        	
        }
]);
