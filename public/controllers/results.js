angular.module('quizzimodo.results', [])

.controller('ResultsController', function($scope, $location, Quiz, $rootScope) {
  
  $scope.quizID = Quiz.getData();
  $scope.quizName = 'Calculus Craze';
  $scope.quizResult = '4/5';

  

  // $scope.getResults = function(){
  //   Quiz.getResults().then(function(data){
  //     $scope.quizName = data.name;
  //     $scope.quizResult = data.result;
  //   }).catch(function(err){
  //     $scope.loadError = 'Error loading results';
  //     console.log(err);
  //   });
  // };
  // $scope.getResults();

  $scope.retake = function(){
    Quiz.setData($scope.quizID);
    $location.path('/take_quiz');
  };

});