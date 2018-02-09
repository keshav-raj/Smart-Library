angular.module('smartLibrary')

  .controller('updateBookCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
    book: function(){
      return  Books.findOne({_id:$stateParams.bookid});

 }
 });


 $scope.updateBook =function(book){
console.log("im working");
       Books.update({_id:$stateParams.bookid},
       {
         $set: {
           name:book.name,
           author:book.author,
           book_id:book.book_id,
           department:book.department,
           availability:book.availability,
         }
       })

     }

});
