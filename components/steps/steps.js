/**
 * Created by petry_000 on 28.11.2016.
 */
angular.module('LogkAl')
    .service('Steps', function ($http, $rootScope) {
        const ss = this;
        steps = [
            {
                id: 'pure-being',
                label: 'Чистое бытие'
            }, {
                id: 'nothing',
                label: 'Ничто'
            }, {
                id: 'becoming',
                label: 'Становление'
            }, {
                id: 'moments',
                label: 'Моменты',
                words: ['возникновение', 'прехождение']
            }, {
                id: 'being',
                label: 'Наличное бытие'
            }, {
                id: 'something',
                label: 'Нечто',
                words: ['нечто', 'иное']
            }, {
                id: 'otherness',
                label: 'Инобытие'
            }, {
                id: 'quality',
                label: 'Качество',
                words: ['качество', 'предел']
            }, {
                id: 'being-for-itself',
                label: 'Для-себя-бытие',
                words: ['для-себя', 'бытие']
            }
        ];

        steps.forEach(x => {
            if (_.isEmpty(x.words)) {
                x.words = x.label.split(' ').map(w => w.toLowerCase());
            }

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