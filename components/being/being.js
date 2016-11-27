angular.module('LogkAl')
    .run(function () {
        CanvasRenderingContext2D.prototype.wrapText = function (text, x, y, maxWidth, lineHeight) {

            var lines = text.split("\n");

            for (var i = 0; i < lines.length; i++) {

                var words = lines[i].split(' ');
                var line = '';

                for (var n = 0; n < words.length; n++) {
                    var testLine = line + words[n] + ' ';
                    var metrics = this.measureText(testLine);
                    var testWidth = metrics.width;
                    if (testWidth > maxWidth && n > 0) {
                        this.fillText(line, x, y);
                        line = words[n] + ' ';
                        y += lineHeight;
                    }
                    else {
                        line = testLine;
                    }
                }

                this.fillText(line, x, y);
                y += lineHeight;
            }
        };
    })
    .directive('being', function (raf) {
        return {
            restrict: 'E',
            scope: {
                words: '=words',
                width: '=width',
                height: '=height',
                padding: '=padding',
                spacing: '=spacing',
                lineHeight: '=lineHeight'
            },
            templateUrl: 'components/being/being.canvas.html',

            link: function ($scope, elem, attrs) {
                var bcc = angular.element(elem).find("#being-canvas-container");
                var bc = angular.element(elem).find("#being-canvas");
                var ctx = bc[0].getContext('2d');
                ctx.imageSmoothingEnabled = false;
                ctx.translate(0.5, 0.5);
                ctx.scale(1, 1);

                $scope.frame = {
                    obstacle: {
                        radius: 75,
                        x: 0, y: 0,
                        dx: 0, dy: 0,
                        last: Date.now()
                    },
                    particles: [],
                    last: 0
                };

                function Particle(x, y) {
                    const p = this;
                    p.x0 = x;
                    p.y0 = y;
                    p.x1 = x;
                    p.y1 = y;
                    p.x = x;
                    p.y = y;
                    p.dx = 0;
                    p.dy = 0;
                    p.color = [0x32, 0x5c, 0x00, 255]
                }

                Particle.prototype.index = function (w, h, l, t) {
                    return ((l + Math.round(this.x)) + (t + Math.round(this.y)) * w) * 4;
                };
                Particle.prototype.randomize = function () {
                    this.x = this.x + Math.round(200 * Math.random() - 100);
                    this.y = this.y + Math.round(200 * Math.random() - 100);
                };

                function initFrame(f, w, h, l, t, r, b) {
                    ctx.clearRect(0, 0, w, h);
                    ctx.fillStyle = 'rgba(222, 222, 222, 1)';

                    if (!_.isEmpty($scope.words)) {
                        let line = $scope.lineHeight;
                        ctx.font = `${line}px Impact`;
                        ctx.textAlign = 'center';
                        ctx.wrapText($scope.words, w / 2, h / 2, w - 2 * l, line);
                    } else {
                        ctx.fillRect(0, h / 2 - 2, w, 4);
                    }

                    let image = ctx.getImageData(0, 0, w, h);
                    let bitmap = image.data;
                    f.particles = [];
                    const spacing = $scope.spacing;
                    for (var j = 0; j < b - t; j += spacing) {
                        for (var i = 0; i < r - l; i += spacing) {
                            let p = new Particle(i, j);
                            var idx = p.index(w, h, l, t);
                            if (bitmap[idx] == 222) {
                                p.randomize();
                                f.particles.push(p);
                            }
                        }
                    }
                    ctx.clearRect(0, 0, w, h);
                    f.last = Date.now();
                }

                function calcFrame(w, h, l, t, r, b, delta) {
                    $scope.frame.particles.forEach(p => {
                        let dl = (p => p.x != p.x1 || p.y != p.y1) ? Math.sqrt(Math.pow(p.x - p.x1, 2) + Math.pow(p.y - p.y1, 2)) : 0;
                        let t0 = dl / 200;
                        var px = p.x, py = p.y;
                        if (t0 > delta) {
                            let dx = ((p.x - p.x1) / t0) * delta;
                            let dy = ((p.y - p.y1) / t0) * delta;
                            px -= dx;
                            py -= dy;
                        } else {
                            px = p.x1;
                            py = p.y1;
                        }
                        if ($scope.frame.obstacle.on) {
                            let ox = $scope.frame.obstacle.x;
                            let oy = $scope.frame.obstacle.y;
                            let odx = $scope.frame.obstacle.dx;
                            let ody = $scope.frame.obstacle.dy;
                            let R = $scope.frame.obstacle.radius;
                            let dx = ox - px;
                            let dy = oy - py;
                            let r = Math.sqrt(Math.pow(Math.abs(dx), 2) + Math.pow(Math.abs(dy), 2));
                            if (r - R < 0.5) {
                                let csc = dx / r;
                                let sc = dy / r;
                                px = ox - csc * (R + 0.1 + 3 * Math.random());
                                py = oy - sc * (R + 0.1 + 3 * Math.random());
                                if ((p.x1 == p.x0 || p.y1 == p.y0) && (odx != 0 || ody != 0)) {
                                    p.x1 = ox - csc * (R + 0.1 + odx * Math.random()) / 2;
                                    p.y1 = oy - sc * (R + 0.1 + ody * Math.random()) / 2;
                                }
                            }
                        }

                        if (Math.abs(px - p.x1) < 0.5) p.x1 = p.x0;
                        if (Math.abs(py - p.y1) < 0.5) p.y1 = p.y0;
                        p.x = px;
                        p.y = py;
                    });
                }

                function renderFrame() {
                    const fps = 1000 / 48;
                    var now = Date.now();
                    var delta = now - $scope.frame.last;
                    if (delta < fps) return;

                    let w = $scope.width;
                    let h = $scope.height;
                    let l = $scope.padding;
                    let t = $scope.padding;
                    let r = $scope.width - $scope.padding;
                    let b = $scope.height - $scope.padding;

                    let image = ctx.createImageData(w, h);
                    let bitmap = image.data;

                    $scope.frame.particles.filter(p => {
                        let rx = l + p.x;
                        let ry = t + p.y;
                        return rx >= 0 && rx < w && ry >= 0 && ry < h;
                    }).forEach(p => {
                        var idx = p.index(w, h, l, t);
                        for (var i = 0; i < p.color.length; i++)
                            bitmap[idx + i] = p.color[i];
                    });

                    calcFrame(w, h, l, t, r, b, delta * 0.001);
                    ctx.putImageData(image, 0, 0);

                    $scope.frame.last = Date.now();
                }

                raf.onRenderFrame($scope, renderFrame);

                function initFrame0() {
                    initFrame($scope.frame, $scope.width, $scope.height, $scope.padding, $scope.padding, $scope.width - $scope.padding, $scope.height - $scope.padding);
                }

                bcc.on('mouseenter', function () {
                    raf.apply(function () {
                        $scope.frame.obstacle.on = true;
                        $scope.frame.obstacle.dx = 0;
                        $scope.frame.obstacle.dy = 0;
                    });
                });

                bcc.on('mouseleave', function () {
                    raf.apply(function () {
                        $scope.frame.obstacle.on = false;
                        $scope.frame.obstacle.dx = 0;
                        $scope.frame.obstacle.dy = 0;
                    });
                });

                bcc.on('mousemove', function (e) {
                    raf.apply(function () {
                        //var position = bcc.position();
                        var offset = bcc.offset();
                        let x = e.offsetX - $scope.padding;
                        let y = e.offsetY - $scope.padding;
                        let now = Date.now();
                        var dt = now - $scope.frame.obstacle.last;
                        if (dt > 50) {
                            $scope.frame.obstacle.dx = x - $scope.frame.obstacle.x;
                            $scope.frame.obstacle.dy = y - $scope.frame.obstacle.y;
                        } else {
                            $scope.frame.obstacle.dx += x - $scope.frame.obstacle.x;
                            $scope.frame.obstacle.dy += y - $scope.frame.obstacle.y;
                        }
                        $scope.frame.obstacle.last = now;
                        $scope.frame.obstacle.x = x;
                        $scope.frame.obstacle.y = y;
                    });
                });

                $scope.$watch('words', function () {
                    raf.apply(initFrame0());
                });

                $scope.$watch('width', function () {
                    let width = `${$scope.width}px`;
                    bcc.css('max-width', width);
                    bcc.css('min-width', width);
                    bcc.css('width', width);
                    bc.prop('width', $scope.width);
                    raf.apply(initFrame0);
                });

                $scope.$watch('height', function () {
                    let height = `${$scope.height}px`;
                    bcc.css('max-height', height);
                    bcc.css('min-height', height);
                    bcc.css('height', height);
                    bc.prop('height', $scope.height);
                    raf.apply(initFrame0);
                });
            }
        }
    });