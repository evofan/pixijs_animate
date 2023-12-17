(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Circle = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.ColorTween[0]);
        this.addChild(instance1);
    });

    lib.ColorTween = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 16,
            framerate: 24
        });
        var instance2 = new lib.Circle();
        var instance1 = new lib.Circle();
        this.addTimedChild(instance2, 0, 16, {
                "0": {
                    x: 207,
                    y: 125,
                    t: "#fff"
                },
                "1": {
                    t: "#ededed"
                },
                "2": {
                    t: "#dedede"
                },
                "3": {
                    t: "#ccc"
                },
                "4": {
                    t: "#bababa"
                },
                "5": {
                    t: "#ababab"
                },
                "6": {
                    t: "#999"
                },
                "7": {
                    t: "#8a8a8a"
                },
                "8": {
                    t: "#757575"
                },
                "9": {
                    t: "#666"
                },
                "10": {
                    t: "#545454"
                },
                "11": {
                    t: "#454545"
                },
                "12": {
                    t: "#333"
                },
                "13": {
                    t: "#212121"
                },
                "14": {
                    t: "#121212"
                },
                "15": {
                    t: "#000"
                }
            })
            .addTimedChild(instance1, 0, 16, {
                "0": {
                    x: 37,
                    y: 125,
                    a: 1,
                    c: [
                        1,
                        0,
                        1,
                        0,
                        1,
                        0
                    ]
                },
                "1": {
                    a: 0.94,
                    c: [
                        1,
                        -0.02,
                        0.87,
                        0,
                        1,
                        0.07
                    ]
                },
                "2": {
                    a: 0.88,
                    c: [
                        1,
                        -0.05,
                        0.73,
                        0,
                        1,
                        0.13
                    ]
                },
                "3": {
                    a: 0.82,
                    c: [
                        1,
                        -0.07,
                        0.6,
                        0,
                        1,
                        0.2
                    ]
                },
                "4": {
                    a: 0.76,
                    c: [
                        1,
                        -0.09,
                        0.46,
                        0,
                        1,
                        0.27
                    ]
                },
                "5": {
                    a: 0.7,
                    c: [
                        1,
                        -0.12,
                        0.33,
                        0,
                        1,
                        0.33
                    ]
                },
                "6": {
                    a: 0.64,
                    c: [
                        1,
                        -0.14,
                        0.2,
                        0,
                        1,
                        0.4
                    ]
                },
                "7": {
                    a: 0.58,
                    c: [
                        1,
                        -0.16,
                        0.07,
                        0,
                        1,
                        0.47
                    ]
                },
                "8": {
                    a: 0.52,
                    c: [
                        1,
                        -0.18,
                        -0.07,
                        0,
                        1,
                        0.53
                    ]
                },
                "9": {
                    a: 0.46,
                    c: [
                        1,
                        -0.21,
                        -0.2,
                        0,
                        1,
                        0.6
                    ]
                },
                "10": {
                    a: 0.4,
                    c: [
                        1,
                        -0.23,
                        -0.33,
                        0,
                        1,
                        0.67
                    ]
                },
                "11": {
                    a: 0.34,
                    c: [
                        1,
                        -0.25,
                        -0.46,
                        0,
                        1,
                        0.73
                    ]
                },
                "12": {
                    a: 0.28,
                    c: [
                        1,
                        -0.28,
                        -0.6,
                        0,
                        1,
                        0.8
                    ]
                },
                "13": {
                    a: 0.22,
                    c: [
                        1,
                        -0.3,
                        -0.73,
                        0,
                        1,
                        0.87
                    ]
                },
                "14": {
                    a: 0.16,
                    c: [
                        1,
                        -0.33,
                        -0.87,
                        0,
                        1,
                        0.93
                    ]
                },
                "15": {
                    a: 0.1,
                    c: [
                        1,
                        -0.35,
                        -1,
                        0,
                        1,
                        1
                    ]
                }
            });
    });

    lib.ColorTween.assets = {
        "ColorTween": "images/ColorTween.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;