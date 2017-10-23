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
                if ($scope.manuelList[cont].client_history.codPromo_01) {
                    $scope.manuelList[cont].consultDateWithCupon_01 = $scope.manuelList[cont].client_history.da_01_01;
                }
                if ($scope.manuelList[cont].client_history.codPromo_02) {
                    $scope.manuelList[cont].consultDateWithCupon_02 = $scope.manuelList[cont].client_history.da_02_01;
                }
                if ($scope.manuelList[cont].client_history.codPromo_03) {
                    $scope.manuelList[cont].consultDateWithCupon_03 = $scope.manuelList[cont].client_history.da_03_01;
                }
                if ($scope.manuelList[cont].client_history.codPromo_04) {
                    $scope.manuelList[cont].consultDateWithCupon_04 = $scope.manuelList[cont].client_history.da_04_01;
                }
                if ($scope.manuelList[cont].client_history.codPromo_05) {
                    $scope.manuelList[cont].consultDateWithCupon_05 = $scope.manuelList[cont].client_history.da_05_01;
                }
                if ($scope.manuelList[cont].client_history.codPromo_06) {
                    $scope.manuelList[cont].consultDateWithCupon_06 = $scope.manuelList[cont].client_history.da_06_01;
                }
                if ($scope.manuelList[cont].client_history.codPromo_07) {
                    $scope.manuelList[cont].consultDateWithCupon_07 = $scope.manuelList[cont].client_history.da_07_01;
                }
                if ($scope.manuelList[cont].client_history.codPromo_08) {
                    $scope.manuelList[cont].consultDateWithCupon_08 = $scope.manuelList[cont].client_history.da_08_01;
                }
                if ($scope.manuelList[cont].client_history.codPromo_09) {
                    $scope.manuelList[cont].consultDateWithCupon_09 = $scope.manuelList[cont].client_history.da_09_01;
                }
                if ($scope.manuelList[cont].client_history.codPromo_10) {
                    $scope.manuelList[cont].consultDateWithCupon_10 = $scope.manuelList[cont].client_history.da_10_01;
                }
                cont++;
            }
        }   
    });

    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
    });
}
]);
