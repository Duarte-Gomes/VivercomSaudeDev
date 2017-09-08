app.controller('DashCtrl', ['$scope', 'Auth', '$location', 'currentAuth', 'usersList', '$mdSidenav',
    function($scope, Auth, $location, currentAuth, usersList, $mdSidenav, $timeout) {

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
        

        usersList.$loaded().then(function() {
            $scope.usersList = usersList;

            for (var i = 0; i < usersList.length; i++) {
                if (typeof $scope.usersList[i].client_detail !== 'undefined') {
                    if ($scope.usersList[i].client_detail.codBis === "#CGI") {
                        contCGI++;
                        $scope.contCGI = contCGI;
                    }

                    if ($scope.usersList[i].client_detail.codBis === "#CGI") {

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
