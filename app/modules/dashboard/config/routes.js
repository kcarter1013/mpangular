'use strict';

/**
* @ngdoc object
* @name dashboard.config
* @requires ng.$stateProvider
* @description Defines the routes and other config within the dashboard module
*/
angular
    .module('dashboard')
    .config(['$stateProvider',
        function($stateProvider) {
            /**
             * @ngdoc event
             * @name dashboard.config.route
             * @eventOf dashboard.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the state is `'dashboard'`, route to dashboard
             *
            */
            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'modules/dashboard/views/dashboard.html',
                    controller: 'DashboardController'
                });
        }
    ]);
