app.controller('BackOfficeCtrl', ['$scope', 'Auth', '$location', 'currentAuth', 'usersList', 'localList', 'suplementsList', 'suplementsBrand', 'suplementsCategories', '$firebaseStorage',
    function($scope, Auth, $location, currentAuth, usersList, localList, suplementsList, suplementsBrand, suplementsCategories, $firebaseStorage) {

        localList.$loaded().then(function() {  
            $scope.localList = localList;
        });

        $scope.saveLocal = function() {
            $scope.localList.$add({
                local: $scope.local,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            }).then(function() {
                $scope.local = {};
            });
        };

        suplementsBrand.$loaded().then(function() {  
            $scope.suplementsBrand = suplementsBrand;
        });

        $scope.saveSuplementBrand = function() {
            $scope.suplementsBrand.$add({
                suplementBrand: $scope.suplementBrand,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            }).then(function() {
                $scope.suplementBrand = {};
            });
        };

        suplementsCategories.$loaded().then(function() {  
            $scope.suplementsCategories = suplementsCategories;
        });

        $scope.saveSuplementCategory = function() {
            $scope.suplementsCategories.$add({
                suplementCategory: $scope.suplementCategory,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            }).then(function() {
                $scope.suplementCategory = {};
            });
        };

        suplementsList.$loaded().then(function() {
            $scope.suplementsList = suplementsList;
        });

        $scope.saveSuplement = function() {
            $scope.suplementsList.$add({
                suplement: $scope.suplement,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            }).then(function() {
                console.log("gravado suplemento");
            });
        };
    }
]);