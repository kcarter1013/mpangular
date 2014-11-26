'use strict';

describe('Controller: edit-studentController', function() {

    beforeEach(module('students'));

    var edit-studentController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        edit-studentController = $controller('edit-studentController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
