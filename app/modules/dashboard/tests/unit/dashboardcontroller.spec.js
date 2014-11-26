'use strict';

describe('Controller: dashboardController', function() {

    beforeEach(module('dashboard'));

    var dashboardController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        dashboardController = $controller('dashboardController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
