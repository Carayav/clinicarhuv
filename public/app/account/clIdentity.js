angular.module('app').factory('clIdentity', function () {
    return {
        currentUser: undefined,
        isAuthenticated: function () {
            return !!this.currentUser;
        }
    }
});