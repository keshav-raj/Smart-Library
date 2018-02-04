angular.module('smartLibrary')

  .controller('detailsOfBookCtrl', function($scope, $state, $meteor, $stateParams) {
  $scope.credentials = {};
  $scope.helpers({
    book: function(){
    return Books.findOne({_id:$stateParams.bookid});

 }
 });

  $scope.borrow = function () {
    var userId = Meteor.userId();
    var userDetails = Meteor.users.findOne({_id:userId});
//console.log("User details"+userDetails.profile.rollNo)
//console.log("Book Id"+$stateParams.bookId)
    var bookDetails = Books.findOne({_id:$stateParams.bookid});
    console.log("Book details"+bookDetails.name+bookDetails.bookId+bookDetails.author+bookDetails.department);
    var borrowBook = {
      name:bookDetails.name,
      book_id:bookDetails.book_id,
      author:bookDetails.author,
      department:bookDetails.department,
      userId:userId,
      userName:userDetails.profile.name,
      rollNo:userDetails.profile.rollNo,
      approved:false,
      dbBookId:bookDetails._id,
      active:true,
      return:false
    }

    BorrowedBooks.insert(borrowBook);
    $state.go("tabsController.studLibrary")


      }

});
