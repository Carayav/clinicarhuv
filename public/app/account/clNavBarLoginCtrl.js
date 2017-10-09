angular.module('app').controller('clNavBarLoginCtrl', function($scope, $http, clNotifier, clIdentity, clAuth, $location){
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
    
    $scope.signout = function () {
        clAuth.logoutUser().then(function () {
            $scope.username = "";
            $scope.password = "";
            clNotifier.notify('Ha salido exitosamente!');
            $location.path('/')
        })
    }
    
});