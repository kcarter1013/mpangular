'use strict';

/**
 * @ngdoc service
 * @name settings.Services.Mpsettings
 * @description Mpsettings Factory
 */
angular
    .module('settings')
    .factory('mpSettings',
        function() {
            var deviceName = 'Default Device';
            var deviceId = '';
            var devicePin = '';

            return {

                /**
                 * @ngdoc function
                 * @name settings.Services.Mpsettings#getDeviceName
                 * @methodOf settings.Services.Mpsettings
                 * @return {string} Returns name of device.
                 */
                getDeviceName: function() {
                    return deviceName;
                },

                /**
                 * @ngdoc function
                 * @name settings.Services.Mpsettings#setDeviceName
                 * @methodOf settings.Services.Mpsettings
                 * @return {string} Sets name of device and returns new name.
                 */
                setDeviceName: function(newName) {
                    deviceName = newName;
                    
                    return deviceName;
                },

                /**
                 * @ngdoc function
                 * @name settings.Services.Mpsettings#getDeviceId
                 * @methodOf settings.Services.Mpsettings
                 * @return {string} Returns device ID.
                 */
                getDeviceId: function(){
                    return deviceId;
                },
                /**
                 * @ngdoc function
                 * @name settings.Services.Mpsettings#setDeviceId
                 * @methodOf settings.Services.Mpsettings
                 * @return {string} Sets device id.
                 */
                setDeviceId: function(id){
                    deviceId = id;
                    return;
                },
                /**
                 * @ngdoc function
                 * @name settings.Services.Mpsettings#getDevicePin
                 * @methodOf settings.Services.Mpsettings
                 * @return {string} Returns the devicePin.
                 */
                getDevicePin: function(){
                    return devicePin;
                },
                /**
                 * @ngdoc function
                 * @name settings.Services.Mpsettings#setDevicePin
                 * @methodOf settings.Services.Mpsettings
                 * @return {string} Sets a user-chosen Pin to save their app settings.
                 */
                setDevicePin: function(newPin){
                    devicePin = newPin;
                    return;
                }

            };
    });
