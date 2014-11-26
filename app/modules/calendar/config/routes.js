'use strict';

/**
* @ngdoc object
* @name calendar.config
* @requires ng.$stateProvider
* @description Defines the routes and other config within the calendar module
*/
angular
    .module('calendar')
    .config(['$stateProvider',
        function($stateProvider) {
            /**
             * @ngdoc event
             * @name calendar.config.route
             * @eventOf calendar.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the state is `'calendar'`, route to calendar
             *
            */
            $stateProvider
                .state('calendar', {
                    url: '/calendar',
                    templateUrl: 'modules/calendar/views/calendar.html',
                    controller: 'CalendarController'
                });
        }
    ]);
