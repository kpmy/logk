/* kpmy 15.11.2016 */
angular.module('LogkAl')
    .controller('IndexController', function ($scope, $state) {
        $scope.step1 = function () {
            $scope.words = 'чистое\n бытие';
        };

        $scope.step2 = function () {
            $scope.words = 'чистое\n ничто';
        }
    });