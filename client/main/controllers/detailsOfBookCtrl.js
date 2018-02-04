angular.module('smartLibrary')

  .controller('detailsOfBookCtrl', function($scope, $state, $meteor, $stateParams) {
  $scope.credentials = {};
  $scope.helpers({
    book: function(){
    return Books.findOne({_id:$stateParams.bookId});

 }
 });

  $scope.borrow = function () {
    var userId = Meteor.userId();
    var userDetails = Meteor.users.findOne({_id:userId});
//console.log("User details"+userDetails.profile.rollNo)
//console.log("Book Id"+$stateParams.bookId)
    var bookDetails = Books.findOne({_id:$stateParams.bookId});
    console.log("Book details"+bookDetails.Name+bookDetails.Id+bookDetails.AuthorName+bookDetails.Department);
    var borrowBook = {
      name:bookDetails.name,
      bookId:bookDetails.bookId,
      author:bookDetails.author,
      department:bookDetails.department,
      userId:userId,
      userName:userDetails.profile.name,
      rollNo:userDetails.profile.rollNo,
      approved:false,
    }

    BorrowedBooks.insert(borrowBook);
    $state.go("tabsController.studLibrary")


      }

});
