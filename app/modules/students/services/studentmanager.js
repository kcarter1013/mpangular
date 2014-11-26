'use strict';

/**
 * @ngdoc service
 * @name students.Services.Studentmanager
 * @description Studentmanager Factory
 */
angular
    .module('students')
    .factory('Studentmanager', ['StudentProfile', '$http',
        function(StudentProfile, $http) {
            var studentList = [];
            var student;

            return {

                /**
                 * @ngdoc function
                 * @name students.Services.Studentmanager#method1
                 * @methodOf students.Services.Studentmanager
                 * @return {boolean} Returns a boolean value
                 */
                getStudentsFromServer: function() {
                    studentList = [];
                    $http.get('http://localhost:8000/api/student').then(
                    function (response) {
                        var data = response.data;
                        
                        for (var i = 0; i < data.length; i++) {
                            var temp = angular.extend({}, data[i]);
                            
                                studentList.push(new StudentProfile(temp));
                            
                        }
                    },
                    function (errResponse) {
                        console.error('Error while fetching students', errResponse);
                    });

                    return studentList;
                    
                },
                getStudents: function(){
                    return studentList;
                },
                getProfileById: function(id){
                    for (var i = 0; i < studentList.length; i++) {
                        if(studentList[i].id == id){
                            student = studentList[i];
                        }
                    }
                    return student;
                },
                /**
                 * @ngdoc function
                 * @name students.Services.Studentmanager#method2
                 * @methodOf students.Services.Studentmanager
                 * @return {boolean} Returns a boolean value
                 */
                addStudent: function(student) {
                    return false
                },

                removeStudent: function(id){
                    for (var i = 0; i < studentList.length; i++) {
                        if(studentList[i].id == id){
                            console.log(studentList[i]);
                        }
                    };

                },
                editStudent: function(id){
                     for (var i = 0; i < studentList.length; i++) {
                        if(studentList[i].id == id){
                            student = studentList[i];
                        }
                    }
                    return student;
                },

            };
    }]);
