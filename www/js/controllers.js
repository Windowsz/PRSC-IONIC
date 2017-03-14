angular.module('starter.controllers', ['ngCordova', 'ngCordovaOauth'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $ionicPopup, $ionicSlideBoxDelegate, $ionicHistory, $http) {
// $scope.profiles = window.localStorage.getItem("profile");
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
var response=angular.fromJson(window.localStorage.getItem("profile"));
    $scope.Users = response;
    console.log($scope.Users);
//   // Form data for the login modal
//   $scope.loginData = {};

//   // Create the login modal that we will use later
//   $ionicModal.fromTemplateUrl('templates/login.html', {
//     scope: $scope
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });
// $scope.googleLogin = function() {
//         $cordovaOauth.google("app-id", ["email", "profile"]).then(function(result) {

//         }, function(error) {

//         });
//     }
///////////////////////////////////////////////////
// Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  ///////////////////////////////////////////////////////
  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  //   // $rootScope.extras = false;
  // };

  // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

// $http.post(urlNewsCnn,{
//     'username':$scope.username, 'password':$scope.password,
//     'firstname':$scope.firstname, 'lastname':$scope.lastname,
//     'faculty':$scope.faculty, 'year':$scope.year,
//     'userType':$scope.userType

// }).success( function(response) {
//   console.log('OK');
// });


$scope.doLogin = function(username) {

  $ionicHistory.nextViewOptions({
    disableBack: true
  });





    var test = "http://localhost:3000/g/" + $scope.loginData.username;
$http.get(test).then( function(response) {
   $scope.showAlertFail = function() {
     var alertPopup = $ionicPopup.alert({
     title: 'Login Fail!',
     template: 'Invalid Username and Password '
     });
  };
  window.localStorage.setItem("profile", JSON.stringify(response.data));
    // $scope.login = function(username) {

    //   window.localStorage.setItem("profile", JSON.stringify(response.data));
    // };


  $scope.showAlertSuccess = function() {

     var alertPopup = $ionicPopup.alert({
     title: 'Login Success!',
     template: 'Welcome Back: "'+ response.data.firstname +"  "+"  "+ response.data.lastname+'"' 
     });
     $scope.modal.hide();
  };
  // var myjson = JSON.stringify(response.data);
   // console.log("Review get  Opject: " + response.data + "1111111111111" + response.data);
   // console.log('$scope.loginData.username'+$scope.loginData.username+'$scope.loginData.password'+$scope.loginData.password +'data'+ response.data);
   // console.log('response.username'+ response.data.username + 'response.password'+ response.data.password);
    if ($scope.loginData.username == response.data.username && $scope.loginData.password == response.data.password) {
    console.log('success');
    console.log(response.data);
    // console.log($scope.login());
    console.log(window.localStorage.getItem("profile"));
   $scope.showAlertSuccess();
    $state.go('app.playlists', {}, {reload: true});
    window.location.reload(true);
    // $scope.showAlertSuccess();
    }else{
    console.log('invalid');
    $scope.showAlertFail();
    }



});

  };

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };


  }
)

.controller('SettingCtrl', function($scope, $ionicPopup, $timeout, $http, $state, $ionicHistory) {
  $ionicHistory.nextViewOptions({
    disableBack: true
  });


$scope.Logout = function() {
window.localStorage.removeItem("profile");
alert("Bye");
 // $state.reload();
$state.go('app.playlists', {}, {reload: true});
window.location.reload(true);
};

var response=angular.fromJson(window.localStorage.getItem("profile"));
    $scope.Users = response;



var urlShowJson = "http://localhost:3000/showJson";
$http.get(urlShowJson).success( function(data) {
   $scope.ALL =  data;
   // console.log("Review get  Opject: ", response, status);
  console.log(data);
});

  
    $scope.names = [
  {first: 'Panupong', last: 'Poolngam', src:'./img/img-p.jpg', username: 'Panupong1993'}
  ];

// Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    // template: '<input type="text" ng-model="data.firstName"> <input type="text" ng-model="data.lastName">',
    template: '<span class="input-label">FirstName</span> <input ng-model="newUser.firstName" type="text"<span class="input-label">Last Name</span><input ng-model="newUser.lastName" type="text">',
    title: 'ReName',
    subTitle: 'กรอกชื่อและนามสกุลที่ต้องการเปลี่ยน',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Submit</b>',
        type: 'button-positive',
        // onTap: function(e) {
        //   if (!$scope.data.name) {
        //     //don't allow the user to close unless he enters name password
        //     e.preventDefault();
        //   } else {
        //     return $scope.data.name;
        //   }
        // }
      }
    ]
  }
  )
    }
  }
)


