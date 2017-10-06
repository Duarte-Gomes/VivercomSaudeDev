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

    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
    });
}
]);
