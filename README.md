# ng-signature
Angular Directive for https://github.com/szimek/signature_pad

demo: https://purplyrocky.github.io/ng-signature

using bower `bower install ng-signature`

link to `../bower_components/ng-signature/js/signature.js`

add `'signature'` to your module

add directive to html `<signature-pad model="data" clear="clear" height="150" width="810"></signature-pad>`

right now, this directive changes `data.value` onEnd (end of the signature)

you can test if it's working by setting `$scope.data = {};` in your controller then view the output in the console by selecting your scope and checking `$scope.data`

viewing the object before signing will return `Object {}`
after signing should return something like `Object {value: "data:image/png;base64,iVBORw0KGgoA..."}`
