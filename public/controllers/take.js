angular.module('quizzimodo.take', [])

.controller('TakeController', function($scope, $location, Quiz) {

  $scope.quiz = {
    id: 3,
    quiz: 'Testing',
    details: 'A challenging quiz about calculus',
    questions: [{question: 'What is the derivative of sin(2x)?', answers: [{id: 1, answer: 'cos2x'}, {id: 2, answer: 'sinx'}]}, 
                {question: 'What is the integral of 2cos(2x)?', answers: [{id: 3, answer: 'sin2x'}, {id: 4, answer: 'cosx'}]}, 
                {question: 'Which answer is the equivalent of ln(x)?', answers: [{id: 5, answer: 'e^x'}, {id: 6, answer: 'log10x'}]}]

  };


  $scope.quizID = Quiz.getData();
  $scope.answers = {};

  // $scope.getQuiz = function(){
  //   console.log('This is scope quiz id', $scope.quizID);
  //   Quiz.getQuiz($scope.quizID).then(function(data){
  //     console.log('This is data inside getQuiz on loadup: ', data);
  //     $scope.quiz = data.data;
  //   }).catch(function(err){
  //       $scope.loadError = 'Error loading quiz'; 
  //     console.log(err);
  //   });
  // };
  // $scope.getQuiz();


  $scope.submit = function(){
    console.log("This is the completed quiz", $scope.quiz);
    
    // Quiz.postResults($scope.quiz).then(function(data){
    //   Quiz.setData($scope.quizID);
    //   $location.path('/results');
    // }).catch(function(error){
    //   $scope.submitError = 'Error submitting quiz';
    //   console.log(error);
    // });
  };



});