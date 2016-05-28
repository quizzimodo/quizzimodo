angular.module('quizzimodo.take', [])

.controller('TakeController', function($scope, $location, Quiz, $rootScope) {
	
  $scope.title = 'Calculus Craze';
  $scope.questions = [{question: 'What is the derivative of sin(2x)?', answers: ['-2sin2x', '-2cos2x', '2cos2x', '2sin2x']}, 
  {question: 'What is the integral of 2cos(2x)?', answers: ['sin2x', 'cos2x', '-cos2x', '-sin2x']}, 
  {question: 'Which answer is the equivalent of ln(x)?', answers: ['log10(x)', 'e^x', 'log(x)', '10log(x)']}];
  
  $scope.answers = {};

  $scope.submit = function(){
  	console.log("These are the answers", $scope.answers);
    $location.path('/results');
  }

  console.log('This is the $scope.user', $rootScope.user);
  // $scope.getQuiz = function(id){
  // 	Quiz.getQuiz(id).then(function(data){
  //     $scope.title = data.quiz;
  // 		$scope.questions = data.questions;
  // 	}).catch(function(err){
  // 		console.log(err);
  // 	});
  // };
  // $scope.getQuiz();

});