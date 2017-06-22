app.controller('QuemCtrl', ['$scope',
    function($scope) {

        $scope.profile = true;
        $scope.groupDesc = {};
        $scope.quemQuiz = {};
                    
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
                $scope.desporto = false;
                $scope.saude = false;
                $scope.profile = false;
                $scope.groupDiv = false;                
            }
            if (param == "desporto") {
                $scope.massa = false;
                $scope.desporto = true;
                $scope.saude = false;
                $scope.profile = false;
                $scope.groupDiv = false;
            }
            if (param == "saude") {
                $scope.massa = false;
                $scope.desporto = false;
                $scope.saude = true;
                $scope.profile = false;
                $scope.groupDiv = false;
            }
        }

        $scope.groupMassaObjective01 = {
            objective: "Perder menos de 10kg"
        };
        $scope.groupMassaObjective02 = {
            objective: "Perder 10kg a 30kg" 
        }
        $scope.groupMassaObjective03 = {
            objective: "Perder mais de 30kg" 
        }
        $scope.groupDesportoObjective01 = {
            objective: "Atleta Recreativo"
        };
        $scope.groupDesportoObjective02 = {
            objective: "Atleta de alta competição" 
        }
        $scope.groupSaudeObjective01 = {
            objective: "Tenho alguma doença ou problema de saúde"
        };
        $scope.groupSaudeObjective02 = {
            objective: "Procuro melhorar hábitos" 
        }

        var groupDesc01 = {
            name: "group1",
            desc: "description"
        };
        var groupDesc02 = {
            name: "group2",
            desc: "description"
        };
        var groupDesc03 = {
            name: "group2",
            desc: "description"
        };
        var groupDesc04 = {
            name: "group4",
            desc: "description"
        };
        var groupDesc05 = {
            name: "group5",
            desc: "description"
        };
        var groupDesc06 = {
            name: "group6",
            desc: "description"
        };
        var groupDesc07 = {
            name: "group7",
            desc: "description"
        };
        var groupDesc08 = {
            name: "group8",
            desc: "description"
        };
        var groupDesc09 = {
            name: "group9",
            desc: "description"
        };

        $scope.checkTypeResult = function() {
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

            if ($scope.saude) {
                
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
        }
    }
]);