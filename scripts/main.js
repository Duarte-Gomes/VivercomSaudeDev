app.controller('MainCtrl', ['$scope', 'Auth', '$location', 'currentAuth', 'usersList', '$mdSidenav', '$mdDialog', '$firebaseStorage',
    function($scope, Auth, $location, currentAuth, usersList, $mdSidenav, $mdDialog, $firebaseStorage, $timeout) {   

        $scope.usersList = {};
        $scope.clientDetail = {"pos": 1};
        $scope.clientForm = {"pos": 1};
        $scope.clientHist = {"pos": 1};
        $scope.firstVisit = {"pos": 1}

        $scope.loading = true;

        $scope.clientType = {};
        $scope.saveUserDetails = {};
        $scope.getPostDetails = {};

        $scope.isUser = true;

        $scope.showHideActividade = false;
        $scope.isPersonDetails = false;
        $scope.isPersonQuiz = false;
        $scope.yourWelcome = false;

        $scope.auth = Auth;
        $scope.admin = true; //isto esta a ser usado????

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
            "100% Natur", "Externos", "Online", "Bakery CrossFit", "Box1RM", "CGI", 
            "CrossFit 351", "CrossFit Almada", "CrossFit Coimbra", "CrossFit Fátima", 
            "CrossFit Leiria", "CrossFit Odivelas", "CrossFit Torres Vedras", "CrossFit XXI", 
            "Farmácia Uruguai", "Formas Fitness", "Gabinete de Fisioterapia no Desporto", 
            "ImpactGym Moura", "Mean Machine", "Nutriscoop", "Oeste Cross Box", "Prime Body", 
            "Silver Coast", "Wiva Tomar", "Wiva Torres Novas"
        ];

        $scope.bloodTypeList = [
            "A", "B", "AB", "O"
        ];

        $scope.metaProgram = [
            "Gestão Peso",
            "Saúde e Bem Estar",
            "Desporto"
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

        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        
        function checkCookie() {
            var user = getCookie("program_type");
            if(user === "ProgramaFit") {
                $scope.clientDetail.clientType = "ProgramaFit";
            }
            if(user === "ProgramaGestaoDePeso") {
                $scope.clientDetail.clientType = "ProgramaGestaoDePeso";
            }
            if(user === "ProgramaSaude") {
                $scope.clientDetail.clientType = "ProgramaSaude";
            }
            if(user === "ConsultaWellness") {
                $scope.clientDetail.clientType = "ConsultaWellness";
            }
        }
        
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

        usersList.$loaded()
            .then(function() {
                $scope.usersList = usersList;
            })
            .then(function () {
                var i;
                for (i = 0; i < usersList.length; i++) {
                    if ($scope.firebaseUser.uid === usersList[i].from) {
                        $scope.clientDetail = usersList[i].client_detail;
                        $scope.clientForm = usersList[i].client_form;
                        $scope.clientHist = usersList[i].client_history;
                        $scope.firstVisit = usersList[i].first_visit;
                        saveStatus = usersList[i].save_status;
                        postKey = usersList[i].$id;
                        postIndex = i;
                        $scope.clientDetail.email = $scope.firebaseUser.email;

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

                        checkCookie();

                        if ($scope.clientHist.meta06 != null) {
                            $scope.metasUser = $scope.clientHist.meta06;
                        }
                        if ($scope.clientHist.meta05 != null && $scope.clientHist.meta06 == null) {
                            $scope.metasUser = $scope.clientHist.meta05;
                        }
                        if ($scope.clientHist.meta04 != null && $scope.clientHist.meta05 == null) {
                            $scope.metasUser = $scope.clientHist.meta04;
                        }
                        if ($scope.clientHist.meta03 != null && $scope.clientHist.meta04 == null) {
                            $scope.metasUser = $scope.clientHist.meta03;
                        }
                        if ($scope.clientHist.meta02 != null && $scope.clientHist.meta03 == null) {
                            $scope.metasUser = $scope.clientHist.meta02;
                        }
                        if ($scope.clientHist.meta01 != null && $scope.clientHist.meta02 == null) {
                            $scope.metasUser = $scope.clientHist.meta01;
                        }

                        if ($scope.firstVisit.firstVisit == false) {
                            if ($scope.clientHist.da_01_01 == null) {
                                $scope.yourWelcome = true;
                            } else {
                                $scope.isDashboard = true;
                            }
                        }

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
                            'width': '100%',
                            'height': '330',
                            'scales': {
                                yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 0, max:100}}]
                            }
                        /*  ,
                            'colors': [
                                '#ffd900', 
                                '#00bd13', 
                                '#0886d4', 
                                '#cf0000'       
                            ] */
                        };
                    }
                    if (usersList.length === i + 1) {
                        var exists;
    
                        for (ci = 0; ci < usersList.length; ci++) {
                            if ($scope.firebaseUser.uid === usersList[ci].from) {
                                exists = true;
                                break;
                            } else {
                                exists = false;
                            }
                        }
                        
                        if (exists === false) {
                            saveStatus = 1;	
                            $scope.firstVisit.firstVisit = true;
                            if (typeof $scope.clientDetail !== 'undefined') {
                                $scope.clientDetail.email = $scope.firebaseUser.email;
                            }

                            $scope.usersList.$add({
                                from: $scope.firebaseUser.uid,
                                first_visit: $scope.firstVisit,
                                client_detail: $scope.clientDetail,
                                client_form: $scope.clientForm,
                                client_history: $scope.clientHist,
                                client_number: usersList.length + 1,
                                timestamp: firebase.database.ServerValue.TIMESTAMP,
                                save_status: saveStatus 
                            }).then(function() {
                                postIndex = ci;
                                postKey = usersList.$keyAt(ci);
                                $scope.getPostDetails(postKey);
                                //location.reload();
                            });
                        }
                    }
                    
                }
                

                if (usersList.length == 0) {
                    saveStatus = 1;	
                    $scope.firstVisit.firstVisit = true;
                    if (typeof $scope.clientDetail !== 'undefined') {
                        $scope.clientDetail.email = $scope.firebaseUser.email;
                    }

                    $scope.usersList.$add({
                        from: $scope.firebaseUser.uid,
                        first_visit: $scope.firstVisit,
                        client_detail: $scope.clientDetail,
                        client_form: $scope.clientForm,
                        client_history: $scope.clientHist,
                        client_number: usersList.length + 1,
                        timestamp: firebase.database.ServerValue.TIMESTAMP,
                        save_status: saveStatus 
                    }).then(function() {
                        postIndex = 0;
                        postKey = usersList.$keyAt(postIndex);
                        $scope.getFirstPostDetails(postKey);
                        //location.reload();
                    });
                }

            }).then(function() {
                $scope.loading = false;
            });

        $scope.getFirstPostDetails = function(param) {
            var record = $scope.usersList.$getRecord(param);
            $scope.clientDetail = record.client_detail;
            $scope.clientForm = record.client_form;
            $scope.firstVisit = record.first_visit;
        }

        $scope.saveUserDetailsFirstTime = function() {
            $scope.firstVisit.firstVisit = false;

            $scope.usersList.$save(postIndex).then(function() {
                $scope.getFirstPostDetails(postKey);  
            });
        };

        $scope.getPostDetails = function(param) {
            if (typeof param == 'undefined') {
                param = usersList.$keyAt(0);
            }
            
            var record = $scope.usersList.$getRecord(param);
            postIndex = $scope.usersList.$indexFor(param);
            $scope.clientDetail = record.client_detail;
            $scope.clientForm = record.client_form;
            $scope.firstVisit = record.first_visit;
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

        $scope.home = function() {
            if ($scope.clientHist.da_01_01 == null) {
                $scope.yourWelcome = true;
            } else {
                $scope.isDashboard = true;
            }
            $scope.isPersonQuiz = false;
            $scope.isPersonAntropo = false;
            $scope.isPersonMetas = false;            
            $scope.isPersonSpyder = false;
            $scope.isPersonDetails = false;
        };

        $scope.showPersonQuiz = function() {
            $scope.yourWelcome = false;
            $scope.isDashboard = false;
            $scope.isPersonQuiz = true;
            $scope.isPersonAntropo = false;
            $scope.isPersonMetas = false;
            $scope.isPersonSpyder = false;            
            $scope.isPersonDetails = false;
        };

        $scope.showAntropo = function() {
            $scope.yourWelcome = false;
            $scope.isDashboard = false;
            $scope.isPersonQuiz = false;
            $scope.isPersonAntropo = true;
            $scope.isPersonMetas = false;
            $scope.isPersonSpyder = false;            
            $scope.isPersonDetails = false;
        };

        $scope.showMetas = function() {
            $scope.yourWelcome = false;
            $scope.isDashboard = false;
            $scope.isPersonQuiz = false;
            $scope.isPersonAntropo = false;
            $scope.isPersonMetas = true;
            $scope.isPersonSpyder = false;            
            $scope.isPersonDetails = false;
        };

        $scope.showPersonSpyder = function() {
            $scope.yourWelcome = false;
            $scope.isDashboard = false;
            $scope.isPersonQuiz = false;
            $scope.isPersonAntropo = false;
            $scope.isPersonMetas = false;
            $scope.isPersonSpyder = true;            
            $scope.isPersonDetails = false;
        }

        $scope.showPersonDetails = function() {
            $scope.yourWelcome = false;
            $scope.isDashboard = false;
            $scope.isPersonQuiz = false;
            $scope.isPersonAntropo = false;
            $scope.isPersonMetas = false;
            $scope.isPersonSpyder = false;            
            $scope.isPersonDetails = true;
        };
        
        /* $scope.showPersonDetails = function() {
            $scope.isPersonDetails = true;
            $scope.isPersonQuiz = false;
            $scope.isPersonMetas = false;
            $scope.isPersonSpyder = false;            
            $scope.notWelcome = true;
            angular.element('#personQuiz').fadeOut();
            angular.element('#personDetails').fadeIn(); //a usar
        }; */

        /* $scope.exitPersonSpyder = function() {
            $scope.isPersonSpyder = false;
            $scope.notWelcome = false;
        }; */

        /* $scope.exitPersonQuiz = function() {
            $scope.isPersonQuiz = false;
            $scope.notWelcome = false;
        }; */

        $scope.setType = function(param) {
            if (param == "massa") {
                $scope.clientDetail.clientType = "ProgramaGestaoDePeso";
                $scope.firstVisit.firstVisit = false;
                
                $scope.yourWelcome = true;
            }
            if (param == "desporto") {
                $scope.clientDetail.clientType = "ProgramaFit";
                $scope.firstVisit.firstVisit = false;
                $scope.yourWelcome = true;
            }
            if (param == "saude") {
                $scope.clientDetail.clientType = "ProgramaSaude";
                $scope.firstVisit.firstVisit = false;
                $scope.yourWelcome = true;
            }
            $scope.saveUserDetailsFirstTime();
        }
   
        angular.element(window).ready(function() {
            angular.element('md-tab-item').click(function() {
                $scope.saveUserDetailsButton();
            });
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
        
        angular.element('#headingOne').children().children().click(function() {
            var top4 = $("#personQuiz").offset().top - 25;
            angular.element("#teste").animate({ scrollTop: top4 }, "fast");
        });
        angular.element('#headingTwo').children().children().click(function() {
            var top4 = $("#personQuiz").offset().top - 25;
            angular.element("#teste").animate({ scrollTop: top4 }, "fast");
        });
        angular.element('#headingThree').children().children().click(function() {
            var top4 = $("#personQuiz").offset().top - 25;
            angular.element("#teste").animate({ scrollTop: top4 }, "fast");
        });
        angular.element('#headingFour').children().children().click(function() {
            var top4 = $("#personQuiz").offset().top - 25;
            angular.element("#teste").animate({ scrollTop: top4 }, "fast");
        }); 

        //por isto nos outros controladores e apaagr o comentario depois
        $scope.getOut = function() {
            Auth.$signOut().then(function() {  
                $location.path('/login');
            });
        };
    }

]);
