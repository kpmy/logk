/* kpmy 15.11.2016 */
angular.module('LogkAl')
    .controller('RefController', function ($scope, $state, $stateParams, $q, Steps) {

        $scope.step = {
            id: !_.isEmpty($stateParams.id) ? $stateParams.id : _.first(Steps.list()).id
        };

        let showCurrentStep = function () {
            $scope.words = Steps.get($scope.step.id).words.join('\n');
            $scope.navi = {};
        };

        if (_.isEmpty($stateParams.id))
            $state.go('ref', {id: _.first(Steps.list()).id});
        else
            $q(showCurrentStep);
    });