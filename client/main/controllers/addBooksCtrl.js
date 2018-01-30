
angular.module('smartLibrary')


  .controller('addBooksCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};

  $scope.addBook =function(bookDetails){
    console.log(bookDetails);
   Books.insert({
      Name:bookDetails.name,
      AuthorName:bookDetails.authorName,
      Id:bookDetails.id,
      Department:bookDetails.department,
    })
  };

});
