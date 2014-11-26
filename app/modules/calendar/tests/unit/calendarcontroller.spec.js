'use strict';

describe('Controller: calendarController', function() {

    beforeEach(module('calendar'));

    var calendarController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        calendarController = $controller('calendarController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
