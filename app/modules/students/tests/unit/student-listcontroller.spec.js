'use strict';

describe('Controller: student-listController', function() {

    beforeEach(module('students'));

    var student-listController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        student-listController = $controller('student-listController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
