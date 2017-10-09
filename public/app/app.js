angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    var routeRoleChecks = {
        admin: {
            auth: function (clAuth) {
                return clAuth.authorizeCurrentUserForRoute('admin');
            }
        }
    }

    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/", { templateUrl: 'partials/main/main', controller: 'clMainCtrl'})
        .when("/admin/users", { templateUrl: 'partials/admin/user-list',
            controller: 'clUserListCtrl', resolve: routeRoleChecks.admin
        })
});

angular.module('app').run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        if(rejection === 'no autorizado'){
            $location.path('/');
        }
    })
})

