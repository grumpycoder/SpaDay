(function () {
    "use strict";

    function configRoutes($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/home/home.html'
            })
            .when('/home', {
                templateUrl: 'app/home/home.html'
            })
            .when('/about', {
                templateUrl: 'app/home/about.html'
            })
            .when('/services', {
                templateUrl: 'app/home/services.html'
            })
            .when('/schedule', {
                templateUrl: 'app/schedule/schedule.html',
                controller: 'ScheduleCtrl',
                controllerAs: 'vm'
            });

        $routeProvider.otherwise('/');
    }

    angular.module('spaApp', [
        'ngRoute',
        'ui.bootstrap'
    ]).config(['$routeProvider', configRoutes]);
}());