.controller('PlaylistsCtrl', function($scope,  $ionicPopover, $http) {
console.log(window.localStorage.getItem("profile"));
$scope.User = [{
userId: '1',
userType : '1',
faculty: '1',
year: '2016'
}
];
  // $ionicHistory.nextViewOptions({
  //   disableBack: true
  // });

    $scope.images = [
    { src:'./img/s1.png', alt:'s1', id: 1 },
    { src:'./img/s2.png', alt:'s2', id: 2 },
    { src:'./img/s3.png', alt:'s3', id: 3 },
    { src:'./svg/news1.png', alt:'s3', id: 4 }
      ];


       $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

// TEST NEWS API
// CNN
var urlShowJson = "http://localhost:3000/showJson";
$http.get(urlShowJson).success( function(data) {
   $scope.ALL =  data;
   // console.log("Review get  Opject: ", response, status);
  console.log(data);
});

    }
)


.controller('MessagesCtrl', function($scope, $http) {

var urlShowJson = "http://localhost:3000/showJson";
$http.get(urlShowJson).success( function(data) {
   $scope.ALL =  data;
   // console.log("Review get  Opject: ", response, status);
  console.log(data);
});

$scope.User = [{
userId: '1',
userType : 'ST',
faculty: 'IDED',
year: '2016'
}
];
  $scope.data = {
    showDelete: false
  };


   $scope.onItemDelete = function(email) {
    $scope.messages.splice($scope.messages.indexOf(email), 1);
  };

  // $scope.onItemDelete = function( email ) {
  //   var messageEmail = "Are you sure you want to delete " + email + "?";
  //   navigator.notification.confirm( message, function( index ) {
  //       if ( index === 1 ) {
  //           $scope.removeEmail( email );
  //           $scope.$apply();
  //       }
  //   });
  // };
}
)


.controller('ContactCtrl', function($scope) {
  $scope.contact = [
    { phone: '02-3298544',
    status:'content_1',  }
  ];

  var uluru = {lat: 13.7259935, lng: 100.778452};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

}
)

.controller('NewsCtrl', function($scope,  $ionicPopover, $http) {
// TEST NEWS API
// CNN
var urlNewsCnn = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=69190589d5d54cc78809b9e9acab546c";
$http.get(urlNewsCnn).success( function(response) {
   $scope.NewsCnn =  response.articles;
   console.log("Review get  Opject: ", response, status);
});


  $scope.new = [
{ title: 'BOX_1', content: 'content_1', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 1 },
    { title: 'BOX_2', content: 'content_2', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 2 },
    { title: 'BOX_3', content: 'content_3', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 3 },
    { title: 'BOX_4', content: 'content_4', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 4 },
    { title: 'BOX_5', content: 'content_5', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 5 }
  ];

   $ionicPopover.fromTemplateUrl('templates/popoverNew.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });


}
)

.controller('LibsCtrl', function($scope,  $ionicPopover) {
  $scope.lib = [
{ title: 'BOX_1', content: 'content_1', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 1 },
    { title: 'BOX_2', content: 'content_2', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 2 },
    { title: 'BOX_3', content: 'content_3', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 3 },
    { title: 'BOX_4', content: 'content_4', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 4 },
    { title: 'BOX_5', content: 'content_5', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 5 }
  ];

   $ionicPopover.fromTemplateUrl('templates/popoverNew.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

}
)

.controller('ItsCtrl', function($scope,  $ionicPopover) {
  $scope.it = [
{ title: 'BOX_1', content: 'content_1', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 1 },
    { title: 'BOX_2', content: 'content_2', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 2 },
    { title: 'BOX_3', content: 'content_3', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 3 },
    { title: 'BOX_4', content: 'content_4', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 4 },
    { title: 'BOX_5', content: 'content_5', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 5 }
  ];

   $ionicPopover.fromTemplateUrl('templates/popoverNew.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

}
)

.controller('NewsCnnCtrl', function($scope,  $ionicPopover, $http) {
// TEST NEWS API
// CNN
var urlNewsCnn = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=69190589d5d54cc78809b9e9acab546c";
$http.get(urlNewsCnn).success( function(response) {
   $scope.NewsCnn =  response.articles;
   console.log("Review get  Opject: ", response, status);
});

   $ionicPopover.fromTemplateUrl('templates/popoverNew.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

}
)

.controller('RegisterCtrl', function($scope, $http, $state, $ionicHistory) {

  $ionicHistory.nextViewOptions({
    disableBack: true
  });


$scope.addUsers = function(){
var urlNewsCnn = "http://localhost:3000/postUsers";
$http.post(urlNewsCnn,{
    'username':$scope.username, 'password':$scope.password,
    'firstname':$scope.firstname, 'lastname':$scope.lastname,
    'faculty':$scope.faculty, 'year':$scope.year,
    'userType':$scope.userType

}).success( function(response) {
  console.log('OK');
  $state.go('app.playlists');
});
};
})

.controller('PlaylistCtrl', 'RegisterCtrl', 'NewsCnnCtrl', 'ContactCtrl', 'MessagesCtrl', 'SettingCtrl', 'NewsCtrl', 'LibsCtrl', 'ItsCtrl', function($scope, $stateParams) {
});
