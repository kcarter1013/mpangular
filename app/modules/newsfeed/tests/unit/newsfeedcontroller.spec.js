'use strict';

describe('Controller: newsfeedController', function() {

    beforeEach(module('newsfeed'));

    var newsfeedController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        newsfeedController = $controller('newsfeedController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
