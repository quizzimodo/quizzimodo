angular.module('quizzimodo.quizzes', [])

.controller('QuizzesController', function($scope, $location, Quiz, Nav) {
  console.log("controller is loading");
  $scope.image = '../assets/avatar.png';
  $scope.topics = ['Math', 'English', 'Spanish', 'Science'];

  $scope.quizzes = [{id: 1, name: 'Calculus Challenge', topic: 'Math'}, 
  {id: 2, name: 'Algebra', topic: 'Math'}, 
  {id: 3, name: 'Biology Bash', topic: 'Science'}, 
  {id: 4, name: 'Hablo Espanol', topic: 'Spanish'}, 
  {id: 5, name: 'Literary Classics', topic: 'English'}, 
  {id: 6, name: 'Literary Classics', topic: 'English'}, 
  {id: 7, name: 'Literary Classics', topic: 'English'}, 
  {id: 8, name: 'Literary Classics', topic: 'English'}, 
  {id: 9, name: 'Literary Classics', topic: 'English'}];
  
  $scope.taken = 'Retake';

  $scope.takeQuiz = function(quiz){
    console.log(quiz);
    $location.path('/take_quiz');
  }

  // if(topics.result){
  //   $scope.taken = 'Retake';
  // } else {
  //   $scope.taken = 'Take Quiz'
  // }

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