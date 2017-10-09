angular.module('app').controller('clNavBarLoginCtrl', function($scope, $http, clNotifier, clIdentity, clAuth){
    $scope.identity = clIdentity;
    $scope.signin = function(username, password){
        clAuth.authenticateUser(username, password).then(function (success) {
            if(success){
                clNotifier.notify("¡Ha ingresUsuario/Contraseña ado exitosamente!")
            } else {
                clNotifier.notify("Combinación Usuario/Contraseña incorrecta");
            }
        })
    }
});