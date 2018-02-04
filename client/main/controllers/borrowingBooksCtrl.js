angular.module('smartLibrary')

  .controller('borrowingBooksCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
  borrowedBooks: function () {
    return  BorrowedBooks.find({approved:false});
    $scope.helpers({
      book: function(){
      return BorrowedBooks.findOne({_id:$stateParams.bookId});

   }
   });


  }
});

});
