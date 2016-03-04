angular
	.module('signature', [])
  .controller('TestCtrl', function($scope) {
  	$scope.url = null;
  	$scope.onEnd = function(data) {
    	$scope.url = data;
      console.log(data);
    };
  })
  .directive('signaturePad', ['$window', function($window) {

    return {
      restrict: 'EA',
      replace: true,
      template: '<div class="signature" ng-style="{height: height + \'px\', width: width + \'px\'}"><canvas height="{{ height }}" width="{{ width }}"></canvas></div>',
      scope: {
        height: '@',
        width: '@',
      	onEnd: '=',
        clear: '='
      },
      controller: function($scope) {
      	$scope.clear = function() {
        	$scope.pad.clear();
        };
      },
      link: function(scope, element, attrs) {
        scope.pad = new SignaturePad(element.find('canvas')[0], {
        	onEnd: onEnd
        });

        function onEnd() {
        	scope.$eval(attrs.onEnd).call(null, scope.pad.toDataURL());
        }

        if (!scope.height) scope.height = 150;
        if (!scope.width) scope.width = 810;

        scope.onResize = function() {
          var canvas = element.find('canvas')[0];
          var ratio =  Math.max($window.devicePixelRatio || 1, 1);
          canvas.width = canvas.offsetWidth * ratio;
          canvas.height = canvas.offsetHeight * ratio;
          canvas.getContext("2d").scale(ratio, ratio);
        }

        scope.onResize();
      }
  	}
	}]);
