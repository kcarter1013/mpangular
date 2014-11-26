'use strict';

describe('Controller: studentsController', function() {

    beforeEach(module('students'));

    var studentsController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        studentsController = $controller('studentsController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
