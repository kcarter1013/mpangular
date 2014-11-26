'use strict';

describe('Controller: edit-settingsController', function() {

    beforeEach(module('settings'));

    var edit-settingsController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        edit-settingsController = $controller('edit-settingsController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
