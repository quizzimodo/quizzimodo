angular.module('quizzimodo.take', [])

.controller('TakeController', function($scope, $location, Quiz) {

  $scope.quizID = Quiz.getData();
  $scope.answers = {};

  $scope.getQuiz = function(){
    console.log('This is scope quiz id', $scope.quizID);
    Quiz.getQuiz($scope.quizID).then(function(data){
      console.log('This is data inside getQuiz on loadup: ', data);
      $scope.quiz = data.data;
    }).catch(function(err){
        $scope.loadError = 'Error loading quiz'; 
      console.log(err);
    });
  };
  $scope.getQuiz();


  $scope.submit = function(){
    console.log("This is the completed quiz", $scope.quiz);
    Quiz.postResults($scope.quiz).then(function(data){
      Quiz.setData($scope.quizID);
      $location.path('/results');
    }).catch(function(error){
      $scope.submitError = 'Error submitting quiz';
      console.log(error);
    });
  };

});