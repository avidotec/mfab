(function(module) {
try {
  module = angular.module('mfab.templates');
} catch (e) {
  module = angular.module('mfab.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('go-header.tpl.html',
    '<fa-container-surface fa-options="headerOptions">\n' +
    '  <fa-modifier fa-size="[44, 44]">\n' +
    '    <fa-modifier fa-align="[.5, .5]" fa-origin="[.5, .5]" fa-opacity="1 - $sidemenu.transform.get()*.01" fa-rotate-z="-$sidemenu.transform.get()*0.0159">\n' +
    '      <fa-surface fa-options="{ properties: { textAlign: \'center\' } }">\n' +
    '        <a fa-click="$sidemenu.toggleMenu()">\n' +
    '          <i class="fa fa-bars"></i>\n' +
    '        </a>\n' +
    '      </fa-surface>\n' +
    '    </fa-modifier>\n' +
    '    <fa-modifier fa-align="[.5, .5]" fa-origin="[.5, .5]" fa-opacity="$sidemenu.transform.get()*0.019" fa-rotate-z="-$sidemenu.transform.get()*0.0159">\n' +
    '      <fa-surface fa-options="{ properties: { textAlign: \'center\' } }">\n' +
    '        <a fa-click="$sidemenu.toggleMenu()">\n' +
    '          <i class="fa fa-times"></i>\n' +
    '          <!-- <i class="fa fa-plus"></i> -->\n' +
    '        </a>\n' +
    '      </fa-surface>\n' +
    '    </fa-modifier>\n' +
    '  </fa-modifier>\n' +
    '  <fa-modifier fa-size="[true, 44]" fa-translate="[44, 0]">\n' +
    '    <fa-surface fa-size="[true, 44]" fa-options="{ properties: { textAlign: \'center\' } }">\n' +
    '      {{ $page.title }}\n' +
    '    </fa-surface>\n' +
    '  </fa-modifier>\n' +
    '  <fa-modifier fa-size="[44, 44]" fa-origin="[1, 0]">\n' +
    '    <fa-modifier fa-align="[.5, .5]" fa-origin="[.5, .5]" fa-translate="[-44, 0]">\n' +
    '      <fa-surface fa-options="{ properties: { textAlign: \'center\' } }">\n' +
    '        <a fa-click="$sidemenu.toggleMenu()">\n' +
    '          <i class="fa fa-search"></i>\n' +
    '        </a>\n' +
    '      </fa-surface>\n' +
    '    </fa-modifier>\n' +
    '    <fa-modifier fa-align="[.5, .5]" fa-origin="[.5, .5]">\n' +
    '      <fa-surface fa-options="{ properties: { textAlign: \'center\' } }">\n' +
    '        <a fa-click="$sidemenu.toggleMenu()">\n' +
    '          <i class="fa fa-ellipsis-v"></i>\n' +
    '        </a>\n' +
    '      </fa-surface>\n' +
    '    </fa-modifier>\n' +
    '  </fa-modifier>\n' +
    '</fa-container-surface>');
}]);
})();

angular.module('mfab', ['famous.angular', 'mfab.templates'])

.directive('goHeader', function () {
	return  {
		restrict: 'E',
		transclude: true,
		templateUrl: 'go-header.tpl.html'
	} 
})