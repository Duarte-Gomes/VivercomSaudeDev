app.controller('SpyderCtrl', ['$scope', 'Auth', '$location', 'currentAuth', 'usersList', '$mdSidenav', '$mdDialog',
    function($scope, Auth, $location, currentAuth, usersList, $mdSidenav, $mdDialog, $timeout) {

        $scope.auth = Auth;
        $scope.quizSpyder = {};
        $scope.spyderResult = {};
        $scope.refresca = {};

        $scope.status = '  ';
        $scope.customFullscreen = false;
        $scope.showAlert = {};

        $scope.showAlert = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('O teu tipo perfil é:')
                    .textContent(ev.type)
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Fechar')
                    .targetEvent(ev)
            );
        }; 

        var P = 0,
            E = 0,
            M = 0,
            Es = 0;
            
        /*$scope.refresca = function() {
            $scope.quizSpyder = {};
            P = 0,
            E = 0,
            M = 0,
            Es = 0;
        }*/

        $scope.whatsSpyder = function () {
            if ($scope.quizSpyder.pe01 || $scope.quizSpyder.pe02 || $scope.quizSpyder.pe03) {
                P++;
                E++;
            }
            if ($scope.quizSpyder.pm04 || $scope.quizSpyder.pm05 || $scope.quizSpyder.pm06){
                P++;
                M++;
            }
            if ($scope.quizSpyder.ee07 || $scope.quizSpyder.ee08 || $scope.quizSpyder.ee09){
                E++;
                Es++;
            }
            if ($scope.quizSpyder.em10 || $scope.quizSpyder.em11 || $scope.quizSpyder.em12){
                Es++;
                M++;
            }
            var spyderList = [
                {type: "Prático", value: P},
                {type: "Emocional", value: E},
                {type: "Mental", value: M},
                {type: "Espiritual", value: Es}
            ];

            $scope.clientDetail.spyderList = spyderList;

            function orderSpyders () {
                spyderList.sort(function(a, b){return b.value - a.value});

                $scope.spyderResult = {
                    type: spyderList[0].type + ' ' + spyderList[1].type, 
                    value: spyderList[0].value
                };

                $scope.showAlert($scope.spyderResult);
                
                $scope.clientDetail.spyderType = $scope.spyderResult;
            };

            orderSpyders();
            $scope.saveUserDetails();  

        };

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
