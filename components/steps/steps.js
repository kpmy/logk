/**
 * Created by petry_000 on 28.11.2016.
 */
angular.module('LogkAl')
    .service('Steps', function ($http, $rootScope) {
        const ss = this;
        steps = [
            {
                id: 'pure-being',
                label: 'Чистое бытие',
                words: ['чистое', 'бытие']
            }, {
                id: 'nothing',
                label: 'Ничто',
                words: ['ничто']
            }, {
                id: 'becoming',
                label: 'Становление',
                words: ['становление']
            }, {
                id: 'passing',
                label: 'Прехождение',
                words: ['прехождение']
            }, {
                id: 'uprising',
                label: 'Возникновение',
                words: ['возникновение']
            }
        ];

        steps.forEach(x => {
            $http.get('components/steps/' + x.id + '.md').then(res => {
                x.description = res.data;
                $rootScope.$broadcast('steps');
            });
        });

        ss.list = function () {
            return _.map(steps, x => _.extend({}, x));
        };

        ss.indexOf = function (id) {
            return _.findIndex(steps, function (x) {
                return _.isEqual(x.id, id);
            })
        };

        ss.get = function (id) {
            return _.extend({}, _.find(steps, x => _.isEqual(x.id, id)));
        }
    });