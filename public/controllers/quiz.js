angular.module('quizzimodo.quiz', [])

.controller('QuizController', function($scope, $location, Quiz, Nav) {
  $scope.title = 'Calculus Craze';
  $scope.questions = [{question: 'What is the derivative of sin(2x)?', answers: ['-2sin2x', '-2cos2x', '2cos2x', '2sin2x']}, 
  {question: 'What is the integral of 2cos(2x)?', answers: ['-2sin2x', '-2cos2x', '2cos2x', '2sin2x']}, 
  {question: 'Which answer is the equivalent of ln(x)?', answers: ['log10(x)', 'e^x', 'log(x)', '10log(x)']}];
  
  $scope.submit = function(){}

  // $scope.getQuiz = function(id){
  // 	Quiz.getQuestions(id).then(function(data){
  // 		$scope.questions = data;
  // 	}).catch(function(err){
  // 		console.log(err);
  // 	});
  // };
  // $scope.getQuiz();

});