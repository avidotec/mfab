angular.module('mfab', ['famous.angular', 'mfab.templates'])

.directive('mfabHeader', function () {
  return  {
    restrict: 'E',
    transclude: true,
    templateUrl: 'templates/mfab-header.tpl.html'
  }
})

.directive('mfabSidemenu', function () {
  return  {
    restrict: 'E',
    transclude: true,
    templateUrl: 'templates/mfab-sidemenu.tpl.html'
  }
})
