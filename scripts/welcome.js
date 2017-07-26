app.controller('WelcomeCtrl', ['$scope', '$location', '$routeParams',
    function($scope, $location, $routeParams, $timeout) {   
        
        $scope.programType = $routeParams.id;
        $scope.typeTitle = false;
        $scope.errormessage = false;

        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        if ($scope.programType === "ProgramaFit" || $scope.programType === "ProgramaGestaoDePeso" || $scope.programType === "ProgramaSaude" || $scope.programType === "ConsultaWellness") {
            setCookie ("program_type", $scope.programType, 3);
            $scope.typeTitle = true;
        } else {
            $scope.errormessage = true;
        }
    }
]);