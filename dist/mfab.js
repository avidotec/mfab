/**
 * mfab - Mobile Famo.us Angular Bootstrap
 * @version v1.0.1
 * @link https://github.com/goappes/mfab
 * @license MIT
 */
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

angular.module('mfab.templates', []);

angular.module("mfab.templates").run(["$templateCache", function($templateCache) {$templateCache.put("templates/mfab-header.tpl.html","<fa-container-surface fa-options=\"{ size: [undefined, 44], properties: { lineHeight: \'44px\' } }\" ng-class=\"{ \'mfab-pink\': true }\">\n  <fa-modifier fa-size=\"[44, 44]\">\n    <fa-modifier fa-align=\"[.5, .5]\" fa-origin=\"[.5, .5]\" fa-opacity=\"1 - $sidemenu.transform.get()*.01\" fa-rotate-z=\"-$sidemenu.transform.get()*0.0159\">\n      <fa-surface fa-options=\"{ properties: { textAlign: \'center\' } }\">\n        <a fa-click=\"$sidemenu.toggleMenu()\">\n          <i class=\"fa fa-bars\"></i>\n        </a>\n      </fa-surface>\n    </fa-modifier>\n    <fa-modifier fa-align=\"[.5, .5]\" fa-origin=\"[.5, .5]\" fa-opacity=\"$sidemenu.transform.get()*0.019\" fa-rotate-z=\"-$sidemenu.transform.get()*0.0159\">\n      <fa-surface fa-options=\"{ properties: { textAlign: \'center\' } }\">\n        <a fa-click=\"$sidemenu.toggleMenu()\">\n          <i class=\"fa fa-times\"></i>\n          <!-- <i class=\"fa fa-plus\"></i> -->\n        </a>\n      </fa-surface>\n    </fa-modifier>\n  </fa-modifier>\n  <fa-modifier fa-size=\"[true, 44]\" fa-translate=\"[44, 0]\">\n    <fa-surface fa-size=\"[true, 44]\" fa-options=\"{ properties: { textAlign: \'center\' } }\">\n      {{ $page.title }}\n    </fa-surface>\n  </fa-modifier>\n  <fa-modifier fa-size=\"[44, 44]\" fa-origin=\"[1, 0]\">\n    <fa-modifier fa-align=\"[.5, .5]\" fa-origin=\"[.5, .5]\" fa-translate=\"[-44, 0]\">\n      <fa-surface fa-options=\"{ properties: { textAlign: \'center\' } }\">\n        <a fa-click=\"$sidemenu.toggleMenu()\">\n          <i class=\"fa fa-search\"></i>\n        </a>\n      </fa-surface>\n    </fa-modifier>\n    <fa-modifier fa-align=\"[.5, .5]\" fa-origin=\"[.5, .5]\">\n      <fa-surface fa-options=\"{ properties: { textAlign: \'center\' } }\">\n        <a fa-click=\"$sidemenu.toggleMenu()\">\n          <i class=\"fa fa-ellipsis-v\"></i>\n        </a>\n      </fa-surface>\n    </fa-modifier>\n  </fa-modifier>\n</fa-container-surface>\n");
$templateCache.put("templates/mfab-sidemenu.tpl.html","<fa-modifier fa-translate=\"[0, 60]\">\n  <fa-modifier fa-translate=\"[0, 124]\">\n    <fa-scroll-view fa-pipe-from=\"$sidemenu.eventHandler\" fa-options=\"{ clipSize: 0, paginated: false, speedLimit: 5, direction: 1 }\">\n      <fa-view ng-repeat=\"item in items\">\n        <fa-modifier fa-size=\"item.options.size||[undefined, 44]\">\n          <fa-surface fa-options=\"item.options\" ng-class=\"{\'mfab-p16-lr\': true}\">\n            <a ui-sref=\"{{item.uiSref}}\" fa-pipe-to=\"$sidemenu.eventHandler\" ng-bind=\"item.title\"></a>\n          </fa-surface>\n        </fa-modifier>\n      </fa-view>\n    </fa-scroll-view>\n  </fa-modifier>\n</fa-modifier>\n\n<fa-surface fa-size=\"[undefined, 156]\" fa-options=\"{classes:[\'mfab-pink\']}\"></fa-surface>\n\n<fa-modifier fa-translate=\"[0, 60]\">\n  <fa-surface fa-size=\"[undefined, 64]\" fa-options=\"{classes:[\'mfab-p16-lr\']}\">\n    <img src=\"http://placehold.it/64x64\">\n  </fa-surface>\n  <fa-modifier fa-size=\"[undefined, 28]\" fa-translate=\"[0, 96]\">\n    <fa-surface fa-options=\"{classes:[\'mfab-p16-lr\', \'mfab-sidemenu-title\', \'mfab-pink\']}\">\n      <h1>João Neto</h1>\n    </fa-surface>\n  </fa-modifier>\n</fa-modifier>\n");}]);