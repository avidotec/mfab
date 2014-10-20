angular.module('mfab', ['famous.angular', 'mfab.templates'])

.directive('goHeader', function () {
	return  {
		restrict: 'E',
		transclude: true,
		templateUrl: 'go-header.tpl.html'
	} 
})