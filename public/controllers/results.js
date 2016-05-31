angular.module('quizzimodo.results', [])

.controller('ResultsController', function($scope, $location, Quiz, $rootScope) {
  
  $scope.quizID = Quiz.getData();

  $scope.getResults = function(){
    Quiz.getQuiz($scope.quizID).then(function(data){
      console.log('The retrieved data', data);
      $scope.quizName = data.data.quiz;
      $scope.quizResult = data.data.attempts[0].result;
    }).catch(function(err){
      $scope.loadError = 'Error loading results';
      console.log(err);
    });
  };
  $scope.getResults();

  $scope.retake = function(){
    Quiz.setData($scope.quizID);
    $location.path('/take_quiz');
  };

});