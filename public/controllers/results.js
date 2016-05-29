angular.module('quizzimodo.results', [])

.controller('ResultsController', function($scope, $location, Quiz, $rootScope) {
  
  $scope.quizName = 'Calculus Craze';
  $scope.quizResult = '4/5';

  // $scope.getResults = function(){
  //   Quiz.getResults().then(function(data){
  //     $scope.quizName = data.name;
  //     $scope.quizResult = data.result;
  //   }).catch(function(err){
  //     console.log(err);
  //   });
  // };
  // $scope.getResults();

});