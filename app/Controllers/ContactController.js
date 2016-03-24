(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$scope']; 

    function ContactController($scope) {
        $scope.title = 'ContactController';
        $scope.active = 'active';
        $scope.Message = 'Hello From Angular';
        activate();

        function activate() { }
    }
})();
