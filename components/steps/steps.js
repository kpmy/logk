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
                    subs: ['Возникновение', 'Прехождение'],
                    words: ['возникновение', 'прехождение']
                }, {
                    id: 'being',
                    subs: ['Снятие'],
                    label: 'Наличное бытие'
                }, {
                    id: 'something',
                    label: 'Нечто',
                    subs: ['Иное'],
                    words: ['нечто', 'иное']
                }, {
                    id: 'otherness',
                    label: 'Инобытие'
                }, {
                    id: 'quality',
                    label: 'Качество',
                    subs: ['Предел'],
                    words: ['качество', 'предел']
                }, {
                    id: 'being-for-itself',
                    label: 'Для-себя-бытие',
                    words: ['для-себя', 'бытие']
                }, {
                    id: 'one',
                    label: 'Одно',
                    subs: ['Единица'],
                }, {
                    id: 'many',
                    label: 'Многие'
                }, {
                    id: 'quantity',
                    subs: ['Множество'],
                    label: 'Количество'
                }, {
                    id: 'pure-quantity',
                    subs: ['Непрерывность', 'Дискретность'],
                    label: 'Чистое количество'
                }, {
                    id: 'some-quantity',
                    subs: ['Ограничение', 'Величина'],
                    label: 'Определённое количество'
                }, {
                    id: 'number',
                    label: 'Число',
                    subs: ['Численность'],
                    words: ['число', 'численность']
                }, {
                    id: 'operations',
                    subs: ['Сложение', 'Вычитание', 'Умножение', 'Деление'],
                    label: 'Операции'
                }, {
                    id: 'grade',
                    label: 'Порядок',
                    subs: ['Степень', 'Интенсивное', 'Экстенсивное'],
                    words: ['порядок', 'степень']
                }, {
                    id: 'quantitative',
                    label: 'Отношения',
                    subs: ['Прямо пропорциональное', 'Обратно пропорциональное', 'Степенное', 'Возведение в степень', 'Извлечение корня'],
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
                    subs: ['Абсолютная неразличённость'],
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
                    subs: ['Сходство', 'Несходство'],
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
                    subs: ['Мир явлений'],
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
                    subs: ['Обнаружение'],
                    label: 'Сила'
                }, {
                    id: 'inner-outer',
                    label: 'Внешнее и внутреннее',
                    words: ['внешнее', 'внутреннее']
                }, {
                    id: 'actuality',
                    subs: ['Для-себя', 'В-себе'],
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
                    label: 'Субстанция',
                    subs: ['Акциденция'],
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
                    subs: ['Предикат'],
                    label: 'Субъект'
                }, {
                    id: 'steps',
                    label: 'Ступени суждений'
                }, {
                    id: 'assert-being',
                    subs: ['Положительное', 'Отрицательное', 'Тавтологическое', 'Пустое тождество', 'Бесконечное отрицание'],
                    label: 'Суждения бытия'
                }, {
                    id: 'assert-reflection',
                    subs: ['Сингулярное', 'Партикулярное', 'Универсальное'],
                    label: 'Суждения рефлексии'
                }, {
                    id: 'assert-necessity',
                    subs: ['Категорическое', 'Гипотетическое', 'Дизъюнктивное'],
                    label: 'Суждения необходимости'
                }, {
                    id: 'assert-subject',
                    subs: ['Ассерторическое', 'Проблематическое', 'Аподиктическое'],
                    label: 'Суждения понятия'
                }, {
                    id: 'conclusion',
                    label: 'Умозаключения'
                }, {
                    id: 'conclusion-being',
                    subs: ['Математическое'],
                    label: 'Умозаключения бытия'
                }, {
                    id: 'conclusion-reflection',
                    subs: ['Совокупность', 'Индукция', 'Аналогия'],
                    label: 'Умозаключения рефлексии'
                }, {
                    id: 'conclusion-necessity',
                    subs: ['Категорическое', 'Гипотетическое', 'Дизъюнктивное'],
                    label: 'Умозаключения необходимости'
                }, {
                    id: 'object',
                    subs: ['Реализация'],
                    label: 'Объект'
                }, {
                    id: 'mechanical-object',
                    subs: ['Единичный центр', 'Всеобщий центр'],
                    label: 'Механический объект'
                }, {
                    id: 'chemical-object',
                    subs: ['Разъединение', 'Соединение'],
                    label: 'Химический объект'
                }, {
                    id: 'teleological-object',
                    subs: ['Субъективная цель', 'Реализуемая цель', 'Осуществлённая цель'],
                    label: 'Телеологический объект'
                }, {
                    id: 'idea',
                    label: 'Идея'
                }, {
                    id: 'idea-life',
                    subs: ['Ассимиляция', 'Жизнь рода'],
                    label: 'Идея жизни'
                }, {
                    id: 'idea-cognition',
                    subs: ['Рассудочное', 'Аналитическое', 'Синтетическое', 'Дефиниция', 'Теорема', 'Доказательство', 'Истина'],
                    label: 'Идея познания'
                }, {
                    id: 'idea-absolution',
                    subs: ['Спекулятивная идея', 'Логическая идея'],
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