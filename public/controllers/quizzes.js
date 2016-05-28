angular.module('quizzimodo.quizzes', [])

.controller('QuizzesController', function($scope, $location, Quiz, $rootScope) {
  $scope.image = '../assets/avatar.png';
  $scope.topics = ['Math', 'English', 'Spanish', 'Science'];

  $scope.quizzes = [{id: 1, name: 'Calculus Challenge', topic: 'Math'}, 
  {id: 2, name: 'Algebra', topic: 'Math'}, 
  {id: 3, name: 'Biology Bash', topic: 'Science'}, 
  {id: 4, name: 'Hablo Espanol', topic: 'Spanish'}, 
  {id: 5, name: 'Literary Classics', topic: 'English'}];
  
  $scope.taken = 'Retake';

  $scope.takeQuiz = function(quiz){
    console.log('$scope.title= ', quiz);
    $location.path('/take_quiz');
  }

  // $scope.startUp = function(){
  //   Quiz.getQuizzes($rootScope.user.id)
  //   .then(function(data){
  //     $scope.quizzes = data;
  
  //   if(topics.result){
  //     $scope.taken = 'Retake';
  //   } else {
  //     $scope.taken = 'Take Quiz'
  //   }
  //   })
  //   .catch(function(err){
  //     console.log(err);
  //   });
  // };
  // $scope.startUp();
  

});