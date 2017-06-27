app.factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        return $firebaseAuth();
    }
]);

app.factory("usersList", ["$firebaseArray",
    function($firebaseArray) {
        // create a reference to the database where we will store our data
        var ref = firebase.database().ref();
        return $firebaseArray(ref);
    }
]);

app.factory("storageLoc", ["$firebaseStorage",
    function($firebaseStorage) {
        var storageRef = firebase.storage().ref();
        return $firebaseStorage(storageRef);
    }
]);

app.directive('showButton', ['webNotification', function (webNotification) {
    return {
        restrict: 'C',
        scope: {
            notificationTitle: '=',
            notificationText: '='
        },
        link: function (scope, element) {
            element.on('click', function onClick() {
                webNotification.showNotification(scope.notificationTitle, {
                    body: scope.notificationText,
                    icon: '/images/test.ico',
                    onClick: function onNotificationClicked() {
                        console.log('Notification clicked.');
                    },
                    autoClose: 6000 //auto close the notification after 4 seconds (you can manually close it via hide function)
                }, function onShow(error, hide) {
                    if (error) {
                        window.alert('Unable to show notification: ' + error.message);
                    } else {
                        console.log('Notification Shown.');

                        setTimeout(function hideNotification() {
                            console.log('Hiding notification....');
                            hide(); //manually close the notification (you can skip this if you use the autoClose option)
                        }, 5000);
                    }
                });
            });
        }
    };
}]);

app.controller('NavLogCtrl', ['$scope', 'Auth', 
    function($scope, Auth) {
        $scope.auth = Auth;

        $scope.auth.$onAuthStateChanged(function(firebaseUser) {
            $scope.firebaseUser = firebaseUser;
        });
    }
]);

