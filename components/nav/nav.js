/**
 * Created by pk on 08.11.2016.
 */
angular.module('LogkAl')
    .directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/nav/nav.html',
            controller: function ($scope, $mdSidenav) {
                $scope._ = _; //усатый-полосатый

                $scope.todayPhrase = null;

                $scope.phrase = function () {
                    var phrases = [`Метод есть осознание формы внутреннего самодвижения содержания изучаемого предмета.`,
                        `Свобода — это господство над обстоятельствами со знанием дела.`,
                        `Всё является примером диалектики.`,
                        `Истина состоит в том, чтобы представить данный предмет как живое противоречие.`,
                        `Развивающиеся люди все время делают то, что не умеют.`,
                        `Не всё есть становление, но во всём есть становление.`,
                        `В абсолютном свете так же ничего не видно, как в абсолютной тьме.`,
                        `Всё изменяется и остаётся неизменным.`];
                    return _.isNull($scope.todayPhrase) ? ($scope.todayPhrase = phrases[Math.min(Math.round(Math.random() * phrases.length), phrases.length - 1)]) : $scope.todayPhrase;
                };

                $scope.toggleNav = function (id) {
                    $mdSidenav(id).toggle();
                }
            }
        }
    })
    .directive('fabbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/nav/fab.html',
            controller: function ($scope, $state) {
                $scope.fab = {
                    open: false
                };

                $scope.gotoStart = function () {
                    $state.go('index')
                }
            }
        }
    });