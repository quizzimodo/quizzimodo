angular.module('quizzimodo.quizzes', [])

.controller('QuizzesController', function($scope, $location, Quiz, $rootScope) {
  
  // $scope.topics = [{topicName: 'Science', sub_topics: ['Physics', 'Biology', 'Chemistry', 'Astronomy']}, 
  // {topicName: 'Math', sub_topics: ['Algebra', 'Calculus', 'Trigonometry', 'Geometry']}, 
  // {topicName: 'Tech', sub_topics: ['HTML', 'CSS', 'Javascript', 'Ruby', 'Python']}, 
  // {topicName: 'Foreign Languages', sub_topics: ['Spanish', 'French', 'Italian', 'German']}, 
  // {topicName: 'English', sub_topics: ['Literature', 'Grammar', 'Spelling', 'Famous Authors']}];


  // $scope.topics = $rootScope.topics;
  // console.log('This is topics: ', $scope.topics);

  $scope.$watch('topicPick', function(x){
    $scope.userTopic = $scope.topics[x]['topic'];
    $scope.subTopics = $scope.topics[x]['subtopics'];
  });

  $scope.$watch('subtopicPick', function(y){
    $scope.userSubtopic = $scope.subTopics[y];
  });


  
  $scope.startUp = function(){
    Quiz.getQuizzes()
    .then(function(data){
      console.log('This is the quizzes data: ', data);
      $scope.quizzes = data.data;
      $scope.image = '../assets/avatar.png';
      $scope.topics = $rootScope.topics;
      console.log($scope.topics);
      if(data.data.result){
        $scope.taken = 'Retake';
      } else {
        $scope.taken = 'Take Quiz'
      }
    })
    .catch(function(err){
      $scope.selectError = "Error retrieving quizzes";
      console.log(err);
    });
  };
  $scope.startUp();


  $scope.takeQuiz = function(quizID){
    Quiz.setData(quizID);
    $location.path('/take_quiz');
  };
  

});