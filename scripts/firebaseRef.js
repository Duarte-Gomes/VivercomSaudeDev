app.factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        return $firebaseAuth();
    }
]);

app.factory("usersList", ["$firebaseArray",
    function($firebaseArray) {
        var ref = firebase.database().ref();
        return $firebaseArray(ref);
    }
]);

app.factory("suplementsList", ["$firebaseArray",
    function($firebaseArray) {
        var ref = firebase.database().ref("suplements").child("suplementsList");
        return $firebaseArray(ref);
    }
]);

app.factory("suplementsBrand", ["$firebaseArray",
    function($firebaseArray) {
        var ref = firebase.database().ref("suplements").child("suplementsBrand");
        return $firebaseArray(ref);
    }
]);

app.factory("suplementsCategories", ["$firebaseArray",
    function($firebaseArray) {
        var ref = firebase.database().ref("suplements").child("suplementsCategories");
        return $firebaseArray(ref);
    }
]);

app.factory("clientsAppointmentsHistorical", ["$firebaseArray", "Auth",
    function($firebaseArray, Auth) {
        var ref = firebase.database().ref("clientsAppointmentsHistorical").child(Auth.$getAuth().uid);
        return $firebaseArray(ref);
    }
]);

app.factory("storageLoc", ["$firebaseStorage",
    function($firebaseStorage) {
        var storageRef = firebase.storage().ref();
        return $firebaseStorage(storageRef);
    }
]);