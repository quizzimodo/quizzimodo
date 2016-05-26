angular.module('quizzimodo.quiz', [])

.controller('QuizController', function($scope, Quiz, Nav) {
  
  $scope.imagePath = '../assets/avatar.png';
  $scope.topics = ['Math', 'English', 'Spanish', 'Science'];

  $scope.quizzes = [{name: 'Calculus Challenge', topic: 'Math'}, 
  {name: 'Algebra', topic: 'Math'}, 
  {name: 'Biology Bash', topic: 'Science'}, 
  {name: 'Hablo Espanol', topic: 'Spanish'}, 
  {name: 'Literary Classics', topic: 'English'}, 
  {name: 'Literary Classics', topic: 'English'}, 
  {name: 'Literary Classics', topic: 'English'}, 
  {name: 'Literary Classics', topic: 'English'}, 
  {name: 'Literary Classics', topic: 'English'}];
  // $scope.startUp = function(){
  //   Quiz.getQuizzes()
  //   .then(function(data){
  //     $scope.quizzes = data;
  //   })
  //   .catch(function(err){
  //     console.log(err);
  //   });

  //   Nav.getTopics()
  //   .then(function(data){
  //     $scope.topics = data;
  //   })
  //   .catch(function(err){
  //     console.log(err);
  //   });
  // };
  // $scope.startUp();
  

});