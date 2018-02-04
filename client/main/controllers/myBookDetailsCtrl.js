angular.module('smartLibrary')

  .controller('myBookDetailsCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
    book: function(){
    return BorrowedBooks.findOne({_id:$stateParams.bookid});

 }
 });

});
