app.controller('MainCtrl', ['$scope', 'Auth', '$location', 'currentAuth', 'usersList', 'localList', '$mdSidenav', '$mdDialog', '$firebaseStorage',
    function($scope, Auth, $location, currentAuth, usersList, localList, $mdSidenav, $mdDialog, $firebaseStorage, $timeout) {   

        var contQuiz = 0;
        var contQuizTotal = 0;

        $scope.usersList = {};
        $scope.clientDetail = {"pos": 1};
        $scope.clientForm = {"pos": 1};
        $scope.clientHist = {"pos": 1};
        $scope.firstVisit = {"pos": 1}

        $scope.loading = true;

        $scope.clientType = {};
        $scope.saveUserDetails = {};
        $scope.getPostDetails = {};
        $scope.tempScope = {};

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

        localList.$loaded().then(function() {  
            $scope.localList = localList;
        });
        /* $scope.consultLocal = [
            "100% Natur", "Externos", "Online", "Bakery CrossFit", "Box1RM", "CGI", 
            "CrossFit 351", "CrossFit Almada", "CrossFit Coimbra", "CrossFit Fátima", 
            "CrossFit Leiria", "CrossFit Odivelas", "CrossFit Torres Vedras", "CrossFit XXI", 
            "Farmácia Uruguai", "Formas Fitness", "Gabinete de Fisioterapia no Desporto", 
            "ImpactGym Moura", "Mean Machine", "Nutriscoop", "Oeste Cross Box", "Prime Body", 
            "Silver Coast", "Wiva Tomar", "Wiva Torres Novas"
        ]; */

        $scope.bloodTypeList = [
            "A(+)", "A(-)", "B(+)", "B(-)", "AB(+)", "AB(-)", "O(+)", "O(-)"
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

                        if (typeof usersList[i].client_form !== 'undefined') {
                            //#1
                            if (usersList[i].client_form.quiz01) {
                                console.log("#1: " + usersList[i].client_form.quiz01);
                                contQuiz++;
                                contQuizTotal++;
                            } else {
                                contQuizTotal++;
                            }

                            //#2
                            if (usersList[i].client_detail.clientType == 'ProgramaSaude') {
                                if (
                                    //usersList[i].client_form.quiz02_1 == true ||
                                    //usersList[i].client_form.quiz02_2 == true ||
                                    usersList[i].client_form.quiz02_3 == true ||
                                    //usersList[i].client_form.quiz02_4 == true ||
                                    //usersList[i].client_form.quiz02_5 == true ||
                                    //usersList[i].client_form.quiz02_6 == true ||
                                    //usersList[i].client_form.quiz02_7 == true || 
                                    usersList[i].client_form.quiz02_8 == true ||
                                    usersList[i].client_form.quiz02_9 == true ||
                                    usersList[i].client_form.quiz02_10 == true ||
                                    usersList[i].client_form.quiz02_11 == true
                                    //usersList[i].client_form.quiz02_12 == true ||
                                    //usersList[i].client_form.quiz02_13 == true
                                ) {
                                    console.log('#2 saude');
                                    contQuiz++;
                                    contQuizTotal++;                                
                                } else {
                                    console.log('não contabilizar 2 saude')
                                    contQuizTotal++;    
                                }
                            }
                            if (usersList[i].client_detail.clientType == 'ProgramaFit') {
                                if (
                                    //usersList[i].client_form.quiz02_1 == true ||
                                    usersList[i].client_form.quiz02_2 == true ||
                                    //usersList[i].client_form.quiz02_3 == true ||
                                    //usersList[i].client_form.quiz02_4 == true ||
                                    //usersList[i].client_form.quiz02_5 == true ||
                                    usersList[i].client_form.quiz02_6 == true ||
                                    usersList[i].client_form.quiz02_7 == true ||
                                    //usersList[i].client_form.quiz02_8 == true ||
                                    //usersList[i].client_form.quiz02_9 == true ||
                                    //usersList[i].client_form.quiz02_10 == true ||
                                    //usersList[i].client_form.quiz02_11 == true ||
                                    usersList[i].client_form.quiz02_12 == true ||
                                    usersList[i].client_form.quiz02_13 == true
                                ) {
                                    console.log('#2 fit');
                                    contQuiz++;
                                    contQuizTotal++;                                
                                } else {
                                    console.log('não contabilizar 2 fit')
                                    contQuizTotal++;    
                                }
                            }
                            if (usersList[i].client_detail.clientType == 'ProgramaGestaoDePeso') {
                                console.log('não contabilizar 2 peso') 
                            }

                            //#3
                            if (usersList[i].client_form.quiz03 != null) {
                                console.log(usersList[i].client_form.quiz03);
                                contQuiz++;
                                contQuizTotal++;    
                            } else {
                                console.log('não contabilizar 3')
                                contQuizTotal++;    
                            }

                            //#4
                            if (usersList[i].client_detail.clientType == 'ProgramaGestaoDePeso' || 
                                usersList[i].client_detail.clientType == 'ProgramaSaude' || 
                                usersList[i].client_detail.clientType == 'ProgramaFit'
                            ) {
                                if (usersList[i].client_form.quiz04_6) {
                                    console.log(usersList[i].client_form.quiz04_6);
                                    contQuiz++;
                                    contQuizTotal++;    
                                } else {
                                    console.log('não contabilizar 4')
                                    contQuizTotal++;    
                                }
                            } else {
                                if (usersList[i].client_form.quiz04_6) {
                                    console.log(usersList[i].client_form.quiz04_6);
                                    contQuiz++;
                                    contQuizTotal++;    
                                } else {
                                    console.log('não contabilizar 4')
                                    contQuizTotal++;    
                                }
                            }

                            //#5
                            if (usersList[i].client_form.quiz05_1_1 != null || usersList[i].client_form.quiz05_1_2 != null) {
                                console.log(usersList[i].client_form.quiz05);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar 5')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz05_2_1 != null || usersList[i].client_form.quiz05_2_2 != null) {
                                console.log(usersList[i].client_form.quiz05);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar 5')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz05_3_1 != null || usersList[i].client_form.quiz05_3_2 != null) {
                                console.log(usersList[i].client_form.quiz05);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar 5')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz05_4_1 != null || usersList[i].client_form.quiz05_4_2 != null) {
                                console.log(usersList[i].client_form.quiz05);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar 5')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz05_5_1 != null || usersList[i].client_form.quiz05_5_2 != null) {
                                console.log(usersList[i].client_form.quiz05);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar 5')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz05_6_1 != null || usersList[i].client_form.quiz05_6_2 != null) {
                                console.log(usersList[i].client_form.quiz05);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar 5')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz05_7_1 != null || usersList[i].client_form.quiz05_7_2 != null) {
                                console.log(usersList[i].client_form.quiz05);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar 5')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz05_8_1 != null || usersList[i].client_form.quiz05_8_2 != null) {
                                console.log(usersList[i].client_form.quiz05);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar 5')
                                contQuizTotal++; 
                            }

                            //#6
                            if (usersList[i].client_form.quiz06) {
                                console.log(usersList[i].client_form.quiz06);
                                contQuiz++;
                                contQuizTotal++;
                            } else {
                                console.log('não contabilizar 6')
                                contQuizTotal++;
                            }

                            //#7
                            if (usersList[i].client_form.quiz07_9) {
                                console.log(usersList[i].client_form.quiz07);
                                contQuiz++;
                                contQuizTotal++;
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++;
                            }
                            if (usersList[i].client_form.quiz07) {
                                console.log(usersList[i].client_form.quiz07);
                                contQuiz++;
                                contQuizTotal++;
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++;
                            }
                            if (usersList[i].client_form.quiz07_2) {
                                console.log(usersList[i].client_form.quiz07);
                                contQuiz++;
                                contQuizTotal++;
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++;
                            }
                            if (usersList[i].client_form.quiz07_4) {
                                console.log(usersList[i].client_form.quiz07);
                                contQuiz++;
                                contQuizTotal++;
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++;
                            }
                            if (usersList[i].client_form.quiz07_5) {
                                console.log(usersList[i].client_form.quiz07);
                                contQuiz++;
                                contQuizTotal++;
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++;
                            }
                            if (usersList[i].client_form.quiz07_6) {
                                console.log(usersList[i].client_form.quiz07);
                                contQuiz++;
                                contQuizTotal++;
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++;
                            }
                            if (usersList[i].client_form.quiz07_7) {
                                console.log(usersList[i].client_form.quiz07);
                                contQuiz++;
                                contQuizTotal++;
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++;
                            }
                            if (usersList[i].client_form.quiz07_8) {
                                console.log(usersList[i].client_form.quiz07);
                                contQuiz++;
                                contQuizTotal++;
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++;
                            }

                            //#8
                            if (usersList[i].client_form.quiz08_1) {
                                console.log(usersList[i].client_form.quiz08);
                                contQuiz++;
                                contQuizTotal++;
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++;                                
                            }
                            if (usersList[i].client_form.quiz08_2) {
                                console.log(usersList[i].client_form.quiz08);
                                contQuiz++;
                                contQuizTotal++;
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++;                                
                            }

                            //#9
                            if (usersList[i].client_form.quiz09) {
                                console.log(usersList[i].client_form.quiz09);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++; 
                            }

                            //#10
                            if (usersList[i].client_form.quiz10_1) {
                                console.log(usersList[i].client_form.quiz010);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz10_2) {
                                console.log(usersList[i].client_form.quiz010);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz10_3) {
                                console.log(usersList[i].client_form.quiz010);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz10_4) {
                                console.log(usersList[i].client_form.quiz010);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz10_5) {
                                console.log(usersList[i].client_form.quiz010);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz10_6) {
                                console.log(usersList[i].client_form.quiz010);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz10_7) {
                                console.log(usersList[i].client_form.quiz010);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz10_8) {
                                console.log(usersList[i].client_form.quiz010);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++; 
                            }
                            if (usersList[i].client_form.quiz10_9) {
                                console.log(usersList[i].client_form.quiz010);
                                contQuiz++;
                                contQuizTotal++; 
                            } else {
                                console.log('não contabilizar')
                                contQuizTotal++; 
                            }

                            //#11
                            if (
                                usersList[i].client_detail.clientType == 'ProgramaGestaoDePeso' || 
                                usersList[i].client_detail.clientType == 'ProgramaSaude' || 
                                usersList[i].client_detail.clientType == 'ProgramaFit'
                            ) {
                                if (usersList[i].client_form.quiz11) {
                                    console.log(usersList[i].client_form.quiz011);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                            } else {
                                if (usersList[i].client_form.quiz11_1) {
                                    console.log(usersList[i].client_form.quiz011);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz11_2) {
                                    console.log(usersList[i].client_form.quiz011);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz11_3) {
                                    console.log(usersList[i].client_form.quiz011);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz11_4) {
                                    console.log(usersList[i].client_form.quiz011);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz11_5) {
                                    console.log(usersList[i].client_form.quiz011);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz11_6) {
                                    console.log(usersList[i].client_form.quiz011);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                            }

                            //#12
                            if (
                                usersList[i].client_detail.clientType == 'ProgramaGestaoDePeso' || 
                                usersList[i].client_detail.clientType == 'ProgramaSaude' || 
                                usersList[i].client_detail.clientType == 'ProgramaFit'
                            ) {
                                if (usersList[i].client_form.quiz12) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                            } else {
                                if (usersList[i].client_form.quiz12_1) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_2) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_3) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_4) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_5) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_6) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_7) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_8) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_9) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_10) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_12) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_13) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_14) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_15) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz12_16) {
                                    console.log(usersList[i].client_form.quiz012);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                            }

                            //#13
                            if (
                                usersList[i].client_detail.clientType == 'ProgramaGestaoDePeso' || 
                                usersList[i].client_detail.clientType == 'ProgramaSaude' || 
                                usersList[i].client_detail.clientType == 'ProgramaFit'
                            ) {
                                if (usersList[i].client_form.quiz13) {
                                    console.log(usersList[i].client_form.quiz013);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                            } else {
                                if (usersList[i].client_form.quiz13_1) {
                                    console.log(usersList[i].client_form.quiz013);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz13_2) {
                                    console.log(usersList[i].client_form.quiz013);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz13_3) {
                                    console.log(usersList[i].client_form.quiz013);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz13_4) {
                                    console.log(usersList[i].client_form.quiz013);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz13_5) {
                                    console.log(usersList[i].client_form.quiz013);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz13_6) {
                                    console.log(usersList[i].client_form.quiz013);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz13_7) {
                                    console.log(usersList[i].client_form.quiz013);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz13_8) {
                                    console.log(usersList[i].client_form.quiz013);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz13_9) {
                                    console.log(usersList[i].client_form.quiz013);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz13_10) {
                                    console.log(usersList[i].client_form.quiz013);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz13_11) {
                                    console.log(usersList[i].client_form.quiz013);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                            }

                            //#14
                            if (
                                usersList[i].client_detail.clientType == 'ProgramaGestaoDePeso' || 
                                usersList[i].client_detail.clientType == 'ProgramaSaude' || 
                                usersList[i].client_detail.clientType == 'ProgramaFit'
                            ) {
                                if (usersList[i].client_form.quiz14) {
                                    console.log(usersList[i].client_form.quiz14);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                            } else {
                                if (usersList[i].client_form.quiz14_1) {
                                    console.log(usersList[i].client_form.quiz14);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz14_2) {
                                    console.log(usersList[i].client_form.quiz14);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz14_3) {
                                    console.log(usersList[i].client_form.quiz14);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz14_4) {
                                    console.log(usersList[i].client_form.quiz14);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz14_5) {
                                    console.log(usersList[i].client_form.quiz14);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz14_6) {
                                    console.log(usersList[i].client_form.quiz14);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz14_7) {
                                    console.log(usersList[i].client_form.quiz14);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                                if (usersList[i].client_form.quiz14_8) {
                                    console.log(usersList[i].client_form.quiz14);
                                    contQuiz++;
                                    contQuizTotal++;
                                } else {
                                    console.log('não contabilizar')
                                    contQuizTotal++;
                                }
                            }

                            //#15
                            if (usersList[i].client_form.quiz015) {
                                console.log(usersList[i].client_form.quiz015);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }
                            //#16
                            if (usersList[i].client_form.quiz016) {
                                console.log(usersList[i].client_form.quiz016);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }
                            //#17
                            if (usersList[i].client_form.quiz017) {
                                console.log(usersList[i].client_form.quiz017);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }
                            //#18
                            if (usersList[i].client_form.quiz018) {
                                console.log(usersList[i].client_form.quiz018);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }//#19
                            if (usersList[i].client_form.quiz019) {
                                console.log(usersList[i].client_form.quiz019);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }
                            //#20
                            if (usersList[i].client_form.quiz020) {
                                console.log(usersList[i].client_form.quiz020);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }
                            //#21
                            if (usersList[i].client_form.quiz021) {
                                console.log(usersList[i].client_form.quiz021);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }
                            //#22
                            if (usersList[i].client_form.quiz022) {
                                console.log(usersList[i].client_form.quiz022);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }
                            //#23
                            if (usersList[i].client_form.quiz023) {
                                console.log(usersList[i].client_form.quiz023);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }
                            //#24
                            if (usersList[i].client_form.quiz024) {
                                console.log(usersList[i].client_form.quiz024);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }
                            //#25
                            if (usersList[i].client_form.quiz025) {
                                console.log(usersList[i].client_form.quiz025);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }
                            //#26
                            if (usersList[i].client_form.quiz026) {
                                console.log(usersList[i].client_form.quiz026);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }
                            //#27
                            if (usersList[i].client_form.quiz027) {
                                console.log(usersList[i].client_form.quiz027);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }
                            //#28
                            if (usersList[i].client_form.quiz028) {
                                console.log(usersList[i].client_form.quiz028);
                                contQuiz++;
                            } else {
                                console.log('não contabilizar')
                            }


                        }

                        if (typeof usersList[i].client_history !== 'undefined') {
                            if (usersList[i].client_history.da_20_01 == null && usersList[i].client_history.da_19_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_19;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_19_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_19_Minute;
                            }
                            if (usersList[i].client_history.da_19_01 == null && usersList[i].client_history.da_18_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_18;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_18_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_18_Minute;
                            }
                            if (usersList[i].client_history.da_18_01 == null && usersList[i].client_history.da_17_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_17;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_17_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_17_Minute;
                            }
                            if (usersList[i].client_history.da_17_01 == null && usersList[i].client_history.da_16_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_16;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_16_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_16_Minute;
                            }
                            if (usersList[i].client_history.da_16_01 == null && usersList[i].client_history.da_15_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_15;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_15_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_15_Minute;
                            }
                            if (usersList[i].client_history.da_15_01 == null && usersList[i].client_history.da_14_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_14;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_14_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_14_Minute;
                            }
                            if (usersList[i].client_history.da_14_01 == null && usersList[i].client_history.da_13_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_13;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_13_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_13_Minute;
                            }
                            if (usersList[i].client_history.da_13_01 == null && usersList[i].client_history.da_12_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_12;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_12_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_12_Minute;
                            }
                            if (usersList[i].client_history.da_12_01 == null && usersList[i].client_history.da_11_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_11;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_11_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_11_Minute;
                            }
                            if (usersList[i].client_history.da_11_01 == null && usersList[i].client_history.da_10_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_10;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_10_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_10_Minute;
                            }
                            if (usersList[i].client_history.da_10_01 == null && usersList[i].client_history.da_09_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_09;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_09_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_09_Minute;
                            }
                            if (usersList[i].client_history.da_09_01 == null && usersList[i].client_history.da_08_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_08;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_08_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_08_Minute;
                            }
                            if (usersList[i].client_history.da_08_01 == null && usersList[i].client_history.da_07_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_07;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_07_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_07_Minute;
                            }
                            if (usersList[i].client_history.da_07_01 == null && usersList[i].client_history.da_06_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_06;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_06_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_06_Minute;
                            }
                            if (usersList[i].client_history.da_06_01 == null && usersList[i].client_history.da_05_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_05;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_05_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_05_Minute;
                            }
                            if (usersList[i].client_history.da_05_01 == null && usersList[i].client_history.da_04_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_04;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_04_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_04_Minute;
                            }
                            if (usersList[i].client_history.da_04_01 == null && usersList[i].client_history.da_03_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_03;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_03_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_03_Minute;
                            }
                            if (usersList[i].client_history.da_03_01 == null && usersList[i].client_history.da_02_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_02;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_02_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_02_Minute;
                            }
                            if (usersList[i].client_history.da_02_01 == null && usersList[i].client_history.da_01_01 != null) {
                                $scope.tempScope.proxConsultDash = $scope.clientHist.proxConsult_01;
                                $scope.tempScope.proxConsultDashHour = $scope.clientHist.proxConsult_01_Hour;
                                $scope.tempScope.proxConsultDashMinutes = $scope.clientHist.proxConsult_01_Minute;
                            }
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

                    $scope.isPersonDetails = false; 
                    if ($scope.firstVisit.firstVisit == false) {
                        if ($scope.clientHist.da_01_01 == null) {
                            $scope.yourWelcome = true;
                        } else {
                            $scope.isDashboard = true;
                        }
                    }
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
