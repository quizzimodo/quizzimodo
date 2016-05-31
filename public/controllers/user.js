angular.module('quizzimodo.user', [])

.controller('UserController', function($scope, $rootScope) {
  $scope.profileUser = $rootScope.user.username;
  $scope.profileEmail = $rootScope.user.email;
  $scope.profileBio = $rootScope.user.bio;
  $scope.profileQuizzesMade = $rootScope.user.quizzes;
  $scope.profileQuizzesTaken = $rootScope.user.attempts;

  $(function(){
    $('#profiletabs ul li a').on('click', function(e){
      
      e.preventDefault();
      var newcontent = $(this).attr('href');
      
      $('#profiletabs ul li a').removeClass('sel');
      $(this).addClass('sel');
      $('#content section').each(function(){
        if(!$(this).hasClass('hidden')) { $(this).addClass('hidden'); }
      });

      $(newcontent).removeClass('hidden');
  });
});
});
