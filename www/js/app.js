// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'ngCordovaOauth'])

// .run(function($ionicPlatform) {
  .run(function ($rootScope, $ionicPlatform, $cordovaPush) {

// $rootScope.extras = false;

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    /////////////////////////Delete $cordovaPush///////////////////////////
//  ANDROID
 var androidConfig = {
    "senderID": "662129943428",
  };
  // document.addEventListener("deviceready", function(){
    $cordovaPush.register(androidConfig).then(function(result) {
      // Success
    }, function(err) {
      // Error
    })
    $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
      switch(notification.event) {
        case 'registered':
          if (notification.regid.length > 0 ) {
            alert('registration ID = ' + notification.regid + 'message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
          }
          break;
        case 'message':
          // this is the actual push notification. its format depends on the data model from the push server
          alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
          break;

        case 'error':
          alert('GCM error = ' + notification.msg);
          break;

        default:
          alert('An unknown GCM event has occurred');
          break;
      }
    });

    // WARNING: dangerous to unregister (results in loss of tokenID)
    $cordovaPush.unregister(options).then(function(result) {
      // Success!
    }, function(err) {
      // Error
    });
////////////////////////////////////////////////////
  });
})






.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

     .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.setting', {
    url: '/setting',
    views: {
      'menuContent': {
        templateUrl: 'templates/setting.html',
        controller: 'SettingCtrl'
      }
    }
  })


  .state('app.messages', {
      url: '/messages',
      views: {
        'menuContent': {
          templateUrl: 'templates/messages.html',
          controller: 'MessagesCtrl'
        }
      }
    })

    .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html',
          controller: 'ContactCtrl'
        }
      }
    })

  .state('app.new', {
    url: '/new',
    views: {
      'menuContent': {
        templateUrl: 'templates/new.html',
        controller: 'NewsCtrl'
      }
    }
  })
// TEST NEWS CONTENT
  .state('app.detailsCNN', {
    url: '/detailsCNN/:ID',
    views: {
      'menuContent': {
        templateUrl: 'templates/ContentNews/CNN.html',
         controller: 'NewsCnnCtrl'
      }
    }
  })

  .state('app.lib', {
    url: '/lib',
    views: {
      'menuContent': {
        templateUrl: 'templates/lib.html',
        controller: 'LibsCtrl'
      }
    }
  })

    .state('app.it', {
    url: '/it',
    views: {
      'menuContent': {
        templateUrl: 'templates/it.html',
        controller: 'ItsCtrl'
      }
    }
  })

  .state('app.content', {
    url: '/content',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        // controller: 'NewsCtrl'
      }
    }
  })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  // .state('app.boxs', {
  //     url: '/boxs',
  //     views: {
  //       'menuContent': {
  //         templateUrl: 'templates/boxs.html'

  //       }
  //     }
  //   })

  .state('app.singleMessage', {
    url: '/messages/:messageId',
    views: {
      'menuContent': {
        templateUrl: 'templates/message.html'
      }
    }
  })

  .state('app.register', {
    url: '/login/register',
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
      }
    }
  })

  .state('app.forgotPassword', {
    url: '/login/reset',
    views: {
      'menuContent': {
        templateUrl: 'templates/forgotPassword.html'
      }
    }
  })

 // .state('app.login', {
 //    url: '/login',
 //    views: {
 //      'menuContent': {
 //        templateUrl: 'templates/login.html',
 //        controller: 'LoginCtrl'
 //      }
 //    }
 //  })
  // .state('app.single', {
  //   url: '/playlists/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/playlist.html'
  //     }
  //   }
  // })
   ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
