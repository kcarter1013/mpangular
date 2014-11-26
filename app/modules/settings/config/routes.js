'use strict';

/**
* @ngdoc object
* @name settings.config
* @requires ng.$stateProvider
* @description Defines the routes and other config within the settings module
*/
angular
    .module('settings')
    .config(['$stateProvider',
        function($stateProvider) {
            /**
             * @ngdoc event
             * @name settings.config.route
             * @eventOf settings.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the state is `'settings'`, route to settings
             *
            */
            $stateProvider
                .state('settings', {
                    abstract: true,
                    templateUrl: 'modules/settings/views/settings.html',
                    controller: 'SettingsController'
                })
                .state('settings.edit', {
                    url: '/settings',
                    views: {
                        'device' : {
                            templateUrl: 'modules/settings/views/settings-edit.html',
                            controller: 'EditSettingsController as vm'
                        },
                        'students' : {
                            templateUrl: 'modules/students/views/list-students.html',
                            controller: 'StudentsController as vm'
                        }
                    }
                    
                });
        }
    ]);
