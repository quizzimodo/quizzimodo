angular.module('quizzimodo.nav', [])

.controller('NavController', function($scope, $location, Nav) {
  $scope.topics = [];
  $scope.user = '';

  $scope.getTopics = function() {
    Nav.getTopics()
    .then((topics) => $scope.topics = topics);
  };

});
