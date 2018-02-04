
angular.module('smartLibrary')


  .controller('addBooksCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};

  $scope.addBook =function(bookDetails){
    console.log(bookDetails);
   Books.insert({
      name:bookDetails.name,
      author:bookDetails.authorName,
      book_id:bookDetails.id,
      department:bookDetails.department,
      availability:bookDetails.availability,
    })
  };

});
