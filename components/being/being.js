/**
 * Created by pk on 26.11.2016.
 */
angular.module('LogkAl')
    .directive('being', function (raf) {
        return {
            restrict: 'E',
            scope: {
                words: '=words',
                width: '=width',
                height: '=height'
            },
            templateUrl: 'components/being/being.canvas.html',

            link: function ($scope, elem, attrs) {
                var bcc = angular.element(elem).find("#being-canvas-container");
                var bc = angular.element(elem).find("#being-canvas");
                var ctx = bc[0].getContext('2d');
                ctx.imageSmoothingEnabled = false;
                ctx.translate(0.5, 0.5);
                ctx.scale(1, 1);

                $scope.$watch('width', function () {
                    let width = `${$scope.width}px`;
                    bcc.css('max-width', width);
                    bcc.css('min-width', width);
                    bcc.css('width', width);
                    bc.prop('width', $scope.width);
                });

                $scope.$watch('height', function () {
                    let height = `${$scope.height}px`;
                    bcc.css('max-height', height);
                    bcc.css('min-height', height);
                    bcc.css('height', height);
                    bc.prop('height', $scope.height);
                });

                raf.onRenderFrame($scope, function () {
                    // Рисуем окружность
                    ctx.strokeStyle = "#000";
                    ctx.fillStyle = "#fc0";
                    ctx.beginPath();
                    ctx.arc(100, 100, 50, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.fill();
                    // Рисуем левый глаз
                    ctx.fillStyle = "#fff";
                    ctx.beginPath();
                    ctx.arc(84, 90, 8, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.fill();
                    // Рисуем правый глаз
                    ctx.beginPath();
                    ctx.arc(116, 90, 8, 0, Math.PI * 2, true);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.fill();
                    // Рисуем рот
                    ctx.beginPath();
                    ctx.moveTo(70, 115);
                    ctx.quadraticCurveTo(100, 130, 130, 115);
                    ctx.quadraticCurveTo(100, 150, 70, 115);
                    ctx.closePath();
                    ctx.stroke();
                    ctx.fill();
                })
            }
        }
    });