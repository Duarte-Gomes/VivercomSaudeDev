app.directive('fileModel',['$parse', function ($parse){
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('change', function () {
                $parse(attrs.fileModel)
                .assign(scope, element[0].files[0])
                scope.$apply();
            })
        }
    }
}]);
  
app.controller('AdminCtrl', ['$scope', 'Auth', '$location', 'currentAuth', 'usersList', 'localList', 'suplementsList', 'clientsAppointmentsHistorical', '$firebaseStorage', '$interval',
    function($scope, Auth, $location, currentAuth, usersList, localList, suplementsList, clientsAppointmentsHistorical, $firebaseStorage, $interval) {

        $scope.uploadFile = function(file) {

            var storageRef = firebase.storage().ref('Planos/' + $scope.firebaseUser.uid + '/' + file.name);
            
            var storage = $firebaseStorage(storageRef);
            var uploadTask = storage.$put(file);

            uploadTask.$complete(function(snapshot) {
                $scope.clientDetail.downloadURL = snapshot.downloadURL;

                $scope.usersList.$save(postIndex).then(function() {
                    $scope.getDetails(usersList[postIndex].$id);
                });
            });
        };

        $scope.loading = true;
        
        $scope.title;
        $scope.text;

        $scope.inputAge = {};
        $scope.prox = {};
        $scope.hist = {};
        $scope.aniversario = {};
        $scope.front = {}
        $scope.clientDetail = {};
        $scope.clientForm = {};
        $scope.clientHist = {};
        $scope.consult = {};
        $scope.tempScope = {};
        /*$scope.usersList = {};*/
        var saveStatus;
        var postKey;
        var postIndex;
        $scope.myTimeout = null;

        /* function mySaveTimeout() {
            myTimeout = setTimeout(
                $scope.saveUserDetailsTimeout, 60000
            ); 
        } */

        $scope.showDetails = false;
        $scope.adminDivClientHistory = true;

        $scope.clientTypeList = [
            "ProgramaFit", 
            "ProgramaGestaoDePeso", 
            "ProgramaSaude"
        ]
        
        $scope.blockQuizFunc = function(){
            $scope.clientDetail.isQuizFuncBlock = true;
        };

        $scope.unblockQuizFunc = function(){
            $scope.clientDetail.isQuizFuncBlock = false;
        };

        $scope.blockMetasFunc = function(){
            $scope.clientDetail.blockMetasFunc = false;
        };

        $scope.unblockMetasFunc = function(){
            $scope.clientDetail.blockMetasFunc = true;
        };

        $scope.adminHome = function() {
            angular.element("html, body").animate({ scrollTop: 0 }, "fast")
            $scope.adminDivHome = true;
            $scope.adminDivClientDetails = false;
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas01 = false;
            $scope.adminDivClientMetas02 = false;
            $scope.adminDivClientMetas03 = false;
            $scope.adminDivClientMetas04 = false;
            $scope.adminDivClientMetas05 = false;
            $scope.adminDivClientMetas06 = false;
            $scope.adminDivClientMetas07 = false;
            $scope.adminDivClientMetas08 = false;
            $scope.adminDivClientMetas09 = false;
            $scope.adminDivClientMetas10 = false;
            $scope.adminDivClientMetas11 = false;
            $scope.adminDivClientMetas12 = false;
            $scope.adminDivClientHistory = false;
            $scope.adminDivClientAntropo = false;            
            $scope.adminDivClientQuizFunc = false;
        };
        $scope.adminClientDetails = function() {
            angular.element("html, body").animate({ scrollTop: 0 }, "fast")
            $scope.adminDivHome = false;
            $scope.adminDivClientDetails = true;
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas01 = false;
            $scope.adminDivClientMetas02 = false;
            $scope.adminDivClientMetas03 = false;
            $scope.adminDivClientMetas04 = false;
            $scope.adminDivClientMetas05 = false;
            $scope.adminDivClientMetas06 = false;
            $scope.adminDivClientMetas07 = false;
            $scope.adminDivClientMetas08 = false;
            $scope.adminDivClientMetas09 = false;
            $scope.adminDivClientMetas10 = false;
            $scope.adminDivClientMetas11 = false;
            $scope.adminDivClientMetas12 = false;
            $scope.adminDivClientHistory = false;
            $scope.adminDivClientAntropo = false;                        
            $scope.adminDivClientQuizFunc = false;
        };
        $scope.adminClientMetas = function() {
            angular.element("html, body").animate({ scrollTop: 0 }, "fast")
            $scope.adminDivHome = false;
            $scope.adminDivClientDetails = false;
            $scope.adminDivClientMetasList = true;
            $scope.adminDivClientMetas01 = false;
            $scope.adminDivClientMetas02 = false;
            $scope.adminDivClientMetas03 = false;
            $scope.adminDivClientMetas04 = false;
            $scope.adminDivClientMetas05 = false;
            $scope.adminDivClientMetas06 = false;
            $scope.adminDivClientMetas07 = false;
            $scope.adminDivClientMetas08 = false;
            $scope.adminDivClientMetas09 = false;
            $scope.adminDivClientMetas10 = false;
            $scope.adminDivClientMetas11 = false;
            $scope.adminDivClientMetas12 = false;
            $scope.adminDivClientHistory = false;
            $scope.adminDivClientAntropo = false;                        
            $scope.adminDivClientQuizFunc = false;
        }; 
        $scope.adminClientHistory = function() {
            angular.element("html, body").animate({ scrollTop: 0 }, "fast")
            $scope.adminDivHome = false;
            $scope.adminDivClientDetails = false;
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas01 = false;
            $scope.adminDivClientMetas02 = false;
            $scope.adminDivClientMetas03 = false;
            $scope.adminDivClientMetas04 = false;
            $scope.adminDivClientMetas05 = false;
            $scope.adminDivClientMetas06 = false;
            $scope.adminDivClientMetas07 = false;
            $scope.adminDivClientMetas08 = false;
            $scope.adminDivClientMetas09 = false;
            $scope.adminDivClientMetas10 = false;
            $scope.adminDivClientMetas11 = false;
            $scope.adminDivClientMetas12 = false;
            $scope.adminDivClientHistory = true;
            $scope.adminDivClientAntropo = false;                        
            $scope.adminDivClientQuizFunc = false;
        };
        $scope.adminClientAntropo = function() {
            angular.element("html, body").animate({ scrollTop: 0 }, "fast")
            $scope.adminDivHome = false;
            $scope.adminDivClientDetails = false;
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas01 = false;
            $scope.adminDivClientMetas02 = false;
            $scope.adminDivClientMetas03 = false;
            $scope.adminDivClientMetas04 = false;
            $scope.adminDivClientMetas05 = false;
            $scope.adminDivClientMetas06 = false;
            $scope.adminDivClientMetas07 = false;
            $scope.adminDivClientMetas08 = false;
            $scope.adminDivClientMetas09 = false;
            $scope.adminDivClientMetas10 = false;
            $scope.adminDivClientMetas11 = false;
            $scope.adminDivClientMetas12 = false;
            $scope.adminDivClientHistory = false;
            $scope.adminDivClientAntropo = true;
            $scope.adminDivClientQuizFunc = false;
        };
        $scope.adminClientQuizFunc = function() {
            angular.element("html, body").animate({ scrollTop: 0 }, "fast")
            $scope.adminDivHome = false;
            $scope.adminDivClientDetails = false;
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas01 = false;
            $scope.adminDivClientMetas02 = false;
            $scope.adminDivClientMetas03 = false;
            $scope.adminDivClientMetas04 = false;
            $scope.adminDivClientMetas05 = false;
            $scope.adminDivClientMetas06 = false;
            $scope.adminDivClientMetas07 = false;
            $scope.adminDivClientMetas08 = false;
            $scope.adminDivClientMetas09 = false;
            $scope.adminDivClientMetas10 = false;
            $scope.adminDivClientMetas11 = false;
            $scope.adminDivClientMetas12 = false;
            $scope.adminDivClientHistory = false;
            $scope.adminDivClientAntropo = false;                        
            $scope.adminDivClientQuizFunc = true;
        };
        $scope.showMetas01 = function() {
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas01 = true;
        };
        $scope.showMetas02 = function() {
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas02 = true;
        };
        $scope.showMetas03 = function() {
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas03 = true;
        };
        $scope.showMetas04 = function() {
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas04 = true;
        };
        $scope.showMetas05 = function() {
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas05 = true;
        };
        $scope.showMetas06 = function() {
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas06 = true;
        };
        $scope.showMetas07 = function() {
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas07 = true;
        };
        $scope.showMetas08 = function() {
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas08 = true;
        };
        $scope.showMetas09 = function() {
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas09 = true;
        };
        $scope.showMetas10 = function() {
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas10 = true;
        };
        $scope.showMetas11 = function() {
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas11 = true;
        };
        $scope.showMetas12 = function() {
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas12 = true;
        };

        $scope.showLastMeta = function() {
            if ($scope.clientHist.meta01 != null || $scope.clientHist.meta01 == null) {
                $scope.adminDivHome = false;
                $scope.adminDivClientDetails = false;
                $scope.adminDivClientMetasList = false;
                $scope.adminDivClientMetas01 = true;
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = false;
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
            if ($scope.clientHist.meta02 != null) {
                $scope.adminDivHome = false;
                $scope.adminDivClientDetails = false;
                $scope.adminDivClientMetasList = false;
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = true;
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = false;
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
            if ($scope.clientHist.meta03 != null) {
                $scope.adminDivHome = false;
                $scope.adminDivClientDetails = false;
                $scope.adminDivClientMetasList = false;
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = true;
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = false;
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
            if ($scope.clientHist.meta04 != null) {
                $scope.adminDivHome = false;
                $scope.adminDivClientDetails = false;
                $scope.adminDivClientMetasList = false;
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = true;
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = false;
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
            if ($scope.clientHist.meta05 != null) {
                $scope.adminDivHome = false;
                $scope.adminDivClientDetails = false;
                $scope.adminDivClientMetasList = false;
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = true;
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = false;
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
            if ($scope.clientHist.meta06 != null) {
                $scope.adminDivHome = false;
                $scope.adminDivClientDetails = false;
                $scope.adminDivClientMetasList = false;
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = true;
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = false;
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
            if ($scope.clientHist.meta07 != null) {
                $scope.adminDivHome = false;
                $scope.adminDivClientDetails = false;
                $scope.adminDivClientMetasList = false;
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = true;
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = false;
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
            if ($scope.clientHist.meta08 != null) {
                $scope.adminDivHome = false;
                $scope.adminDivClientDetails = false;
                $scope.adminDivClientMetasList = false;
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = true;
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = false;
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
            if ($scope.clientHist.meta09 != null) {
                $scope.adminDivHome = false;
                $scope.adminDivClientDetails = false;
                $scope.adminDivClientMetasList = false;
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = true;
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = false;
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
            if ($scope.clientHist.meta10 != null) {
                $scope.adminDivHome = false;
                $scope.adminDivClientDetails = false;
                $scope.adminDivClientMetasList = false;
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = true;
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = false;
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
            if ($scope.clientHist.meta11 != null) {
                $scope.adminDivHome = false;
                $scope.adminDivClientDetails = false;
                $scope.adminDivClientMetasList = false;
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = true;
                $scope.adminDivClientMetas12 = false;
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
            if ($scope.clientHist.meta12 != null) {
                $scope.adminDivHome = false;
                $scope.adminDivClientDetails = false;
                $scope.adminDivClientMetasList = false;
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = true;
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
        };

        $scope.showNewLineAntro = function() {
            if ($scope.hist.dateString_20 == null && $scope.hist.dateString_19 != null) {
                $scope.consult.c20 = true;
            } 
            if ($scope.hist.dateString_19 == null && $scope.hist.dateString_18 != null) {
                $scope.consult.c19 = true;
            } 
            if ($scope.hist.dateString_18 == null && $scope.hist.dateString_17 != null) {
                $scope.consult.c18 = true;
            } 
            if ($scope.hist.dateString_17 == null && $scope.hist.dateString_16 != null) {
                $scope.consult.c17 = true;
            } 
            if ($scope.hist.dateString_16 == null && $scope.hist.dateString_15 != null) {
                $scope.consult.c16 = true;
            } 
            if ($scope.hist.dateString_15 == null && $scope.hist.dateString_14 != null) {
                $scope.consult.c15 = true;
            } 
            if ($scope.hist.dateString_14 == null && $scope.hist.dateString_13 != null) {
                $scope.consult.c14 = true;
            } 
            if ($scope.hist.dateString_13 == null && $scope.hist.dateString_12 != null) {
                $scope.consult.c13 = true;
            } 
            if ($scope.hist.dateString_12 == null && $scope.hist.dateString_11 != null) {
                $scope.consult.c12 = true;
            } 
            if ($scope.hist.dateString_11 == null && $scope.hist.dateString_10 != null) {
                $scope.consult.c11 = true;
            } 
            if ($scope.hist.dateString_10 == null && $scope.hist.dateString_09 != null) {
                $scope.consult.c10 = true;
            } 
            if ($scope.hist.dateString_09 == null && $scope.hist.dateString_08 != null) {
                $scope.consult.c09 = true;
            }
            if ($scope.hist.dateString_08 == null && $scope.hist.dateString_07 != null) {
                $scope.consult.c08 = true;
            }
            if ($scope.hist.dateString_07 == null && $scope.hist.dateString_06 != null) {
                $scope.consult.c07 = true;
            }
            if ($scope.hist.dateString_06 == null && $scope.hist.dateString_05 != null) {
                $scope.consult.c06 = true;
            } 
            if ($scope.hist.dateString_05 == null && $scope.hist.dateString_04 != null) {
                $scope.consult.c05 = true;
            }
            if ($scope.hist.dateString_04 == null && $scope.hist.dateString_03 != null) {
                $scope.consult.c04 = true;
            }
            if ($scope.hist.dateString_03 == null && $scope.hist.dateString_02 != null) {
                $scope.consult.c03 = true;
            }
            if ($scope.hist.dateString_02 == null && $scope.hist.dateString_01 != null) {
                $scope.consult.c02 = true;
            }
        };

        $scope.newReport2 = function() {
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var date02 = day + '/' + month + '/' + year;

            if ($scope.clientHist.meta02 == null) {
                $scope.clientHist.meta02 = {};
                angular.copy($scope.clientHist.meta01,$scope.clientHist.meta02)
                $scope.clientHist.meta02.metaDate = date02;
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = true;
            } else {
                $scope.adminDivClientMetas01 = false;
                $scope.adminDivClientMetas02 = true;
            }
        };
        $scope.newReport3 = function() {
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var date03 = day + '/' + month + '/' + year;

            if ($scope.clientHist.meta03 == null) {
                $scope.clientHist.meta03 = {};
                angular.copy($scope.clientHist.meta02,$scope.clientHist.meta03)
                $scope.clientHist.meta03.metaDate = date03;
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = true;
            } else {
                $scope.adminDivClientMetas02 = false;
                $scope.adminDivClientMetas03 = true;
            }
        };
        $scope.newReport4 = function() {
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var date04 = day + '/' + month + '/' + year;

            if ($scope.clientHist.meta04 == null) {
                $scope.clientHist.meta04 = {};
                angular.copy($scope.clientHist.meta03,$scope.clientHist.meta04)
                $scope.clientHist.meta04.metaDate = date04;
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = true;
            } else {
                $scope.adminDivClientMetas03 = false;
                $scope.adminDivClientMetas04 = true;
            }
        };
        $scope.newReport5 = function() {
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var date05 = day + '/' + month + '/' + year;

            if ($scope.clientHist.meta05 == null) {
                $scope.clientHist.meta05 = {};
                angular.copy($scope.clientHist.meta04,$scope.clientHist.meta05)
                $scope.clientHist.meta05.metaDate = date05;
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = true;
            } else {
                $scope.adminDivClientMetas04 = false;
                $scope.adminDivClientMetas05 = true;
            }
        };
        $scope.newReport6 = function() {
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var date06 = day + '/' + month + '/' + year;
            
            if ($scope.clientHist.meta06 == null) {
                $scope.clientHist.meta06 = {};
                angular.copy($scope.clientHist.meta05,$scope.clientHist.meta06)
                $scope.clientHist.meta06.metaDate = date06;
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = true;
            } else {
                $scope.adminDivClientMetas05 = false;
                $scope.adminDivClientMetas06 = true;
            }
        };
        $scope.newReport7 = function() {
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var date07 = day + '/' + month + '/' + year;
            
            if ($scope.clientHist.meta07 == null) {
                $scope.clientHist.meta07 = {};
                angular.copy($scope.clientHist.meta06,$scope.clientHist.meta07)
                $scope.clientHist.meta07.metaDate = date07;
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = true;
            } else {
                $scope.adminDivClientMetas06 = false;
                $scope.adminDivClientMetas07 = true;
            }
        };

        $scope.newReport8 = function() {
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var date08 = day + '/' + month + '/' + year;
            
            if ($scope.clientHist.meta08 == null) {
                $scope.clientHist.meta08 = {};
                angular.copy($scope.clientHist.meta07,$scope.clientHist.meta08)
                $scope.clientHist.meta08.metaDate = date08;
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = true;
            } else {
                $scope.adminDivClientMetas07 = false;
                $scope.adminDivClientMetas08 = true;
            }
        };

        $scope.newReport9 = function() {
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var date09 = day + '/' + month + '/' + year;
            
            if ($scope.clientHist.meta09 == null) {
                $scope.clientHist.meta09 = {};
                angular.copy($scope.clientHist.meta08,$scope.clientHist.meta09)
                $scope.clientHist.meta09.metaDate = date09;
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = true;
            } else {
                $scope.adminDivClientMetas08 = false;
                $scope.adminDivClientMetas09 = true;
            }
        };

        $scope.newReport10 = function() {
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var date10 = day + '/' + month + '/' + year;
            
            if ($scope.clientHist.meta10 == null) {
                $scope.clientHist.meta10 = {};
                angular.copy($scope.clientHist.meta09,$scope.clientHist.meta10)
                $scope.clientHist.meta10.metaDate = date10;
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = true;
            } else {
                $scope.adminDivClientMetas09 = false;
                $scope.adminDivClientMetas10 = true;
            }
        };

        $scope.newReport11 = function() {
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var date11 = day + '/' + month + '/' + year;
            
            if ($scope.clientHist.meta11 == null) {
                $scope.clientHist.meta11 = {};
                angular.copy($scope.clientHist.meta10,$scope.clientHist.meta11)
                $scope.clientHist.meta11.metaDate = date11;
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = true;
            } else {
                $scope.adminDivClientMetas10 = false;
                $scope.adminDivClientMetas11 = true;
            }
        };

        $scope.newReport12 = function() {
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            var date12 = day + '/' + month + '/' + year;
            
            if ($scope.clientHist.meta12 == null) {
                $scope.clientHist.meta12 = {};
                angular.copy($scope.clientHist.meta11,$scope.clientHist.meta12)
                $scope.clientHist.meta12.metaDate = date12;
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = true;
            } else {
                $scope.adminDivClientMetas11 = false;
                $scope.adminDivClientMetas12 = true;
            }
        };

        $scope.auth = Auth;
        $scope.admin = false; //isto esta a ser usado????
        $scope.adminMetas = true;
        $scope.adminDash = true;

        $scope.dayList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

        $scope.monthList = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        $scope.monthListN = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

        $scope.yearList = ["2016", "2017"];

        $scope.bioTypes = [
            "Ectomorfo",
            "Ecto-Mesomorfo",
            "Mesomorfo",
            "MesoEndo-Morfo",
            "Endomorfo"
        ];

        $scope.cronoTypes = [
            "Vespertino",
            "Matutino",
            "Misto"
        ]; 

        $scope.metaProgram = [
            "Gestão Peso",
            "Saúde e Bem Estar",
            "Desporto"
        ];

        localList.$loaded().then(function() {  
            $scope.localList = localList;
        });

/*         $scope.consultLocal = [
            "100% Natur", "Externos", "Online", "Bakery CrossFit", "Box1RM", "CGI", 
            "CrossFit 351", "CrossFit Almada", "CrossFit Coimbra", "CrossFit Fátima", 
            "CrossFit Leiria", "CrossFit Odivelas", "CrossFit Torres Vedras", "CrossFit XXI", 
            "Farmácia Uruguai", "Formas Fitness", "Gabinete de Fisioterapia no Desporto", 
            "ImpactGym Moura", "Mean Machine", "Nutriscoop", "Oeste Cross Box", "Prime Body", 
            "Silver Coast", "Wiva Tomar", "Wiva Torres Novas"
        ]; */

        $scope.contactTypeList = [
            "Consulta", "Contacto Email", "Contacto Telefónico", "Orientação"
        ]

        $scope.bloodTypeList = [
            "A(+)", "A(-)", "B(+)", "B(-)", "AB(+)", "AB(-)", "O(+)", "O(-)" 
        ]

/////////////////////////////////////////////////////
////////////////////////////////////////////////////
        /* var cont = 0; */
        var logggooogggg = $scope.auth.$getAuth().uid;

        //
        //if (logggooogggg == "G0YOVeohv3XGsCdyTJixcNF9D6E2" || logggooogggg == "MpHfoH6MVfNS4UaUChcr6czxs222") {
        if (logggooogggg == "3LAlHoqUTsV73YM4THWnBH33Aix2" || logggooogggg == "LBTDdC5l3TgENbAJL6uN0BMousZ2" || logggooogggg == "li2tT7oiPZZKyjlrJoN9wrVvsRm2" || logggooogggg == "gBVyW1jW66T7Zchqv6S5puVPPc73" || logggooogggg == "9YDJ1r4aRRPySlSgwGA5v7taHG82") {
            usersList.$loaded().then(function() {
                $scope.usersList = usersList;
                for(var iii = 0; iii < usersList.length; iii++) {
                    if (typeof usersList[iii].client_history !== 'undefined') {
                        if (usersList[iii].client_history.da_20_01 == null && usersList[iii].client_history.da_19_01 != null) {
                            $scope.usersList[iii].tempScope.lastConsult = usersList[iii].client_history.da_19_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_19;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_19_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_19_Minute;
                        }
                        if (usersList[iii].client_history.da_19_01 == null && usersList[iii].client_history.da_18_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_18_01;
                            $scope.tempScope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_18;
                            $scope.tempScope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_18_Hour;
                            $scope.tempScope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_18_Minute;
                        }
                        if (usersList[iii].client_history.da_18_01 == null && usersList[iii].client_history.da_17_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_17_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_17;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_17_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_17_Minute;
                        }
                        if (usersList[iii].client_history.da_17_01 == null && usersList[iii].client_history.da_16_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_16_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_16;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_16_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_16_Minute;
                        }
                        if (usersList[iii].client_history.da_16_01 == null && usersList[iii].client_history.da_15_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_15_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_15;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_15_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_15_Minute;
                        }
                        if (usersList[iii].client_history.da_15_01 == null && usersList[iii].client_history.da_14_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_14_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_14;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_14_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_14_Minute;
                        }
                        if (usersList[iii].client_history.da_14_01 == null && usersList[iii].client_history.da_13_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_13_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_13;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_13_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_13_Minute;
                        }
                        if (usersList[iii].client_history.da_13_01 == null && usersList[iii].client_history.da_12_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_12_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_12;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_12_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_12_Minute;
                        }
                        if (usersList[iii].client_history.da_12_01 == null && usersList[iii].client_history.da_11_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_1_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_11;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_11_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_11_Minute;
                        }
                        if (usersList[iii].client_history.da_11_01 == null && usersList[iii].client_history.da_10_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da10_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_10;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_10_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_10_Minute;
                        }
                        if (usersList[iii].client_history.da_10_01 == null && usersList[iii].client_history.da_09_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_09_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_09;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_09_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_09_Minute;
                        }
                        if (usersList[iii].client_history.da_09_01 == null && usersList[iii].client_history.da_08_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_08_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_08;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_08_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_08_Minute;
                        }
                        if (usersList[iii].client_history.da_08_01 == null && usersList[iii].client_history.da_07_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_07_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_07;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_07_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_07_Minute;
                        }
                        if (usersList[iii].client_history.da_07_01 == null && usersList[iii].client_history.da_06_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_06_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_06;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_06_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_06_Minute;
                        }
                        if (usersList[iii].client_history.da_06_01 == null && usersList[iii].client_history.da_05_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_05_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_05;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_05_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_05_Minute;
                        }
                        if (usersList[iii].client_history.da_05_01 == null && usersList[iii].client_history.da_04_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_04_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_04;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_04_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_04_Minute;
                        }
                        if (usersList[iii].client_history.da_04_01 == null && usersList[iii].client_history.da_03_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_03_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_03;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_03_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_03_Minute;
                        }
                        if (usersList[iii].client_history.da_03_01 == null && usersList[iii].client_history.da_02_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_02_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_02;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_02_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_02_Minute;
                        }
                        if (usersList[iii].client_history.da_02_01 == null && usersList[iii].client_history.da_01_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_01_01;
                            $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_01;
                            $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_01_Hour;
                            $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_01_Minute;
                        }
                    } 
                }
            }).then(function() {
                $scope.loading = false;
            });
        } else {
            $location.path('/');
        }

        clientsAppointmentsHistorical.$loaded().then(function() {
            $scope.clientsAppointmentsHistorical = clientsAppointmentsHistorical;
        });

        $scope.gravarhist = function() {
            $scope.clientsAppointmentsHistorical.$add({
                clientAppointment: "gravou2" 
            }).then(function() {
                alert("Registo criado!");
            });
        }

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

        //get details 
        ////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////// 
        ////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
        $scope.getDetails = function(logr) {
            var record = $scope.usersList.$getRecord(logr);
            postIndex = $scope.usersList.$indexFor(logr);

            $scope.clientDetail = record.client_detail;
            $scope.prox.proxConsult = $scope.clientDetail.proxConsult;

            $scope.clientForm = record.client_form;
            $scope.clientHist = record.client_history;
            
            $scope.hist.dateString_01 = $scope.clientHist.da_01_01;
            $scope.hist.dateString_02 = $scope.clientHist.da_02_01;
            $scope.hist.dateString_03 = $scope.clientHist.da_03_01;
            $scope.hist.dateString_04 = $scope.clientHist.da_04_01;
            $scope.hist.dateString_05 = $scope.clientHist.da_05_01;
            $scope.hist.dateString_06 = $scope.clientHist.da_06_01; 
            $scope.hist.dateString_07 = $scope.clientHist.da_07_01; 
            $scope.hist.dateString_08 = $scope.clientHist.da_08_01; 
            $scope.hist.dateString_09 = $scope.clientHist.da_09_01; 
            $scope.hist.dateString_10 = $scope.clientHist.da_10_01; 
            $scope.hist.dateString_11 = $scope.clientHist.da_11_01; 
            $scope.hist.dateString_12 = $scope.clientHist.da_12_01; 
            $scope.hist.dateString_13 = $scope.clientHist.da_13_01; 
            $scope.hist.dateString_14 = $scope.clientHist.da_14_01; 
            $scope.hist.dateString_15 = $scope.clientHist.da_15_01; 
            $scope.hist.dateString_16 = $scope.clientHist.da_16_01; 
            $scope.hist.dateString_17 = $scope.clientHist.da_17_01; 
            $scope.hist.dateString_18 = $scope.clientHist.da_18_01; 
            $scope.hist.dateString_19 = $scope.clientHist.da_19_01; 
            $scope.hist.dateString_20 = $scope.clientHist.da_20_01; 

            $scope.prox.proxConsult20 = $scope.clientHist.proxConsult_20;
            $scope.prox.proxConsult19 = $scope.clientHist.proxConsult_19;
            $scope.prox.proxConsult18 = $scope.clientHist.proxConsult_18;
            $scope.prox.proxConsult17 = $scope.clientHist.proxConsult_17;
            $scope.prox.proxConsult16 = $scope.clientHist.proxConsult_16;
            $scope.prox.proxConsult15 = $scope.clientHist.proxConsult_15;
            $scope.prox.proxConsult14 = $scope.clientHist.proxConsult_14;
            $scope.prox.proxConsult13 = $scope.clientHist.proxConsult_13;
            $scope.prox.proxConsult12 = $scope.clientHist.proxConsult_12;
            $scope.prox.proxConsult11 = $scope.clientHist.proxConsult_11;
            $scope.prox.proxConsult10 = $scope.clientHist.proxConsult_10;
            $scope.prox.proxConsult9 = $scope.clientHist.proxConsult_09;
            $scope.prox.proxConsult8 = $scope.clientHist.proxConsult_08;
            $scope.prox.proxConsult7 = $scope.clientHist.proxConsult_07;
            $scope.prox.proxConsult6 = $scope.clientHist.proxConsult_06;
            $scope.prox.proxConsult5 = $scope.clientHist.proxConsult_05;
            $scope.prox.proxConsult4 = $scope.clientHist.proxConsult_04;
            $scope.prox.proxConsult3 = $scope.clientHist.proxConsult_03;
            $scope.prox.proxConsult2 = $scope.clientHist.proxConsult_02;
            $scope.prox.proxConsult1 = $scope.clientHist.proxConsult_01;

            var pos01, pos02, pos03, pos04;
            //12
            if ($scope.clientHist.meta12 != null) {
                switch ($scope.clientHist.meta12.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta12.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta12.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta12.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //11
            if ($scope.clientHist.meta11 != null) {
                switch ($scope.clientHist.meta11.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta11.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta11.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta11.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //10
            if ($scope.clientHist.meta10 != null) {
                switch ($scope.clientHist.meta10.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta10.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta10.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta10.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //9
            if ($scope.clientHist.meta09 != null) {
                switch ($scope.clientHist.meta09.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta09.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta09.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta09.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //8
            if ($scope.clientHist.meta08 != null) {
                switch ($scope.clientHist.meta08.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta08.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta08.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta08.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //7
            if ($scope.clientHist.meta07 != null) {
                switch ($scope.clientHist.meta07.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta07.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta07.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta07.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //6
            if ($scope.clientHist.meta06 != null) {
                switch ($scope.clientHist.meta06.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta06.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta06.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta06.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //5
            if ($scope.clientHist.meta05 != null && $scope.clientHist.meta06 == null) {
                switch ($scope.clientHist.meta05.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta05.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta05.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta05.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //4
            if ($scope.clientHist.meta04 != null && $scope.clientHist.meta05 == null) {
                switch ($scope.clientHist.meta04.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta04.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta04.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta04.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //3
            if ($scope.clientHist.meta03 != null && $scope.clientHist.meta04 == null) {
                switch ($scope.clientHist.meta03.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta03.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta03.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta03.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //2
            if ($scope.clientHist.meta02 != null && $scope.clientHist.meta03 == null) {
                switch ($scope.clientHist.meta02.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta02.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta02.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta02.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //1
            if ($scope.clientHist.meta01 != null && $scope.clientHist.meta02 == null) {
                switch ($scope.clientHist.meta01.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta01.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta01.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta01.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }

            $scope.metasFuncionais = {};
    
            $scope.metasFuncionais.type = "ColumnChart";
            
            $scope.metasFuncionais.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Etapa", type: "number"},
                {role: "style", type: "string"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.metaPsico},
                {c: $scope.metaNutri},
                {c: $scope.metaSaude},
                {c: $scope.metaDesporto}
            ]};    

            $scope.metasFuncionais.options = {
                'title': 'Metas Funcionais',
                'legend': 'none',
                'width': '1109',
                'height': '330'
            };

            if ($scope.hist.dateString_020 != null) {
                if (!$scope.clientHist.quizhis_20_3 || !$scope.clientHist.quizhis_20_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_019 != null) {
                if (!$scope.clientHist.quizhis_19_3 || !$scope.clientHist.quizhis_19_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_018 != null) {
                if (!$scope.clientHist.quizhis_18_3 || !$scope.clientHist.quizhis_18_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_017 != null) {
                if (!$scope.clientHist.quizhis_17_3 || !$scope.clientHist.quizhis_17_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_016 != null) {
                if (!$scope.clientHist.quizhis_16_3 || !$scope.clientHist.quizhis_16_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_015 != null) {
                if (!$scope.clientHist.quizhis_15_3 || !$scope.clientHist.quizhis_15_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_014 != null) {
                if (!$scope.clientHist.quizhis_14_3 || !$scope.clientHist.quizhis_14_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_013 != null) {
                if (!$scope.clientHist.quizhis_13_3 || !$scope.clientHist.quizhis_13_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_012 != null) {
                if (!$scope.clientHist.quizhis_12_3 || !$scope.clientHist.quizhis_12_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_011 != null) {
                if (!$scope.clientHist.quizhis_11_3 || !$scope.clientHist.quizhis_11_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_010 != null) {
                if (!$scope.clientHist.quizhis_10_3 || !$scope.clientHist.quizhis_10_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            } 
            if ($scope.hist.dateString_10 == null && $scope.hist.dateString_09 != null) {
                if (!$scope.clientHist.quizhis_9_3 || !$scope.clientHist.quizhis_9_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            } 
            if ($scope.hist.dateString_09 == null && $scope.hist.dateString_08 != null) {
                if (!$scope.clientHist.quizhis_8_3 || !$scope.clientHist.quizhis_8_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_08 == null && $scope.hist.dateString_07 != null) {
                if (!$scope.clientHist.quizhis_7_3 || !$scope.clientHist.quizhis_7_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_07 == null && $scope.hist.dateString_06 != null) {
                if (!$scope.clientHist.quizhis_6_3 || !$scope.clientHist.quizhis_6_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_06 == null && $scope.hist.dateString_05 != null) {
                if (!$scope.clientHist.quizhis_5_3 || !$scope.clientHist.quizhis_5_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            } 
            if ($scope.hist.dateString_05 == null && $scope.hist.dateString_04 != null) {
                if (!$scope.clientHist.quizhis_4_3 || !$scope.clientHist.quizhis_4_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_04 == null && $scope.hist.dateString_03 != null) {
                if (!$scope.clientHist.quizhis_3_3 || !$scope.clientHist.quizhis_3_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_03 == null && $scope.hist.dateString_02 != null) {
                if (!$scope.clientHist.quizhis_2_3 || !$scope.clientHist.quizhis_2_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            if ($scope.hist.dateString_02 == null && $scope.hist.dateString_01 != null) {
                if (!$scope.clientHist.quizhis_1_3 || !$scope.clientHist.quizhis_1_2) {
                    alert('Atenção, campos vazios no histórico!!!')
                }
            }
            
            var ageBirthday = $scope.clientDetail.dayBirth + '/' + $scope.clientDetail.monthBirth + '/' + $scope.clientDetail.yearBirth;
            var monthBirthTemp;
            if ($scope.clientDetail.monthBirth == "Janeiro") {
                monthBirthTemp = 01;
            } 
            if ($scope.clientDetail.monthBirth == "Fevereiro") {    
                monthBirthTemp = 02;
            } 
            if ($scope.clientDetail.monthBirth == "Março") {    
                monthBirthTemp = 03;
            } 
            if ($scope.clientDetail.monthBirth == "Abril") {  
                monthBirthTemp = 04;
            } 
            if ($scope.clientDetail.monthBirth == "Maio") {  
                monthBirthTemp = 05;
            } 
            if ($scope.clientDetail.monthBirth == "Junho") {  
                monthBirthTemp = 06;
            } 
            if ($scope.clientDetail.monthBirth == "Julho") {
                monthBirthTemp = 07;
            }
            if ($scope.clientDetail.monthBirth == "Agosto") {  
                monthBirthTemp = 08;
            } 
            if ($scope.clientDetail.monthBirth == "Setembro") {  
                monthBirthTemp = 09;
            } 
            if ($scope.clientDetail.monthBirth == "Outubro") {  
                monthBirthTemp = 10;
            } 
            if ($scope.clientDetail.monthBirth == "Novembro") {  
                monthBirthTemp = 11;
            } 
            if ($scope.clientDetail.monthBirth == "Dezembro") {  
                monthBirthTemp = 12;
            }      

            if ($scope.clientDetail.birthday != null) {
                $scope.clientDetail.yearBirth = $scope.clientDetail.birthday.substr($scope.clientDetail.birthday.length - 4);
                monthBirthTemp = $scope.clientDetail.birthday.substr(3,2);
                $scope.clientDetail.dayBirth = $scope.clientDetail.birthday.substr(0,2);
            }

            if (ageBirthday != null) {
                //calculo da idade
                //ano e mes da data de nascimento
                var birthYear = Number($scope.clientDetail.yearBirth);
                var birthMonth = Number(monthBirthTemp);
                var birthDay = Number($scope.clientDetail.dayBirth);

                //ano e mes da data actual
                var todayDate = new Date();
                
                var todayYear = todayDate.getFullYear();
                var todayMonth = todayDate.getMonth() + 1;
                var todayDay = todayDate.getDate();

                if (todayMonth < birthMonth) {
                    $scope.inputAge.val = (todayYear - birthYear) - 1;
                } else {
                    $scope.inputAge.val = todayYear - birthYear;
                }

                if (todayMonth == birthMonth) {
                    if (todayDay < birthDay) {
                        $scope.inputAge.val = $scope.inputAge.val - 1;
                    }
                }
            }

            $scope.showDetails = true;

            /* mySaveTimeout(); */
            /* setTimeout(
                $scope.saveUserDetailsTimeout, 60000
            );  */
            $scope.myTimeout = $interval($scope.saveUserDetailsTimeout, 30000);
        };

        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        //getDetailsTimeout

        $scope.getDetailsTimeout = function(logr) {
            var record = $scope.usersList.$getRecord(logr);
            postIndex = $scope.usersList.$indexFor(logr);

            $scope.clientDetail = record.client_detail;
            $scope.prox.proxConsult = $scope.clientDetail.proxConsult;

            $scope.clientForm = record.client_form;
            $scope.clientHist = record.client_history;
     
            $scope.hist.dateString_01 = $scope.clientHist.da_01_01;
            $scope.hist.dateString_02 = $scope.clientHist.da_02_01;
            $scope.hist.dateString_03 = $scope.clientHist.da_03_01;
            $scope.hist.dateString_04 = $scope.clientHist.da_04_01;
            $scope.hist.dateString_05 = $scope.clientHist.da_05_01;
            $scope.hist.dateString_06 = $scope.clientHist.da_06_01; 
            $scope.hist.dateString_07 = $scope.clientHist.da_07_01; 
            $scope.hist.dateString_08 = $scope.clientHist.da_08_01; 
            $scope.hist.dateString_09 = $scope.clientHist.da_09_01; 
            $scope.hist.dateString_10 = $scope.clientHist.da_10_01; 
            $scope.hist.dateString_11 = $scope.clientHist.da_11_01; 
            $scope.hist.dateString_12 = $scope.clientHist.da_12_01; 
            $scope.hist.dateString_13 = $scope.clientHist.da_13_01; 
            $scope.hist.dateString_14 = $scope.clientHist.da_14_01; 
            $scope.hist.dateString_15 = $scope.clientHist.da_15_01; 
            $scope.hist.dateString_16 = $scope.clientHist.da_16_01; 
            $scope.hist.dateString_17 = $scope.clientHist.da_17_01; 
            $scope.hist.dateString_18 = $scope.clientHist.da_18_01; 
            $scope.hist.dateString_19 = $scope.clientHist.da_19_01; 
            $scope.hist.dateString_20 = $scope.clientHist.da_20_01; 

            $scope.prox.proxConsult20 = $scope.clientHist.proxConsult_20;
            $scope.prox.proxConsult19 = $scope.clientHist.proxConsult_19;
            $scope.prox.proxConsult18 = $scope.clientHist.proxConsult_18;
            $scope.prox.proxConsult17 = $scope.clientHist.proxConsult_17;
            $scope.prox.proxConsult16 = $scope.clientHist.proxConsult_16;
            $scope.prox.proxConsult15 = $scope.clientHist.proxConsult_15;
            $scope.prox.proxConsult14 = $scope.clientHist.proxConsult_14;
            $scope.prox.proxConsult13 = $scope.clientHist.proxConsult_13;
            $scope.prox.proxConsult12 = $scope.clientHist.proxConsult_12;
            $scope.prox.proxConsult11 = $scope.clientHist.proxConsult_11;
            $scope.prox.proxConsult10 = $scope.clientHist.proxConsult_10;
            $scope.prox.proxConsult9 = $scope.clientHist.proxConsult_09;
            $scope.prox.proxConsult8 = $scope.clientHist.proxConsult_08;
            $scope.prox.proxConsult7 = $scope.clientHist.proxConsult_07;
            $scope.prox.proxConsult6 = $scope.clientHist.proxConsult_06;
            $scope.prox.proxConsult5 = $scope.clientHist.proxConsult_05;
            $scope.prox.proxConsult4 = $scope.clientHist.proxConsult_04;
            $scope.prox.proxConsult3 = $scope.clientHist.proxConsult_03;
            $scope.prox.proxConsult2 = $scope.clientHist.proxConsult_02;
            $scope.prox.proxConsult1 = $scope.clientHist.proxConsult_01;

            var pos01, pos02, pos03, pos04;
            //12
            if ($scope.clientHist.meta12 != null) {
                switch ($scope.clientHist.meta12.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta12.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta12.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta12.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //11
            if ($scope.clientHist.meta11 != null) {
                switch ($scope.clientHist.meta11.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta11.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta11.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta11.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //10
            if ($scope.clientHist.meta10 != null) {
                switch ($scope.clientHist.meta10.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta10.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta10.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta10.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //9
            if ($scope.clientHist.meta09 != null) {
                switch ($scope.clientHist.meta09.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta09.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta09.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta09.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //8
            if ($scope.clientHist.meta08 != null) {
                switch ($scope.clientHist.meta08.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta08.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta08.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta08.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //7
            if ($scope.clientHist.meta07 != null) {
                switch ($scope.clientHist.meta07.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta07.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta07.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta07.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //6
            if ($scope.clientHist.meta06 != null) {
                switch ($scope.clientHist.meta06.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta06.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta06.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta06.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //5
            if ($scope.clientHist.meta05 != null && $scope.clientHist.meta06 == null) {
                switch ($scope.clientHist.meta05.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta05.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta05.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta05.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //4
            if ($scope.clientHist.meta04 != null && $scope.clientHist.meta05 == null) {
                switch ($scope.clientHist.meta04.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta04.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta04.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta04.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //3
            if ($scope.clientHist.meta03 != null && $scope.clientHist.meta04 == null) {
                switch ($scope.clientHist.meta03.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta03.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta03.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta03.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //2
            if ($scope.clientHist.meta02 != null && $scope.clientHist.meta03 == null) {
                switch ($scope.clientHist.meta02.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta02.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta02.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta02.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }
            //1
            if ($scope.clientHist.meta01 != null && $scope.clientHist.meta02 == null) {
                switch ($scope.clientHist.meta01.meta_01_pos) {
                    case "1":
                        pos01 = 0;
                        break;
                    case "2":
                        pos01 = 25;
                        break;
                    case "3":
                        pos01 = 50;
                        break;
                    case "4":
                        pos01 = 75;
                        break;
                    case "5":
                        pos01 = 100;
                        break;
                }
                $scope.metaSaude = [
                    {v: "Saude"},
                    {v: pos01},
                    {v: '#0886d4'}
                ];;
                switch ($scope.clientHist.meta01.meta_02_pos) {
                    case "1":
                        pos02 = 0;
                        break;
                    case "2":
                        pos02 = 25;
                        break;
                    case "3":
                        pos02 = 50;
                        break;
                    case "4":
                        pos02 = 75;
                        break;
                    case "5":
                        pos02 = 100;
                        break;
                }
                $scope.metaDesporto = [
                    {v: "Desporto"},
                    {v: pos02},
                    {v: '#cf0000'}
                ];
                switch ($scope.clientHist.meta01.meta_03_pos) {
                    case "1":
                        pos03 = 0;
                        break;
                    case "2":
                        pos03 = 25;
                        break;
                    case "3":
                        pos03 = 50;
                        break;
                    case "4":
                        pos03 = 75;
                        break;
                    case "5":
                        pos03 = 100;
                        break;
                }
                $scope.metaPsico = [
                    {v: "Psicologia"},
                    {v: pos03},
                    {v: '#ffd900'}
                ];
                switch ($scope.clientHist.meta01.meta_04_pos) {
                    case "1":
                        pos04 = 0;
                        break;
                    case "2":
                        pos04 = 25;
                        break;
                    case "3":
                        pos04 = 50;
                        break;
                    case "4":
                        pos04 = 75;
                        break;
                    case "5":
                        pos04 = 100;
                        break;
                }
                $scope.metaNutri = [
                    {v: "Nutrição"},
                    {v: pos04},
                    {v: '#00bd13'}
                ];
            }

            $scope.metasFuncionais = {};
    
            $scope.metasFuncionais.type = "ColumnChart";
            
            $scope.metasFuncionais.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Etapa", type: "number"},
                {role: "style", type: "string"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.metaPsico},
                {c: $scope.metaNutri},
                {c: $scope.metaSaude},
                {c: $scope.metaDesporto}
            ]};    

            $scope.metasFuncionais.options = {
                'title': 'Metas Funcionais',
                'legend': 'none',
                'width': '1109',
                'height': '330'
            };

            var ageBirthday = $scope.clientDetail.dayBirth + '/' + $scope.clientDetail.monthBirth + '/' + $scope.clientDetail.yearBirth;
            var monthBirthTemp;
            if ($scope.clientDetail.monthBirth == "Janeiro") {
                monthBirthTemp = 01;
            } 
            if ($scope.clientDetail.monthBirth == "Fevereiro") {    
                monthBirthTemp = 02;
            } 
            if ($scope.clientDetail.monthBirth == "Março") {    
                monthBirthTemp = 03;
            } 
            if ($scope.clientDetail.monthBirth == "Abril") {  
                monthBirthTemp = 04;
            } 
            if ($scope.clientDetail.monthBirth == "Maio") {  
                monthBirthTemp = 05;
            } 
            if ($scope.clientDetail.monthBirth == "Junho") {  
                monthBirthTemp = 06;
            } 
            if ($scope.clientDetail.monthBirth == "Julho") {
                monthBirthTemp = 07;
            }
            if ($scope.clientDetail.monthBirth == "Agosto") {  
                monthBirthTemp = 08;
            } 
            if ($scope.clientDetail.monthBirth == "Setembro") {  
                monthBirthTemp = 09;
            } 
            if ($scope.clientDetail.monthBirth == "Outubro") {  
                monthBirthTemp = 10;
            } 
            if ($scope.clientDetail.monthBirth == "Novembro") {  
                monthBirthTemp = 11;
            } 
            if ($scope.clientDetail.monthBirth == "Dezembro") {  
                monthBirthTemp = 12;
            }      

            if ($scope.clientDetail.birthday != null) {
                $scope.clientDetail.yearBirth = $scope.clientDetail.birthday.substr($scope.clientDetail.birthday.length - 4);
                monthBirthTemp = $scope.clientDetail.birthday.substr(3,2);
                $scope.clientDetail.dayBirth = $scope.clientDetail.birthday.substr(0,2);
            }

            if (ageBirthday != null) {
                //calculo da idade
                //ano e mes da data de nascimento
                var birthYear = Number($scope.clientDetail.yearBirth);
                var birthMonth = Number(monthBirthTemp);
                var birthDay = Number($scope.clientDetail.dayBirth);

                //ano e mes da data actual
                var todayDate = new Date();
                
                var todayYear = todayDate.getFullYear();
                var todayMonth = todayDate.getMonth() + 1;
                var todayDay = todayDate.getDate();

                if (todayMonth < birthMonth) {
                    $scope.inputAge.val = (todayYear - birthYear) - 1;
                } else {
                    $scope.inputAge.val = todayYear - birthYear;
                }

                if (todayMonth == birthMonth) {
                    if (todayDay < birthDay) {
                        $scope.inputAge.val = $scope.inputAge.val - 1;
                    }
                }
            }

            $scope.showDetails = true;

            /* mySaveTimeout(); */
          
            /* setTimeout(
                $scope.saveUserDetailsTimeout, 60000
            );  */
            /* myTimeout = $interval($scope.saveUserDetailsTimeout, 60000); */
        };

        $scope.atras = function() {
            angular.element("html, body").animate({ scrollTop: 0 }, "slow")
            $interval.cancel($scope.myTimeout);
            //location.reload();
            //if (logggooogggg == "G0YOVeohv3XGsCdyTJixcNF9D6E2" || logggooogggg == "MpHfoH6MVfNS4UaUChcr6czxs222") {
            if (logggooogggg == "3LAlHoqUTsV73YM4THWnBH33Aix2" || logggooogggg == "LBTDdC5l3TgENbAJL6uN0BMousZ2" || logggooogggg == "li2tT7oiPZZKyjlrJoN9wrVvsRm2") {
                usersList.$loaded().then(function() {
                    $scope.usersList = usersList;
                    for(var iii = 0; iii < usersList.length; iii++) {
                        if (typeof usersList[iii].client_history !== 'undefined') {
                            if (usersList[iii].client_history.da_20_01 == null && usersList[iii].client_history.da_19_01 != null) {
                                $scope.usersList[iii].tempScope.lastConsult = usersList[iii].client_history.da_19_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_19;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_19_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_19_Minute;
                            }
                            if (usersList[iii].client_history.da_19_01 == null && usersList[iii].client_history.da_18_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_18_01;
                                $scope.tempScope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_18;
                                $scope.tempScope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_18_Hour;
                                $scope.tempScope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_18_Minute;
                            }
                            if (usersList[iii].client_history.da_18_01 == null && usersList[iii].client_history.da_17_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_17_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_17;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_17_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_17_Minute;
                            }
                            if (usersList[iii].client_history.da_17_01 == null && usersList[iii].client_history.da_16_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_16_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_16;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_16_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_16_Minute;
                            }
                            if (usersList[iii].client_history.da_16_01 == null && usersList[iii].client_history.da_15_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_15_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_15;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_15_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_15_Minute;
                            }
                            if (usersList[iii].client_history.da_15_01 == null && usersList[iii].client_history.da_14_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_14_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_14;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_14_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_14_Minute;
                            }
                            if (usersList[iii].client_history.da_14_01 == null && usersList[iii].client_history.da_13_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_13_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_13;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_13_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_13_Minute;
                            }
                            if (usersList[iii].client_history.da_13_01 == null && usersList[iii].client_history.da_12_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_12_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_12;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_12_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_12_Minute;
                            }
                            if (usersList[iii].client_history.da_12_01 == null && usersList[iii].client_history.da_11_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_1_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_11;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_11_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_11_Minute;
                            }
                            if (usersList[iii].client_history.da_11_01 == null && usersList[iii].client_history.da_10_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da10_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_10;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_10_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_10_Minute;
                            }
                            if (usersList[iii].client_history.da_10_01 == null && usersList[iii].client_history.da_09_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_09_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_09;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_09_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_09_Minute;
                            }
                            if (usersList[iii].client_history.da_09_01 == null && usersList[iii].client_history.da_08_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_08_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_08;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_08_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_08_Minute;
                            }
                            if (usersList[iii].client_history.da_08_01 == null && usersList[iii].client_history.da_07_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_07_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_07;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_07_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_07_Minute;
                            }
                            if (usersList[iii].client_history.da_07_01 == null && usersList[iii].client_history.da_06_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_06_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_06;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_06_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_06_Minute;
                            }
                            if (usersList[iii].client_history.da_06_01 == null && usersList[iii].client_history.da_05_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_05_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_05;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_05_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_05_Minute;
                            }
                            if (usersList[iii].client_history.da_05_01 == null && usersList[iii].client_history.da_04_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_04_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_04;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_04_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_04_Minute;
                            }
                            if (usersList[iii].client_history.da_04_01 == null && usersList[iii].client_history.da_03_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_03_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_03;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_03_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_03_Minute;
                            }
                            if (usersList[iii].client_history.da_03_01 == null && usersList[iii].client_history.da_02_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_02_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_02;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_02_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_02_Minute;
                            }
                            if (usersList[iii].client_history.da_02_01 == null && usersList[iii].client_history.da_01_01 != null) {
                                $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_01_01;
                                $scope.tempScope.proxConsultDash = usersList[iii].client_history.proxConsult_01;
                                $scope.tempScope.proxConsultDashHour = usersList[iii].client_history.proxConsult_01_Hour;
                                $scope.tempScope.proxConsultDashMinutes = usersList[iii].client_history.proxConsult_01_Minute;
                            }
                        } 
                    }
                });
            } else {
                $location.path('/');
            }
            $scope.showDetails = false;
            $scope.adminDivHome = false;
            $scope.adminDivClientDetails = false;
            $scope.adminDivClientMetasList = false;
            $scope.adminDivClientMetas01 = false;
            $scope.adminDivClientMetas02 = false;
            $scope.adminDivClientMetas03 = false;
            $scope.adminDivClientMetas04 = false;
            $scope.adminDivClientMetas05 = false;
            $scope.adminDivClientMetas06 = false;
            $scope.adminDivClientMetas07 = false;
            $scope.adminDivClientMetas08 = false;
            $scope.adminDivClientMetas09 = false;
            $scope.adminDivClientMetas10 = false;
            $scope.adminDivClientMetas11 = false;
            $scope.adminDivClientMetas12 = false;
            $scope.adminDivClientHistory = true;
            $scope.adminDivClientAntropo = false;            
            $scope.adminDivClientQuizFunc = false;
        };

        $scope.convertObjectDate = function() {
            if ($scope.prox.proxConsult1) {
                $scope.clientHist.proxConsult_01 = $scope.prox.proxConsult1;
            }
            if ($scope.prox.proxConsult2) {
                $scope.clientHist.proxConsult_02 = $scope.prox.proxConsult2;
            }
            if ($scope.prox.proxConsult3) {
                $scope.clientHist.proxConsult_03 = $scope.prox.proxConsult3;
            }
            if ($scope.prox.proxConsult4) {
                $scope.clientHist.proxConsult_04 = $scope.prox.proxConsult4;
            }
            if ($scope.prox.proxConsult5) {
                $scope.clientHist.proxConsult_05 = $scope.prox.proxConsult5;
            }
            if ($scope.prox.proxConsult6) {
                $scope.clientHist.proxConsult_06 = $scope.prox.proxConsult6;
            }
            if ($scope.prox.proxConsult7) {
                $scope.clientHist.proxConsult_07 = $scope.prox.proxConsult7;
            }
            if ($scope.prox.proxConsult8) {
                $scope.clientHist.proxConsult_08 = $scope.prox.proxConsult8;
            }
            if ($scope.prox.proxConsult9) {
                $scope.clientHist.proxConsult_09 = $scope.prox.proxConsult9;
            }
            if ($scope.prox.proxConsult10) {
                $scope.clientHist.proxConsult_10 = $scope.prox.proxConsult10;
            }

            if ($scope.prox.proxConsult11) {
                $scope.clientHist.proxConsult_11 = $scope.prox.proxConsult11;
            }
            if ($scope.prox.proxConsult12) {
                $scope.clientHist.proxConsult_12 = $scope.prox.proxConsult12;
            }
            if ($scope.prox.proxConsult13) {
                $scope.clientHist.proxConsult_13 = $scope.prox.proxConsult13;
            }
            if ($scope.prox.proxConsult14) {
                $scope.clientHist.proxConsult_14 = $scope.prox.proxConsult14;
            }
            if ($scope.prox.proxConsult15) {
                $scope.clientHist.proxConsult_15 = $scope.prox.proxConsult15;
            }
            if ($scope.prox.proxConsult16) {
                $scope.clientHist.proxConsult_16 = $scope.prox.proxConsult16;
            }
            if ($scope.prox.proxConsult17) {
                $scope.clientHist.proxConsult_17 = $scope.prox.proxConsult17;
            }
            if ($scope.prox.proxConsult18) {
                $scope.clientHist.proxConsult_18 = $scope.prox.proxConsult18;
            }
            if ($scope.prox.proxConsult19) {
                $scope.clientHist.proxConsult_19 = $scope.prox.proxConsult19;
            }
            if ($scope.prox.proxConsult20) {
                $scope.clientHist.proxConsult_20 = $scope.prox.proxConsult20;
            }

            if ($scope.hist.dateString_01) {
                $scope.clientHist.da_01_01 = $scope.hist.dateString_01;
            }
            if ($scope.hist.dateString_02) {
                $scope.clientHist.da_02_01 = $scope.hist.dateString_02;
            }
            if ($scope.hist.dateString_03) {
                $scope.clientHist.da_03_01 = $scope.hist.dateString_03;
            }
            if ($scope.hist.dateString_04) {
                $scope.clientHist.da_04_01 = $scope.hist.dateString_04;
            }
            if ($scope.hist.dateString_05) {
                $scope.clientHist.da_05_01 = $scope.hist.dateString_05;
            }
            if ($scope.hist.dateString_06) {
                $scope.clientHist.da_06_01 = $scope.hist.dateString_06;
            }
            if ($scope.hist.dateString_07) {
                $scope.clientHist.da_07_01 = $scope.hist.dateString_07;
            }
            if ($scope.hist.dateString_08) {
                $scope.clientHist.da_08_01 = $scope.hist.dateString_08;
            }
            if ($scope.hist.dateString_09) {
                $scope.clientHist.da_09_01 = $scope.hist.dateString_09;
            }
            if ($scope.hist.dateString_10) {
                $scope.clientHist.da_10_01 = $scope.hist.dateString_10;
            }
            if ($scope.hist.dateString_11) {
                $scope.clientHist.da_11_01 = $scope.hist.dateString_11;
            }
            if ($scope.hist.dateString_12) {
                $scope.clientHist.da_12_01 = $scope.hist.dateString_12;
            }
            if ($scope.hist.dateString_13) {
                $scope.clientHist.da_13_01 = $scope.hist.dateString_13;
            }
            if ($scope.hist.dateString_14) {
                $scope.clientHist.da_14_01 = $scope.hist.dateString_14;
            }
            if ($scope.hist.dateString_15) {
                $scope.clientHist.da_15_01 = $scope.hist.dateString_15;
            }
            if ($scope.hist.dateString_16) {
                $scope.clientHist.da_16_01 = $scope.hist.dateString_16;
            }
            if ($scope.hist.dateString_17) {
                $scope.clientHist.da_17_01 = $scope.hist.dateString_17;
            }
            if ($scope.hist.dateString_18) {
                $scope.clientHist.da_18_01 = $scope.hist.dateString_18;
            }
            if ($scope.hist.dateString_19) {
                $scope.clientHist.da_19_01 = $scope.hist.dateString_19;
            }
            if ($scope.hist.dateString_20) {
                $scope.clientHist.da_20_01 = $scope.hist.dateString_20;
            }
            /* if ($scope.hist.dateStringConsult_01) {
                $scope.clientHist.quizhis_1_1 = $scope.hist.dateStringConsult_01;
            }
            if ($scope.hist.dateStringConsult_02) {
                $scope.clientHist.quizhis_2_1 = $scope.hist.dateStringConsult_02;
            }
            if ($scope.hist.dateStringConsult_03) {
                $scope.clientHist.quizhis_3_1 = $scope.hist.dateStringConsult_03;
            }
            if ($scope.hist.dateStringConsult_04) {
                $scope.clientHist.quizhis_4_1 = $scope.hist.dateStringConsult_04;
            }
            if ($scope.hist.dateStringConsult_05) {
                $scope.clientHist.quizhis_5_1 = $scope.hist.dateStringConsult_05;
            }
            if ($scope.hist.dateStringConsult_06) {
                $scope.clientHist.quizhis_6_1 = $scope.hist.dateStringConsult_06;
            } */
        }

        $scope.saveUserDetailsAdmin = function() {
            $scope.convertObjectDate();

            $scope.usersList.$save(postIndex).then(function() {
                console.log("gravado admin");
                $scope.getDetails(usersList[postIndex].$id);
            });
        };

        $scope.saveUserDetailsTimeout = function() {
            $scope.convertObjectDate();

            $scope.usersList.$save(postIndex).then(function() {
                console.log("gravado timer");
                $scope.getDetailsTimeout(usersList[postIndex].$id);
            });
        };
    }
]);
