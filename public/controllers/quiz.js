angular.module('quizzimodo.quiz', [])

.controller('QuizController', function($scope, $location, Quiz, $rootScope) {	 

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

  $scope.quiz = {
    questions: []
  }
  $scope.currentlyEditing = false;

  $scope.question = {question: '', answers: [{}, {}, {}, {}]};

  function checkFields () {
    if($('.ng-empty').length > 0 || $('input[type=radio]:checked').length === 0) {
      return false;
  }
    return true;
  };

  function clearFields() {
    $scope.question.question = '';
    for(var i = 0; i < $scope.question.answers.length; i++) {
      $scope.question.answers[i].answer = '';
    }
  }

  $scope.addQuestion = function() {
    //if(checkFields()) {
      $scope.quiz.questions.push($scope.question);
      $scope.question = {question: '', answers: [{}, {}, {}, {}]};
    // } else {
    //   alert('Please fill out the question and answer fields, and select a correct answer');
    // }
  };

  $scope.editQuestion = function(index) {
    $scope.index = index;
    $scope.question.question = this.question.question;
    for(var i = 0; i < $scope.question.answers.length; i++) {
      $scope.question.answers[i].answer = this.question.answers[i].answer;
      $scope.question.answers[i].correct = this.question.answers[i].correct;
    }
    $scope.currentlyEditing = true;
  }

  $scope.deleteQuestion = function(index) {
    if(confirm("Are you sure you want to delete this question?")) {
      $scope.quiz.questions.splice(index, 1);
      clearFields();
      $scope.currentlyEditing = false;
    }
  }

  $scope.updateQuestion = function() {
    $scope.quiz.questions[$scope.index].question = $scope.question.question;
    for(var i = 0; i < $scope.quiz.questions[$scope.index].answers.length; i++) {
      $scope.quiz.questions[$scope.index].answers[i].answer = $scope.question.answers[i].answer;
    }
    clearFields();
    $scope.currentlyEditing = false;
  }

  $scope.submitQuiz = function() {
    //if(checkFields()) { 
      $scope.quiz.subtopic_id = $scope.subtopicPick;
      $scope.quiz.quiz = $scope.quizName;
      $scope.quiz.details = $scope.quizDetails;
      if ($('#publicCheckbox').is(':checked')) {
        $scope.quiz.public = true;
      }

      console.log($scope.quiz.public);

      Quiz.postQuiz($scope.quiz)
      .then(function() {
        alert('Quiz created!');
        $location.path('/main');
      })
      .catch(function(error) {
        console.error(error);
      });
    // } else {
    //   alert('Please fill out the question and answer fields, and select a correct answer');
    // }
  }
});