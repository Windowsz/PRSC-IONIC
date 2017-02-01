angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicSlideBoxDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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

  // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };


  $scope.names = [
  {first: 'Panupong', last: 'Poolngam', src:'./img/img-p.jpg'}
  ];
  // TEST MENU Message
    $scope.messages = [
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 1 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 2 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 3 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 4 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 5 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 6 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 7 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 8 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 9 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 10 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 11 }
  ];


  }
)

.controller('SettingCtrl', function($scope, $ionicPopup, $timeout) {
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




    //
    // var androidConfig = {
    //   "senderID": "219157519030",
    // };
    //
    // document.addEventListener("deviceready", function(){
    //   $cordovaPush.register(androidConfig).then(function(result) {
    //     // Success
    //   }, function(err) {
    //     // Error
    //   })
    //
    //   $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
    //     switch(notification.event) {
    //       case 'registered':
    //         if (notification.regid.length > 0 ) {
    //           alert('registration ID = ' + notification.regid);
    //         }
    //         break;
    //
    //       case 'message':
    //         // this is the actual push notification. its format depends on the data model from the push server
    //         alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
    //         break;
    //
    //       case 'error':
    //         alert('GCM error = ' + notification.msg);
    //         break;
    //
    //       default:
    //         alert('An unknown GCM event has occurred');
    //         break;
    //     }
    //   });
    //
    //
    //   // WARNING: dangerous to unregister (results in loss of tokenID)
    //   $cordovaPush.unregister(options).then(function(result) {
    //     // Success!
    //   }, function(err) {
    //     // Error
    //   })
    //
    // }, false);







  $scope.playlists = [
    { title: 'สํานักหอสมุดกลางเปดขยายเวลาใหบริการชวงกอนสอบ', content: 'สํานักหอสมุดกลางเปดขยายเวลาใหบริการชวงกอนสอบบริเวณพื้นที่นั่งอาน อาคารใหมชั้น 1, โถงวารสารชั้น 1, ชั้นลอยตลอด 24 ชั่วโมง ระหวางวันที่ 12 - 24 กันยายน 2559', src: './svg/news1.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 1 },
    { title: 'BOX_2', content: 'content_2', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 2 },
    { title: 'BOX_3', content: 'content_3', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 3 },
    { title: 'BOX_4', content: 'content_4', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 4 },
    { title: 'BOX_5', content: 'content_5', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 5 },
    { title: 'BOX_6', content: 'content_6', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 6 },
    { title: 'BOX_7', content: 'content_7', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 7 },
    { title: 'BOX_8', content: 'content_8', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 8 },
    { title: 'BOX_9', content: 'content_9', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 9 },
    { title: 'BOX_10', content: 'content_10', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 10 },
    { title: 'BOX_11', content: 'content_11', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 11 },
    { title: 'BOX_12', content: 'content_12', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 12 },
    { title: 'BOX_13', content: 'content_13', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 13 },
    { title: 'BOX_14', content: 'content_14', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 14 },
    { title: 'BOX_15', content: 'content_15', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 15 },
    { title: 'BOX_16', content: 'content_16', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 16 },
    { title: 'BOX_17', content: 'content_17', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 17 },
    { title: 'BOX_18', content: 'content_18', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 18 }
  ];

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

// TEST FACEBOOK API
// var url = "https://graph.facebook.com/v2.8/1164820710277438/feed?fields=full_picture%2Cmessage%2Cname%2Cupdated_time&access_token=EAAE2CnSZBQwcBABbDmPJvDUoMoHk5K3bVwpXZCMyu2YUZBfzZABdyoYvculBwJsBZCZBwktjklq57ln4I7ue1HbKr6cIeavdJo1jcqkrMHuYZCJAkb7BAhzqMI85X6OwpTaRyMVpfDjNR7Qys2tZBVxrqvUnYakcWgRwffMXWEelJgZDZD";
// $http.get(url).success( function(response) {
//    $scope.datat =  response.data;
//    console.log("Review get  Opject: ", response, status);
// });


//  TEST LOCAL DATABASE API
//     $scope.NewsCnn = function() {
//       $http({method: "GET", url: "http://localhost:3000/showJson"})
//         .success(function(result) {
//           // alert(result);
//           console.log("OK");
//         })
//         .error(function(error) {
//           console.log("ERROR: " + error);
//         });
//     }

// TEST NEWS API
// CNN
var urlNewsCnn = "http://localhost:3000/showJson";
$http.get(urlNewsCnn).success( function(data) {
   $scope.NewsCnn =  data;
   // console.log("Review get  Opject: ", response, status);
  console.log("OK");
});
// BBC
var urlNewsBbc = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=69190589d5d54cc78809b9e9acab546c";
$http.get(urlNewsBbc).success( function(response) {
   $scope.NewsBbc =  response.articles;
   console.log("Review get  Opject: ", response, status);
});
// ESPN
var urlNewsEspn = "https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=69190589d5d54cc78809b9e9acab546c";
$http.get(urlNewsEspn).success( function(response) {
   $scope.NewsEspn =  response.articles;
   console.log("Review get  Opject: ", response, status);
});


//       $scope.datat = [];
// var wordpressUrl = "https://graph.facebook.com/v2.8/1164820710277438/feed?fields=message%2Ccreated_time%2Cfull_picture%2Cupdated_time&access_token=EAAE2CnSZBQwcBADOR12SjtdNNIZB9ZBMshENl3oCZAbmOtfO6AODUdGDJ3K5ZB08PV6XrhgRSQzoEKtwm7m7ytzALleLBIpG9PUQtGmkfrrgZAjiJZAI65bJfpeAJS9v79ddLt4wigcmDr4xE3dJw5VoIbXL6qkHn4HsjBdkLtY2AZDZD";

//   $http.get(wordpressUrl)
//     .success(function(response){
//       console.log("Reveived getPosts via HTTP: ", response, status);
//       angular.forEach(response, function(child){
//         $scope.datat.push(child);
//       });
//       $scope.datat = response;
//     })
//     .error(function(response, status){
//       console.log("Error while received response. " + status + response);
//     });



    // $scope.removeItem = function (x) {
    //     $scope.products.splice(x, 1);
      // }

    }
)


.controller('MessagesCtrl', function($scope) {
  $scope.messages = [
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 1 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 2 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 3 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 4 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 5 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 6 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 7 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 8 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 9 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 10 },
    {content:'Hello World', src:'./img/test.png', date: 'Thu 3/10/1993 07:26 PM', alt:'test', id: 11 }
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
    { title: 'BOX_5', content: 'content_5', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 5 },
    { title: 'BOX_6', content: 'content_6', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 6 },
    { title: 'BOX_7', content: 'content_7', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 7 },
    { title: 'BOX_8', content: 'content_8', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 8 },
    { title: 'BOX_9', content: 'content_9', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 9 },
    { title: 'BOX_10', content: 'content_10', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 10 },
    { title: 'BOX_11', content: 'content_11', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 11 },
    { title: 'BOX_12', content: 'content_12', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 12 },
    { title: 'BOX_13', content: 'content_13', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 13 },
    { title: 'BOX_14', content: 'content_14', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 14 },
    { title: 'BOX_15', content: 'content_15', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 15 },
    { title: 'BOX_16', content: 'content_16', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 16 },
    { title: 'BOX_17', content: 'content_17', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 17 },
    { title: 'BOX_18', content: 'content_18', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 18 }
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
    { title: 'BOX_5', content: 'content_5', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 5 },
    { title: 'BOX_6', content: 'content_6', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 6 },
    { title: 'BOX_7', content: 'content_7', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 7 },
    { title: 'BOX_8', content: 'content_8', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 8 },
    { title: 'BOX_9', content: 'content_9', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 9 },
    { title: 'BOX_10', content: 'content_10', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 10 },
    { title: 'BOX_11', content: 'content_11', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 11 },
    { title: 'BOX_12', content: 'content_12', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 12 },
    { title: 'BOX_13', content: 'content_13', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 13 },
    { title: 'BOX_14', content: 'content_14', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 14 },
    { title: 'BOX_15', content: 'content_15', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 15 },
    { title: 'BOX_16', content: 'content_16', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 16 },
    { title: 'BOX_17', content: 'content_17', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 17 },
    { title: 'BOX_18', content: 'content_18', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 18 }
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
    { title: 'BOX_5', content: 'content_5', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 5 },
    { title: 'BOX_6', content: 'content_6', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 6 },
    { title: 'BOX_7', content: 'content_7', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 7 },
    { title: 'BOX_8', content: 'content_8', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 8 },
    { title: 'BOX_9', content: 'content_9', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 9 },
    { title: 'BOX_10', content: 'content_10', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 10 },
    { title: 'BOX_11', content: 'content_11', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 11 },
    { title: 'BOX_12', content: 'content_12', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 12 },
    { title: 'BOX_13', content: 'content_13', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 13 },
    { title: 'BOX_14', content: 'content_14', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 14 },
    { title: 'BOX_15', content: 'content_15', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 15 },
    { title: 'BOX_16', content: 'content_16', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 16 },
    { title: 'BOX_17', content: 'content_17', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 17 },
    { title: 'BOX_18', content: 'content_18', src: './img/test.png',date: 'Thu 3/10/1993 07:26 PM', alt: 'test', id: 18 }
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

.controller('PlaylistCtrl', 'NewsCnnCtrl', 'ContactCtrl', 'MessagesCtrl', 'SettingCtrl', 'NewsCtrl', 'LibsCtrl', 'ItsCtrl', function($scope, $stateParams) {
});
