angular.module('app').controller('clNavBarLoginCtrl', function($scope, $http, clNotifier, clIdentity){
    $scope.identity = clIdentity;
    $scope.signin = function(username, password){
        $http.post('/login', {username:username, password:password}).then(function(response){
            if(response.data.sucess){
                clIdentity.currentUser = response.data.user;
                clNotifier.notify("¡Ha ingresUsuario/Contraseña ado exitosamente!")
            } else {
                clNotifier.notify("Combinación Usuario/Contraseña incorrecta");
            }
        })
    }
});