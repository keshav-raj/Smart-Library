angular.module('smartLibrary')

  .controller('detailsOfBookCtrl', function($scope, $state, $meteor, $stateParams) {
Meteor.subscribe('users');
  $scope.credentials = {};
  $scope.helpers({
    book: function(){
    return Books.findOne({_id:$stateParams.bookId});

 }
 });

  $scope.borrow = function () {
    var userId = Meteor.userId();
    //var userDetails = users.findOne({_id:userId});
//console.log("User details"+userDetails.profile.name)
console.log("Book Id"+$stateParams.bookId)

var bookDetails = Books.findOne({_id:$stateParams.bookId});

console.log("Book details"+bookDetails.Name+bookDetails.Id+bookDetails.AuthorName+bookDetails.Department);
      }

});
