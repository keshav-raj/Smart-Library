angular.module('smartLibrary')

  .controller('borrowedBooksCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
  Books: function(){
    var myId = Meteor.userId();
    return BorrowedBooks.find({approved:"true"});
  },
  checkUser: function(){
    //check wheather user is logged in
    if(!Meteor.userId()){
      $state.go('login');
    };
  }
  });

});
