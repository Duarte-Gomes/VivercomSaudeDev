app.controller('CuponParceirosCtrl', ['$scope', 'Auth', '$location', 'currentAuth', 'usersList', '$mdSidenav',
    function($scope, Auth, $location, currentAuth, usersList, $mdSidenav, $timeout) {

        $scope.auth = Auth;

        $scope.manuelList = {};
        $scope.andreiaList = {};
        $scope.neverlandList = {};
        $scope.alphadenList = {};
        $scope.fernandoList = {};
        $scope.odivelasList = {};
        $scope.lamasList = {};
        $scope.venceslauList = {};
        $scope.geadasList = {};
        $scope.oliveiraList = {};
        $scope.susanaList = {};
        $scope.phoenixList = {};
        $scope.barbellList = {};

        var contManuelList = 0;
        var contAndreiaList = 0;
        var contNeverlandList = 0;
        var contAlphadenList = 0;
        var contFernandoList = 0;
        var contOdivelasList = 0;
        var contLamasList = 0;
        var contVenceslauList = 0;
        var contGeadasList = 0;
        var contOliveiraList = 0;
        var contSusanaList = 0;
        var contPheonixList = 0;
        var contBarbellList = 0;
        
        usersList.$loaded().then(function() {
            $scope.usersList = usersList;

            for (var i = 0; i < usersList.length; i++) {
                if (typeof usersList[i].client_detail !== 'undefined') {
                    //manuel
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultamanuelteixeira") {
                        $scope.manuelList[contManuelList] = $scope.usersList[i];
                        if ($scope.manuelList[contManuelList].client_history.codPromo_01) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_01 = $scope.manuelList[contManuelList].client_history.da_01_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_02) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_02 = $scope.manuelList[contManuelList].client_history.da_02_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_03) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_03 = $scope.manuelList[contManuelList].client_history.da_03_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_04) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_04 = $scope.manuelList[contManuelList].client_history.da_04_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_05) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_05 = $scope.manuelList[contManuelList].client_history.da_05_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_06) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_06 = $scope.manuelList[contManuelList].client_history.da_06_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_07) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_07 = $scope.manuelList[contManuelList].client_history.da_07_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_08) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_08 = $scope.manuelList[contManuelList].client_history.da_08_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_09) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_09 = $scope.manuelList[contManuelList].client_history.da_09_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_10) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_10 = $scope.manuelList[contManuelList].client_history.da_10_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_11) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_11 = $scope.manuelList[contManuelList].client_history.da_11_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_12) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_12 = $scope.manuelList[contManuelList].client_history.da_12_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_13) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_13 = $scope.manuelList[contManuelList].client_history.da_13_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_14) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_14 = $scope.manuelList[contManuelList].client_history.da_14_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_15) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_15 = $scope.manuelList[contManuelList].client_history.da_15_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_16) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_16 = $scope.manuelList[contManuelList].client_history.da_16_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_17) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_17 = $scope.manuelList[contManuelList].client_history.da_17_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_18) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_18 = $scope.manuelList[contManuelList].client_history.da_18_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_19) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_19 = $scope.manuelList[contManuelList].client_history.da_19_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.manuelList[contManuelList].client_history.codPromo_20) {
                            $scope.manuelList[contManuelList].consultDateWithCupon_20 = $scope.manuelList[contManuelList].client_history.da_20_01;
                        } else {
                            $scope.manuelList[contManuelList].consultDateWithCupon_20 = " ";
                        }

                        contManuelList++;
                    }

                    //andreia
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultaandreiapacheco") {
                        $scope.andreiaList[contAndreiaList] = $scope.usersList[i];
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_01) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_01 = $scope.andreiaList[contAndreiaList].client_history.da_01_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_02) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_02 = $scope.andreiaList[contAndreiaList].client_history.da_02_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_03) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_03 = $scope.andreiaList[contAndreiaList].client_history.da_03_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_04) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_04 = $scope.andreiaList[contAndreiaList].client_history.da_04_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_05) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_05 = $scope.andreiaList[contAndreiaList].client_history.da_05_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_06) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_06 = $scope.andreiaList[contAndreiaList].client_history.da_06_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_07) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_07 = $scope.andreiaList[contAndreiaList].client_history.da_07_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_08) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_08 = $scope.andreiaList[contAndreiaList].client_history.da_08_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_09) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_09 = $scope.andreiaList[contAndreiaList].client_history.da_09_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_10) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_10 = $scope.andreiaList[contAndreiaList].client_history.da_10_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_11) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_11 = $scope.andreiaList[contAndreiaList].client_history.da_11_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_12) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_12 = $scope.andreiaList[contAndreiaList].client_history.da_12_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_13) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_13 = $scope.andreiaList[contAndreiaList].client_history.da_13_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_14) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_14 = $scope.andreiaList[contAndreiaList].client_history.da_14_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_15) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_15 = $scope.andreiaList[contAndreiaList].client_history.da_15_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_16) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_16 = $scope.andreiaList[contAndreiaList].client_history.da_16_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_17) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_17 = $scope.andreiaList[contAndreiaList].client_history.da_17_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_18) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_18 = $scope.andreiaList[contAndreiaList].client_history.da_18_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_19) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_19 = $scope.andreiaList[contAndreiaList].client_history.da_19_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.andreiaList[contAndreiaList].client_history.codPromo_20) {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_20 = $scope.andreiaList[contAndreiaList].client_history.da_20_01;
                        } else {
                            $scope.andreiaList[contAndreiaList].consultDateWithCupon_20 = " ";
                        }

                        contAndreiaList++;
                    }

                    //neverland
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultacrossfitneverland") {
                        $scope.neverlandList[contNeverList] = $scope.usersList[i];
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_01) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_01 = $scope.neverlandList[contNeverList].client_history.da_01_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_02) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_02 = $scope.neverlandList[contNeverList].client_history.da_02_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_03) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_03 = $scope.neverlandList[contNeverList].client_history.da_03_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_04) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_04 = $scope.neverlandList[contNeverList].client_history.da_04_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_05) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_05 = $scope.neverlandList[contNeverList].client_history.da_05_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_06) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_06 = $scope.neverlandList[contNeverList].client_history.da_06_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_07) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_07 = $scope.neverlandList[contNeverList].client_history.da_07_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_08) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_08 = $scope.neverlandList[contNeverList].client_history.da_08_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_09) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_09 = $scope.neverlandList[contNeverList].client_history.da_09_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_10) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_10 = $scope.neverlandList[contNeverList].client_history.da_10_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_11) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_11 = $scope.neverlandList[contNeverList].client_history.da_11_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_12) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_12 = $scope.neverlandList[contNeverList].client_history.da_12_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_13) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_13 = $scope.neverlandList[contNeverList].client_history.da_13_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_14) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_14 = $scope.neverlandList[contNeverList].client_history.da_14_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_15) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_15 = $scope.neverlandList[contNeverList].client_history.da_15_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_16) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_16 = $scope.neverlandList[contNeverList].client_history.da_16_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_17) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_17 = $scope.neverlandList[contNeverList].client_history.da_17_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_18) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_18 = $scope.neverlandList[contNeverList].client_history.da_18_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_19) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_19 = $scope.neverlandList[contNeverList].client_history.da_19_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.neverlandList[contNeverList].client_history.codPromo_20) {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_20 = $scope.neverlandList[contNeverList].client_history.da_20_01;
                        } else {
                            $scope.neverlandList[contNeverList].consultDateWithCupon_20 = " ";
                        }

                        contNeverList++;
                    }

                    //alphaden
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultacrossfitalphaden") {
                        $scope.alphadenList[contAlphadenList] = $scope.usersList[i];
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_01) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_01 = $scope.alphadenList[contAlphadenList].client_history.da_01_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_02) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_02 = $scope.alphadenList[contAlphadenList].client_history.da_02_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_03) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_03 = $scope.alphadenList[contAlphadenList].client_history.da_03_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_04) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_04 = $scope.alphadenList[contAlphadenList].client_history.da_04_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_05) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_05 = $scope.alphadenList[contAlphadenList].client_history.da_05_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_06) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_06 = $scope.alphadenList[contAlphadenList].client_history.da_06_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_07) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_07 = $scope.alphadenList[contAlphadenList].client_history.da_07_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_08) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_08 = $scope.alphadenList[contAlphadenList].client_history.da_08_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_09) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_09 = $scope.alphadenList[contAlphadenList].client_history.da_09_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_10) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_10 = $scope.alphadenList[contAlphadenList].client_history.da_10_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_11) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_11 = $scope.alphadenList[contAlphadenList].client_history.da_11_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_12) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_12 = $scope.alphadenList[contAlphadenList].client_history.da_12_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_13) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_13 = $scope.alphadenList[contAlphadenList].client_history.da_13_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_14) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_14 = $scope.alphadenList[contAlphadenList].client_history.da_14_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_15) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_15 = $scope.alphadenList[contAlphadenList].client_history.da_15_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_16) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_16 = $scope.alphadenList[contAlphadenList].client_history.da_16_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_17) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_17 = $scope.alphadenList[contAlphadenList].client_history.da_17_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_18) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_18 = $scope.alphadenList[contAlphadenList].client_history.da_18_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_19) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_19 = $scope.alphadenList[contAlphadenList].client_history.da_19_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.alphadenList[contAlphadenList].client_history.codPromo_20) {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_20 = $scope.alphadenList[contAlphadenList].client_history.da_20_01;
                        } else {
                            $scope.alphadenList[contAlphadenList].consultDateWithCupon_20 = " ";
                        }

                        contAlphadenList++;
                    }

                    //fernando
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultafernandovaqueiro") {
                        $scope.fernandoList[contFernandoList] = $scope.usersList[i];
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_01) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_01 = $scope.fernandoList[contFernandoList].client_history.da_01_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_02) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_02 = $scope.fernandoList[contFernandoList].client_history.da_02_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_03) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_03 = $scope.fernandoList[contFernandoList].client_history.da_03_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_04) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_04 = $scope.fernandoList[contFernandoList].client_history.da_04_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_05) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_05 = $scope.fernandoList[contFernandoList].client_history.da_05_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_06) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_06 = $scope.fernandoList[contFernandoList].client_history.da_06_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_07) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_07 = $scope.fernandoList[contFernandoList].client_history.da_07_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_08) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_08 = $scope.fernandoList[contFernandoList].client_history.da_08_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_09) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_09 = $scope.fernandoList[contFernandoList].client_history.da_09_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_10) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_10 = $scope.fernandoList[contFernandoList].client_history.da_10_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_11) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_11 = $scope.fernandoList[contFernandoList].client_history.da_11_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_12) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_12 = $scope.fernandoList[contFernandoList].client_history.da_12_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_13) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_13 = $scope.fernandoList[contFernandoList].client_history.da_13_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_14) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_14 = $scope.fernandoList[contFernandoList].client_history.da_14_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_15) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_15 = $scope.fernandoList[contFernandoList].client_history.da_15_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_16) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_16 = $scope.fernandoList[contFernandoList].client_history.da_16_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_17) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_17 = $scope.fernandoList[contFernandoList].client_history.da_17_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_18) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_18 = $scope.fernandoList[contFernandoList].client_history.da_18_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_19) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_19 = $scope.fernandoList[contFernandoList].client_history.da_19_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.fernandoList[contFernandoList].client_history.codPromo_20) {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_20 = $scope.fernandoList[contFernandoList].client_history.da_20_01;
                        } else {
                            $scope.fernandoList[contFernandoList].consultDateWithCupon_20 = " ";
                        }

                        contFernandoList++;
                    }

                    //odivelas
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultacrossfitodivelas") {
                        $scope.odivelasList[contOdivelasList] = $scope.usersList[i];
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_01) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_01 = $scope.odivelasList[contOdivelasList].client_history.da_01_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_02) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_02 = $scope.odivelasList[contOdivelasList].client_history.da_02_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_03) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_03 = $scope.odivelasList[contOdivelasList].client_history.da_03_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_04) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_04 = $scope.odivelasList[contOdivelasList].client_history.da_04_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_05) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_05 = $scope.odivelasList[contOdivelasList].client_history.da_05_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_06) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_06 = $scope.odivelasList[contOdivelasList].client_history.da_06_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_07) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_07 = $scope.odivelasList[contOdivelasList].client_history.da_07_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_08) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_08 = $scope.odivelasList[contOdivelasList].client_history.da_08_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_09) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_09 = $scope.odivelasList[contOdivelasList].client_history.da_09_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_10) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_10 = $scope.odivelasList[contOdivelasList].client_history.da_10_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_11) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_11 = $scope.odivelasList[contOdivelasList].client_history.da_11_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_12) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_12 = $scope.odivelasList[contOdivelasList].client_history.da_12_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_13) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_13 = $scope.odivelasList[contOdivelasList].client_history.da_13_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_14) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_14 = $scope.odivelasList[contOdivelasList].client_history.da_14_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_15) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_15 = $scope.odivelasList[contOdivelasList].client_history.da_15_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_16) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_16 = $scope.odivelasList[contOdivelasList].client_history.da_16_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_17) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_17 = $scope.odivelasList[contOdivelasList].client_history.da_17_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_18) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_18 = $scope.odivelasList[contOdivelasList].client_history.da_18_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_19) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_19 = $scope.odivelasList[contOdivelasList].client_history.da_19_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.odivelasList[contOdivelasList].client_history.codPromo_20) {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_20 = $scope.odivelasList[contOdivelasList].client_history.da_20_01;
                        } else {
                            $scope.odivelasList[contOdivelasList].consultDateWithCupon_20 = " ";
                        }

                        contOdivelasList++;
                    }

                    //lamas
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultafilipalamas") {
                        $scope.lamasList[contLamasList] = $scope.usersList[i];
                        if ($scope.lamasList[contLamasList].client_history.codPromo_01) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_01 = $scope.lamasList[contLamasList].client_history.da_01_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_02) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_02 = $scope.lamasList[contLamasList].client_history.da_02_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_03) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_03 = $scope.lamasList[contLamasList].client_history.da_03_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_04) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_04 = $scope.lamasList[contLamasList].client_history.da_04_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_05) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_05 = $scope.lamasList[contLamasList].client_history.da_05_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_06) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_06 = $scope.lamasList[contLamasList].client_history.da_06_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_07) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_07 = $scope.lamasList[contLamasList].client_history.da_07_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_08) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_08 = $scope.lamasList[contLamasList].client_history.da_08_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_09) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_09 = $scope.lamasList[contLamasList].client_history.da_09_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_10) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_10 = $scope.lamasList[contLamasList].client_history.da_10_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_11) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_11 = $scope.lamasList[contLamasList].client_history.da_11_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_12) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_12 = $scope.lamasList[contLamasList].client_history.da_12_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_13) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_13 = $scope.lamasList[contLamasList].client_history.da_13_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_14) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_14 = $scope.lamasList[contLamasList].client_history.da_14_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_15) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_15 = $scope.lamasList[contLamasList].client_history.da_15_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_16) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_16 = $scope.lamasList[contLamasList].client_history.da_16_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_17) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_17 = $scope.lamasList[contLamasList].client_history.da_17_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_18) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_18 = $scope.lamasList[contLamasList].client_history.da_18_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_19) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_19 = $scope.lamasList[contLamasList].client_history.da_19_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.lamasList[contLamasList].client_history.codPromo_20) {
                            $scope.lamasList[contLamasList].consultDateWithCupon_20 = $scope.lamasList[contLamasList].client_history.da_20_01;
                        } else {
                            $scope.lamasList[contLamasList].consultDateWithCupon_20 = " ";
                        }

                        contLamasList++;
                    }

                    //venceslau
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultajoaovenceslau") {
                        $scope.venceslauList[contVenceslauList] = $scope.usersList[i];
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_01) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_01 = $scope.venceslauList[contVenceslauList].client_history.da_01_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_02) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_02 = $scope.venceslauList[contVenceslauList].client_history.da_02_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_03) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_03 = $scope.venceslauList[contVenceslauList].client_history.da_03_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_04) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_04 = $scope.venceslauList[contVenceslauList].client_history.da_04_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_05) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_05 = $scope.venceslauList[contVenceslauList].client_history.da_05_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_06) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_06 = $scope.venceslauList[contVenceslauList].client_history.da_06_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_07) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_07 = $scope.venceslauList[contVenceslauList].client_history.da_07_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_08) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_08 = $scope.venceslauList[contVenceslauList].client_history.da_08_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_09) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_09 = $scope.venceslauList[contVenceslauList].client_history.da_09_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_10) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_10 = $scope.venceslauList[contVenceslauList].client_history.da_10_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_11) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_11 = $scope.venceslauList[contVenceslauList].client_history.da_11_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_12) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_12 = $scope.venceslauList[contVenceslauList].client_history.da_12_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_13) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_13 = $scope.venceslauList[contVenceslauList].client_history.da_13_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_14) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_14 = $scope.venceslauList[contVenceslauList].client_history.da_14_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_15) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_15 = $scope.venceslauList[contVenceslauList].client_history.da_15_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_16) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_16 = $scope.venceslauList[contVenceslauList].client_history.da_16_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_17) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_17 = $scope.venceslauList[contVenceslauList].client_history.da_17_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_18) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_18 = $scope.venceslauList[contVenceslauList].client_history.da_18_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_19) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_19 = $scope.venceslauList[contVenceslauList].client_history.da_19_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.venceslauList[contVenceslauList].client_history.codPromo_20) {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_20 = $scope.venceslauList[contVenceslauList].client_history.da_20_01;
                        } else {
                            $scope.venceslauList[contVenceslauList].consultDateWithCupon_20 = " ";
                        }

                        contVenceslauList++;
                    }

                    //geadas
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultapedrogeadas") {
                        $scope.geadasList[contGeadasList] = $scope.usersList[i];
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_01) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_01 = $scope.geadasList[contGeadasList].client_history.da_01_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_02) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_02 = $scope.geadasList[contGeadasList].client_history.da_02_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_03) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_03 = $scope.geadasList[contGeadasList].client_history.da_03_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_04) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_04 = $scope.geadasList[contGeadasList].client_history.da_04_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_05) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_05 = $scope.geadasList[contGeadasList].client_history.da_05_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_06) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_06 = $scope.geadasList[contGeadasList].client_history.da_06_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_07) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_07 = $scope.geadasList[contGeadasList].client_history.da_07_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_08) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_08 = $scope.geadasList[contGeadasList].client_history.da_08_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_09) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_09 = $scope.geadasList[contGeadasList].client_history.da_09_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_10) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_10 = $scope.geadasList[contGeadasList].client_history.da_10_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_11) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_11 = $scope.geadasList[contGeadasList].client_history.da_11_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_12) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_12 = $scope.geadasList[contGeadasList].client_history.da_12_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_13) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_13 = $scope.geadasList[contGeadasList].client_history.da_13_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_14) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_14 = $scope.geadasList[contGeadasList].client_history.da_14_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_15) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_15 = $scope.geadasList[contGeadasList].client_history.da_15_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_16) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_16 = $scope.geadasList[contGeadasList].client_history.da_16_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_17) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_17 = $scope.geadasList[contGeadasList].client_history.da_17_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_18) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_18 = $scope.geadasList[contGeadasList].client_history.da_18_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_19) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_19 = $scope.geadasList[contGeadasList].client_history.da_19_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.geadasList[contGeadasList].client_history.codPromo_20) {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_20 = $scope.geadasList[contGeadasList].client_history.da_20_01;
                        } else {
                            $scope.geadasList[contGeadasList].consultDateWithCupon_20 = " ";
                        }

                        contGeadasList++;
                    }

                    //oliveira
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultaruioliveira") {
                        $scope.oliveiraList[contOliveiraList] = $scope.usersList[i];
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_01) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_01 = $scope.oliveiraList[contOliveiraList].client_history.da_01_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_02) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_02 = $scope.oliveiraList[contOliveiraList].client_history.da_02_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_03) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_03 = $scope.oliveiraList[contOliveiraList].client_history.da_03_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_04) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_04 = $scope.oliveiraList[contOliveiraList].client_history.da_04_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_05) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_05 = $scope.oliveiraList[contOliveiraList].client_history.da_05_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_06) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_06 = $scope.oliveiraList[contOliveiraList].client_history.da_06_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_07) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_07 = $scope.oliveiraList[contOliveiraList].client_history.da_07_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_08) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_08 = $scope.oliveiraList[contOliveiraList].client_history.da_08_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_09) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_09 = $scope.oliveiraList[contOliveiraList].client_history.da_09_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_10) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_10 = $scope.oliveiraList[contOliveiraList].client_history.da_10_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_11) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_11 = $scope.oliveiraList[contOliveiraList].client_history.da_11_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_12) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_12 = $scope.oliveiraList[contOliveiraList].client_history.da_12_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_13) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_13 = $scope.oliveiraList[contOliveiraList].client_history.da_13_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_14) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_14 = $scope.oliveiraList[contOliveiraList].client_history.da_14_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_15) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_15 = $scope.oliveiraList[contOliveiraList].client_history.da_15_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_16) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_16 = $scope.oliveiraList[contOliveiraList].client_history.da_16_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_17) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_17 = $scope.oliveiraList[contOliveiraList].client_history.da_17_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_18) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_18 = $scope.oliveiraList[contOliveiraList].client_history.da_18_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_19) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_19 = $scope.oliveiraList[contOliveiraList].client_history.da_19_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.oliveiraList[contOliveiraList].client_history.codPromo_20) {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_20 = $scope.oliveiraList[contOliveiraList].client_history.da_20_01;
                        } else {
                            $scope.oliveiraList[contOliveiraList].consultDateWithCupon_20 = " ";
                        }

                        contOliveiraList++;
                    }

                    //susana
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultasusanahenriques") {
                        $scope.susanaList[contSusanaList] = $scope.usersList[i];
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_01) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_01 = $scope.susanaList[contSusanaList].client_history.da_01_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_02) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_02 = $scope.susanaList[contSusanaList].client_history.da_02_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_03) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_03 = $scope.susanaList[contSusanaList].client_history.da_03_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_04) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_04 = $scope.susanaList[contSusanaList].client_history.da_04_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_05) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_05 = $scope.susanaList[contSusanaList].client_history.da_05_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_06) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_06 = $scope.susanaList[contSusanaList].client_history.da_06_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_07) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_07 = $scope.susanaList[contSusanaList].client_history.da_07_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_08) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_08 = $scope.susanaList[contSusanaList].client_history.da_08_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_09) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_09 = $scope.susanaList[contSusanaList].client_history.da_09_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_10) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_10 = $scope.susanaList[contSusanaList].client_history.da_10_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_11) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_11 = $scope.susanaList[contSusanaList].client_history.da_11_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_12) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_12 = $scope.susanaList[contSusanaList].client_history.da_12_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_13) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_13 = $scope.susanaList[contSusanaList].client_history.da_13_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_14) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_14 = $scope.susanaList[contSusanaList].client_history.da_14_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_15) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_15 = $scope.susanaList[contSusanaList].client_history.da_15_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_16) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_16 = $scope.susanaList[contSusanaList].client_history.da_16_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_17) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_17 = $scope.susanaList[contSusanaList].client_history.da_17_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_18) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_18 = $scope.susanaList[contSusanaList].client_history.da_18_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_19) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_19 = $scope.susanaList[contSusanaList].client_history.da_19_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.susanaList[contSusanaList].client_history.codPromo_20) {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_20 = $scope.susanaList[contSusanaList].client_history.da_20_01;
                        } else {
                            $scope.susanaList[contSusanaList].consultDateWithCupon_20 = " ";
                        }

                        contSusanaList++;
                    }

                    //pheonix
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultaphoenixsport") {
                        $scope.phoenixList[contPheonixList] = $scope.usersList[i];
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_01) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_01 = $scope.phoenixList[contPheonixList].client_history.da_01_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_02) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_02 = $scope.phoenixList[contPheonixList].client_history.da_02_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_03) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_03 = $scope.phoenixList[contPheonixList].client_history.da_03_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_04) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_04 = $scope.phoenixList[contPheonixList].client_history.da_04_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_05) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_05 = $scope.phoenixList[contPheonixList].client_history.da_05_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_06) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_06 = $scope.phoenixList[contPheonixList].client_history.da_06_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_07) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_07 = $scope.phoenixList[contPheonixList].client_history.da_07_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_08) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_08 = $scope.phoenixList[contPheonixList].client_history.da_08_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_09) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_09 = $scope.phoenixList[contPheonixList].client_history.da_09_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_10) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_10 = $scope.phoenixList[contPheonixList].client_history.da_10_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_11) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_11 = $scope.phoenixList[contPheonixList].client_history.da_11_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_12) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_12 = $scope.phoenixList[contPheonixList].client_history.da_12_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_13) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_13 = $scope.phoenixList[contPheonixList].client_history.da_13_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_14) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_14 = $scope.phoenixList[contPheonixList].client_history.da_14_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_15) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_15 = $scope.phoenixList[contPheonixList].client_history.da_15_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_16) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_16 = $scope.phoenixList[contPheonixList].client_history.da_16_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_17) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_17 = $scope.phoenixList[contPheonixList].client_history.da_17_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_18) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_18 = $scope.phoenixList[contPheonixList].client_history.da_18_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_19) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_19 = $scope.phoenixList[contPheonixList].client_history.da_19_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.phoenixList[contPheonixList].client_history.codPromo_20) {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_20 = $scope.phoenixList[contPheonixList].client_history.da_20_01;
                        } else {
                            $scope.phoenixList[contPheonixList].consultDateWithCupon_20 = " ";
                        }

                        contPheonixList++;
                    }

                    //barbell
                    if ($scope.usersList[i].client_detail.cuponPt === "#consultabarbellclub") {
                        $scope.barbellList[contBarbellList] = $scope.usersList[i];
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_01) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_01 = $scope.barbellList[contBarbellList].client_history.da_01_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_01 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_02) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_02 = $scope.barbellList[contBarbellList].client_history.da_02_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_02 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_03) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_03 = $scope.barbellList[contBarbellList].client_history.da_03_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_03 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_04) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_04 = $scope.barbellList[contBarbellList].client_history.da_04_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_04 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_05) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_05 = $scope.barbellList[contBarbellList].client_history.da_05_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_05 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_06) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_06 = $scope.barbellList[contBarbellList].client_history.da_06_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_06 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_07) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_07 = $scope.barbellList[contBarbellList].client_history.da_07_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_07 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_08) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_08 = $scope.barbellList[contBarbellList].client_history.da_08_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_08 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_09) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_09 = $scope.barbellList[contBarbellList].client_history.da_09_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_09 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_10) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_10 = $scope.barbellList[contBarbellList].client_history.da_10_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_10 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_11) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_11 = $scope.barbellList[contBarbellList].client_history.da_11_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_11 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_12) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_12 = $scope.barbellList[contBarbellList].client_history.da_12_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_12 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_13) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_13 = $scope.barbellList[contBarbellList].client_history.da_13_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_13 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_14) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_14 = $scope.barbellList[contBarbellList].client_history.da_14_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_14 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_15) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_15 = $scope.barbellList[contBarbellList].client_history.da_15_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_15 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_16) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_16 = $scope.barbellList[contBarbellList].client_history.da_16_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_16 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_17) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_17 = $scope.barbellList[contBarbellList].client_history.da_17_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_17 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_18) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_18 = $scope.barbellList[contBarbellList].client_history.da_18_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_18 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_19) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_19 = $scope.barbellList[contBarbellList].client_history.da_19_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_19 = " ";
                        }
                        if ($scope.barbellList[contBarbellList].client_history.codPromo_20) {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_20 = $scope.barbellList[contBarbellList].client_history.da_20_01;
                        } else {
                            $scope.barbellList[contBarbellList].consultDateWithCupon_20 = " ";
                        }

                        contBarbellList++;
                    }
                }
            }   
        });

        $scope.auth.$onAuthStateChanged(function(firebaseUser) {
            $scope.firebaseUser = firebaseUser;
        });
    }
]);
