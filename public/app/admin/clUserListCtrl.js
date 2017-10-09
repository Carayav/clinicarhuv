angular.module('app').controller('clUserListCtrl', function($scope, clUser){
    $scope.users = clUser.query();
})