app.controller('MainCtrl', ['$scope', 'Auth', '$location', 'currentAuth', 'usersList', '$mdSidenav', '$mdDialog', '$firebaseStorage',
    function($scope, Auth, $location, currentAuth, usersList, $mdSidenav, $mdDialog, $firebaseStorage, $timeout) {   
        
        $scope.usersList = {};
        $scope.clientDetail = {"pos":1};
        $scope.clientForm = {"pos":1};
        $scope.clientHist = {"pos":1};
        $scope.saveUserDetails = {};
        $scope.getPostDetails = {};
        /*$scope.userNumber = {};*/
        $scope.ccggii = false;

        $scope.isUser = true;
        $scope.isPassReset = false;
        $scope.isNewUser = false;

        $scope.showHideActividade = false;
        $scope.isPersonDetails = false;
        $scope.isPersonQuiz = false;

        $scope.auth = Auth;
        $scope.admin = true;

        $scope.quizSpyder = {};
        $scope.spyderResult = {};
        $scope.refresca = {};

        $scope.status = '  ';
        $scope.customFullscreen = false;
        $scope.showAlert = {};

        $scope.dayList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

        $scope.monthList = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        $scope.monthListN = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

        $scope.yearList = ["2016", "2017"];

        $scope.consultLocal = [
            "100% Natur", "Farmácia Uruguai", "Bakery CrossFit", "Box1RM", "CGI", "CrossFit 351", "Crossfit Almada", "CrossFit Coimbra", "CrossFit Fátima", "Crossfit Leiria", "CrossFit Odivelas", "CrossFit Torres Novas", "Formas Fitness", "Mean Machine", "Nutriscoop", "Oeste Cross Box", "Silver Coast", "Wiva Tomar", "Wiva Torres Novas"
        ];

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
                    .ariaLabel('Alert Dialog')
                    .ok('Fechar')
                    .targetEvent(ev)
            );
            
            $scope.clientDetail.quizSpyder.spyderQuizComplete = true;
            var quizDateComplete = new Date();
            $scope.clientDetail.quizSpyder.quizDate = quizDateComplete.toString();
            location.reload();
        }; 


        var saveStatus;
        var postKey;
        var postIndex;

        var P = 0,
            E = 0,
            M = 0,
            Es = 0;    

        $scope.whatsSpyder = function () {
            if ($scope.clientDetail.quizSpyder.pe01) { 
                P++;
                E++;
            }
            if ($scope.clientDetail.quizSpyder.pe02) {
                P++;
                E++;
            }
            if ($scope.clientDetail.quizSpyder.pe03) {
                P++;
                E++;
            }
            if ($scope.clientDetail.quizSpyder.pm04) {
                P++;
                M++;
            }
            if ($scope.clientDetail.quizSpyder.pm05) {
                P++;
                M++;
            }
            if ($scope.clientDetail.quizSpyder.pm06) {
                P++;
                M++;
            }
            if ($scope.clientDetail.quizSpyder.ee07) {
                E++;
                Es++;
            }
            if ($scope.clientDetail.quizSpyder.ee08) {
                E++;
                Es++;
            }
            if ($scope.clientDetail.quizSpyder.ee09) {
                E++;
                Es++;
            }
            if ($scope.clientDetail.quizSpyder.em10) {
                Es++;
                M++;
            }
            if ($scope.clientDetail.quizSpyder.em11) {
                Es++;
                M++;
            }
            if ($scope.clientDetail.quizSpyder.em12) {
                Es++;
                M++
            }

            var spyderList = [
                {type: "Prático", value: P},
                {type: "Emocional", value: E},
                {type: "Mental", value: M},
                {type: "Espiritual", value: Es}
            ];

            $scope.clientDetail.quizSpyder.spyderList = spyderList;

            function orderSpyders () {

                spyderList.sort(function(a, b){return b.value - a.value});

                if (spyderList[0].type === "Prático") {
                    $scope.spyderResult = {
                        type: spyderList[0].type + ' ' + spyderList[1].type, 
                        value1: spyderList[0].value,
                        value2: spyderList[1].value
                    };
                }
                
                if (spyderList[1].type === "Prático") {
                    $scope.spyderResult = {
                        type: spyderList[1].type + ' ' + spyderList[0].type, 
                        value1: spyderList[0].value,
                        value2: spyderList[1].value
                    };
                }

                if (spyderList[0].type === "Espiritual" && spyderList[1].type === "Emocional" || spyderList[1].type === "Espiritual" && spyderList[0].type === "Emocional") {
                    $scope.spyderResult = {
                        type: spyderList[1].type + ' ' + spyderList[0].type, 
                        value1: spyderList[0].value,
                        value2: spyderList[1].value
                    };
                }


                if (spyderList[0].type === "Mental" && spyderList[1].type === "Espiritual" || spyderList[1].type === "Mental" && spyderList[0].type === "Espiritual") {
                    $scope.spyderResult = {
                        type: spyderList[1].type + ' ' + spyderList[0].type, 
                        value1: spyderList[0].value,
                        value2: spyderList[1].value
                    };
                }
                $scope.showAlert($scope.spyderResult);
                
                $scope.clientDetail.quizSpyder.spyderType = $scope.spyderResult;
            };

            orderSpyders();
            $scope.saveUserDetails();
        };



        usersList.$loaded().then(function() {
            $scope.usersList = usersList;
            $scope.clientDetail.email = $scope.firebaseUser.email;

            var i;
            /*console.log($scope.usersList);*/
            for (i = 0; i < usersList.length; i++) {
                if ($scope.firebaseUser.uid === usersList[i].from) {
                    $scope.clientDetail = usersList[i].client_detail;
                    $scope.clientForm = usersList[i].client_form;
                    saveStatus = usersList[i].save_status;
                    postKey = usersList[i].$id;
                    postIndex = i;
                    $scope.clientDetail.email = $scope.firebaseUser.email;
                    if ($scope.clientDetail.codBis == "#CGI") {
                        $scope.ccggii = true;
                    }

                    var ageBirthday = $scope.clientDetail.dayBirth + '/' + $scope.clientDetail.monthBirth + '/' + $scope.clientDetail.yearBirth;
                    var monthBirthTemp;

                    if ($scope.clientDetail.birthday != null) {
                        $scope.clientDetail.yearBirth = $scope.clientDetail.birthday.substr($scope.clientDetail.birthday.length - 4);
                        monthBirthTemp = $scope.clientDetail.birthday.substr(3,2);
                        $scope.clientDetail.dayBirth = $scope.clientDetail.birthday.substr(0,2);
                        
                        if (monthBirthTemp == 01) {
                            $scope.clientDetail.monthBirth = "Janeiro";
                        } 
                        if (monthBirthTemp == 02) {    
                            $scope.clientDetail.monthBirth = "Fevereiro";
                        } 
                        if (monthBirthTemp == 03) {    
                            $scope.clientDetail.monthBirth = "Março";
                        } 
                        if (monthBirthTemp == 04) {  
                            $scope.clientDetail.monthBirth = "Abril";
                        } 
                        if (monthBirthTemp == 05) {  
                            $scope.clientDetail.monthBirth = "Maio";
                        } 
                        if (monthBirthTemp == 06) {  
                            $scope.clientDetail.monthBirth = "Junho";
                        } 
                        if (monthBirthTemp == 07) {
                            $scope.clientDetail.monthBirth = "Julho";
                        }
                        if (monthBirthTemp == 08) {  
                            $scope.clientDetail.monthBirth = "Agosto";
                        } 
                        if (monthBirthTemp == 09) {  
                            $scope.clientDetail.monthBirth = "Setembro";
                        } 
                        if (monthBirthTemp == 10) {  
                            $scope.clientDetail.monthBirth = "Outubro";
                        } 
                        if (monthBirthTemp == 11) {  
                            $scope.clientDetail.monthBirth = "Novembro";
                        } 
                        if (monthBirthTemp == 12) {  
                            $scope.clientDetail.monthBirth = "Dezembro";
                        }      
                    }  
                }

                if (usersList.length === i + 1) {
        
                    var exists;
        
                    for (var ci = 0; ci < usersList.length; ci++) {
                        if ($scope.firebaseUser.uid === usersList[ci].from) {
                            exists = true;
                            break;
                        } else {
                            exists = false;
                        }
                    }
                    
                    if (exists === false) {
                        saveStatus = 1;		                  
                        $scope.usersList.$add({
                            from: $scope.firebaseUser.uid,
                            client_detail: $scope.clientDetail,
                            client_form: $scope.clientForm,
                            client_history: $scope.clientHist,
                            client_number: usersList.length + 1,
                            timestamp: firebase.database.ServerValue.TIMESTAMP,
                            save_status: saveStatus 
                        }).then(function() {
                            location.reload();
                        });
                    }
                }
            }      

           /* var storageRef = firebase.storage().ref();
            var filesRef = storageRef.child('Planos/' + $scope.firebaseUser.uid + '/plano.pdf');

            filesRef.getDownloadURL().then(function(url) {
                $scope.downloadFile = url;
            }).catch(function(error) {
                console.log(error);
            });   */

        });

        
        $scope.getPostDetails = function(param) {
            var record = $scope.usersList.$getRecord(param);
            postIndex = $scope.usersList.$indexFor(param);
            $scope.clientDetail = record.client_detail;
            $scope.clientForm = record.client_form;
        };

        $scope.saveUserDetails = function() {
            if (saveStatus !== 1) {
                saveStatus = 1;		                  
                $scope.usersList.$add({
                    from: $scope.firebaseUser.uid,
                    client_detail: $scope.clientDetail,
                    client_form: $scope.clientForm,
                    client_number: usersList.length + 1,
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                    save_status: saveStatus 
                }).then(function() {
                    alert("Registo criado!");
                    location.reload();
                });
            } else {
                $scope.usersList.$save(postIndex).then(function() {
                    $scope.getPostDetails(postKey);
                    alert("Registo gravado!");  
                });
            }
        };

        $scope.saveUserDetailsButton = function() {
            if (saveStatus !== 1) {
                saveStatus = 1;		                  
                $scope.usersList.$add({
                    from: $scope.firebaseUser.uid,
                    client_detail: $scope.clientDetail,
                    client_form: $scope.clientForm,
                    client_number: usersList.length + 1,
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                    save_status: saveStatus 
                }).then(function() {
                    location.reload();
                });
            } else {
                $scope.usersList.$save(postIndex).then(function() {
                    $scope.getPostDetails(postKey);       
                });
            }
        };

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

        $scope.home = function() {
            $scope.isPersonDetails = false;
            $scope.isPersonQuiz = false;
            $scope.isPersonSpyder = false;
            $scope.notWelcome = false;
        };

        $scope.showPersonDetails = function() {
            $scope.isPersonDetails = true;
            $scope.isPersonQuiz = false;
            $scope.isPersonSpyder = false;            
            $scope.notWelcome = true;
            /*angular.element('#personQuiz').fadeOut();
            angular.element('#personDetails').fadeIn();*/
        };
        
        $scope.exitPersonDetails = function() {
            $scope.isPersonDetails = false;
            $scope.notWelcome = false;
            /*angular.element('#personDetails').fadeOut();
            angular.element('#personQuiz').fadeIn();*/
        };

        $scope.showPersonSpyder = function() {
            $scope.isPersonDetails = false;
            $scope.isPersonQuiz = false;
            $scope.isPersonSpyder = true;            
            $scope.notWelcome = true;
        }

        $scope.exitPersonSpyder = function() {
            $scope.isPersonSpyder = false;
            $scope.notWelcome = false;
            /*angular.element('#personDetails').fadeOut();
            angular.element('#personQuiz').fadeIn();*/
        };

        $scope.showPersonQuiz = function() {
            $scope.isPersonQuiz = true;
            $scope.isPersonDetails = false;
            $scope.isPersonSpyder = false;            
            $scope.notWelcome = true;
            /*angular.element('#personQuiz').fadeIn();
            angular.element('#personDetails').fadeOut();*/
        };

        $scope.exitPersonQuiz = function() {
            $scope.isPersonQuiz = false;
            $scope.notWelcome = false;
            /*angular.element('#personQuiz').fadeOut();
            angular.element('#personDetails').fadeIn();*/
        };
        
        angular.element(window).ready(function() {
            angular.element('#loading').addClass('hide');
        });

        $scope.resetPass = function() {
            $scope.isPassReset = true;
            $scope.isNewUser = false;
        }

        $scope.loginUser = function() {
            $scope.message = null;
            $scope.error = null;

            Auth.$signInWithEmailAndPassword($scope.email, $scope.password)
            .then(function(firebaseUser) {
                /*if (firebaseUser.emailVerified === true) {*/
                    $scope.firebaseUser = firebaseUser;
                    
                    location.reload();
                /*} else {
                    $location.path('/emailNotValidated'); 
                    $scope.firebaseUser = null;
                }*/
            })
            .catch(function(error) {
                $scope.error = error.code;
                $scope.message = error.message;
            }); 
        };

        $scope.resetUserPass = function(param) {
            Auth.$sendPasswordResetEmail(param).then(function() {
                alert("Foi enviado mensagem com instruções para o seu email!");
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
                location.reload();
            }).catch(function(error) {
                $scope.error = error.code;
                $scope.message = error.message;
            }); 
        };

        $scope.nextTab = function() {
            this.selectedTab = (this.selectedTab + 1) % 4;
            $scope.saveUserDetailsButton();
            angular.element("html, body").animate({ scrollTop: 0 }, "slow");
        };

        $scope.prevTab = function() {
            this.selectedTab = (this.selectedTab - 1) % 4;
            $scope.saveUserDetailsButton();
            angular.element("html, body").animate({ scrollTop: 0 }, "slow");
        };
        /*$scope.deleteUser = function() {
            $scope.message = null;
            $scope.error = null;

            // Delete the currently signed-in user
            Auth.$deleteUser().then(function() {
                $scope.message = "User deleted";
            }).catch(function(error) {
                $scope.error = error;
            });
        };*/

    }

]);