app.controller('DashCtrl', ['$scope', '$filter', 'Auth', '$location', 'currentAuth', 'usersList', '$mdSidenav',
    function($scope, filter, Auth, $location, currentAuth, usersList, $mdSidenav, $timeout) {

        $scope.auth = Auth;
        $scope.spyderCont = 0; 
        $scope.contPE = 0;
        $scope.contPM = 0;
        $scope.contEE = 0;
        $scope.contEM = 0;

        var contCGI = 0;

        var objective01 = 0;
        var objective02 = 0;
        var objective03 = 0;
        var objective04 = 0;
        var objective05 = 0;
        var objective06 = 0;
        var objective07 = 0;

        var motivation00 = 0;
        var motivation01 = 0;
        var motivation02 = 0;
        var motivation03 = 0;
        var motivation04 = 0;
        var motivation05 = 0;
        var motivation06 = 0;
        var motivation07 = 0;
        var motivation08 = 0;
        var motivation09 = 0;
        var motivation10 = 0;

        var vcsMotivation01 = 0;
        var vcsMotivation02 = 0;
        var vcsMotivation03 = 0;

        var typeFood01 = 0;
        var typeFood02 = 0;
        var typeFood03 = 0;
        var typeFood04 = 0;
        var typeFood05 = 0;

        var water01 = 0;
        var water02 = 0;
        var water03 = 0;
        var water04 = 0;
        var water05 = 0;
        var water06 = 0;

        var consome01 = 0;
        var consome02 = 0;
        var consome03 = 0;
        var consome04 = 0;
        var consome05 = 0;
        var consome06 = 0;
        var consome07 = 0;

        var consomeRef01 = 0;
        var consomeRef02 = 0;
        var consomeRef03 = 0;

        var consomeCafe01 = 0;
        var consomeCafe02 = 0;
        var consomeCafe03 = 0;
        var consomeCafe04 = 0;
        var consomeCafe05 = 0;

        var consomeAdoc01 = 0;
        var consomeAdoc02 = 0;
        var consomeAdoc03 = 0;
        
        var consomeBolos01 = 0;
        var consomeBolos02 = 0;
        var consomeBolos03 = 0;

        var consomeFast01 = 0;
        var consomeFast02 = 0;
        var consomeFast03 = 0;

        var health01 = 0;
        var health02 = 0;
        var health03 = 0;
        var health04 = 0;
        var health05 = 0;
        var health06 = 0;
        var health07 = 0;
        var health08 = 0;
        var health09 = 0;
        var health10 = 0;
        var health11 = 0;
        var health12 = 0;
        var health13 = 0;
        var health13 = 0;
        var health14 = 0;
        var health15 = 0;

        var pills = 0;
        var noPills = 0;

        var sports = 0;
        var noSports = 0;

        var sportsFreq01 = 0;
        var sportsFreq02 = 0;
        var sportsFreq03 = 0;

        var spyderCont = 0, contPE = 0, contPM = 0, contEE = 0, contEM = 0;
        var cont = 0;
        var contGrupo1 = 0;
        var contGrupo2 = 0;
        var contGrupo3 = 0;

        $scope.newUsersList = {};
        $scope.newUsersListGrupo01 = {};
        $scope.newUsersListGrupo02 = {};
        $scope.newUsersListGrupo03 = {};
        $scope.mediaGrupo01 = {};
        $scope.mediaGrupo02 = {};
        $scope.mediaGrupo03 = {};

        
        usersList.$loaded().then(function() {
            $scope.usersList = usersList;

            for (var i = 0; i < usersList.length; i++) {
                if (typeof $scope.usersList[i].client_detail !== 'undefined') {
                    if ($scope.usersList[i].client_detail.locConsulta === "CGI" || $scope.usersList[i].client_detail.codBis === "#CGI") {
                        contCGI++;
                        $scope.contCGI = contCGI;
                        
                        $scope.newUsersList[cont] = $scope.usersList[i];
                        cont++;

                        if ($scope.usersList[i].client_form.quiz03_2 == 1) {
                            $scope.newUsersListGrupo01[contGrupo1] = $scope.usersList[i];
                            contGrupo1++;
                        }
                        if ($scope.usersList[i].client_form.quiz03_2 == 2) {
                            $scope.newUsersListGrupo02[contGrupo2] = $scope.usersList[i];
                            contGrupo2++;
                        }
                        if ($scope.usersList[i].client_form.quiz03_2 == 3) {
                            $scope.newUsersListGrupo03[contGrupo3] = $scope.usersList[i];
                            contGrupo3++;
                        } 
                    }
                    

                    if ($scope.usersList[i].client_detail.locConsulta === "CGI" || $scope.usersList[i].client_detail.codBis === "#CGI") {

                        if ($scope.usersList[i].client_detail.quizSpyder) {
                            spyderCont++;
                            $scope.spyderCont = spyderCont;

                            if ($scope.usersList[i].client_detail.quizSpyder.spyderType.type === "Prático Emocional") {
                                contPE++;
                                $scope.contPE = contPE;
                            }

                            if ($scope.usersList[i].client_detail.quizSpyder.spyderType.type === "Prático Mental") {
                                contPM++;
                                $scope.contPM = contPM;
                            }

                            if ($scope.usersList[i].client_detail.quizSpyder.spyderType.type === "Emocional Espiritual") {
                                contEE++;
                                $scope.contEE = contEE;
                            }

                            if ($scope.usersList[i].client_detail.quizSpyder.spyderType.type === "Espiritual Mental") {
                                contEM++;
                                $scope.contEM = contEM;
                            }
                        }
                        
                        if ($scope.usersList[i].client_form.quiz02_1)
                            objective01++;
                            $scope.objective01 = [
                                {v: "Diminuir massa gorda"},
                                {v: objective01},
                            ];

                        if ($scope.usersList[i].client_form.quiz02_2)  
                            objective02++;
                            $scope.objective02 = [
                                {v: "Melhorar condição Fisica"},
                                {v: objective02},
                            ];

                        if ($scope.usersList[i].client_form.quiz02_3)
                            objective03++;
                            $scope.objective03 = [
                                {v: "Melhorar Saúde"},
                                {v: objective03},
                            ];

                        if ($scope.usersList[i].client_form.quiz02_4)
                            objective04++;
                            $scope.objective04 = [
                                {v: "Preparar para prova"},
                                {v: objective04},
                            ];

                        if ($scope.usersList[i].client_form.quiz02_5)
                            objective05++;
                            $scope.objective05 = [
                                {v: "Diminuição do peso corporal"},
                                {v: objective05},
                            ];

                        if ($scope.usersList[i].client_form.quiz02_6)
                            objective06++;
                            $scope.objective06 = [
                                {v: "Aumentar massa muscular"},
                                {v: objective06},
                            ];

                        if ($scope.usersList[i].client_form.quiz02_7)
                            objective07++;
                            $scope.objective07 = [
                                {v: "Outras"},
                                {v: objective07},
                            ];
                        
                        if (!$scope.usersList[i].client_form.quiz03)
                            motivation00++;
                            $scope.motivation00 = [
                                {v: "Não responderam"},
                                {v: motivation00},
                            ];

                        if ($scope.usersList[i].client_form.quiz03 == "1")
                            motivation01++;
                            $scope.motivation01 = [
                                {v: "1"},
                                {v: motivation01},
                            ];

                        if ($scope.usersList[i].client_form.quiz03 == "2")
                            motivation02++;
                            $scope.motivation02 = [
                                {v: "2"},
                                {v: motivation02},
                            ];   
                    
                        if ($scope.usersList[i].client_form.quiz03 == "3")
                            motivation03++;
                            $scope.motivation03 = [
                                {v: "3"},
                                {v: motivation03},
                            ];
                    
                        if ($scope.usersList[i].client_form.quiz03 == "4")
                            motivation04++;
                            $scope.motivation04 = [
                                {v: "4"},
                                {v: motivation04},
                            ];
                    
                        if ($scope.usersList[i].client_form.quiz03 == "5")
                            motivation05++;
                            $scope.motivation05 = [
                                {v: "5"},
                                {v: motivation05},
                            ];
                    
                        if ($scope.usersList[i].client_form.quiz03 == "6")
                            motivation06++;
                            $scope.motivation06 = [
                                {v: "6"},
                                {v: motivation06},
                            ];
                    
                        if ($scope.usersList[i].client_form.quiz03 == "7")
                            motivation07++;
                            $scope.motivation07 = [
                                {v: "7"},
                                {v: motivation07},
                            ];
                    
                        if ($scope.usersList[i].client_form.quiz03 == "8")
                            motivation08++;
                            $scope.motivation08 = [
                                {v: "8"},
                                {v: motivation08},
                            ];
                    
                        if ($scope.usersList[i].client_form.quiz03 == "9")
                            motivation09++;
                            $scope.motivation09 = [
                                {v: "9"},
                                {v: motivation09},
                            ];
                    
                        if ($scope.usersList[i].client_form.quiz03 == "10")
                            motivation10++;
                            $scope.motivation10 = [
                                {v: "10"},
                                {v: motivation10},
                            ];

                        if ($scope.usersList[i].client_form.quiz03_2 == "1")
                            vcsMotivation01++;
                            $scope.vcsMotivation01 = [
                                {v: "Motivação Alta"},
                                {v: vcsMotivation01},
                            ];

                        if ($scope.usersList[i].client_form.quiz03_2 == "2")
                            vcsMotivation02++;
                            $scope.vcsMotivation02 = [
                                {v: "Motivação Média"},
                                {v: vcsMotivation02},
                            ];

                        if ($scope.usersList[i].client_form.quiz03_2 == "3")
                            vcsMotivation03++;
                            $scope.vcsMotivation03 = [
                                {v: "Motivação Baixa"},
                                {v: vcsMotivation03},
                            ];

                        if ($scope.usersList[i].client_form.quiz04_1)
                            typeFood01++;
                            var res1 = typeFood01 * 100 / contCGI;
                            $scope.typeFood01 = [
                                {v: "Alimentação monótona"},
                                {v: typeFood01},
                                {v: res1},
                            ];

                        if ($scope.usersList[i].client_form.quiz04_2)
                            typeFood02++;
                            var res2 = typeFood02 * 100 / contCGI;
                            $scope.typeFood02 = [
                                {v: "Alimentação desiquilibrada"},
                                {v: typeFood02},
                                {v: res2},
                            ];
                        
                        if ($scope.usersList[i].client_form.quiz04_3)
                            typeFood03++;
                            var res3 = typeFood03 * 100 / contCGI;
                            $scope.typeFood03 = [
                                {v: "Alimentação restritiva"},
                                {v: typeFood03},
                                {v: res3},
                            ];

                        if ($scope.usersList[i].client_form.quiz04_4)
                            typeFood04++;
                            var res4 = typeFood04 * 100 / contCGI;
                            $scope.typeFood04 = [
                                {v: "Existência de jejum prolongado"},
                                {v: typeFood04},
                                {v: res4},
                            ];

                        if ($scope.usersList[i].client_form.quiz04_5)
                            typeFood05++;
                            var res5 = typeFood05 * 100 / contCGI;
                            $scope.typeFood05 = [
                                {v: "Refeições frequentes fora de casa"},
                                {v: typeFood05},
                                {v: res5},
                            ];
                        
                        if ($scope.usersList[i].client_form.quiz07_9_1 == "1")
                            water01++;
                            $scope.water01 = water01;

                        if ($scope.usersList[i].client_form.quiz07_9_1 == "2")
                            water02++;
                            $scope.water02 = water02;

                        if ($scope.usersList[i].client_form.quiz07_9_1 == "3")
                            water03++;
                            $scope.water03 = water03;

                        if ($scope.usersList[i].client_form.quiz07_9_1 == "4")
                            water04++;
                            $scope.water04 = water04;

                        if ($scope.usersList[i].client_form.quiz07_9_1 == "5")
                            water05++;
                            $scope.water05 = water05;

                        if ($scope.usersList[i].client_form.quiz07_9_1 == "6")
                            water06++;
                            $scope.water06 = water06;

                        if ($scope.usersList[i].client_form.quiz07)
                            consome01++;
                            $scope.consome01 = [
                                {v: "Refrigerantes"},
                                {v: consome01},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_2)
                            consome02++;
                            $scope.consome02 = [
                                {v: "Café"},
                                {v: consome02},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_4)
                            consome03++;
                            $scope.consome03 = [
                                {v: "Bolos e Doces"},
                                {v: consome03},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_5)
                            consome04++;
                            $scope.consome04 = [
                                {v: "Bebidas Desportivas"},
                                {v: consome04},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_6)
                            consome05++;
                            $scope.consome05 = [
                                {v: "Produtos Charcutaria"},
                                {v: consome05},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_7)
                            consome06++;
                            $scope.consome06 = [
                                {v: "Snacks Salgados"},
                                {v: consome06},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_8)
                            consome07++;
                            $scope.consome07 = [
                                {v: "Fast Food"},
                                {v: consome07},
                            ];
                        
                        if ($scope.usersList[i].client_form.quiz07_1 == "1")
                            consomeRef01++;
                            $scope.consomeRef01 = [
                                {v: "Diariamente"},
                                {v: consomeRef01},
                            ];
                        
                        if ($scope.usersList[i].client_form.quiz07_1 == "2")
                            consomeRef02++;
                            $scope.consomeRef02 = [
                                {v: "3 a 4 vez por semana"},
                                {v: consomeRef02},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_1 == "3")
                            consomeRef03++;
                            $scope.consomeRef03 = [
                                {v: "1 ou menos vezes por semana"},
                                {v: consomeRef03},
                            ];
                        
                        if ($scope.usersList[i].client_form.quiz07_2_1 == "1")
                            consomeCafe01++;
                            $scope.consomeCafe01 = [
                                {v: "1"},
                                {v: consomeCafe01},
                            ];
                        if ($scope.usersList[i].client_form.quiz07_2_1 == "2")
                            consomeCafe02++;
                            $scope.consomeCafe02 = [
                                {v: "2"},
                                {v: consomeCafe02},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_2_1 == "3")
                            consomeCafe03++;
                            $scope.consomeCafe03 = [
                                {v: "3"},
                                {v: consomeCafe03},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_2_1 == "4")
                            consomeCafe04++;
                            $scope.consomeCafe04 = [
                                {v: "4"},
                                {v: consomeCafe04},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_2_1 >= "5")
                            consomeCafe05++;
                            $scope.consomeCafe05 = [
                                {v: "5 ou mais"},
                                {v: consomeCafe05},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_3_1 == "1")
                            consomeAdoc01++;
                            $scope.consomeAdoc01 = [
                                {v: "Adoçante"},
                                {v: consomeAdoc01},
                            ];
                        
                        if ($scope.usersList[i].client_form.quiz07_3_1 == "2")
                            consomeAdoc02++;
                            $scope.consomeAdoc02 = [
                                {v: "Açucar"},
                                {v: consomeAdoc02},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_3_1 == "3")
                            consomeAdoc03++;
                            $scope.consomeAdoc03 = [
                                {v: "Nada"},
                                {v: consomeAdoc03},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_4_1 == "1")
                            consomeBolos01++;
                            $scope.consomeBolos01 = [
                                {v: "Diariamente"},
                                {v: consomeBolos01},
                            ];
                        
                        if ($scope.usersList[i].client_form.quiz07_4_1 == "2")
                            consomeBolos02++;
                            $scope.consomeBolos02 = [
                                {v: "3 a 4 vez por semana"},
                                {v: consomeBolos02},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_4_1 == "3")
                            consomeBolos03++;
                            $scope.consomeBolos03 = [
                                {v: "1 ou menos vezes por semana"},
                                {v: consomeBolos03},
                            ];
                        
                        if ($scope.usersList[i].client_form.quiz07_8_1 == "1")
                            consomeFast01++;
                            $scope.consomeFast01 = [
                                {v: "Diariamente"},
                                {v: consomeFast01},
                            ];
                        
                        if ($scope.usersList[i].client_form.quiz07_8_1 == "2")
                            consomeFast02++;
                            $scope.consomeFast02 = [
                                {v: "3 a 4 vez por semana"},
                                {v: consomeFast02},
                            ];

                        if ($scope.usersList[i].client_form.quiz07_8_1 == "3")
                            consomeFast03++;
                            $scope.consomeFast03 = [
                                {v: "1 ou menos vezes por semana"},
                                {v: consomeFast03},
                            ];

                        if ($scope.usersList[i].client_form.quiz12_1)
                            health01++;
                            $scope.health01 = [
                                {v: "Excesso de peso"},
                                {v: health01},
                            ];
                        
                        if ($scope.usersList[i].client_form.quiz12_2)
                            health02++;
                            $scope.health02 = [
                                {v: "Anorexia/Bulimia/Compulsividade alimentar"},
                                {v: health02},
                            ];

                        if ($scope.usersList[i].client_form.quiz12_3)
                            health03++;
                            $scope.health03 = [
                                {v: "Hipertensão arterial"},
                                {v: health03},
                            ];

                        if ($scope.usersList[i].client_form.quiz12_4)
                            health04++;
                            $scope.health04 = [
                                {v: "Cardíaco"},
                                {v: health04},
                            ];

                        if ($scope.usersList[i].client_form.quiz12_5)
                            health05++;
                            $scope.health05 = [
                                {v: "Diabetes mellitus tipo I"},
                                {v: health05},
                            ];

                        if ($scope.usersList[i].client_form.quiz12_6)
                            health06++;
                            $scope.health06 = [
                                {v: "Diabetes mellitus tipo II"},
                                {v: health06},
                            ];

                        if ($scope.usersList[i].client_form.quiz12_7)
                            health07++;
                            $scope.health07 = [
                                {v: "Asma"},
                                {v: health07},
                            ];

                        if ($scope.usersList[i].client_form.quiz12_8)
                            health08++;
                            $scope.health08 = [
                                {v: "Anemia"},
                                {v: health08},
                            ];
                    
                        if ($scope.usersList[i].client_form.quiz12_9)
                            health09++;
                            $scope.health09 = [
                                {v: "AVC/AIT"},
                                {v: health09},
                            ];

                        if ($scope.usersList[i].client_form.quiz12_10)
                            health10++;
                            $scope.health10 = [
                                {v: "Epilepsia"},
                                {v: health10},
                            ];
                        if ($scope.usersList[i].client_form.quiz12_11)
                            health11++;
                            $scope.health11 = [
                                {v: "Fibromialgia"},
                                {v: health11},
                            ];

                        if ($scope.usersList[i].client_form.quiz12_12)
                            health12++;
                            $scope.health12 = [
                                {v: "Hiperuricémia"},
                                {v: health12},
                            ];

                        if ($scope.usersList[i].client_form.quiz12_13)
                            health13++;
                            $scope.health13 = [
                                {v: "Febre reumática"},
                                {v: health13},
                            ];

                        if ($scope.usersList[i].client_form.quiz12_14)
                            health14++;
                            $scope.health14 = [
                                {v: "Problemas de mastigação ou deglutição"},
                                {v: health14},
                            ];

                        if ($scope.usersList[i].client_form.quiz15) {
                            pills++;
                            $scope.pills1 = [
                                {v: "Sim"},
                                {v: pills},
                            ];
                        } else {
                            noPills++;
                            $scope.pills2 = [
                                {v: "Não"},
                                {v: noPills},
                            ]
                        }

                        if ($scope.usersList[i].client_form.quiz17) {
                            sports++;
                            $scope.sport1 = [
                                {v: "Sim"},
                                {v: sports},
                            ];

                            if ($scope.usersList[i].client_form.quiz17_1 == "1")
                            sportsFreq01++;
                            $scope.sportsFreq01 = [
                                {v: "Pouco Intenso"},
                                {v: sportsFreq01},
                            ];
                        
                        if ($scope.usersList[i].client_form.quiz17_1 == "2")
                            sportsFreq02++;
                            $scope.sportsFreq02 = [
                                {v: "Intenso"},
                                {v: sportsFreq02},
                            ];

                        if ($scope.usersList[i].client_form.quiz17_1 == "3")
                            sportsFreq03++;
                            $scope.sportsFreq03 = [
                                {v: "Extremamente Intenso"},
                                {v: sportsFreq03},
                            ];
                        } else {
                            noSports++;
                            $scope.sport2 = [
                                {v: "Não"},
                                {v: noSports},
                            ]
                        }
                    }
                }  
            }

            //grupo1
            //calculo da media grupo 1 peso
            var contGrupo1Peso1 = 0;
            var contGrupo1Peso2 = 0;
            var contGrupo1Peso3 = 0;
            var sumGrupo1Peso1 = 0;
            var sumGrupo1Peso2 = 0;
            var sumGrupo1Peso3 = 0;
            var totalGrupo1Peso1 = 0;
            var totalGrupo1Peso2 = 0;
            var totalGrupo1Peso3 = 0;

            for (var ii = 0; ii < contGrupo1; ii++) {
                if ($scope.newUsersListGrupo01[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo01[ii].client_history.da_01_03 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_01_03;
                        var res = Number(str.replace(",", "."));
                        contGrupo1Peso1++
                        sumGrupo1Peso1 = sumGrupo1Peso1 + res;
                    }
                    if ($scope.newUsersListGrupo01[ii].client_history.da_02_03 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_02_03;
                        var res = Number(str.replace(",", "."));
                        contGrupo1Peso2++
                        sumGrupo1Peso2 = sumGrupo1Peso2 + res;
                    }
                    if ($scope.newUsersListGrupo01[ii].client_history.da_03_03 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_03_03;
                        var res = Number(str.replace(",", "."));
                        contGrupo1Peso3++
                        sumGrupo1Peso3 = sumGrupo1Peso3 + res;
                    }
                }
            };

            if (contGrupo1Peso1 == 1) { 
                totalGrupo1Peso1 = sumGrupo1Peso1;
            } else {
                totalGrupo1Peso1 = Math.round(sumGrupo1Peso1 / (contGrupo1Peso1 - 1)* 100) / 100;
            }
            if (contGrupo1Peso2 == 1) { 
                totalGrupo1Peso2 = sumGrupo1Peso2;
            } else {
                totalGrupo1Peso2 = Math.round(sumGrupo1Peso2 / (contGrupo1Peso2 - 1)* 100) / 100;
            }
            if (contGrupo1Peso3 == 1) { 
                totalGrupo1Peso3 = sumGrupo1Peso3;
            } else {
                totalGrupo1Peso3 = Math.round(sumGrupo1Peso3 / (contGrupo1Peso3 - 1)* 100) / 100;
            }

            //calculo da media grupo 1 massagorda
            var contGrupo1MassaG1 = 0;
            var contGrupo1MassaG2 = 0;
            var contGrupo1MassaG3 = 0;
            var sumGrupo1MassaG1 = 0;
            var sumGrupo1MassaG2 = 0;
            var sumGrupo1MassaG3 = 0;
            var totalGrupo1MassaG1 = 0;
            var totalGrupo1MassaG2 = 0;
            var totalGrupo1MassaG3 = 0;
            
            for (var ii = 0; ii < contGrupo1; ii++) {
                if ($scope.newUsersListGrupo01[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo01[ii].client_history.da_01_04 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_01_04;
                        var res = Number(str.replace(",", "."));
                        contGrupo1MassaG1++
                        sumGrupo1MassaG1 = sumGrupo1MassaG1 + res;
                    }
                    if ($scope.newUsersListGrupo01[ii].client_history.da_02_04 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_02_04;
                        var res = Number(str.replace(",", "."));
                        contGrupo1MassaG2++
                        sumGrupo1MassaG2 = sumGrupo1MassaG2 + res;
                    }
                    if ($scope.newUsersListGrupo01[ii].client_history.da_03_04 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_03_04;
                        var res = Number(str.replace(",", "."));
                        contGrupo1MassaG3++
                        sumGrupo1MassaG3 = sumGrupo1MassaG3 + res;
                    }
                }
            };

            if (contGrupo1MassaG1 == 1) { 
                totalGrupo1MassaG1 = sumGrupo1MassaG1;
            } else {
                totalGrupo1MassaG1 = Math.round(sumGrupo1MassaG1 / (contGrupo1MassaG1 - 1)* 100) / 100;
            }
            if (contGrupo1MassaG2 == 1) { 
                totalGrupo1MassaG2 = sumGrupo1MassaG2;
            } else {
                totalGrupo1MassaG2 = Math.round(sumGrupo1MassaG2 / (contGrupo1MassaG2 - 1)* 100) / 100;
            }
            if (contGrupo1MassaG3 == 1) { 
                totalGrupo1MassaG3 = sumGrupo1MassaG3;
            } else {
                totalGrupo1MassaG3 = Math.round(sumGrupo1MassaG3 / (contGrupo1MassaG3 - 1)* 100) / 100;
            }

            //calculo da media grupo 1 agua corporal
            var contGrupo1AguaC1 = 0;
            var contGrupo1AguaC2 = 0;
            var contGrupo1AguaC3 = 0;
            var sumGrupo1AguaC1 = 0;
            var sumGrupo1AguaC2 = 0;
            var sumGrupo1AguaC3 = 0;
            var totalGrupo1AguaC1 = 0;
            var totalGrupo1AguaC2 = 0;
            var totalGrupo1AguaC3 = 0;
            
            for (var ii = 0; ii < contGrupo1; ii++) {
                if ($scope.newUsersListGrupo01[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo01[ii].client_history.da_01_05 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_01_05;
                        var res = Number(str.replace(",", "."));
                        contGrupo1AguaC1++
                        sumGrupo1AguaC1 = sumGrupo1AguaC1 + res;
                    }
                    if ($scope.newUsersListGrupo01[ii].client_history.da_02_05 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_02_05;
                        var res = Number(str.replace(",", "."));
                        contGrupo1AguaC2++
                        sumGrupo1AguaC2 = sumGrupo1AguaC2 + res;
                    }
                    if ($scope.newUsersListGrupo01[ii].client_history.da_03_05 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_03_05;
                        var res = Number(str.replace(",", "."));
                        contGrupo1AguaC3++
                        sumGrupo1AguaC3 = sumGrupo1AguaC3 + res;
                    }
                }
            };

            if (contGrupo1AguaC1 == 1) { 
                totalGrupo1AguaC1 = sumGrupo1AguaC1;
            } else {
                totalGrupo1AguaC1 = Math.round(sumGrupo1AguaC1 / (contGrupo1AguaC1 - 1)* 100) / 100;
            }
            if (contGrupo1AguaC2 == 1) { 
                totalGrupo1AguaC2 = sumGrupo1AguaC2;
            } else {
                totalGrupo1AguaC2 = Math.round(sumGrupo1AguaC2 / (contGrupo1AguaC2 - 1)* 100) / 100;
            }
            if (contGrupo1AguaC3 == 1) { 
                totalGrupo1AguaC3 = sumGrupo1AguaC3;
            } else {
                totalGrupo1AguaC3 = Math.round(sumGrupo1AguaC3 / (contGrupo1AguaC3 - 1)* 100) / 100;
            }

            //calculo da media grupo 1 massa magra
            var contGrupo1MassaM1 = 0;
            var contGrupo1MassaM2 = 0;
            var contGrupo1MassaM3 = 0;
            var sumGrupo1MassaM1 = 0;
            var sumGrupo1MassaM2 = 0;
            var sumGrupo1MassaM3 = 0;
            var totalGrupo1MassaM1 = 0;
            var totalGrupo1MassaM2 = 0;
            var totalGrupo1MassaM3 = 0;
            
            for (var ii = 0; ii < contGrupo1; ii++) {
                if ($scope.newUsersListGrupo01[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo01[ii].client_history.da_01_06 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_01_06;
                        var res = Number(str.replace(",", "."));
                        contGrupo1MassaM1++
                        sumGrupo1MassaM1 = sumGrupo1MassaM1 + res;
                    }
                    if ($scope.newUsersListGrupo01[ii].client_history.da_02_06 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_02_06;
                        var res = Number(str.replace(",", "."));
                        contGrupo1MassaM2++
                        sumGrupo1MassaM2 = sumGrupo1MassaM2 + res;
                    }
                    if ($scope.newUsersListGrupo01[ii].client_history.da_03_06 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_03_06;
                        var res = Number(str.replace(",", "."));
                        contGrupo1MassaM3++
                        sumGrupo1MassaM3 = sumGrupo1MassaM3 + res;
                    }
                }
            };

            if (contGrupo1MassaM1 == 1) { 
                totalGrupo1MassaM1 = sumGrupo1MassaM1;
            } else {
                totalGrupo1MassaM1 = Math.round(sumGrupo1MassaM1 / (contGrupo1MassaM1 - 1)* 100) / 100;
            }
            if (contGrupo1MassaM2 == 1) { 
                totalGrupo1MassaM2 = sumGrupo1MassaM2;
            } else {
                totalGrupo1MassaM2 = Math.round(sumGrupo1MassaM2 / (contGrupo1MassaM2 - 1)* 100) / 100;
            }
            if (contGrupo1MassaM3 == 1) { 
                totalGrupo1MassaM3 = sumGrupo1MassaM3;
            } else {
                totalGrupo1MassaM3 = Math.round(sumGrupo1MassaM3 / (contGrupo1MassaM3 - 1)* 100) / 100;
            }

            //calculo da media grupo 1 gordura visceral
            var contGrupo1GorduraV1 = 0;
            var contGrupo1GorduraV2 = 0;
            var contGrupo1GorduraV3 = 0;
            var sumGrupo1GorduraV1 = 0;
            var sumGrupo1GorduraV2 = 0;
            var sumGrupo1GorduraV3 = 0;
            var totalGrupo1GorduraV1 = 0;
            var totalGrupo1GorduraV2 = 0;
            var totalGrupo1GorduraV3 = 0;
            
            for (var ii = 0; ii < contGrupo1; ii++) {
                if ($scope.newUsersListGrupo01[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo01[ii].client_history.da_01_07 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_01_07;
                        var res = Number(str.replace(",", "."));
                        contGrupo1GorduraV1++
                        sumGrupo1GorduraV1 = sumGrupo1GorduraV1 + res;
                    }
                    if ($scope.newUsersListGrupo01[ii].client_history.da_02_07 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_02_07;
                        var res = Number(str.replace(",", "."));
                        contGrupo1GorduraV2++
                        sumGrupo1GorduraV2 = sumGrupo1GorduraV2 + res;
                    }
                    if ($scope.newUsersListGrupo01[ii].client_history.da_03_07 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_03_07;
                        var res = Number(str.replace(",", "."));
                        contGrupo1GorduraV3++
                        sumGrupo1GorduraV3 = sumGrupo1GorduraV3 + res;
                    }
                }
            };

            if (contGrupo1GorduraV1 == 1) { 
                totalGrupo1GorduraV1 = sumGrupo1GorduraV1;
            } else {
                totalGrupo1GorduraV1 = Math.round(sumGrupo1GorduraV1 / (contGrupo1GorduraV1 - 1)* 100) / 100;
            }
            if (contGrupo1GorduraV2 == 1) { 
                totalGrupo1GorduraV2 = sumGrupo1GorduraV2;
            } else {
                totalGrupo1GorduraV2 = Math.round(sumGrupo1GorduraV2 / (contGrupo1GorduraV2 - 1)* 100) / 100;
            }
            if (contGrupo1GorduraV3 == 1) { 
                totalGrupo1GorduraV3 = sumGrupo1GorduraV3;
            } else {
                totalGrupo1GorduraV3 = Math.round(sumGrupo1GorduraV3 / (contGrupo1GorduraV3 - 1)* 100) / 100;
            }

            //calculo da media grupo 1 perimetro abdominal
            var contGrupo1PerimAbdom1 = 0;
            var contGrupo1PerimAbdom2 = 0;
            var contGrupo1PerimAbdom3 = 0;
            var sumGrupo1PerimAbdom1 = 0;
            var sumGrupo1PerimAbdom2 = 0;
            var sumGrupo1PerimAbdom3 = 0;
            var totalGrupo1PerimAbdom1 = 0;
            var totalGrupo1PerimAbdom2 = 0;
            var totalGrupo1PerimAbdom3 = 0;
            
            for (var ii = 0; ii < contGrupo1; ii++) {
                if ($scope.newUsersListGrupo01[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo01[ii].client_history.da_01_09 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_01_09;
                        var res = Number(str.replace(",", "."));
                        contGrupo1PerimAbdom1++
                        sumGrupo1PerimAbdom1 = sumGrupo1PerimAbdom1 + res;
                    }
                    if ($scope.newUsersListGrupo01[ii].client_history.da_02_09 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_02_09;
                        var res = Number(str.replace(",", "."));
                        contGrupo1PerimAbdom2++
                        sumGrupo1PerimAbdom2 = sumGrupo1PerimAbdom2 + res;
                    }
                    if ($scope.newUsersListGrupo01[ii].client_history.da_03_09 != null) {
                        var str = $scope.newUsersListGrupo01[ii].client_history.da_03_09;
                        var res = Number(str.replace(",", "."));
                        contGrupo1PerimAbdom3++
                        sumGrupo1PerimAbdom3 = sumGrupo1PerimAbdom3 + res;
                    }
                }
            };

            if (contGrupo1PerimAbdom1 == 1) { 
                totalGrupo1PerimAbdom1 = sumGrupo1PerimAbdom1;
            } else {
                totalGrupo1PerimAbdom1 = Math.round(sumGrupo1PerimAbdom1 / (contGrupo1PerimAbdom1 - 1)* 100) / 100;
            }
            if (contGrupo1PerimAbdom2 == 1) { 
                totalGrupo1PerimAbdom2 = sumGrupo1PerimAbdom2;
            } else {
                totalGrupo1PerimAbdom2 = Math.round(sumGrupo1PerimAbdom2 / (contGrupo1PerimAbdom2 - 1)* 100) / 100;
            }
            if (contGrupo1PerimAbdom3 == 1) { 
                totalGrupo1PerimAbdom3 = sumGrupo1PerimAbdom3;
            } else {
                totalGrupo1PerimAbdom3 = Math.round(sumGrupo1PerimAbdom3 / (contGrupo1PerimAbdom3 - 1)* 100) / 100;
            }

            //grupo 2
            //calculo da media grupo 2 peso
            var contGrupo2Peso1 = 0;
            var contGrupo2Peso2 = 0;
            var contGrupo2Peso3 = 0;
            var sumGrupo2Peso1 = 0;
            var sumGrupo2Peso2 = 0;
            var sumGrupo2Peso3 = 0;
            var totalGrupo2Peso1 = 0;
            var totalGrupo2Peso2 = 0;
            var totalGrupo2Peso3 = 0;

            for (var ii = 0; ii < contGrupo2; ii++) {
                if ($scope.newUsersListGrupo02[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo02[ii].client_history.da_01_03 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_01_03;
                        var res = Number(str.replace(",", "."));
                        contGrupo2Peso1++
                        sumGrupo2Peso1 = sumGrupo2Peso1 + res;
                    }
                    if ($scope.newUsersListGrupo02[ii].client_history.da_02_03 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_02_03;
                        var res = Number(str.replace(",", "."));
                        contGrupo2Peso2++
                        sumGrupo2Peso2 = sumGrupo2Peso2 + res;
                    }
                    if ($scope.newUsersListGrupo02[ii].client_history.da_03_03 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_03_03;
                        var res = Number(str.replace(",", "."));
                        contGrupo2Peso3++
                        sumGrupo2Peso3 = sumGrupo2Peso3 + res;
                    }
                }
            };

            if (contGrupo2Peso1 == 1) { 
                totalGrupo2Peso1 = sumGrupo2Peso1;
            } else {
                totalGrupo2Peso1 = Math.round(sumGrupo2Peso1 / (contGrupo2Peso1 - 1)* 100) / 100;
            }
            if (contGrupo2Peso2 == 1) { 
                totalGrupo2Peso2 = sumGrupo2Peso2;
            } else {
                totalGrupo2Peso2 = Math.round(sumGrupo2Peso2 / (contGrupo2Peso2 - 1)* 100) / 100;
            }
            if (contGrupo2Peso3 == 1) { 
                totalGrupo2Peso3 = sumGrupo2Peso3;
            } else {
                totalGrupo2Peso3 = Math.round(sumGrupo2Peso3 / (contGrupo2Peso3 - 1)* 100) / 100;
            }

            //calculo da media grupo 2 massagorda
            var contGrupo2MassaG1 = 0;
            var contGrupo2MassaG2 = 0;
            var contGrupo2MassaG3 = 0;
            var sumGrupo2MassaG1 = 0;
            var sumGrupo2MassaG2 = 0;
            var sumGrupo2MassaG3 = 0;
            var totalGrupo2MassaG1 = 0;
            var totalGrupo2MassaG2 = 0;
            var totalGrupo2MassaG3 = 0;
            
            for (var ii = 0; ii < contGrupo2; ii++) {
                if ($scope.newUsersListGrupo02[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo02[ii].client_history.da_01_04 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_01_04;
                        var res = Number(str.replace(",", "."));
                        contGrupo2MassaG1++
                        sumGrupo2MassaG1 = sumGrupo2MassaG1 + res;
                    }
                    if ($scope.newUsersListGrupo02[ii].client_history.da_02_04 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_02_04;
                        var res = Number(str.replace(",", "."));
                        contGrupo2MassaG2++
                        sumGrupo2MassaG2 = sumGrupo2MassaG2 + res;
                    }
                    if ($scope.newUsersListGrupo02[ii].client_history.da_03_04 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_03_04;
                        var res = Number(str.replace(",", "."));
                        contGrupo2MassaG3++
                        sumGrupo2MassaG3 = sumGrupo2MassaG3 + res;
                    }
                }
            };

            if (contGrupo2MassaG1 == 1) { 
                totalGrupo2MassaG1 = sumGrupo2MassaG1;
            } else {
                totalGrupo2MassaG1 = Math.round(sumGrupo2MassaG1 / (contGrupo2MassaG1 - 1)* 100) / 100;
            }
            if (contGrupo2MassaG2 == 1) { 
                totalGrupo2MassaG2 = sumGrupo2MassaG2;
            } else {
                totalGrupo2MassaG2 = Math.round(sumGrupo2MassaG2 / (contGrupo2MassaG2 - 1)* 100) / 100;
            }
            if (contGrupo2MassaG3 == 1) { 
                totalGrupo2MassaG3 = sumGrupo2MassaG3;
            } else {
                totalGrupo2MassaG3 = Math.round(sumGrupo2MassaG3 / (contGrupo2MassaG3 - 1)* 100) / 100;
            }

            //calculo da media grupo 2 agua corporal
            var contGrupo2AguaC1 = 0;
            var contGrupo2AguaC2 = 0;
            var contGrupo2AguaC3 = 0;
            var sumGrupo2AguaC1 = 0;
            var sumGrupo2AguaC2 = 0;
            var sumGrupo2AguaC3 = 0;
            var totalGrupo2AguaC1 = 0;
            var totalGrupo2AguaC2 = 0;
            var totalGrupo2AguaC3 = 0;
            
            for (var ii = 0; ii < contGrupo2; ii++) {
                if ($scope.newUsersListGrupo02[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo02[ii].client_history.da_01_05 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_01_05;
                        var res = Number(str.replace(",", "."));
                        contGrupo2AguaC1++
                        sumGrupo2AguaC1 = sumGrupo2AguaC1 + res;
                    }
                    if ($scope.newUsersListGrupo02[ii].client_history.da_02_05 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_02_05;
                        var res = Number(str.replace(",", "."));
                        contGrupo2AguaC2++
                        sumGrupo2AguaC2 = sumGrupo2AguaC2 + res;
                    }
                    if ($scope.newUsersListGrupo02[ii].client_history.da_03_05 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_03_05;
                        var res = Number(str.replace(",", "."));
                        contGrupo2AguaC3++
                        sumGrupo2AguaC3 = sumGrupo2AguaC3 + res;
                    }
                }
            };

            if (contGrupo2AguaC1 == 1) { 
                totalGrupo2AguaC1 = sumGrupo2AguaC1;
            } else {
                totalGrupo2AguaC1 = Math.round(sumGrupo2AguaC1 / (contGrupo2AguaC1 - 1)* 100) / 100;
            }
            if (contGrupo2AguaC2 == 1) { 
                totalGrupo2AguaC2 = sumGrupo2AguaC2;
            } else {
                totalGrupo2AguaC2 = Math.round(sumGrupo2AguaC2 / (contGrupo2AguaC2 - 1)* 100) / 100;
            }
            if (contGrupo2AguaC3 == 1) { 
                totalGrupo2AguaC3 = sumGrupo2AguaC3;
            } else {
                totalGrupo2AguaC3 = Math.round(sumGrupo2AguaC3 / (contGrupo2AguaC3 - 1)* 100) / 100;
            }

            //calculo da media grupo 2 massa magra
            var contGrupo2MassaM1 = 0;
            var contGrupo2MassaM2 = 0;
            var contGrupo2MassaM3 = 0;
            var sumGrupo2MassaM1 = 0;
            var sumGrupo2MassaM2 = 0;
            var sumGrupo2MassaM3 = 0;
            var totalGrupo2MassaM1 = 0;
            var totalGrupo2MassaM2 = 0;
            var totalGrupo2MassaM3 = 0;
            
            for (var ii = 0; ii < contGrupo2; ii++) {
                if ($scope.newUsersListGrupo02[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo02[ii].client_history.da_01_06 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_01_06;
                        var res = Number(str.replace(",", "."));
                        contGrupo2MassaM1++
                        sumGrupo2MassaM1 = sumGrupo2MassaM1 + res;
                    }
                    if ($scope.newUsersListGrupo02[ii].client_history.da_02_06 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_02_06;
                        var res = Number(str.replace(",", "."));
                        contGrupo2MassaM2++
                        sumGrupo2MassaM2 = sumGrupo2MassaM2 + res;
                    }
                    if ($scope.newUsersListGrupo02[ii].client_history.da_03_06 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_03_06;
                        var res = Number(str.replace(",", "."));
                        contGrupo2MassaM3++
                        sumGrupo2MassaM3 = sumGrupo2MassaM3 + res;
                    }
                }
            };

            if (contGrupo2MassaM1 == 1) { 
                totalGrupo2MassaM1 = sumGrupo2MassaM1;
            } else {
                totalGrupo2MassaM1 = Math.round(sumGrupo2MassaM1 / (contGrupo2MassaM1 - 1)* 100) / 100;
            }
            if (contGrupo2MassaM2 == 1) { 
                totalGrupo2MassaM2 = sumGrupo2MassaM2;
            } else {
                totalGrupo2MassaM2 = Math.round(sumGrupo2MassaM2 / (contGrupo2MassaM2 - 1)* 100) / 100;
            }
            if (contGrupo2MassaM3 == 1) { 
                totalGrupo2MassaM3 = sumGrupo2MassaM3;
            } else {
                totalGrupo2MassaM3 = Math.round(sumGrupo2MassaM3 / (contGrupo2MassaM3 - 1)* 100) / 100;
            }

            //calculo da media grupo 2 gordura visceral
            var contGrupo2GorduraV1 = 0;
            var contGrupo2GorduraV2 = 0;
            var contGrupo2GorduraV3 = 0;
            var sumGrupo2GorduraV1 = 0;
            var sumGrupo2GorduraV2 = 0;
            var sumGrupo2GorduraV3 = 0;
            var totalGrupo2GorduraV1 = 0;
            var totalGrupo2GorduraV2 = 0;
            var totalGrupo2GorduraV3 = 0;
            
            for (var ii = 0; ii < contGrupo2; ii++) {
                if ($scope.newUsersListGrupo02[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo02[ii].client_history.da_01_07 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_01_07;
                        var res = Number(str.replace(",", "."));
                        contGrupo2GorduraV1++
                        sumGrupo2GorduraV1 = sumGrupo2GorduraV1 + res;
                    }
                    if ($scope.newUsersListGrupo02[ii].client_history.da_02_07 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_02_07;
                        var res = Number(str.replace(",", "."));
                        contGrupo2GorduraV2++
                        sumGrupo2GorduraV2 = sumGrupo2GorduraV2 + res;
                    }
                    if ($scope.newUsersListGrupo02[ii].client_history.da_03_07 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_03_07;
                        var res = Number(str.replace(",", "."));
                        contGrupo2GorduraV3++
                        sumGrupo2GorduraV3 = sumGrupo2GorduraV3 + res;
                    }
                }
            };

            if (contGrupo2GorduraV1 == 1) { 
                totalGrupo2GorduraV1 = sumGrupo2GorduraV1;
            } else {
                totalGrupo2GorduraV1 = Math.round(sumGrupo2GorduraV1 / (contGrupo2GorduraV1 - 1)* 100) / 100;
            }
            if (contGrupo2GorduraV2 == 1) { 
                totalGrupo2GorduraV2 = sumGrupo2GorduraV2;
            } else {
                totalGrupo2GorduraV2 = Math.round(sumGrupo2GorduraV2 / (contGrupo2GorduraV2 - 1)* 100) / 100;
            }
            if (contGrupo2GorduraV3 == 1) { 
                totalGrupo2GorduraV3 = sumGrupo2GorduraV3;
            } else {
                totalGrupo2GorduraV3 = Math.round(sumGrupo2GorduraV3 / (contGrupo2GorduraV3 - 1)* 100) / 100;
            }

            //calculo da media grupo 2 perimetro abdominal
            var contGrupo2PerimAbdom1 = 0;
            var contGrupo2PerimAbdom2 = 0;
            var contGrupo2PerimAbdom3 = 0;
            var sumGrupo2PerimAbdom1 = 0;
            var sumGrupo2PerimAbdom2 = 0;
            var sumGrupo2PerimAbdom3 = 0;
            var totalGrupo2PerimAbdom1 = 0;
            var totalGrupo2PerimAbdom2 = 0;
            var totalGrupo2PerimAbdom3 = 0;
            
            for (var ii = 0; ii < contGrupo2; ii++) {
                if ($scope.newUsersListGrupo02[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo02[ii].client_history.da_01_09 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_01_09;
                        var res = Number(str.replace(",", "."));
                        contGrupo2PerimAbdom1++
                        sumGrupo2PerimAbdom1 = sumGrupo2PerimAbdom1 + res;
                    }
                    if ($scope.newUsersListGrupo02[ii].client_history.da_02_09 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_02_09;
                        var res = Number(str.replace(",", "."));
                        contGrupo2PerimAbdom2++
                        sumGrupo2PerimAbdom2 = sumGrupo2PerimAbdom2 + res;
                    }
                    if ($scope.newUsersListGrupo02[ii].client_history.da_03_09 != null) {
                        var str = $scope.newUsersListGrupo02[ii].client_history.da_03_09;
                        var res = Number(str.replace(",", "."));
                        contGrupo2PerimAbdom3++
                        sumGrupo2PerimAbdom3 = sumGrupo2PerimAbdom3 + res;
                    }
                }
            };

            if (contGrupo2PerimAbdom1 == 1) { 
                totalGrupo2PerimAbdom1 = sumGrupo2PerimAbdom1;
            } else {
                totalGrupo2PerimAbdom1 = Math.round(sumGrupo2PerimAbdom1 / (contGrupo2PerimAbdom1 - 1)* 100) / 100;
            }
            if (contGrupo2PerimAbdom2 == 1) { 
                totalGrupo2PerimAbdom2 = sumGrupo2PerimAbdom2;
            } else {
                totalGrupo2PerimAbdom2 = Math.round(sumGrupo2PerimAbdom2 / (contGrupo2PerimAbdom2 - 1)* 100) / 100;
            }
            if (contGrupo2PerimAbdom3 == 1) { 
                totalGrupo2PerimAbdom3 = sumGrupo2PerimAbdom3;
            } else {
                totalGrupo2PerimAbdom3 = Math.round(sumGrupo2PerimAbdom3 / (contGrupo2PerimAbdom3 - 1)* 100) / 100;
            }

            //grupo 3
            //calculo da media grupo 3 peso
            var contGrupo3Peso1 = 0;
            var contGrupo3Peso2 = 0;
            var contGrupo3Peso3 = 0;
            var sumGrupo3Peso1 = 0;
            var sumGrupo3Peso2 = 0;
            var sumGrupo3Peso3 = 0;
            var totalGrupo3Peso1 = 0;
            var totalGrupo3Peso2 = 0;
            var totalGrupo3Peso3 = 0;

            for (var ii = 0; ii < contGrupo3; ii++) {
                if ($scope.newUsersListGrupo03[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo03[ii].client_history.da_01_03 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_01_03;
                        var res = Number(str.replace(",", "."));
                        contGrupo3Peso1++
                        sumGrupo3Peso1 = sumGrupo3Peso1 + res;
                    }
                    if ($scope.newUsersListGrupo03[ii].client_history.da_02_03 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_02_03;
                        var res = Number(str.replace(",", "."));
                        contGrupo3Peso2++
                        sumGrupo3Peso2 = sumGrupo3Peso2 + res;
                    }
                    if ($scope.newUsersListGrupo03[ii].client_history.da_03_03 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_03_03;
                        var res = Number(str.replace(",", "."));
                        contGrupo3Peso3++
                        sumGrupo3Peso3 = sumGrupo3Peso3 + res;
                    }
                }
            };

            if (contGrupo3Peso1 == 1) { 
                totalGrupo3Peso1 = sumGrupo3Peso1;
            } else {
                totalGrupo3Peso1 = Math.round(sumGrupo3Peso1 / (contGrupo3Peso1 - 1)* 100) / 100;
            }
            if (contGrupo3Peso2 == 1) { 
                totalGrupo3Peso2 = sumGrupo3Peso2;
            } else {
                totalGrupo3Peso2 = Math.round(sumGrupo3Peso2 / (contGrupo3Peso2 - 1)* 100) / 100;
            }
            if (contGrupo3Peso3 == 1) { 
                totalGrupo3Peso3 = sumGrupo3Peso3;
            } else {
                totalGrupo3Peso3 = Math.round(sumGrupo3Peso3 / (contGrupo3Peso3 - 1)* 100) / 100;
            }

            //calculo da media grupo 3 massagorda
            var contGrupo3MassaG1 = 0;
            var contGrupo3MassaG2 = 0;
            var contGrupo3MassaG3 = 0;
            var sumGrupo3MassaG1 = 0;
            var sumGrupo3MassaG2 = 0;
            var sumGrupo3MassaG3 = 0;
            var totalGrupo3MassaG1 = 0;
            var totalGrupo3MassaG2 = 0;
            var totalGrupo3MassaG3 = 0;
            
            for (var ii = 0; ii < contGrupo3; ii++) {
                if ($scope.newUsersListGrupo03[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo03[ii].client_history.da_01_04 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_01_04;
                        var res = Number(str.replace(",", "."));
                        contGrupo3MassaG1++
                        sumGrupo3MassaG1 = sumGrupo3MassaG1 + res;
                    }
                    if ($scope.newUsersListGrupo03[ii].client_history.da_02_04 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_02_04;
                        var res = Number(str.replace(",", "."));
                        contGrupo3MassaG2++
                        sumGrupo3MassaG2 = sumGrupo3MassaG2 + res;
                    }
                    if ($scope.newUsersListGrupo03[ii].client_history.da_03_04 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_03_04;
                        var res = Number(str.replace(",", "."));
                        contGrupo3MassaG3++
                        sumGrupo3MassaG3 = sumGrupo3MassaG3 + res;
                    }
                }
            };

            if (contGrupo3MassaG1 == 1) { 
                totalGrupo3MassaG1 = sumGrupo3MassaG1;
            } else {
                totalGrupo3MassaG1 = Math.round(sumGrupo3MassaG1 / (contGrupo3MassaG1 - 1)* 100) / 100;
            }
            if (contGrupo3MassaG2 == 1) { 
                totalGrupo3MassaG2 = sumGrupo3MassaG2;
            } else {
                totalGrupo3MassaG2 = Math.round(sumGrupo3MassaG2 / (contGrupo3MassaG2 - 1)* 100) / 100;
            }
            if (contGrupo3MassaG3 == 1) { 
                totalGrupo3MassaG3 = sumGrupo3MassaG3;
            } else {
                totalGrupo3MassaG3 = Math.round(sumGrupo3MassaG3 / (contGrupo3MassaG3 - 1)* 100) / 100;
            }

            //calculo da media grupo 3 agua corporal
            var contGrupo3AguaC1 = 0;
            var contGrupo3AguaC2 = 0;
            var contGrupo3AguaC3 = 0;
            var sumGrupo3AguaC1 = 0;
            var sumGrupo3AguaC2 = 0;
            var sumGrupo3AguaC3 = 0;
            var totalGrupo3AguaC1 = 0;
            var totalGrupo3AguaC2 = 0;
            var totalGrupo3AguaC3 = 0;
            
            for (var ii = 0; ii < contGrupo3; ii++) {
                if ($scope.newUsersListGrupo03[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo03[ii].client_history.da_01_05 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_01_05;
                        var res = Number(str.replace(",", "."));
                        contGrupo3AguaC1++
                        sumGrupo3AguaC1 = sumGrupo3AguaC1 + res;
                    }
                    if ($scope.newUsersListGrupo03[ii].client_history.da_02_05 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_02_05;
                        var res = Number(str.replace(",", "."));
                        contGrupo3AguaC2++
                        sumGrupo3AguaC2 = sumGrupo3AguaC2 + res;
                    }
                    if ($scope.newUsersListGrupo03[ii].client_history.da_03_05 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_03_05;
                        var res = Number(str.replace(",", "."));
                        contGrupo3AguaC3++
                        sumGrupo3AguaC3 = sumGrupo3AguaC3 + res;
                    }
                }
            };

            if (contGrupo3AguaC1 == 1) { 
                totalGrupo3AguaC1 = sumGrupo3AguaC1;
            } else {
                totalGrupo3AguaC1 = Math.round(sumGrupo3AguaC1 / (contGrupo3AguaC1 - 1)* 100) / 100;
            }
            if (contGrupo3AguaC2 == 1) { 
                totalGrupo3AguaC2 = sumGrupo3AguaC2;
            } else {
                totalGrupo3AguaC2 = Math.round(sumGrupo3AguaC2 / (contGrupo3AguaC2 - 1)* 100) / 100;
            }
            if (contGrupo3AguaC3 == 1) { 
                totalGrupo3AguaC3 = sumGrupo3AguaC3;
            } else {
                totalGrupo3AguaC3 = Math.round(sumGrupo3AguaC3 / (contGrupo3AguaC3 - 1)* 100) / 100;
            }

            //calculo da media grupo 3 massa magra
            var contGrupo3MassaM1 = 0;
            var contGrupo3MassaM2 = 0;
            var contGrupo3MassaM3 = 0;
            var sumGrupo3MassaM1 = 0;
            var sumGrupo3MassaM2 = 0;
            var sumGrupo3MassaM3 = 0;
            var totalGrupo3MassaM1 = 0;
            var totalGrupo3MassaM2 = 0;
            var totalGrupo3MassaM3 = 0;
            
            for (var ii = 0; ii < contGrupo3; ii++) {
                if ($scope.newUsersListGrupo03[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo03[ii].client_history.da_01_06 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_01_06;
                        var res = Number(str.replace(",", "."));
                        contGrupo3MassaM1++
                        sumGrupo3MassaM1 = sumGrupo3MassaM1 + res;
                    }
                    if ($scope.newUsersListGrupo03[ii].client_history.da_02_06 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_02_06;
                        var res = Number(str.replace(",", "."));
                        contGrupo3MassaM2++
                        sumGrupo3MassaM2 = sumGrupo3MassaM2 + res;
                    }
                    if ($scope.newUsersListGrupo03[ii].client_history.da_03_06 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_03_06;
                        var res = Number(str.replace(",", "."));
                        contGrupo3MassaM3++
                        sumGrupo3MassaM3 = sumGrupo3MassaM3 + res;
                    }
                }
            };

            if (contGrupo3MassaM1 == 1) { 
                totalGrupo3MassaM1 = sumGrupo3MassaM1;
            } else {
                totalGrupo3MassaM1 = Math.round(sumGrupo3MassaM1 / (contGrupo3MassaM1 - 1)* 100) / 100;
            }
            if (contGrupo3MassaM2 == 1) { 
                totalGrupo3MassaM2 = sumGrupo3MassaM2;
            } else {
                totalGrupo3MassaM2 = Math.round(sumGrupo3MassaM2 / (contGrupo3MassaM2 - 1)* 100) / 100;
            }
            if (contGrupo3MassaM3 == 1) { 
                totalGrupo3MassaM3 = sumGrupo3MassaM3;
            } else {
                totalGrupo3MassaM3 = Math.round(sumGrupo3MassaM3 / (contGrupo3MassaM3 - 1)* 100) / 100;
            }

            //calculo da media grupo 3 gordura visceral
            var contGrupo3GorduraV1 = 0;
            var contGrupo3GorduraV2 = 0;
            var contGrupo3GorduraV3 = 0;
            var sumGrupo3GorduraV1 = 0;
            var sumGrupo3GorduraV2 = 0;
            var sumGrupo3GorduraV3 = 0;
            var totalGrupo3GorduraV1 = 0;
            var totalGrupo3GorduraV2 = 0;
            var totalGrupo3GorduraV3 = 0;
            
            for (var ii = 0; ii < contGrupo3; ii++) {
                if ($scope.newUsersListGrupo03[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo03[ii].client_history.da_01_07 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_01_07;
                        var res = Number(str.replace(",", "."));
                        contGrupo3GorduraV1++
                        sumGrupo3GorduraV1 = sumGrupo3GorduraV1 + res;
                    }
                    if ($scope.newUsersListGrupo03[ii].client_history.da_02_07 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_02_07;
                        var res = Number(str.replace(",", "."));
                        contGrupo3GorduraV2++
                        sumGrupo3GorduraV2 = sumGrupo3GorduraV2 + res;
                    }
                    if ($scope.newUsersListGrupo03[ii].client_history.da_03_07 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_03_07;
                        var res = Number(str.replace(",", "."));
                        contGrupo3GorduraV3++
                        sumGrupo3GorduraV3 = sumGrupo3GorduraV3 + res;
                    }
                }
            };

            if (contGrupo3GorduraV1 == 1) { 
                totalGrupo3GorduraV1 = sumGrupo3GorduraV1;
            } else {
                totalGrupo3GorduraV1 = Math.round(sumGrupo3GorduraV1 / (contGrupo3GorduraV1 - 1)* 100) / 100;
            }
            if (contGrupo3GorduraV2 == 1) { 
                totalGrupo3GorduraV2 = sumGrupo3GorduraV2;
            } else {
                totalGrupo3GorduraV2 = Math.round(sumGrupo3GorduraV2 / (contGrupo3GorduraV2 - 1)* 100) / 100;
            }
            if (contGrupo3GorduraV3 == 1) { 
                totalGrupo3GorduraV3 = sumGrupo3GorduraV3;
            } else {
                totalGrupo3GorduraV3 = Math.round(sumGrupo3GorduraV3 / (contGrupo3GorduraV3 - 1)* 100) / 100;
            }

            //calculo da media grupo 3 perimetro abdominal
            var contGrupo3PerimAbdom1 = 0;
            var contGrupo3PerimAbdom2 = 0;
            var contGrupo3PerimAbdom3 = 0;
            var sumGrupo3PerimAbdom1 = 0;
            var sumGrupo3PerimAbdom2 = 0;
            var sumGrupo3PerimAbdom3 = 0;
            var totalGrupo3PerimAbdom1 = 0;
            var totalGrupo3PerimAbdom2 = 0;
            var totalGrupo3PerimAbdom3 = 0;
            
            for (var ii = 0; ii < contGrupo3; ii++) {
                if ($scope.newUsersListGrupo03[ii].client_detail.active == "true") {

                    if ($scope.newUsersListGrupo03[ii].client_history.da_01_09 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_01_09;
                        var res = Number(str.replace(",", "."));
                        contGrupo3PerimAbdom1++
                        sumGrupo3PerimAbdom1 = sumGrupo3PerimAbdom1 + res;
                    }
                    if ($scope.newUsersListGrupo03[ii].client_history.da_02_09 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_02_09;
                        var res = Number(str.replace(",", "."));
                        contGrupo3PerimAbdom2++
                        sumGrupo3PerimAbdom2 = sumGrupo3PerimAbdom2 + res;
                    }
                    if ($scope.newUsersListGrupo03[ii].client_history.da_03_09 != null) {
                        var str = $scope.newUsersListGrupo03[ii].client_history.da_03_09;
                        var res = Number(str.replace(",", "."));
                        contGrupo3PerimAbdom3++
                        sumGrupo3PerimAbdom3 = sumGrupo3PerimAbdom3 + res;
                    }
                }
            };

            if (contGrupo3PerimAbdom1 == 1) { 
                totalGrupo3PerimAbdom1 = sumGrupo3PerimAbdom1;
            } else {
                totalGrupo3PerimAbdom1 = Math.round(sumGrupo3PerimAbdom1 / (contGrupo3PerimAbdom1 - 1)* 100) / 100;
            }
            if (contGrupo3PerimAbdom2 == 1) { 
                totalGrupo3PerimAbdom2 = sumGrupo3PerimAbdom2;
            } else {
                totalGrupo3PerimAbdom2 = Math.round(sumGrupo3PerimAbdom2 / (contGrupo3PerimAbdom2 - 1)* 100) / 100;
            }
            if (contGrupo3PerimAbdom3 == 1) { 
                totalGrupo3PerimAbdom3 = sumGrupo3PerimAbdom3;
            } else {
                totalGrupo3PerimAbdom3 = Math.round(sumGrupo3PerimAbdom3 / (contGrupo3PerimAbdom3 - 1)* 100) / 100;
            }



            for (var t = 0; t < 1; t++) {
                $scope.mediaGrupo01[t] = {
                    //1
                    Grupo1Peso1Cont: contGrupo1Peso1,
                    Grupo1Peso1Total: totalGrupo1Peso1,
                    //2
                    Grupo1Peso2Cont: contGrupo1Peso2,
                    Grupo1Peso2Total: totalGrupo1Peso2,
                    //3
                    Grupo1Peso3Cont: contGrupo1Peso3,
                    Grupo1Peso3Total: totalGrupo1Peso3,
                    //1
                    Grupo1MassaG1Cont: contGrupo1MassaG1,
                    Grupo1MassaG1Total: totalGrupo1MassaG1,
                    //2
                    Grupo1MassaG2Cont: contGrupo1MassaG2,
                    Grupo1MassaG2Total: totalGrupo1MassaG2,
                    //3
                    Grupo1MassaG3Cont: contGrupo1MassaG3,                    
                    Grupo1MassaG3Total: totalGrupo1MassaG3,
                    //1
                    Grupo1AguaC1Cont: contGrupo1AguaC1,
                    Grupo1AguaC1Total: totalGrupo1AguaC1,
                    //2
                    Grupo1AguaC2Cont: contGrupo1AguaC2,
                    Grupo1AguaC2Total: totalGrupo1AguaC2,
                    //3
                    Grupo1AguaC3Cont: contGrupo1AguaC3,
                    Grupo1AguaC3Total: totalGrupo1AguaC3,
                    //1
                    Grupo1MassaM1Cont: contGrupo1MassaM1,
                    Grupo1MassaM1Total: totalGrupo1MassaM1,
                    //2
                    Grupo1MassaM2Cont: contGrupo1MassaM2,
                    Grupo1MassaM2Total: totalGrupo1MassaM2,
                    //3
                    Grupo1MassaM3Cont: contGrupo1MassaM3,
                    Grupo1MassaM3Total: totalGrupo1MassaM3,
                    //1
                    Grupo1GorduraV1Cont: contGrupo1GorduraV1,
                    Grupo1GorduraV1Total: totalGrupo1GorduraV1,
                    //2
                    Grupo1GorduraV2Cont: contGrupo1GorduraV2,
                    Grupo1GorduraV2Total: totalGrupo1GorduraV2,
                    //3
                    Grupo1GorduraV3Cont: contGrupo1GorduraV3,
                    Grupo1GorduraV3Total: totalGrupo1GorduraV3,
                    //1
                    Grupo1PerimAbdom1Cont: contGrupo1PerimAbdom1,
                    Grupo1PerimAbdom1Total: totalGrupo1PerimAbdom1,
                    //2
                    Grupo1PerimAbdom2Cont: contGrupo1PerimAbdom2,
                    Grupo1PerimAbdom2Total: totalGrupo1PerimAbdom2,
                    //3
                    Grupo1PerimAbdom3Cont: contGrupo1PerimAbdom3,
                    Grupo1PerimAbdom3Total: totalGrupo1PerimAbdom3
                };

                $scope.mediaGrupo02[t] = {
                    //1
                    Grupo2Peso1Cont: contGrupo2Peso1,
                    Grupo2Peso1Total: totalGrupo2Peso1,
                    //2
                    Grupo2Peso2Cont: contGrupo2Peso2,
                    Grupo2Peso2Total: totalGrupo2Peso2,
                    //3
                    Grupo2Peso3Cont: contGrupo2Peso3,
                    Grupo2Peso3Total: totalGrupo2Peso3,
                    //1
                    Grupo2MassaG1Cont: contGrupo2MassaG1,
                    Grupo2MassaG1Total: totalGrupo2MassaG1,
                    //2
                    Grupo2MassaG2Cont: contGrupo2MassaG2,
                    Grupo2MassaG2Total: totalGrupo2MassaG2,
                    //3
                    Grupo2MassaG3Cont: contGrupo2MassaG3,                    
                    Grupo2MassaG3Total: totalGrupo2MassaG3,
                    //1
                    Grupo2AguaC1Cont: contGrupo2AguaC1,
                    Grupo2AguaC1Total: totalGrupo2AguaC1,
                    //2
                    Grupo2AguaC2Cont: contGrupo2AguaC2,
                    Grupo2AguaC2Total: totalGrupo2AguaC2,
                    //3
                    Grupo2AguaC3Cont: contGrupo2AguaC3,
                    Grupo2AguaC3Total: totalGrupo2AguaC3,
                    //1
                    Grupo2MassaM1Cont: contGrupo2MassaM1,
                    Grupo2MassaM1Total: totalGrupo2MassaM1,
                    //2
                    Grupo2MassaM2Cont: contGrupo2MassaM2,
                    Grupo2MassaM2Total: totalGrupo2MassaM2,
                    //3
                    Grupo2MassaM3Cont: contGrupo2MassaM3,
                    Grupo2MassaM3Total: totalGrupo2MassaM3,
                    //1
                    Grupo2GorduraV1Cont: contGrupo2GorduraV1,
                    Grupo2GorduraV1Total: totalGrupo2GorduraV1,
                    //2
                    Grupo2GorduraV2Cont: contGrupo2GorduraV2,
                    Grupo2GorduraV2Total: totalGrupo2GorduraV2,
                    //3
                    Grupo2GorduraV3Cont: contGrupo2GorduraV3,
                    Grupo2GorduraV3Total: totalGrupo2GorduraV3,
                    //1
                    Grupo2PerimAbdom1Cont: contGrupo2PerimAbdom1,
                    Grupo2PerimAbdom1Total: totalGrupo2PerimAbdom1,
                    //2
                    Grupo2PerimAbdom2Cont: contGrupo2PerimAbdom2,
                    Grupo2PerimAbdom2Total: totalGrupo2PerimAbdom2,
                    //3
                    Grupo2PerimAbdom3Cont: contGrupo2PerimAbdom3,
                    Grupo2PerimAbdom3Total: totalGrupo2PerimAbdom3
                };

                $scope.mediaGrupo03[t] = {
                    //1
                    Grupo3Peso1Cont: contGrupo3Peso1,
                    Grupo3Peso1Total: totalGrupo3Peso1,
                    //2
                    Grupo3Peso2Cont: contGrupo3Peso2,
                    Grupo3Peso2Total: totalGrupo3Peso2,
                    //3
                    Grupo3Peso3Cont: contGrupo3Peso3,
                    Grupo3Peso3Total: totalGrupo3Peso3,
                    //1
                    Grupo3MassaG1Cont: contGrupo3MassaG1,
                    Grupo3MassaG1Total: totalGrupo3MassaG1,
                    //2
                    Grupo3MassaG2Cont: contGrupo3MassaG2,
                    Grupo3MassaG2Total: totalGrupo3MassaG2,
                    //3
                    Grupo3MassaG3Cont: contGrupo3MassaG3,                    
                    Grupo3MassaG3Total: totalGrupo3MassaG3,
                    //1
                    Grupo3AguaC1Cont: contGrupo3AguaC1,
                    Grupo3AguaC1Total: totalGrupo3AguaC1,
                    //2
                    Grupo3AguaC2Cont: contGrupo3AguaC2,
                    Grupo3AguaC2Total: totalGrupo3AguaC2,
                    //3
                    Grupo3AguaC3Cont: contGrupo3AguaC3,
                    Grupo3AguaC3Total: totalGrupo3AguaC3,
                    //1
                    Grupo3MassaM1Cont: contGrupo3MassaM1,
                    Grupo3MassaM1Total: totalGrupo3MassaM1,
                    //2
                    Grupo3MassaM2Cont: contGrupo3MassaM2,
                    Grupo3MassaM2Total: totalGrupo3MassaM2,
                    //3
                    Grupo3MassaM3Cont: contGrupo3MassaM3,
                    Grupo3MassaM3Total: totalGrupo3MassaM3,
                    //1
                    Grupo3GorduraV1Cont: contGrupo3GorduraV1,
                    Grupo3GorduraV1Total: totalGrupo3GorduraV1,
                    //2
                    Grupo3GorduraV2Cont: contGrupo3GorduraV2,
                    Grupo3GorduraV2Total: totalGrupo3GorduraV2,
                    //3
                    Grupo3GorduraV3Cont: contGrupo3GorduraV3,
                    Grupo3GorduraV3Total: totalGrupo3GorduraV3,
                    //1
                    Grupo3PerimAbdom1Cont: contGrupo3PerimAbdom1,
                    Grupo3PerimAbdom1Total: totalGrupo3PerimAbdom1,
                    //2
                    Grupo3PerimAbdom2Cont: contGrupo3PerimAbdom2,
                    Grupo3PerimAbdom2Total: totalGrupo3PerimAbdom2,
                    //3
                    Grupo3PerimAbdom3Cont: contGrupo3PerimAbdom3,
                    Grupo3PerimAbdom3Total: totalGrupo3PerimAbdom3
                };
            }


            //grafico grupomotiva01 peso
            $scope.GrupoMotiva01Peso = {};

            $scope.GrupoMotiva01Peso.type = "ColumnChart";
            
            $scope.GrupoMotiva01Peso.data = {"cols": [
                //nao esquecer disto
                {id: "s", label: "Utilizadores", type: "string"},
                {id: "t", label: "Média", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1Peso1Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1Peso1Total,
                        f: $scope.mediaGrupo01[0].Grupo1Peso1Total + ' Kg'
                    }
                ]}, //titulo e quantidade
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1Peso2Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1Peso2Total,
                        f: $scope.mediaGrupo01[0].Grupo1Peso2Total + ' Kg'
                    }
                ]}, //titulo e quantidade
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1Peso3Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1Peso3Total,
                        f: $scope.mediaGrupo01[0].Grupo1Peso3Total + ' Kg'
                    }
                ]}
            ]};  

            $scope.GrupoMotiva01Peso.options = {
                'title': 'Grupo Motivação 1 Média - Peso',
                'legend': 'none',
                'hAxis': {
                    'title': 'Consultas'
                },
                'vAxis': {
                    'title': 'Peso em Kg'
                },
                'colors': [
                    '#00cc00'
                ]
            };
            
            //grafico grupomotiva01 massa gorda
            $scope.GrupoMotiva01MassaGorda = {};
            
            $scope.GrupoMotiva01MassaGorda.type = "ColumnChart";
            
            $scope.GrupoMotiva01MassaGorda.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Utilizadores", type: "string"},
                {id: "s", label: "Média", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1MassaG1Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1MassaG1Total,
                        f: $scope.mediaGrupo01[0].Grupo1MassaG1Total + ' %'
                    }
                ]},
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1MassaG2Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1MassaG2Total,
                        f: $scope.mediaGrupo01[0].Grupo1MassaG2Total + ' %'
                    }
                ]},
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1MassaG3Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1MassaG3Total,
                        f: $scope.mediaGrupo01[0].Grupo1MassaG3Total + ' %'
                    }
                ]}
            ]};  

            $scope.GrupoMotiva01MassaGorda.options = {
                'title': 'Grupo Motivação 1 Média - Massa Gorda',
                'legend': 'none',
                'hAxis': {
                    'title': 'Consultas'
                },
                'vAxis': {
                    'title': 'Massa Gorda em %'
                },
                'colors': [
                    '#00cc00'
                ]
            };

            //grafico grupomotiva01 agua corporal
            $scope.GrupoMotiva01AguaCorporal = {};
            
            $scope.GrupoMotiva01AguaCorporal.type = "ColumnChart";
            
            $scope.GrupoMotiva01AguaCorporal.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Utilizadores", type: "string"},
                {id: "s", label: "Média", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1AguaC1Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1AguaC1Total,
                        f: $scope.mediaGrupo01[0].Grupo1AguaC1Total + ' %'
                    }
                ]},
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1AguaC2Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1AguaC2Total,
                        f: $scope.mediaGrupo01[0].Grupo1AguaC2Total + ' %'
                    }
                ]},
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1AguaC3Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1AguaC3Total,
                        f: $scope.mediaGrupo01[0].Grupo1AguaC3Total + ' %'
                    }
                ]}
            ]};  

            $scope.GrupoMotiva01AguaCorporal.options = {
                'title': 'Grupo Motivação 1 Média - Agua Corporal',
                'legend': 'none',
                'hAxis': {
                    'title': 'Consultas'
                },
                'vAxis': {
                    'title': 'Água Corporal em %'
                },
                'colors': [
                    '#00cc00'
                ]
            };

            //grafico grupomotiva01 massa magra
            $scope.GrupoMotiva01MassaMagra = {};
            
            $scope.GrupoMotiva01MassaMagra.type = "ColumnChart";
            
            $scope.GrupoMotiva01MassaMagra.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Utilizadores", type: "string"},
                {id: "s", label: "Média", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1MassaM1Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1MassaM1Total,
                        f: $scope.mediaGrupo01[0].Grupo1MassaM1Total + ' Kg'
                    }
                ]},
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1MassaM2Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1MassaM2Total,
                        f: $scope.mediaGrupo01[0].Grupo1MassaM2Total + ' Kg'
                    }
                ]},
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1MassaM3Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1MassaM3Total,
                        f: $scope.mediaGrupo01[0].Grupo1MassaM3Total + ' Kg'
                    }
                ]}
            ]};  

            $scope.GrupoMotiva01MassaMagra.options = {
                'title': 'Grupo Motivação 1 Média - Massa Magra',
                'legend': 'none',
                'hAxis': {
                    'title': 'Consultas'
                },
                'vAxis': {
                    'title': 'Massa Magra em Kg'
                },
                'colors': [
                    '#00cc00'
                ]
            };

            //grafico grupomotiva01 gordura visceral
            $scope.GrupoMotiva01GorduraVisceral = {};
            
            $scope.GrupoMotiva01GorduraVisceral.type = "ColumnChart";
            
            $scope.GrupoMotiva01GorduraVisceral.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Utilizadores", type: "string"},
                {id: "s", label: "Média", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1GorduraV1Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1GorduraV1Total,
                        f: $scope.mediaGrupo01[0].Grupo1GorduraV1Total
                    }
                ]},
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1GorduraV2Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1GorduraV2Total,
                        f: $scope.mediaGrupo01[0].Grupo1GorduraV2Total
                    }
                ]},
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1GorduraV3Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1GorduraV3Total,
                        f: $scope.mediaGrupo01[0].Grupo1GorduraV3Total
                    }
                ]}
            ]};  

            $scope.GrupoMotiva01GorduraVisceral.options = {
                'title': 'Grupo Motivação 1 Média - Gordura Visceral',
                'legend': 'none',
                'hAxis': {
                    'title': 'Consultas'
                },
                'vAxis': {
                    'title': 'Gordura Visceral Indice (1- 20)'
                },
                'colors': [
                    '#00cc00'
                ]
            };

            //grafico grupomotiva01 perimetro abdominal
            $scope.GrupoMotiva01PerimetroAbdominal = {};
            
            $scope.GrupoMotiva01PerimetroAbdominal.type = "ColumnChart";
            
            $scope.GrupoMotiva01PerimetroAbdominal.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Utilizadores", type: "string"},
                {id: "s", label: "Média", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1PerimAbdom1Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1PerimAbdom1Total,
                        f: $scope.mediaGrupo01[0].Grupo1PerimAbdom1Total + 'cm'
                    }
                ]},
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1PerimAbdom2Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1PerimAbdom2Total,
                        f: $scope.mediaGrupo01[0].Grupo1PerimAbdom2Total + 'cm'
                    }
                ]},
                {c: [ 
                    {v: $scope.mediaGrupo01[0].Grupo1PerimAbdom3Cont + ' utilizadores'},
                    {
                        v: $scope.mediaGrupo01[0].Grupo1PerimAbdom3Total,
                        f: $scope.mediaGrupo01[0].Grupo1PerimAbdom3Total + 'cm'
                    }
                ]}
            ]};  

            $scope.GrupoMotiva01PerimetroAbdominal.options = {
                'title': 'Grupo Motivação 1 Média - Perimetro Abdominal',
                'legend': 'none',
                'hAxis': {
                    'title': 'Consultas'
                },
                'vAxis': {
                    'title': 'Perimetro Abdominal (cm)'
                },
                'colors': [
                    '#00cc00'
                ]
            };



            /////////////////////////////////////////////////////////////////////////////////////////////////////////
            //grafico 
            $scope.tipoSexo = {};
    
            $scope.tipoSexo.type = "PieChart";
            
            $scope.tipoSexo.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: [
                    {v: "Homem"},
                    {v: 78},
                ]},
                {c: [
                    {v: "Mulher"},
                    {v: 46},
                ]}
            ]};

            $scope.tipoSexo.options = {
                'title': 'Sexo'
            };

            $scope.tipoObjectivos = {};
    
            $scope.tipoObjectivos.type = "ColumnChart";
            
            $scope.tipoObjectivos.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Quantidade", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.objective01},
                {c: $scope.objective02},
                {c: $scope.objective03},
                {c: $scope.objective04},
                {c: $scope.objective05},
                {c: $scope.objective06},
                {c: $scope.objective07}
            ]};    

            $scope.tipoObjectivos.options = {
                'title': 'Objectivos',
                'legend': 'none'
            };

            $scope.tipoMotivacao = {};
    
            $scope.tipoMotivacao.type = "PieChart";
            
            $scope.tipoMotivacao.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.motivation00},
                {c: $scope.motivation01},
                {c: $scope.motivation02},
                {c: $scope.motivation03},
                {c: $scope.motivation04},
                {c: $scope.motivation05},
                {c: $scope.motivation06},
                {c: $scope.motivation07},
                {c: $scope.motivation08},
                {c: $scope.motivation09},
                {c: $scope.motivation10}
            ]};    

            $scope.tipoMotivacao.options = {
                'title': 'Motivação (1 significa nada empenhado e 10 extremamente empenhado)',
                'colors': [
                    '#676766', 
                    '#be2e21', 
                    '#cd5e14', 
                    '#d67626', 
                    '#e1a929', 
                    '#f3e03a',
                    '#bbc534',
                    '#8ec32d',
                    '#6eb22c',
                    '#579828',
                    '#487e44'
                ]
            };

            $scope.tipoVcsMotivacao = {};
    
            $scope.tipoVcsMotivacao.type = "PieChart";
            
            $scope.tipoVcsMotivacao.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.vcsMotivation01},
                {c: $scope.vcsMotivation02},
                {c: $scope.vcsMotivation03}
                
            ]};    

            $scope.tipoVcsMotivacao.options = {
                'title': 'Motivação com classificação atribuida pela Healthy Habits',
                'colors': [
                    '#579828',
                    '#f3e03a',
                    '#be2e21' 
                ]
            };

            $scope.tipoAlimenta = {};
    
            $scope.tipoAlimenta.type = "ColumnChart";
            
            $scope.tipoAlimenta.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}/*,
                {id: "s", label: "Percentagem", type: "number"}*/
                //nao esquecer disto
            ], "rows": [
                {c: $scope.typeFood01},
                {c: $scope.typeFood02},
                {c: $scope.typeFood03},
                {c: $scope.typeFood04},
                {c: $scope.typeFood05}
            ]};  

            $scope.tipoAlimenta.options = {
                'title': 'Tipo de Alimentação',
                'legend': 'none'
            };

            $scope.tipoSaude = {};
    
            $scope.tipoSaude.type = "ColumnChart";
            
            $scope.tipoSaude.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.health01},
                /*{c: $scope.health02},*/
                {c: $scope.health03},
                {c: $scope.health04},
                {c: $scope.health05},
                {c: $scope.health06},
                {c: $scope.health07},
                {c: $scope.health08},
                {c: $scope.health09},
                /*{c: $scope.health10},
                {c: $scope.health11},
                {c: $scope.health12},
                {c: $scope.health13},*/
                {c: $scope.health14}
            ]};

            $scope.tipoSaude.options = {
                'title': 'Tem algum dos seguintes problemas de saúde?',
                'legend': 'none'
            };

            $scope.tipoAgua = {};
    
            $scope.tipoAgua.type = "PieChart";
            
            $scope.tipoAgua.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: [
                    {v: "0 - 0,5lt"},
                    {v: 15},
                ]},
                {c: [
                    {v: "0,5 - 1lt"},
                    {v: 25},
                ]},
                {c: [
                    {v: "1 - 1,5lt"},
                    {v: 33},
                ]},
                {c: [
                    {v: "1,5 - 2lt"},
                    {v: 28},
                ]},
                {c: [
                    {v: "mais de 2lt"},
                    {v: 22},
                ]},
            ]};

            $scope.tipoAgua.options = {
                'title': 'Consumo de Água',
                'colors': [
                    '#002266',
                    '#003cb3',
                    '#0055ff',
                    '#6699ff',
                    '#ccddff'
                ]
            };

            $scope.tipoConsome = {};
    
            $scope.tipoConsome.type = "ColumnChart";
            
            $scope.tipoConsome.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.consome01},
                {c: $scope.consome02},
                {c: $scope.consome03},
                {c: $scope.consome04},
                {c: $scope.consome05},
                {c: $scope.consome06},
                {c: $scope.consome07}
            ]};

            $scope.tipoConsome.options = {
                'title': 'Consomem',
                'legend': 'none'
            };

            $scope.tipoConsomeRef = {};
    
            $scope.tipoConsomeRef.type = "PieChart";
            
            $scope.tipoConsomeRef.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.consomeRef01},
                {c: $scope.consomeRef02},
                {c: $scope.consomeRef03},
            ]};

            $scope.tipoConsomeRef.options = {
                'title': 'Frequência de Consumo de Refrigerantes'
            };

            $scope.tipoConsomeCafe = {};
    
            $scope.tipoConsomeCafe.type = "PieChart";
            
            $scope.tipoConsomeCafe.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.consomeCafe01},
                {c: $scope.consomeCafe02},
                {c: $scope.consomeCafe03},
                {c: $scope.consomeCafe04},
                {c: $scope.consomeCafe05},
            ]};

            $scope.tipoConsomeCafe.options = {
                'title': 'Quantidade de  Consumo de Café',
                'colors': [
                    '#663300',
                    '#994d00',
                    '#e67300',
                    '#ff9933',
                    '#ffbf80'
                ]
            };

            $scope.tipoConsomeAdoc = {};
    
            $scope.tipoConsomeAdoc.type = "PieChart";
            
            $scope.tipoConsomeAdoc.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.consomeAdoc01},
                {c: $scope.consomeAdoc02},
                {c: $scope.consomeAdoc03},
            ]};

            $scope.tipoConsomeAdoc.options = {
                'title': 'Utilização de Adocicantes no Café'
            };

            $scope.tipoConsomeBolos = {};
    
            $scope.tipoConsomeBolos.type = "PieChart";
            
            $scope.tipoConsomeBolos.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.consomeBolos01},
                {c: $scope.consomeBolos02},
                {c: $scope.consomeBolos03},
            ]};

            $scope.tipoConsomeBolos.options = {
                'title': 'Frequência de Consumo de Bolos e Doces',
                'colors': [
                    '#ff0000',
                    '#ff6666',
                    '#ffb3b3'
                ]
            };

            $scope.tipoConsomeFast = {};
    
            $scope.tipoConsomeFast.type = "PieChart";
            
            $scope.tipoConsomeFast.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.consomeFast01},
                {c: $scope.consomeFast02},
                {c: $scope.consomeFast03},
            ]};

            $scope.tipoConsomeFast.options = {
                'title': 'Frequência de Consumo de Fast food'
            };

            $scope.tipoMedicacao = {};
    
            $scope.tipoMedicacao.type = "PieChart";
            
            $scope.tipoMedicacao.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.pills1},
                {c: $scope.pills2},
            ]};

            $scope.tipoMedicacao.options = {
                'title': 'Utilização de Medicação'
            };

            $scope.tipoExercicio = {};
    
            $scope.tipoExercicio.type = "PieChart";
            
            $scope.tipoExercicio.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.sport1},
                {c: $scope.sport2},
            ]};

            $scope.tipoExercicio.options = {
                'title': 'Pratica de Desporto'
            };

            $scope.tipoExercicioFreq = {};
    
            $scope.tipoExercicioFreq.type = "PieChart";
            
            $scope.tipoExercicioFreq.data = {"cols": [
                //nao esquecer disto
                {id: "t", label: "Tipo", type: "string"},
                {id: "s", label: "Utilizadores", type: "number"}
                //nao esquecer disto
            ], "rows": [
                {c: $scope.sportsFreq01},
                {c: $scope.sportsFreq02},
                {c: $scope.sportsFreq03},
            ]};

            $scope.tipoExercicioFreq.options = {
                'title': 'Intensidade da Actividade Desportiva',
                'colors': [
                    '#579828',
                    '#f3e03a',
                    '#be2e21' 
                ]
            };

        });

        

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
