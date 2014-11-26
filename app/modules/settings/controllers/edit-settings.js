'use strict';

/**
 * @ngdoc object
 * @name settings.Controllers.EditSettingsController
 * @description EditSettingsController
 * @requires ng.$scope
*/
angular
    .module('settings')
    .controller('EditSettingsController', [
        '$scope',
        'mpSettings',
        function($scope, mpSettings) {
        	var self = this;
        	$scope.deviceName = mpSettings.getDeviceName();
        	$scope.devicePin = mpSettings.getDevicePin();
        	$scope.deviceId = mpSettings.getDeviceId();


        	self.changeDeviceName = function(newName){
        		mpSettings.setDeviceName(newName);
        		
        	};
        	self.changeDevicePin = function(newPin){
        		mpSettings.setDevicePin(newPin);
        	};
            self.saveDeviceSettings = function(newName, newPin){
                mpSettings.setDeviceName(newName);
                mpSettings.setDevicePin(newPin);
            };

        }
]);
