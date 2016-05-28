angular.module('quizzimodo.quizzes', [])

.controller('QuizzesController', function($scope, $location, Quiz, $rootScope) {
  $scope.image = '../assets/avatar.png';
  $scope.topics = [{topicName: 'Science', sub_topics: ['Physics', 'Biology', 'Chemistry', 'Astronomy']}, 
  {topicName: 'Math', sub_topics: ['Algebra', 'Calculus', 'Trigonometry', 'Geometry']}, 
  {topicName: 'Tech', sub_topics: ['HTML', 'CSS', 'Javascript', 'Ruby', 'Python']}, 
  {topicName: 'Foreign Languages', sub_topics: ['Spanish', 'French', 'Italian', 'German']}, 
  {topicName: 'English', sub_topics: ['Literature', 'Grammar', 'Spelling', 'Famous Authors']}];

  $scope.$watch('topicPick', function(x){
    $scope.userTopic = $scope.topics[x]['topicName'];
    $scope.subTopics = $scope.topics[x]['sub_topics'];
  });

  $scope.$watch('subtopicPick', function(y){
    $scope.userSubtopic = $scope.subTopics[y];
  });

  $scope.quizzes = [{id: 1, name: 'Calculus Challenge', topic: 'Math', subtopic: 'Calculus', 
  details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.'}, 
  {id: 2, name: 'Algebra', topic: 'Math', subtopic: 'Algebra', 
  details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.'}, 
  {id: 3, name: 'Biology Bash', topic: 'Science', subtopic: 'Biology', 
  details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.'}, 
  {id: 4, name: 'Hablo Espanol', topic: 'Foreign Languages', subtopic: 'Spanish', 
  details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.'}, 
  {id: 5, name: 'Literary Classics', topic: 'English', subtopic: 'Literature'}];
  
  $scope.taken = 'Take';

  $scope.takeQuiz = function(quizID){
    console.log('quiz id equals ', quizID);
    //$location.path('/take_quiz');
    //Quiz.getQuiz($rootScope.user.id, quizID);
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