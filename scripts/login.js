app.controller('LoginCtrl', ['$scope', 'Auth', '$location', 'currentAuth',
function($scope, Auth, $location, currentAuth, usersList) {
    $scope.auth = Auth;

    $scope.isUser = true;
    $scope.isPassReset = false;
    $scope.isNewUser = false;

    $scope.checkLoginWindowType = function() {
        $scope.isUser = false;
        $scope.isNewUser = true;
        $scope.isPassReset = false;
    };

    $scope.checkResetPass = function() {
        $scope.isUser = false;
        $scope.isNewUser = false;
        $scope.isPassReset = true;
    }

    $scope.resetPass = function() {
        $scope.isPassReset = true;
        $scope.isNewUser = false;
    };

    $scope.loginUser = function() {
        $scope.message = null;
        $scope.error = null;

        Auth.$signInWithEmailAndPassword($scope.email, $scope.password)
        .then(function(firebaseUser) {
            $scope.firebaseUser = firebaseUser;
            $location.path('/');
        })
        .catch(function(error) {
            $scope.error = error.code;
            $scope.message = error.message;
        }); 
    };

    $scope.resetUserPass = function(param) {
        Auth.$sendPasswordResetEmail(param).then(function() {
            alert("Foi enviado um email com instruções para o seu email!");
        }).catch(function(error) {
            console.error("Error: ", error);
        });
    };

    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
    });
    
    $scope.createUser = function() {
        $scope.message = null;
        $scope.error = null;
       
        // Create a new user
        Auth.$createUserWithEmailAndPassword($scope.email, $scope.password)
        .then(function(firebaseUser) {
            /*firebaseUser.sendEmailVerification();*/
            /* location.reload(); */
            $location.path('/bemvindo');
        }).catch(function(error) {
            $scope.error = error.code;
            $scope.message = error.message;
        }); 
    };
}
]);