/* kpmy 08.11.2016 */
angular.module('LogkAl')
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'intro',
                url: '/intro',
                controller: 'IntroController',
                templateUrl: 'components/intro/intro.html'
            })
            .state({
                name: 'ref',
                url: '/ref/{id}',
                controller: 'RefController',
                templateUrl: 'components/ref/ref.html'
            })
            .state({
                name: 'otherwise',
                url: '*path',
                controller: function ($state) {
                    $state.go('intro');
                }
            });
    });