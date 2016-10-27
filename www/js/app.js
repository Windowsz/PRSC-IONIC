// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
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





  // .state('app.single', {
  //   url: '/playlists/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/playlist.html'
  //     }
  //   }
  // })


  // .state('app.singleImageSlide', {
  //   url: '/playlists/:imageslideId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/imageslide.html'
  //     }
  //   }
  // })
   ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
