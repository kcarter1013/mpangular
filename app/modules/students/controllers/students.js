'use strict';

/**
 * @ngdoc object
 * @name students.Controllers.StudentsController
 * @description StudentsController
 * @requires ng.$scope
*/
angular
    .module('students')
    .controller('StudentsController', StudentsCtrl);


StudentsCtrl.$injector = ['$http', '$state', '$q', 'StudentProfile', '$scope', 'Studentmanager'];

function StudentsCtrl($http, $state, $q, StudentProfile, $scope, Studentmanager) {
        var vm = this;
        
        vm.students = Studentmanager.getStudentsFromServer();
        vm.newStudent = null;

		vm.registerNewStudent = function(){
       	    registerNewStudent();
        };
        // TODO: Add Methods to Remove Student Profile, Edit Student Profile

      //  activate();


        ////////////////////////////

        function activate() {
            var promises = [];
            return $q.when(promises).then(
                function () {
                	//TODO: insert functionality after promises complete
                    console.log('Students promise complete');

                },
                function (reason) {
                    //TODO: Add error handling when promises don't complete.
                    console.log("Rejected...", reason);
                });
        }
        function registerNewStudent(){
            vm.newStudent.Status = 0;
            $http.post('http://localhost:8000/api/student', vm.newStudent)
                .then(
                    function(response){
                        vm.newStudent = {};
                }, function(reason){
                    //TODO: Add error handling for failed POST Request
                    console.log('Failed: ', reason);
                })
                .then(
                    function(){
                        doSomething();
                });
        }


        function doSomething() {
            console.log(vm.students);
           // $state.go('tab.dash.view');

        }
	
}
