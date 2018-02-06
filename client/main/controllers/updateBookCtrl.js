angular.module('smartLibrary')

  .controller('updateBookCtrl', function($scope, $state, $meteor, $stateParams) {

  $scope.credentials = {};
  $scope.helpers({
    book: function(){
      return  Books.findOne({_id:$stateParams.bookid});

 }
 });

});
