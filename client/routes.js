angular.module("smartLibrary")
    .config(function($stateProvider, $urlRouterProvider) {
      // For any unmatched url, send to /login
        $urlRouterProvider.otherwise("/login");
        $stateProvider.state('login', {
                url: '/login',
                // loaded into ui-view of parent's template
                templateUrl: 'client/main/views/login.ng.html',
                controller : 'LoginCtrl'
            });
        $stateProvider.state('main', {
                url: '/main',
                templateUrl: 'client/main/views/main.ng.html',
                controller: 'mainCtrl',
                resolve:{
                  "currentUser": function($meteor) {
                    return $meteor.requireUser();
                  }
                }
            });

        $stateProvider.state('firstPage', {
                url: '/firstPage',
                templateUrl: 'client/main/views/firstPage.ng.html',
                controller: 'firstPageCtrl'
            });

        $stateProvider.state('signup', {
                url: '/signup',
                templateUrl: 'client/main/views/signup.ng.html',
                controller: 'signupCtrl'
            });

        $stateProvider.state('tabsController', {
                url: '/page1',
                templateUrl: 'client/main/views/tabsController.ng.html',
                abstract:true
            });

        $stateProvider.state('tabsController.studLibrary', {
                url: '/page2',
                views: {
                  'tab1': {
                    templateUrl: 'client/main/views/studLibrary.ng.html',
                    controller: 'studLibraryCtrl'
                  }
                }
            });

      $stateProvider.state('tabsController.borrowedBooks', {
                url: '/page3',
                views: {
                  'tab2': {
                    templateUrl: 'client/main/views/borrowedBooks.ng.html',
                    controller: 'borrowedBooksCtrl'
                  }
                }
            });

      $stateProvider.state('tabsController.myProfile', {
              url: '/page4',
              views: {
                'tab3': {
                  templateUrl: 'client/main/views/myProfile.ng.html',
                  controller: 'myProfileCtrl'
                }
              }
          });

          $stateProvider.state('tabsController.myBookDetails', {
                url: '/myBookDetails',
                views: {
                  'tab2': {
                    templateUrl: 'client/main/views/myBookDetails.ng.html',
                    controller: 'myBookDetailsCtrl'
                  }
                }
              });

          $stateProvider.state('tabsController.detailsOfBook', {
                url: '/detailsOfBook',
                views: {
                  'tab1': {
                    templateUrl: 'client/main/views/detailsOfBook.ng.html',
                    controller: 'detailsOfBookCtrl'
                  }
                }
              });


         $stateProvider.state('addBooks', {
                url:'/addBooks',
                templateUrl:'client/main/views/addBooks.ng.html',
                controller:'addBooksCtrl'
              });



      });
