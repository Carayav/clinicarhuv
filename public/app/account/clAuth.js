angular.module('app').factory('clAuth', function ($http, clIdentity, $q) {
    return {
        authenticateUser: function(username, password) {
            var dfd = $q.defer();
            $http.post('/login', {username:username, password:password}).then(function(response){
                if(response.data.success){
                    clIdentity.currentUser = response.data.user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            })
            return dfd.promise;
        }
    }
});