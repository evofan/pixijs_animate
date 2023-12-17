(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    lib.Circle = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.AlphaAnimation[0]);
        this.addChild(instance1);
    });

    lib.AlphaAnimation = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 31,
            framerate: 24
        });
        var instance2 = new lib.Circle();
        var instance1 = new lib.Circle()
            .setTransform(218.95, 66.95)
            .setAlpha(0.45);
        this.addTimedChild(instance2, 0, 31, {
                "0": {
                    x: 56,
                    y: 133.95,
                    a: 1
                },
                "1": {
                    x: 65.9,
                    a: 0.96
                },
                "2": {
                    x: 75.8,
                    a: 0.93
                },
                "3": {
                    x: 85.7,
                    a: 0.9
                },
                "4": {
                    x: 95.6,
                    a: 0.87
                },
                "5": {
                    x: 105.5,
                    a: 0.83
                },
                "6": {
                    x: 115.4,
                    a: 0.8
                },
                "7": {
                    x: 125.3,
                    a: 0.77
                },
                "8": {
                    x: 135.2,
                    a: 0.73
                },
                "9": {
                    x: 145.1,
                    a: 0.7
                },
                "10": {
                    x: 155,
                    a: 0.67
                },
                "11": {
                    x: 164.9,
                    a: 0.63
                },
                "12": {
                    x: 174.8,
                    a: 0.6
                },
                "13": {
                    x: 184.7,
                    a: 0.57
                },
                "14": {
                    x: 194.55,
                    a: 0.54
                },
                "15": {
                    x: 204.45,
                    a: 0.5
                },
                "16": {
                    x: 214.4,
                    a: 0.46
                },
                "17": {
                    x: 224.25,
                    a: 0.43
                },
                "18": {
                    x: 234.15,
                    a: 0.4
                },
                "19": {
                    x: 244.05,
                    a: 0.37
                },
                "20": {
                    x: 253.95,
                    a: 0.33
                },
                "21": {
                    x: 263.85,
                    a: 0.3
                },
                "22": {
                    x: 273.75,
                    a: 0.27
                },
                "23": {
                    x: 283.65,
                    a: 0.23
                },
                "24": {
                    x: 293.55,
                    a: 0.2
                },
                "25": {
                    x: 303.45,
                    a: 0.17
                },
                "26": {
                    x: 313.35,
                    a: 0.13
                },
                "27": {
                    x: 323.25,
                    a: 0.1
                },
                "28": {
                    x: 333.15,
                    a: 0.07
                },
                "29": {
                    x: 343.05,
                    a: 0.04
                },
                "30": {
                    x: 352.95,
                    a: 0
                }
            })
            .addTimedChild(instance1);
    });

    lib.AlphaAnimation.assets = {
        "AlphaAnimation": "images/AlphaAnimation.shapes.txt"
    };
})(PIXI, lib = lib || {});
var lib;