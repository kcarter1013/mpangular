'use strict';

/**
* @ngdoc object
* @name newsfeed.config
* @requires ng.$stateProvider
* @description Defines the routes and other config within the newsfeed module
*/
angular
    .module('newsfeed')
    .config(['$stateProvider',
        function($stateProvider) {
            /**
             * @ngdoc event
             * @name newsfeed.config.route
             * @eventOf newsfeed.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the state is `'newsfeed'`, route to newsfeed
             *
            */
            $stateProvider
                .state('newsfeed', {
                    url: '/newsfeed',
                    templateUrl: 'modules/newsfeed/views/newsfeed.html',
                    controller: 'NewsfeedController'
                });
        }
    ]);
