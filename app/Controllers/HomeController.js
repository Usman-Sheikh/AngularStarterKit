﻿(function () {
    'use strict';

    angular
        .module('eventsApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope']; 

    function HomeController($scope) {
        $scope.title = 'HomeController';
        $scope.active = 'active';

        $scope.event = {
            "name": "Angular Boot Camp",
            "id": 1,
            "date": "1/1/2013",
            "time": "10:30 am",
            "location": {
                "address": "Microsoft Headquarters",
                "city": "Mountain View",
                "province": "CA"
            },
            "imageUrl": "http://pascalprecht.github.com/slides/angularjs-insights/img/angularjs-logo.png",
            "sessions": [
                {
                    "id": 1,
                    "name": "Directives Masterclass",
                    "creatorName": "Bob Smith",
                    "duration": 1,
                    "level": "Advanced",
                    "abstract": "In this session you will learn the ins and outs of directives!",
                    "upVoteCount": 0
                },
                {
                    "id": 2,
                    "name": "Scopes for fun and profit",
                    "creatorName": "John Doe",
                    "duration": 3,
                    "level": "Introductory",
                    "abstract": "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.",
                    "upVoteCount": 0
                },
                {
                    "id": 3,
                    "name": "Well Behaved Controllers",
                    "creatorName": "Jane Doe",
                    "duration": 2,
                    "level": "Intermediate",
                    "abstract": "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.",
                    "upVoteCount": 0
                }
            ]
        };
        activate();
        
        function activate() { }
    }
})();
