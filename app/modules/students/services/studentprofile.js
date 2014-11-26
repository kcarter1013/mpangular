'use strict';

/**
 * @ngdoc service
 * @name students.Services.Studentprofile
 * @description Studentprofile Factory
 */
angular
    .module('students')
    .factory('StudentProfile',
        function($http) {
            var StudentProfile = function(student){
            this.initialize = function(){
               // var data = {};
               // data.FirstName = student.FirstName;
               // data.LastName = student.LastName;
               // data.Pin = student.Pin;
               // data.Color = student.Color;
               // data.ProfileName = student.ProfileName;
               // data.Status = student.Status;
            
                var self = this;
                angular.extend(self, student);
            };

            this.getProfileStatus = function(){
                var statusText = "";
                switch(this.Status){
                    case 0 : {
                        statusText = "Pending";
                        break;
                    }
                    case 1 : {
                        statusText = "Approved";
                        break;
                    }
                    case 2 : {
                        statusText = "Rejected";
                        break;
                    }
                    default: {
                        statusText = "Unavailable";
                        break;
                    }
                }
                return statusText;
            };
            this.getFirstName = function(){
                return this.FirstName;
            };
            this.getLastName = function(){
                return this.LastName;
            };
            this.getColor = function(){
                return this.Color;
            };
            this.getProfileName = function(){
                return this.ProfileName;
            };
            this.setProfileName = function(name){
                this.ProfileName = name;
                return this;
            };

                this.initialize();
            };

            return (StudentProfile);
            //return {
//
            //    /**
            //     * @ngdoc function
            //     * @name students.Services.Studentprofile#method1
            //     * @methodOf students.Services.Studentprofile
            //     * @return {boolean} Returns a boolean value
            //     */
            //    method1: function() {
            //        return true;
            //    },
//
            //    /**
            //     * @ngdoc function
            //     * @name students.Services.Studentprofile#method2
            //     * @methodOf students.Services.Studentprofile
            //     * @return {boolean} Returns a boolean value
            //     */
            //    method2: function() {
            //        return false
            //    }
            //};
    });
