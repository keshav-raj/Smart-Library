angular.module("smartLibrary")
    .controller('MainCtrl', function($scope,$state,$stateParams,$ionicModal,$meteor,$cordovaCamera) {
        $scope.posts = $meteor.collection(Posts);

        $scope.newPost={};

        $scope.post = function () {
            $scope.newPost.like=0;
            $scope.newPost.comments=[];
            $scope.posts.push( $scope.newPost);
            $scope.newPost={};
            $scope.closePost();

        };

        $scope.likePost= function(index){
            console.log( $scope.posts[index]);
            $scope.posts[index].like += 1;
        };

        $ionicModal.fromTemplateUrl('client/main/views/newpost.ng.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.closePost = function() {
            $scope.modal.hide();
        };

        $scope.openPost = function() {
            $scope.modal.show();
        };
        $scope.doLogoutAction = function() {
            alert("in doLogoutAction");
            $meteor.logout().then(function(_response) {
              $state.go('login');
            });
        };
    });
