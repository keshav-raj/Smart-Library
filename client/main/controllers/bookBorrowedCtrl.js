angular.module('smartLibrary')

  .controller('bookBorrowedCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
    book: function(){
    return BorrowedBooks.findOne({_id:$stateParams.bookid});

 }
 });

    $scope.approve = function () {
      console.log("im here");
    BorrowedBooks.update({"_id":$stateParams.bookid},{$set: {"approved":"true"}})
      $state.go("adminTabsController.borrowingBooks");
    }
});
