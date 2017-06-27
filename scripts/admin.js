/*angular
  .module("sampleApp", [
    "firebase"
  ])
  .directive("fileUpload", FileUploadDirective);

function FileUploadDirective() {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      onChange: "="
    },
    template: '<input type="file" name="file" /><label><ng-transclude></ng-transclude></label>',
    link: function (scope, element, attrs) {
      element.bind("change", function () {
        scope.onChange(element.children()[0].files);
      });
    }
  }
}*/

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

/*app.controller('UploadCtrl', UploadCtrl);
function UploadCtrl($firebaseStorage) {
  var ctrl = this;
  var storageRef = firebase.storage().ref("userProfiles/physicsmarie");
  var storage = $firebaseStorage(storageRef);
  ctrl.fileToUpload = null;
  ctrl.onChange = function onChange(fileList) {
    ctrl.fileToUpload = fileList[0];
  };
}*/
app.controller('AdminCtrl', ['$scope', 'Auth', '$location', 'currentAuth', 'usersList', '$firebaseStorage',
    function($scope, Auth, $location, currentAuth, usersList, $firebaseStorage) {

        /*var storageRef = firebase.storage().ref("planos");
        $scope.storage = $firebaseStorage(storageRef);*/

        /*var file = ;// get a file from the template (see Retrieving files from template section below);
        var uploadTask = storage.$put(file);*/

        /*var storage = firebase.storage();
        var storageRef = storage.ref();*/

        $scope.uploadFile = function(file) {
            console.log("Let's upload a file!");
            console.log(file);
            /*var storageRef = firebase.storage().ref();*/
            /*var filesRef = storageRef.child('Planos/' + $scope.firebaseUser.uid + '/' + file.name);*/
            /*var filesRef = storageRef.child('Planos/' + $scope.firebaseUser.uid + '/plano.pdf');*/
            /*var uploadTask = $firebaseStorage(filesRef).$put(file);*/

            var storageRef = firebase.storage().ref('Planos/' + $scope.firebaseUser.uid + '/' + file.name);
            
            var storage = $firebaseStorage(storageRef);
            var uploadTask = storage.$put(file);

            /*uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, null, null, function() {
                var downloadURL = uploadTask.snapshot.downloadURL;
                console.log(downloadURL);
            });*/

            uploadTask.$complete(function(snapshot) {
                $scope.clientDetail.downloadURL = snapshot.downloadURL;
                console.log(snapshot.downloadURL);

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

        $scope.clientDetail = {};
        $scope.clientForm = {};
        $scope.clientHist = {};
        /*$scope.usersList = {};*/
        var saveStatus;
        var postKey;
        var postIndex;
        
        $scope.showDetails = false;
        $scope.adminDivHome = true;

        $scope.blockQuizFunc = function(){
            $scope.clientDetail.isQuizFuncBlock = true;
        };

        $scope.unblockQuizFunc = function(){
            $scope.clientDetail.isQuizFuncBlock = false;
        };

        $scope.adminHome = function() {
            $scope.adminDivHome = true;
            $scope.adminDivClientDetails = false;
            $scope.adminDivClientHistory = false;
            $scope.adminDivClientAntropo = false;            
            $scope.adminDivClientQuizFunc = false;
        };
        
        $scope.adminClientDetails = function() {
            $scope.adminDivHome = false;
            $scope.adminDivClientDetails = true;
            $scope.adminDivClientHistory = false;
            $scope.adminDivClientAntropo = false;                        
            $scope.adminDivClientQuizFunc = false;
        };

        $scope.adminClientHistory = function() {
            $scope.adminDivHome = false;
            $scope.adminDivClientDetails = false;
            $scope.adminDivClientHistory = true;
            $scope.adminDivClientAntropo = false;                        
            $scope.adminDivClientQuizFunc = false;
        };

         $scope.adminClientAntropo = function() {
            $scope.adminDivHome = false;
            $scope.adminDivClientDetails = false;
            $scope.adminDivClientHistory = false;
            $scope.adminDivClientAntropo = true;
            $scope.adminDivClientQuizFunc = false;
        };

        $scope.adminClientQuizFunc = function() {
            $scope.adminDivHome = false;
            $scope.adminDivClientDetails = false;
            $scope.adminDivClientHistory = false;
            $scope.adminDivClientAntropo = false;                        
            $scope.adminDivClientQuizFunc = true;
        };

        $scope.auth = Auth;
        $scope.admin = false;

        $scope.dayList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

        $scope.monthList = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        $scope.monthListN = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

        $scope.yearList = ["2016", "2017"];

        $scope.bioTypes = [
            "Ectomorfo",
            "Ecto-Mesomorfo",
            "Mesomorfo",
            "MesoEndo-Morfo",
            "Endomordo"
        ];

        $scope.cronoTypes = [
            "Vespertino",
            "Matutino",
            "Misto"
        ]; 

        $scope.consultLocal = [
            "100% Natur", "Farmácia Uruguai", "Bakery CrossFit", "Box1RM", "CGI", "CrossFit 351", "CrossFit Almada", "CrossFit Coimbra", "CrossFit Fátima", "CrossFit Leiria", "CrossFit Odivelas", "CrossFit Torres Vedras", "CrossFit XXI", "Formas Fitness", "Mean Machine", "Nutriscoop", "Oeste Cross Box", "Silver Coast", "Wiva Tomar", "Wiva Torres Novas",
        ];

        $scope.contactTypeList = [
            "Consulta", "Contacto Email", "Contacto Telefónico"
        ]

        usersList.$loaded().then(function() {
            $scope.usersList = usersList;

        });

        /*var birthdate = $scope.clientDetail.birthday;
        var birthdateLastFour = birthdate.substr(birthdate.length - 4);

        var today = new Date().toString();
        var preLastFour = today.substr(today.length - 43);
        var todayLastFour = preLastFour.substr(0, 4);

        $('#InputAge').val(todayLastFour - birthdateLastFour);

        $("#InputBirthday").on('change', function(){
            $('#InputAge').val(todayLastFour - birthdateLastFour);
        });

        console.log(birthdateLastFour);
        
        console.log(todayLastFour);*/

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
            $scope.hist.dateStringConsult_01 = $scope.clientHist.quizhis_1_1;
            $scope.hist.dateStringConsult_02 = $scope.clientHist.quizhis_2_1;
            $scope.hist.dateStringConsult_03 = $scope.clientHist.quizhis_3_1;
            $scope.hist.dateStringConsult_04 = $scope.clientHist.quizhis_4_1;
            $scope.hist.dateStringConsult_05 = $scope.clientHist.quizhis_5_1;
            $scope.hist.dateStringConsult_06 = $scope.clientHist.quizhis_6_1;
            
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

            /*if ($scope.aniversario.texto != null) {*/
            if (ageBirthday != null) {
                //calculo da idade
                //ano e mes da data de nascimento
                /*var birthDate = $scope.aniversario.texto;*/
                var birthYear = $scope.clientDetail.yearBirth;
                var birthMonth = monthBirthTemp;

                /*console.log(birthDate);
                console.log(birthYear);
                console.log(birthMonth);*/
                
                //ano e mes da data actual
                var todayDate = new Date();
                /*var preLastFourY = todayDate.substr(todayDate.length - 45);
                var todayYear = preLastFourY.substr(0, 5);*/
                var todayYear = todayDate.getFullYear();
                var todayMonth = todayDate.getMonth() + 1;
                
                var age;

                if (todayMonth < birthMonth) {
                    age = (todayYear - birthYear) - 1;
                } else {
                    age = todayYear - birthYear;
                }

                $scope.inputAge.val = age;
            
            }
          
            /*console.log(todayDate);
            console.log(todayYear);
            console.log(todayMonth);*/
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
            $scope.hist.dateStringConsult_01 = $scope.clientHist.quizhis_1_1;
            $scope.hist.dateStringConsult_02 = $scope.clientHist.quizhis_2_1;
            $scope.hist.dateStringConsult_03 = $scope.clientHist.quizhis_3_1;
            $scope.hist.dateStringConsult_04 = $scope.clientHist.quizhis_4_1;
            $scope.hist.dateStringConsult_05 = $scope.clientHist.quizhis_5_1;
            $scope.hist.dateStringConsult_06 = $scope.clientHist.quizhis_6_1;
            
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

            /*if ($scope.aniversario.texto != null) {*/
            if (ageBirthday != null) {
                //calculo da idade
                //ano e mes da data de nascimento
                /*var birthDate = $scope.aniversario.texto;*/
                var birthYear = $scope.clientDetail.yearBirth;
                var birthMonth = monthBirthTemp;

                /*console.log(birthDate);
                console.log(birthYear);
                console.log(birthMonth);*/
                
                //ano e mes da data actual
                var todayDate = new Date();
                /*var preLastFourY = todayDate.substr(todayDate.length - 45);
                var todayYear = preLastFourY.substr(0, 5);*/
                var todayYear = todayDate.getFullYear();
                var todayMonth = todayDate.getMonth() + 1;
                
                var age;

                if (todayMonth < birthMonth) {
                    age = (todayYear - birthYear) - 1;
                } else {
                    age = todayYear - birthYear;
                }

                $scope.inputAge.val = age;
            
            }

            $scope.showDetails = true;

            setTimeout(
                $scope.saveUserDetailsTimeout, 120000
            );
            
        };

        $scope.atras = function() {
            location.reload();
            $scope.showDetails = false;
        };

        $scope.convertObjectDate = function() {
            if ($scope.prox.proxConsult) {
                $scope.clientDetail.proxConsult = $scope.prox.proxConsult;
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
            if ($scope.hist.dateStringConsult_01) {
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
            }
        }

        $scope.saveUserDetailsTimeout = function() {
            $scope.convertObjectDate();

            $scope.usersList.$save(postIndex).then(function() {
                console.log("gravado timer");
                $scope.getDetailsTimeout(usersList[postIndex].$id);
            });
        };

        $scope.saveUserDetails2 = function() {
            $scope.convertObjectDate();

            $scope.usersList.$save(postIndex).then(function() {
                alert("Gravado!");
                $scope.getDetails(usersList[postIndex].$id);
            });
        };
    }
]);