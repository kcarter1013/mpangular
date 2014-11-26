'use strict';

describe('Controller: create-studentController', function() {

    beforeEach(module('students'));

    var create-studentController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        create-studentController = $controller('create-studentController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
