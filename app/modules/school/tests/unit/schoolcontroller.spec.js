'use strict';

describe('Controller: schoolController', function() {

    beforeEach(module('school'));

    var schoolController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        schoolController = $controller('schoolController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
