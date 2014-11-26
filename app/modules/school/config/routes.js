'use strict';

/**
* @ngdoc object
* @name school.config
* @requires ng.$stateProvider
* @description Defines the routes and other config within the school module
*/
angular
    .module('school')
    .config(['$stateProvider',
        function($stateProvider) {
            /**
             * @ngdoc event
             * @name school.config.route
             * @eventOf school.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the state is `'school'`, route to school
             *
            */
            $stateProvider
                .state('school', {
                    url: '/school',
                    templateUrl: 'modules/school/views/school.html',
                    controller: 'SchoolController'
                });
        }
    ]);
