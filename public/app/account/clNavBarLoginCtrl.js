angular.module('app').controller('clNavBarLoginCtrl', function($scope, $http){
    $scope.signin = function(username, password){
        $http.post('/login', {username:username, password:password}).then(function(response){
            if(response.data.sucess){
                console.log('Logueado');
            } else {
                console.log('No Logueado');
            }
        })
    }
});