/* kpmy 08.11.2016 */
angular.module('LogkAl')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'index',
                url: '/',
                controller: 'IndexController',
                templateUrl: 'components/index/index.html'
            })
            .state({
                name: 'otherwise',
                url: '*path',
                controller: function ($state) {
                    $state.go('index');
                }
            });
    });