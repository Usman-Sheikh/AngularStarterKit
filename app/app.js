/// <reference path="Views/Home/Home.html" />
/// <reference path="Views/Home/Home.html" />
/// <reference path="Views/Home/Home.html" />
'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute'])

    .config(function ($routeProvider) {

        $routeProvider.when('/Home', {
            templateUrl: 'Views/Home/Home.html',
            controller:'HomeController'
        })
        .when('/Products', {
            templateUrl: 'Views/Products/List.html',
            controller: 'ProductsController'
        })
       .when('/Contact', {
                templateUrl: 'Views/Home/Contact.html',
                controller: 'ContactController'
       })
       .otherwise('/', {
           templateUrl: 'Views/Home/Home.html',
            controller: 'HomeController'
       })

   
    
    });