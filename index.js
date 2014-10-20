angular.module('mobile.famous.angular', ['famous.angular', 'mobile.famous.angular.templates'])

.directive('goHeader', function () {
	return  {
		restrict: 'E',
		transclude: true,
		templateUrl: 'go-header.tpl.html'
	}
})