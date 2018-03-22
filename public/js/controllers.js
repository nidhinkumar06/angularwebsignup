// var myApp = angular.module('myApp', ['ng-token-auth']);
var myApp = angular.module('myApp', ['ng-token-auth'])
	.config(function($authProvider) {
		$authProvider.configure({
			apiUrl: '*********' //add staging url
		});
	});
//added https instead of http
myApp.controller('MyController', function MyController($scope, $auth) {
  console.log('PreSignupCtrl got called');
    var vm = this;
    activate();
    ///////
   function activate() {
     console.log('activate got called');
     $scope.signup = {};
   }

   $scope.submitSignUp = function () {
     console.log('submit signup got called', $scope.signup);
     var serverSignUp = {};
     serverSignUp.config_name = 'default';
     serverSignUp.confirm_success_url = 'file:///android_asset/www/index.html#/signup';
     serverSignUp.mobile_no = $scope.signup.mobile_no;
     serverSignUp.password = $scope.signup.password;
     serverSignUp.passwrd_confirmation = $scope.signup.password;
     console.log(serverSignUp);
     // $scope.signup.name = 'Nidhin';
     // $scope.signup.passwrd_confirmation = $scope.signup.password;
     $auth.submitRegistration(serverSignUp)
      .then(function(resp) {
        // handle success
        console.log('sucess resp is', resp);
      })
      .catch(function(resp) {
        // handle errors
        console.log('failure resp is', resp);
      });
   }
});
