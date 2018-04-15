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
/* var config = {
    apiKey: "AIzaSyA7oEm_LayEi18khCi7lu7QaA4OvIXHVhA",
    authDomain: "authdemo-b5a5f.firebaseapp.com",
    databaseURL: "https://authdemo-b5a5f.firebaseio.com",
    storageBucket: "authdemo-b5a5f.appspot.com",
    messagingSenderId: "1022101485660"
}; */
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
        'alexjoffroy.angular-loaders'
]);
//'ngTouch',  



app.run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
        // We can catch the error thrown when the $requireSignIn promise is rejected
        // and redirect the user back to the home page
        if (error === "AUTH_REQUIRED") {
            $location.path("/login");
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
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/tabelacgi', {
        templateUrl: 'views/tabelacgi.html',
        controller: 'DashCtrl',
        controllerAs: 'dashboard',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/newsletter', {
        templateUrl: 'views/newsletter.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/historicocgi', {
        templateUrl: 'views/historicocgi.html',
        controller: 'HistoricoCgiCtrl',
        controllerAs: 'historicocgi',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/consultasmanuel', {
        templateUrl: 'views/parceiros/tabelamanuel.html',
        controller: 'CuponParceirosCtrl',
        controllerAs: 'cuponParceiros',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/consultasandreia', {
        templateUrl: 'views/parceiros/tabelaandreia.html',
        controller: 'CuponParceirosCtrl',
        controllerAs: 'cuponparceiros',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/consultasneverland', {
        templateUrl: 'views/parceiros/tabelaneverland.html',
        controller: 'CuponParceirosCtrl',
        controllerAs: 'cuponparceiros',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/consultasalphaden', {
        templateUrl: 'views/parceiros/tabelaalphaden.html',
        controller: 'CuponParceirosCtrl',
        controllerAs: 'cuponparceiros',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/consultasfernando', {
        templateUrl: 'views/parceiros/tabelafernando.html',
        controller: 'CuponParceirosCtrl',
        controllerAs: 'cuponparceiros',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/consultasodivelas', {
        templateUrl: 'views/parceiros/tabelaodivelas.html',
        controller: 'CuponParceirosCtrl',
        controllerAs: 'cuponparceiros',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/consultasfilipalamas', {
        templateUrl: 'views/parceiros/tabelafilipalamas.html',
        controller: 'CuponParceirosCtrl',
        controllerAs: 'cuponparceiros',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/consultasvenceslau', {
        templateUrl: 'views/parceiros/tabelavenceslau.html',
        controller: 'CuponParceirosCtrl',
        controllerAs: 'cuponparceiros',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/consultasgeadas', {
        templateUrl: 'views/parceiros/tabelageadas.html',
        controller: 'CuponParceirosCtrl',
        controllerAs: 'cuponparceiros',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/consultasoliveira', {
        templateUrl: 'views/parceiros/tabelaoliveira.html',
        controller: 'CuponParceirosCtrl',
        controllerAs: 'cuponparceiros',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/consultassusana', {
        templateUrl: 'views/parceiros/tabelasusana.html',
        controller: 'CuponParceirosCtrl',
        controllerAs: 'cuponparceiros',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/consultassusana', {
      templateUrl: 'views/parceiros/tabelasusana.html',
      controller: 'CuponParceirosCtrl',
      controllerAs: 'cuponparceiros',
      resolve: {
        "currentAuth": ["Auth", function(Auth) {
          return Auth.$requireSignIn();
        }]
      }
    })
    .when('/consultasphoenix', {
      templateUrl: 'views/parceiros/tabelaphoenix.html',
      controller: 'CuponParceirosCtrl',
      controllerAs: 'cuponparceiros',
      resolve: {
        "currentAuth": ["Auth", function(Auth) {
          return Auth.$requireSignIn();
        }]
      }
    })
    .when('/consultasbarbellclub', {
      templateUrl: 'views/parceiros/tabelabarbellclub.html',
      controller: 'CuponParceirosCtrl',
      controllerAs: 'cuponparceiros',
      resolve: {
        "currentAuth": ["Auth", function(Auth) {
          return Auth.$requireSignIn();
        }]
      }
    })
    .when('/backoffice', {
        templateUrl: 'views/backoffice.html',
        controller: 'BackOfficeCtrl',
        controllerAs: 'backoffice',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashCtrl',
        controllerAs: 'dashboard',
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireSignIn();
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
    .when('/indice', {
        templateUrl: 'views/indice.html',
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
            return Auth.$requireSignIn();
          }]
        }
    })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login',
        resolve: {
            "currentAuth": ["Auth", function(Auth) {
                return Auth.$waitForSignIn();
            }]
        }
    })
    .when('/:id', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
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
});
