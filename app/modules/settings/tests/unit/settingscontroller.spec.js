'use strict';

describe('Controller: settingsController', function() {

    beforeEach(module('settings'));

    var settingsController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        settingsController = $controller('settingsController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
