'use strict';

/**
* @ngdoc object
* @name students.config
* @requires ng.$stateProvider
* @description Defines the routes and other config within the students module
*/
angular
    .module('students')
    .config(['$stateProvider',
        function($stateProvider) {
            /**
             * @ngdoc event
             * @name students.config.route
             * @eventOf students.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the state is `'students'`, route to students
             *
            */
            $stateProvider
                .state('students', {
                    abstract: true,
                    templateUrl: 'modules/students/views/students.html',
                    controller: 'StudentsController as vm'
                })
                .state('students.listStudents', {
                    url: '/students',
                    templateUrl: 'modules/students/views/list-students.html'
                })
                .state('students.createStudent', {
                    url: '/create-student',
                    templateUrl: 'modules/students/views/create-student.html'
                })
                .state('students.editStudent', {
                    url: '/edit-student/:id',
                    templateUrl: 'modules/students/views/edit-student.html',
                    controller: 'EditStudentController as sub'
                });

        }
    ]);
