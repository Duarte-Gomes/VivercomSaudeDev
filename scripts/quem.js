app.controller('QuemCtrl', ['$scope',
    function($scope) {

        $scope.profile = true;
        $scope.groupDesc = {};
        $scope.quemQuiz = {};
        $scope.group = {};
        /*$scope.preMassa1 = false;
        $scope.preMassa2 = false;
        $scope.preMassa3 = false;  */
        $scope.callMe = false;    
             
        $scope.setType = function(param) {
            if (param == "profile") {
                $scope.massa = false;
                $scope.desporto = false;
                $scope.saude = false;
                $scope.profile = true;
                $scope.groupDiv = false;
            }
            if (param == "massa") {
                $scope.massa = true;
                $scope.preMassa1 = true;
                $scope.desporto = false;
                $scope.saude = false;
                $scope.profile = false;
                $scope.groupDiv = false;                
            }
            if (param == "desporto") {
                $scope.massa = false;
                $scope.desporto = true;
                $scope.preDesporto1 = true;
                $scope.saude = false;
                $scope.profile = false;
                $scope.groupDiv = false;
            }
            if (param == "saude") {
                $scope.massa = false;
                $scope.desporto = false;
                $scope.saude = true;
                $scope.preSaude1 = true;
                $scope.profile = false;
                $scope.groupDiv = false;
            }
        }

        var groupDesc01 = {
            name: "Não podiamos estar mais satisfeitos com o seu empenho!",
            desc: "Temos a certeza de que vai atingir os seus objetivos rapidamente."
        };
        var groupDesc02 = {
            name: "Estamos aqui para o apoiar no alcance dos seus objetivos de forma sudável.",
            desc: "Temos a certeza de que conseguiremos ajudar!"
        };
        var groupDesc03 = {
            name: "Estamos aqui para o ajudar a atingir os seus objectivos de forma mais saudável, no entanto será necessário melhorar hábitos."
        };
        var groupDesc04 = {
            name: "Não podiamos estar mais satisfeitos com a sua dedicação!",
            desc: "Temos a certeza de que vai atingir os seus objetivos de forma eficaz."
        };
        var groupDesc05 = {
            name: "Estamos aqui para o apoiar no alcance dos seus objetivos.",
            desc: "Vamos ajuda-lo a planear as suas refeições de forma saudável."
        };
        var groupDesc06 = {
            name: "Estamos aqui para o ajudar a atingir os seus objectivos de forma mais saudável.",
            desc: "Vamos ajuda-lo a planear as suas refeições e a deixar os alimentos processados."
        };
        var groupDesc07 = {
            name: "Não podiamos estar mais satisfeitos com o seu empenho!",
            desc: "Temos a certeza de que vai atingir os seus objetivos rapidamente."
        };
        var groupDesc08 = {
            name: "Estamos aqui para o apoiar na recuperação da sua saúde!",
            desc: "Vamos orientá-lo para que faça as escolhas mais saudáveis."
        };
        var groupDesc09 = {
            name: "Estamos aqui para o apoiar na recuperação da sua saúde!",
            desc: "Rápidamente irá adquirir hábitos de vida saudável."
        };
        var groupDesc10 = {
            name: "Estamos aqui para o ajudar a criar hábitos de vida saudável!",
            desc: "Vamos orientá-lo para que faça as escolhas mais saudáveis."
        };
        var greenMassa = 0, orangeMassa = 0, greenDesporto = 0, orangeDesporto = 0, greenSaude = 0, orangeSaude = 0;

        $scope.preM11 = function() {
            $scope.preMassa1 = false;
            $scope.preMassa2 = true;
            $scope.groupMassaObjective = {
                objective: "Perder menos de 10kg"
            };
        };
        $scope.preM12 = function() {
            $scope.preMassa1 = false;
            $scope.preMassa2 = true;
            $scope.groupMassaObjective = {
                objective: "Perder 10kg a 30kg" 
            }
        };
        $scope.preM13 = function() {
            $scope.preMassa1 = false;
            $scope.preMassa2 = true;
            $scope.groupMassaObjective = {
                objective: "Perder mais de 30kg" 
            }
        };
        $scope.preM21 = function() {
            $scope.preMassa2 = false;
            $scope.preMassa3 = true;
            greenMassa++;
        };
        $scope.preM22 = function() {
            $scope.preMassa2 = false;
            $scope.preMassa3 = true;
            greenMassa++;
        };
        $scope.preM23 = function() {
            $scope.preMassa2 = false;
            $scope.preMassa3 = true;
            orangeMassa++;
        };
        $scope.preM31 = function() {
            $scope.preMassa3 = false;
            $scope.preMassaResumo = true;
            greenMassa++;
            checkGroupMass()
        };
        $scope.preM32 = function() {
            $scope.preMassa3 = false;
            $scope.preMassaResumo = true;
            greenMassa++;
            checkGroupMass()
        };
        $scope.preM33 = function() {
            $scope.preMassa3 = false;
            $scope.preMassaResumo = true;
            orangeMassa++;
            checkGroupMass()
        };
        function checkGroupMass() {
            if(greenMassa == 2) {
                $scope.group = groupDesc01;
            }
            if(greenMassa == 1 && orangeMassa == 1) {
                $scope.group = groupDesc02;
            }
            if(orangeMassa == 2) {
                $scope.group = groupDesc03;
            }
        }
        $scope.callMeMassa = function() {
            $scope.preMassaResumo = false;
            $scope.callMeDiv = true;
        };

        $scope.preS11 = function() {
            $scope.preSaude1 = false;
            $scope.preSaude2 = true;
            $scope.groupSaudeObjective = {
                objective: "Tratar problema de saúde"
            }
        };
        $scope.preS12 = function() {
            $scope.preSaude1 = false;
            $scope.preSaude2 = true;
            $scope.groupSaudeObjective = {
                objective: "Aprender a melhorar hábitos" 
            }
        };
        /*$scope.preS13 = function() {
            $scope.presSaude1 = false;
            $scope.presSaude2 = true;
            $scope.groupsSaudeObjective = {
                objective: "Perder mais de 30kg" 
            }
        };*/
        $scope.preS21 = function() {
            $scope.preSaude2 = false;
            $scope.preSaude3 = true;
            greenSaude++;
        };
        $scope.preS22 = function() {
            $scope.preSaude2 = false;
            $scope.preSaude3 = true;
            greenSaude++;
        };
        $scope.preS23 = function() {
            $scope.preSaude2 = false;
            $scope.preSaude3 = true;
            orangeSaude++;
        };
        $scope.preS31 = function() {
            $scope.preSaude3 = false;
            $scope.preSaudeResumo = true;
            greenSaude++;
            checkGroupSaude($scope.groupSaudeObjective.objective)
        };
        $scope.preS32 = function() {
            $scope.preSaude3 = false;
            $scope.preSaudeResumo = true;
            greenSaude++;
            checkGroupSaude($scope.groupSaudeObjective.objective)
        };
        $scope.preS33 = function() {
            $scope.preSaude3 = false;
            $scope.preSaudeResumo = true;
            orangeSaude++;
            checkGroupSaude($scope.groupSaudeObjective.objective)
        };
        function checkGroupSaude(param) {
            if(param == "Tratar problema de saúde") {
                if(greenSaude == 2) {
                    $scope.group = groupDesc07;
                }
                if(greenSaude == 1 && orangeSaude == 1) {
                    $scope.group = groupDesc07;
                }
                if(orangeSaude == 2) {
                    $scope.group = groupDesc08;
                }
            }
            if(param = "Aprender a melhorar hábitos" ) {
                if(greenSaude == 2) {
                    $scope.group = groupDesc09;
                }
                if(greenSaude == 1 && orangeSaude == 1) {
                    $scope.group = groupDesc09;
                }
                if(orangeSaude == 2) {
                    $scope.group = groupDesc10;
                }
            }
        }
        $scope.callMeSaude = function() {
            $scope.preSaudeResumo = false;
            $scope.callMeDiv = true;
        };

        $scope.preD11 = function() {
            $scope.preDesporto1 = false;
            $scope.preDesporto2 = true;
            $scope.groupDesportoObjective = {
                objective: "Atleta Recreativo"
            }
        };
        $scope.preD12 = function() {
            $scope.preDesporto1 = false;
            $scope.preDesporto2 = true;
            $scope.groupDesportoObjective = {
                objective: "Atleta de alta competição" 
            }
        };
        /*$scope.preD13 = function() {
            $scope.preDesporto1 = false;
            $scope.preDDesporto2 = true;
            $scope.groupsDesportoObjective = {
                objective: "Perder mais de 30kg" 
            }
        };*/
        $scope.preD21 = function() {
            $scope.preDesporto2 = false;
            $scope.preDesporto3 = true;
            greenDesporto++;
        };
        $scope.preD22 = function() {
            $scope.preDesporto2 = false;
            $scope.preDesporto3 = true;
            greenDesporto++;
        };
        $scope.preD23 = function() {
            $scope.preDesporto2 = false;
            $scope.preDesporto3 = true;
            orangeDesporto++;
        };
        $scope.preD31 = function() {
            $scope.preDesporto3 = false;
            $scope.preDesportoResumo = true;
            greenDesporto++;
            checkGroupDesporto()
        };
        $scope.preD32 = function() {
            $scope.preDesporto3 = false;
            $scope.preDesportoResumo = true;
            greenDesporto++;
            checkGroupDesporto()
        };
        $scope.preD33 = function() {
            $scope.preDesporto3 = false;
            $scope.preDesportoResumo = true;
            orangeDesporto++;
            checkGroupDesporto()
        };
        function checkGroupDesporto() {
            if(greenDesporto == 2) {
                $scope.group = groupDesc04;
            }
            if(greenDesporto == 1 && orangeDesporto == 1) {
                $scope.group = groupDesc05;
            }
            if(orangeDesporto == 2) {
                $scope.group = groupDesc06;
            }
        }
        $scope.callMeDesporto = function() {
            $scope.preDesportoResumo = false;
            $scope.callMeDiv = true;
        };



        /*$scope.checkTypeResult = function() {
            if ($scope.massa) {
                
                $scope.massa = false;
                $scope.groupDiv = true;

                if ($scope.quemQuiz.massa_01 == "10") {
                    $scope.objectiveDesc = $scope.groupMassaObjective01;
                }
                if ($scope.quemQuiz.massa_01 == "1030") {
                    $scope.objectiveDesc = $scope.groupMassaObjective02;
                }
                if ($scope.quemQuiz.massa_01 == "30") {
                    $scope.objectiveDesc = $scope.groupMassaObjective03;
                }

                if ($scope.quemQuiz.massa_02 == "1" && $scope.quemQuiz.massa_03 == "4" ||
                    $scope.quemQuiz.massa_02 == "1" && $scope.quemQuiz.massa_03 == "5" ||
                    $scope.quemQuiz.massa_02 == "2" && $scope.quemQuiz.massa_03 == "4" ||
                    $scope.quemQuiz.massa_02 == "2" && $scope.quemQuiz.massa_03 == "5") {
                    
                    $scope.groupDesc = groupDesc01;
                }
                if ($scope.quemQuiz.massa_02 == "1" && $scope.quemQuiz.massa_03 == "6" || 
                    $scope.quemQuiz.massa_02 == "2" && $scope.quemQuiz.massa_03 == "6" ||
                    $scope.quemQuiz.massa_02 == "3" && $scope.quemQuiz.massa_03 == "4" ||
                    $scope.quemQuiz.massa_02 == "3" && $scope.quemQuiz.massa_03 == "5") {
                    $scope.groupDesc = groupDesc02;
                }
                if ($scope.quemQuiz.massa_02 == "3" && $scope.quemQuiz.massa_03 == "6") {
                    $scope.groupDesc = groupDesc03;
                }
            }

            if ($scope.desporto) {
                
                $scope.desporto = false;
                $scope.groupDiv = true;

                if ($scope.quemQuiz.desporto_01 == "1") {
                    $scope.objectiveDesc = $scope.groupDesportoObjective01;
                }
                if ($scope.quemQuiz.desporto_01 == "2") {
                    $scope.objectiveDesc = $scope.groupDesportoObjective02;
                }

                if ($scope.quemQuiz.desporto_02 == "1" && $scope.quemQuiz.desporto_03 == "4" ||
                    $scope.quemQuiz.desporto_02 == "1" && $scope.quemQuiz.desporto_03 == "5" ||
                    $scope.quemQuiz.desporto_02 == "2" && $scope.quemQuiz.desporto_03 == "4" ||
                    $scope.quemQuiz.desporto_02 == "2" && $scope.quemQuiz.desporto_03 == "5") {
                    
                    $scope.groupDesc = groupDesc04;
                }
                if ($scope.quemQuiz.desporto_02 == "1" && $scope.quemQuiz.desporto_03 == "6" || 
                    $scope.quemQuiz.desporto_02 == "2" && $scope.quemQuiz.desporto_03 == "6" ||
                    $scope.quemQuiz.desporto_02 == "3" && $scope.quemQuiz.desporto_03 == "4" ||
                    $scope.quemQuiz.desporto_02 == "3" && $scope.quemQuiz.desporto_03 == "5") {
                    $scope.groupDesc = groupDesc05;
                }
                if ($scope.quemQuiz.desporto_02 == "3" && $scope.quemQuiz.desporto_03 == "6") {
                    $scope.groupDesc = groupDesc06;
                }
            }

            if ($scope.Desporto) {
                
                $scope.saude = false;
                $scope.groupDiv = true;

                if ($scope.quemQuiz.saude_01 == "1") {
                    $scope.objectiveDesc = $scope.groupSaudeObjective01;
                }
                if ($scope.quemQuiz.saude_01 == "2") {
                    $scope.objectiveDesc = $scope.groupSaudeObjective02;
                }

                if ($scope.quemQuiz.saude_02 == "1" && $scope.quemQuiz.saude_03 == "4" ||
                    $scope.quemQuiz.saude_02 == "1" && $scope.quemQuiz.saude_03 == "5" ||
                    $scope.quemQuiz.saude_02 == "2" && $scope.quemQuiz.saude_03 == "4" ||
                    $scope.quemQuiz.saude_02 == "2" && $scope.quemQuiz.saude_03 == "5") {
                    
                    $scope.groupDesc = groupDesc07;
                }
                if ($scope.quemQuiz.saude_02 == "1" && $scope.quemQuiz.saude_03 == "6" || 
                    $scope.quemQuiz.saude_02 == "2" && $scope.quemQuiz.saude_03 == "6" ||
                    $scope.quemQuiz.saude_02 == "3" && $scope.quemQuiz.saude_03 == "4" ||
                    $scope.quemQuiz.saude_02 == "3" && $scope.quemQuiz.saude_03 == "5") {
                    $scope.groupDesc = groupDesc08;
                }
                if ($scope.quemQuiz.saude_02 == "3" && $scope.quemQuiz.saude_03 == "6") {
                    $scope.groupDesc = groupDesc09;
                }
            }
        }*/
    }
]);