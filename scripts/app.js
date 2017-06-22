// jscs:disable
'use strict';

/**
 * @ngdoc overview
 * @name viverComSaudeApp
 * @description
 * # viverComSaudeApp
 *
 * Main module of the application.
 */
//chave dev
/*var config = {
    apiKey: "AIzaSyA7oEm_LayEi18khCi7lu7QaA4OvIXHVhA",
    authDomain: "authdemo-b5a5f.firebaseapp.com",
    databaseURL: "https://authdemo-b5a5f.firebaseio.com",
    storageBucket: "authdemo-b5a5f.appspot.com",
    messagingSenderId: "1022101485660"
};*/
//chave producao
var config = {
    apiKey: "AIzaSyDUe-bfOdjHuaXwq4-mrqyGrPODr3XE0Vo",
    authDomain: "app-healty-habits.firebaseapp.com",
    databaseURL: "https://app-healty-habits.firebaseio.com",
    storageBucket: "app-healty-habits.appspot.com",
    messagingSenderId: "633041698720"
};
firebase.initializeApp(config);

var app = angular
    .module('viverComSaudeApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'firebase',
        'ngMaterial',
        'ngMessages',
        'datatables',
        'googlechart',
        'angular-web-notification',
        'material.svgAssetsCache',
        'ui.bootstrap',
        'moment-picker',
        'ksSwiper'
]);
//'ngTouch',  



app.run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
        // We can catch the error thrown when the $requireSignIn promise is rejected
        // and redirect the user back to the home page
        if (error === "AUTH_REQUIRED") {
            $location.path("/");
        }
    });
}]);

app.config(function ($routeProvider, $locationProvider, $compileProvider, $mdDateLocaleProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          // controller will not be loaded until $waitForSignIn resolves
          // Auth refers to our $firebaseAuth wrapper in the factory below
          "currentAuth": ["Auth", function(Auth) {
            // $waitForSignIn returns a promise so the resolve waits for it to complete
            return Auth.$waitForSignIn();
          }]
        }
    })
    .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$waitForSignIn();
          }]
        }
    })
    .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashCtrl',
        controllerAs: 'dashboard',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$waitForSignIn();
          }]
        }
    })
    .when('/registospendentes', {
        templateUrl: 'views/spyder.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/quemsoueu', {
        templateUrl: 'views/quemsoueu.html',
        controller: 'QuemCtrl'
    })
    .when('/workshop', {
        templateUrl: 'views/resultados.html',
        controller: 'DashCtrl',
        controllerAs: 'dashboard',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$waitForSignIn();
          }]
        }
    })
    /*.when('/emailNotValidated', {
        templateUrl: 'views/emailNotValidated.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })*/
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.hashPrefix('');

    $locationProvider.html5Mode(true);

    $compileProvider.preAssignBindingsEnabled(true);

    /*$mdDateLocaleProvider.parseDate = function(dateString) {
        var m = moment(dateString, 'DD/MM/YYYY', true);
        return m.isValid() ? m.toDate() : new Date(NaN);
    };*/
    
    /*$mdDateLocaleProvider.formatDate = function(date) {
        return moment(date).format('DD/MM/YYYY');
    };*/
});