/**
 * Created by petry_000 on 28.11.2016.
 */
angular.module('LogkAl')
    .service('Steps', function ($http, $q, $rootScope) {
        const ss = this;
        const being = {
            label: 'Учение о бытии',
            values: [
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
                }, {
                    id: 'one',
                    label: 'Одно'
                }, {
                    id: 'many',
                    label: 'Многие'
                }, {
                    id: 'quantity',
                    label: 'Количество'
                }, {
                    id: 'pure-quantity',
                    label: 'Чистое количество'
                }, {
                    id: 'some-quantity',
                    label: 'Определённое количество'
                }, {
                    id: 'number',
                    label: 'Число',
                    words: ['число', 'численность']
                }, {
                    id: 'operations',
                    label: 'Операции'
                }, {
                    id: 'grade',
                    label: 'Порядок',
                    words: ['порядок', 'степень']
                }, {
                    id: 'quantitative',
                    label: 'Отношения',
                    words: ['количественные', 'отношения']
                }, {
                    id: 'specific-quantity',
                    label: 'Специфицированное количество',
                    words: ['специфика', 'количества']
                }, {
                    id: 'specific-measure',
                    label: 'Специфическая мера',
                    words: ['специфическая', 'мера']
                }, {
                    id: 'specific-self-measures',
                    label: 'Специфически самостоятельные меры',
                    words: ['самостоятельные', 'меры']
                }, {
                    id: 'nodal-line-of-measures',
                    label: 'Узловая линия мер',
                    words: ['узловая', 'линия мер']
                }, {
                    id: 'real-measure',
                    label: 'Реальная мера'
                }
            ]
        };

        const entity = {
            label: 'Учение о сущности',
            values: [
                {
                    id: 'difference',
                    label: 'Разность',
                    words: ['сходство', 'несходство']
                }, {
                    id: 'opposite',
                    label: 'Противоположность',
                    words: ['противо', 'положность']
                }, {
                    id: 'common',
                    label: 'Основание'
                }, {
                    id: 'entity',
                    label: 'Сущность'
                }, {
                    id: 'existenz',
                    label: 'Существование'
                }, {
                    id: 'thing',
                    label: 'Вещь'
                }, {
                    id: 'property',
                    label: 'Свойство'
                }, {
                    id: 'matter',
                    label: 'Материя'
                }, {
                    id: 'form',
                    label: 'Форма'
                }, {
                    id: 'phenomenon',
                    label: 'Явление'
                }, {
                    id: 'content',
                    label: 'Содержание'
                }, {
                    id: 'whole',
                    label: 'Целое и части',
                    words: ['часть', 'целое']
                }, {
                    id: 'force',
                    label: 'Сила'
                }, {
                    id: 'inner-outer',
                    label: 'Внешнее и внутреннее',
                    words: ['внешнее', 'внутреннее']
                }, {
                    id: 'actuality',
                    label: 'Действительность'
                }, {
                    id: 'ability',
                    label: 'Возможность'
                }, {
                    id: 'eventuality',
                    label: 'Случайность'
                }, {
                    id: 'condition',
                    label: 'Условия'
                }, {
                    id: 'subj',
                    label: 'Предмет'
                }, {
                    id: 'activity',
                    label: 'Деятельность'
                }, {
                    id: 'necessity',
                    label: 'Необходимость'
                }, {
                    id: 'substance',
                    label: 'Субстанция'
                }, {
                    id: 'reason',
                    label: 'Причина'
                }, {
                    id: 'interaction',
                    label: 'Взаимодействие'
                }
            ]
        };

        const concept = {
            label: 'Учение о понятии',
            values: [
                {
                    id: 'def',
                    label: 'Всеобщее - Особенное - Единичное',
                    words: ['В-О-Е']
                }, {
                    id: 'assertion',
                    label: 'Суждение'
                }, {
                    id: 'subject',
                    label: 'Субъект'
                }, {
                    id: 'steps',
                    label: 'Ступени суждений'
                }, {
                    id: 'assert-being',
                    label: 'Суждения бытия'
                }, {
                    id: 'assert-reflection',
                    label: 'Суждения рефлексии'
                }, {
                    id: 'assert-necessity',
                    label: 'Суждения необходимости'
                }, {
                    id: 'assert-subject',
                    label: 'Суждения понятия'
                }, {
                    id: 'conclusion',
                    label: 'Умозаключения'
                }, {
                    id: 'conclusion-being',
                    label: 'Умозаключения бытия'
                }, {
                    id: 'conclusion-reflection',
                    label: 'Умозаключения рефлексии'
                }, {
                    id: 'conclusion-necessity',
                    label: 'Умозаключения необходимости'
                }, {
                    id: 'object',
                    label: 'Объект'
                }, {
                    id: 'mechanical-object',
                    label: 'Механический объект'
                }, {
                    id: 'chemical-object',
                    label: 'Химический объект'
                }, {
                    id: 'teleological-object',
                    label: 'Телеологический объект'
                }, {
                    id: 'idea',
                    label: 'Идея'
                }, {
                    id: 'idea-life',
                    label: 'Идея жизни'
                }, {
                    id: 'idea-cognition',
                    label: 'Идея познания'
                }, {
                    id: 'idea-absolution',
                    label: 'Абсолютная идея'
                }
            ]
        };

        const cat = this.cats = {
            being,
            entity,
            concept
        };

        const steps = _.map(_.keys(cat), (k) => {
            return _.map(cat[k].values, (s => {
                s.cat = k;
                return s;
            }))
        }).concat().reduce((a, b) => a.concat(b));

        steps.forEach(x => {
            if (_.isEmpty(x.words)) {
                x.words = x.label.split(' ').map(w => w.toLowerCase());
            }

            var pl = [];
            pl.push($http.get('components/steps/' + x.id + '.md').then(res => {
                x.description = res.data;
            }));
            $q.all(pl).then(function () {
                $rootScope.$broadcast('steps');
            })
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