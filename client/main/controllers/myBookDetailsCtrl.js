angular.module('smartLibrary')

  .controller('myBookDetailsCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
    book: function(){
      return BorrowedBooks.findOne({_id:$stateParams.bookid});
            }
       });

       $scope.return = function () {
         console.log("im here");
         BorrowedBooks.update({"_id":$stateParams.bookid},{$set: {"return":true}});
        $state.go("tabsController.borrowedBooks");
      }


      });
