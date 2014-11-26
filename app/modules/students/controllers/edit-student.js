'use strict';

/**
 * @ngdoc object
 * @name students.Controllers.EditStudentController
 * @description EditStudentController
 * @requires ng.$scope
*/
angular
    .module('students')
    .controller('EditStudentController', [
        '$scope', '$stateParams', 'Studentmanager',
        function($scope, $stateParams, Studentmanager) {
        	var self = this;
        	var id = $stateParams.id;
        	self.dto = Studentmanager.getProfileById(id);
        	self.remove = function(id){
        		Studentmanager.removeStudent(id);
        	}

        }
]);
