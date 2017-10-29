app.controller('AdminCtrl', ['$scope', 'Auth', '$location', 'currentAuth', 'usersList', 'suplementsList', 'clientsAppointmentsHistorical', '$firebaseStorage',
    function($scope, Auth, $location, currentAuth, usersList, suplementsList, clientsAppointmentsHistorical, $firebaseStorag) {

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
        /*$scope.usersList = {};*/
        var saveStatus;
        var postKey;
        var postIndex;
        
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
            /* $scope.firstTime = false; */
        };

        $scope.blockMetasFunc = function(){
            $scope.clientDetail.isMetasFuncUnblock = false;
        };

        $scope.unblockMetasFunc = function(){
            $scope.clientDetail.isMetasFuncUnblock = true;
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
                $scope.adminDivClientHistory = false;
                $scope.adminDivClientAntropo = false;                        
                $scope.adminDivClientQuizFunc = false;
            }
        };

        $scope.showNewLineAntro = function() {
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

        $scope.consultLocal = [
            "100% Natur", "Externos", "Online", "Bakery CrossFit", "Box1RM", "CGI", 
            "CrossFit 351", "CrossFit Almada", "CrossFit Coimbra", "CrossFit Fátima", 
            "CrossFit Leiria", "CrossFit Odivelas", "CrossFit Torres Vedras", "CrossFit XXI", 
            "Farmácia Uruguai", "Formas Fitness", "Gabinete de Fisioterapia no Desporto", 
            "ImpactGym Moura", "Mean Machine", "Nutriscoop", "Oeste Cross Box", "Prime Body", 
            "Silver Coast", "Wiva Tomar", "Wiva Torres Novas"
        ];

        $scope.contactTypeList = [
            "Consulta", "Contacto Email", "Contacto Telefónico", "Orientação"
        ]

        $scope.bloodTypeList = [
            "A", "B", "AB", "O"
        ]

/////////////////////////////////////////////////////
////////////////////////////////////////////////////
        /* var cont = 0; */
        var logggooogggg = $scope.auth.$getAuth().uid;

        /* if (logggooogggg == "3LAlHoqUTsV73YM4THWnBH33Aix2" || logggooogggg == "LBTDdC5l3TgENbAJL6uN0BMousZ2" || logggooogggg == "li2tT7oiPZZKyjlrJoN9wrVvsRm2") { */
        if (logggooogggg == "G0YOVeohv3XGsCdyTJixcNF9D6E2" || logggooogggg == "MpHfoH6MVfNS4UaUChcr6czxs222") {
            usersList.$loaded().then(function() {
                $scope.usersList = usersList;
                for(var iii = 0; iii < usersList.length; iii++) {
                    if (typeof usersList[iii].client_history !== 'undefined') {
                        if (usersList[iii].client_history.da_10_01 == null && usersList[iii].client_history.da_09_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_09_01;
                        }
                        if (usersList[iii].client_history.da_09_01 == null && usersList[iii].client_history.da_08_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_08_01;
                        }
                        if (usersList[iii].client_history.da_08_01 == null && usersList[iii].client_history.da_07_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_07_01;
                        }
                        if (usersList[iii].client_history.da_07_01 == null && usersList[iii].client_history.da_06_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_06_01;
                        }
                        if (usersList[iii].client_history.da_06_01 == null && usersList[iii].client_history.da_05_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_05_01;
                        }
                        if (usersList[iii].client_history.da_05_01 == null && usersList[iii].client_history.da_04_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_04_01;
                        }
                        if (usersList[iii].client_history.da_04_01 == null && usersList[iii].client_history.da_03_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_03_01;
                        }
                        if (usersList[iii].client_history.da_03_01 == null && usersList[iii].client_history.da_02_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_02_01;
                        }
                        if (usersList[iii].client_history.da_02_01 == null && usersList[iii].client_history.da_01_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_01_01;
                        }
                        if (usersList[iii].client_history.da_02_01 == null && usersList[iii].client_history.da_01_01 != null) {
                            $scope.usersList[iii].client_history.lastConsult = usersList[iii].client_history.da_01_01;
                        }
                        if (usersList[iii].client_history.proxConsult_02 == null && usersList[iii].client_history.proxConsult_01 != null) {
                            $scope.usersList[iii].client_history.proxConsult = usersList[iii].client_history.proxConsult_01;
                        }
                    } 
                }
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

            if (ageBirthday != null) {
                //calculo da idade
                //ano e mes da data de nascimento
                var birthYear = $scope.clientDetail.yearBirth;
                var birthMonth = monthBirthTemp;
                var birthDay = $scope.clientDetail.dayBirth;

                //ano e mes da data actual
                var todayDate = new Date();
                
                var todayYear = todayDate.getFullYear();
                var todayMonth = todayDate.getMonth() + 1;
                var todayDay = todayDate.getDate();

                var age;

                if (todayMonth < birthMonth) {
                    age = (todayYear - birthYear) - 1;
                } else {
                    age = todayYear - birthYear;
                }

                if (todayDay < birthDay) {
                    $scope.inputAge.val = age - 1;
                } else {
                    $scope.inputAge.val = age;
                }
            }

            if (!$scope.clientDetail.locConsulta && !$scope.clientDetail.proxConsult && !$scope.clientDetail.codBis && !$scope.clientDetail.online) {
                alert('Atenção, Local Consulta ou Código Empresarial e Data Prox. Consulta não estão preenchidos!!!')
            }

            if (!$scope.clientDetail.locConsulta && !$scope.clientDetail.codBis && !$scope.clientDetail.online) {
                alert('Atenção, Local Consulta ou Código Empresarial não estão preenchidos!!!')
            }

            if (!$scope.clientDetail.proxConsult) {
                alert('Atenção, Data Prox. Consulta não está preenchida!!!')
            }

            $scope.showDetails = true;

            setTimeout(
                $scope.saveUserDetailsTimeout, 120000
            ); 
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
               /*  ,
                'colors': [
                    '#ffd900', 
                    '#00bd13', 
                    '#0886d4', 
                    '#cf0000'       
                ] */
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

            if (ageBirthday != null) {
                //calculo da idade
                //ano e mes da data de nascimento
                var birthYear = $scope.clientDetail.yearBirth;
                var birthMonth = monthBirthTemp;
                var birthDay = $scope.clientDetail.dayBirth;

                //ano e mes da data actual
                var todayDate = new Date();
                
                var todayYear = todayDate.getFullYear();
                var todayMonth = todayDate.getMonth() + 1;
                var todayDay = todayDate.getDate();

                var age;

                if (todayMonth < birthMonth) {
                    age = (todayYear - birthYear) - 1;
                } else {
                    age = todayYear - birthYear;
                }

                if (todayDay < birthDay) {
                    $scope.inputAge.val = age - 1;
                } else {
                    $scope.inputAge.val = age;
                }
            }

            $scope.showDetails = true;

            setTimeout(
                $scope.saveUserDetailsTimeout, 120000
            ); 
        };

        $scope.atras = function() {
            angular.element("html, body").animate({ scrollTop: 0 }, "slow")
            location.reload();
            $scope.showDetails = false;
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
