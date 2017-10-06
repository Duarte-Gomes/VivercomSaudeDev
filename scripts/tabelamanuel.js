app.controller('CuponManuelCtrl', ['$scope', 'Auth', '$location', 'currentAuth', 'usersList', '$mdSidenav',
function($scope, Auth, $location, currentAuth, usersList, $mdSidenav, $timeout) {

    $scope.auth = Auth;

    $scope.manuelList = {};
    var cont = 0;
    
    usersList.$loaded().then(function() {
        $scope.usersList = usersList;

        for (var i = 0; i < usersList.length; i++) {
            if ($scope.usersList[i].client_detail.cuponPt === "#manuelteixeira") {                   
                $scope.manuelList[cont] = $scope.usersList[i];
                cont++;
            }
        }
    });

    $scope.loginUser = function() {

        Auth.$signInWithEmailAndPassword($scope.email, $scope.password)
        .then(function(firebaseUser) {
            $scope.firebaseUser = firebaseUser;    
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        }); 
    };

    $scope.createUser = function() {
        $scope.message = null;
        $scope.error = null;
       
        // Create a new user
        Auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
        .then(function(firebaseUser) {
            $scope.message = "User created with uid: " + firebaseUser.uid;
            $scope.user = firebaseUser.uid;
            //$location.path('/newUser');    
        }).catch(function(error) {
            $scope.error = error;
        }); 
    };

    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
    });
}
]);
