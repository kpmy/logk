/**
 * Created by petry_000 on 28.11.2016.
 */
angular.module('LogkAl')
    .service('Steps', function () {
        const ss = this;
        steps = [
            {
                id: 'pure-being',
                words: ['чистое', 'бытие']
            }
        ];

        ss.list = function () {
            return _.map(steps, x => _.extend({}, x));
        };

        ss.get = function (id) {
            return _.extend({}, _.find(steps, x => _.isEqual(x.id, id)));
        }
    });