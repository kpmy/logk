/* kpmy 15.11.2016 */
angular.module('LogkAl')
    .controller('RefController', function ($scope, $state, $stateParams, $q, Steps) {

        $scope.navi = {
            step: {
                id: !_.isEmpty($stateParams.id) ? $stateParams.id : _.first(Steps.list()).id,
            },
            steps: [],
            gotoStep: function (id) {
                $state.go('ref', {id: id});
            }
        };

        Steps.list().forEach((step, i) => {
            $scope.navi.steps.push({
                label: step.label,
                abbr: step.words.map(w => w.charAt(0).toUpperCase()).join(''),
                active: $scope.navi.step.id == step.id,
                id: step.id,
                index: i
            });
        });
        
        let showCurrentStep = function () {
            $scope.cards = {
                list: [],
                target: 0
            };

            $scope.words = Steps.get($scope.navi.step.id).words.join('\n');

            let steps = Steps.list();
            let idx = $scope.navi.step.index = Steps.indexOf($scope.navi.step.id);
            let range = 2;
            let start = Math.max(0, idx - range);
            let end = Math.min(steps.length, idx + (2 * range + 1) - (idx - start));
            var target = 0;
            for (var i = start; i < end; i++) {
                if (i < idx)
                    target++;
                var step = steps[i];
                step.index = i;
                $scope.cards.list.push(step);
            }
            $scope.cards.target = target;
            let last = $scope.cards.list[target];
            if (last.index > 0) {
                last.back = {
                    id: steps[last.index - 1].id,
                    label: steps[last.index - 1].label
                };
            }
            if (steps.length - 1 > last.index) {
                last.forward = {
                    id: steps[last.index + 1].id,
                    label: steps[last.index + 1].label
                }
            }
        };

        $scope.$on('steps', showCurrentStep);

        if (_.isEmpty($stateParams.id))
            $state.go('ref', {id: _.first(Steps.list()).id});
        else
            $q(showCurrentStep);
    });